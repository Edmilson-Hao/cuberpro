// ============================================================================
// 1. REGISTRO DO SERVICE WORKER (MODO 100% OFFLINE)
// ============================================================================
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log("Modo 100% Offline Ativo com Sucesso!"))
        .catch((err) => console.log("Falha ao registrar Service Worker:", err));
}

// ============================================================================
// 2. ESTADO GLOBAL DO APLICATIVO
// ============================================================================
let appState = {
    cards: [],                // Lista unificada de cards (dados originais + progresso)
    currentCard: null,        // Card atualmente ativo na tela
    lastViewedCardHanzi: null,// Guarda o Hanzi do último card para evitar repetição imediata
    streak: 0,                // Ofensiva de dias seguidos estudando
    lastStudyDate: null,      // Última data de estudo ('AAAA-MM-DD')
    dailyGoalMinutes: 10,     // Meta de estudo em minutos
    timeStudiedToday: 0,      // Tempo estudado hoje (em segundos)
    lastActiveDate: null,     // Controle diário para resetar tempo
    wrongAnswersPool: []      // Pool para gerar distratores de múltipla escolha
};

let studyTimer = null;

async function initApplication() {
    let rawWords = [];
    try {
        const response = await fetch('words.json');
        if (response.ok) {
            rawWords = await response.json();
        } else {
            rawWords = fallbackDataset;
        }
    } catch (e) {
        rawWords = fallbackDataset;
    }

    const savedData = localStorage.getItem('mandarim_ebbinghaus_state');
    if (savedData) {
        const parsed = JSON.parse(savedData);
        appState.streak = parsed.streak || 0;
        appState.lastStudyDate = parsed.lastStudyDate || null;
        appState.timeStudiedToday = parsed.timeStudiedToday || 0;
        appState.lastActiveDate = parsed.lastActiveDate || null;

        appState.cards = rawWords.map(word => {
            const savedProgress = parsed.progress && parsed.progress[word.hanzi];
            if (savedProgress) {
                return { ...word, ...savedProgress };
            } else {
                return {
                    ...word,
                    level: 0, // Cards novos sem progresso salvo iniciam no Nível 0
                    repetitions: 0,
                    interval: 0,
                    easeFactor: 2.5,
                    nextReview: 0
                };
            }
        });
    } else {
        // Inicialização padrão após o Reset de Fábrica
        appState.cards = rawWords.map(word => ({
            ...word,
            level: 0, // Altere de 1 para 0 aqui: força o Nível 0 absoluto ao resetar
            repetitions: 0,
            interval: 0,
            easeFactor: 2.5,
            nextReview: 0
        }));
    }

    checkDailyReset();
    startStudyCronometer();
    pickNextCard();
    updateDashboard();
}

function pickNextCard() {
    const now = Date.now();

    // Prioridade 1: Buscar cartas em revisão que já venceram o tempo de espaçamento
    let eligible = appState.cards.filter(c => c.level > 0 && c.nextReview <= now);

    // Prioridade 2: Se não houver revisões pendentes, introduz novas palavras (Nível 0)
    if (eligible.length === 0) {
        eligible = appState.cards.filter(c => c.level === 0);
    }

    // Prioridade 3: Se acabarem as revisões e as novas, mantém o fluxo nos níveis normais
    if (eligible.length === 0) {
        eligible = appState.cards.filter(c => c.level <= 2);
    }

    if (eligible.length === 0) eligible = appState.cards;

    if (eligible.length > 1 && appState.lastViewedCardHanzi) {
        const filtered = eligible.filter(c => c.hanzi !== appState.lastViewedCardHanzi);
        if (filtered.length > 0) eligible = filtered;
    }

    const selected = eligible[Math.floor(Math.random() * eligible.length)];
    appState.currentCard = selected;
    appState.lastViewedCardHanzi = selected.hanzi;

    buildInterfaceForLevel(selected);
}

// ============================================================================
// GERADOR DE FEEDBACK SONORO SINTÉTICO (WEB AUDIO API - 100% OFFLINE)
// ============================================================================
const SoundFeedback = {
    ctx: null,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    playSuccess() {
        this.init();
        const now = this.ctx.currentTime;
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); 
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15); 
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.25);
    },

    playError() {
        this.init();
        const now = this.ctx.currentTime;
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sawtooth'; 
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.25);
        
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.3);
    }
};

// ============================================================================
// 3. INICIALIZAÇÃO DO APP E FUSÃO DE DADOS (COM TRATAMENTO DE ERROS ROBUSTO)
// ============================================================================
function saveToLocalStorage() {
    const progressToSave = {};
    appState.cards.forEach(card => {
        progressToSave[card.hanzi] = {
            level: card.level,
            nextReview: card.nextReview,
            easiness: card.easiness,
            repetitions: card.repetition || card.repetitions || 0
        };
    });
    
    localStorage.setItem('flashcards_progress', JSON.stringify(progressToSave));
    localStorage.setItem('flashcards_config', JSON.stringify({
        streak: appState.streak,
        lastStudyDate: appState.lastStudyDate,
        dailyGoalMinutes: appState.dailyGoalMinutes,
        timeStudiedToday: appState.timeStudiedToday,
        lastActiveDate: appState.lastActiveDate
    }));
}

async function initApp(newDataFile) {
    let dataArray = newDataFile;
    if (!dataArray && window.dados_palavras) dataArray = window.dados_palavras;
    
    if (!dataArray) {
        try {
            const response = await fetch('words.json');
            
            if (!response.ok) {
                throw new Error(`Erro de Rede: Não foi possível acessar o arquivo 'words.json' (Status: ${response.status} - ${response.statusText})`);
            }
            
            const textData = await response.text();
            try {
                dataArray = JSON.parse(textData);
            } catch (jsonError) {
                throw new Error(`JSON Corrompido: Existe um erro de sintaxe ou caractere inválido dentro do seu 'words.json'.<br><small style="color: #ef4444;">Detalhe técnico: ${jsonError.message}</small>`);
            }

        } catch(e) {
            const display = document.getElementById('main-display');
            const instructionText = document.getElementById('instruction-text');
            const inputZone = document.getElementById('input-zone');
            
            if (instructionText) instructionText.innerText = "FALHA CRÍTICA DE INICIALIZAÇÃO";
            if (display) {
                display.style.fontSize = "1.5rem";
                display.style.color = "#f43f5e";
                display.innerHTML = `⚠️ Falha ao Carregar Dados`;
            }
            if (inputZone) {
                inputZone.innerHTML = `
                    <div style="background: #1e293b; border: 2px solid #e11d48; padding: 20px; border-radius: 12px; color: #cbd5e1; font-family: sans-serif; text-align: left; line-height: 1.6; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
                        <p style="margin-top: 0; font-weight: bold; color: #f43f5e;">O aplicativo não conseguiu iniciar porque:</p>
                        <p style="background: #0f172a; padding: 12px; border-radius: 6px; border-left: 4px solid #e11d48; font-family: monospace; font-size: 0.9rem; color: #fda4af; overflow-x: auto;">
                            ${e.message}
                        </p>
                        <ul style="margin-bottom: 0; padding-left: 20px; font-size: 0.85rem; color: #94a3b8;">
                            <li>Verifique se o arquivo <strong>words.json</strong> está na mesma pasta raiz.</li>
                            <li>Se editou o arquivo recentemente, verifique se esqueceu alguma vírgula ou aspas.</li>
                            <li>Certifique-se que está a rodar a aplicação através de um servidor local (Live Server).</li>
                        </ul>
                    </div>
                `;
            }
            return;
        }
    }

    if (!dataArray || dataArray.length === 0) {
        const display = document.getElementById('main-display');
        if (display) display.innerText = "Banco de dados vazio";
        return;
    }

    appState.wrongAnswersPool = dataArray.map(w => w.traducao);

    const localProgress = JSON.parse(localStorage.getItem('flashcards_progress')) || {};
    const localConfig = JSON.parse(localStorage.getItem('flashcards_config')) || {};
    
    appState.streak = localConfig.streak || 0;
    appState.lastStudyDate = localConfig.lastStudyDate || null;
    appState.dailyGoalMinutes = localConfig.dailyGoalMinutes || 10;
    
    const todayStr = new Date().toISOString().split('T')[0];
    if (localConfig.lastActiveDate !== todayStr) {
        appState.timeStudiedToday = 0;
        appState.lastActiveDate = todayStr;
    } else {
        appState.timeStudiedToday = localConfig.timeStudiedToday || 0;
    }

    appState.cards = dataArray.map(wordData => {
        const savedProgress = localProgress[wordData.hanzi]; 
        if (savedProgress) {
            return { 
                ...wordData, 
                ...savedProgress,
                repetition: savedProgress.repetitions || savedProgress.repetition || 0 
            };
        }
        return { 
            ...wordData, 
            level: 0, 
            nextReview: Date.now(), 
            easiness: 2.5, 
            repetition: 0 
        };
    });

    injectOptionsDashboard();
    checkStreakWindow();
    saveToLocalStorage();
    startStudyTimer();
    updateTimerUI();
    updateStatisticsUI();
    nextCard(); 
    initKeyboardShortcuts();
}

function injectOptionsDashboard() {
    const cardPanel = document.getElementById('card-panel') || document.querySelector('.card') || document.getElementById('main-display')?.parentElement;
    
    if (cardPanel && !document.getElementById('study-options-dashboard')) {
        const dashboard = document.createElement('div');
        dashboard.id = 'study-options-dashboard';
        dashboard.style.cssText = "background: #1e293b; padding: 14px; border-radius: 12px; margin-bottom: 16px; border: 1px solid #334155; color: #f8fafc; font-family: sans-serif;";
        
        dashboard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 4px;">
                    <span>🔥 Ofensiva:</span> 
                    <strong style="color: #f97316;"><span id="streak-count">0</span> dias</strong>
                </div>
                <div style="display: flex; align-items: center; gap: 6px;">
                    <label for="goal-select" style="font-size: 0.85rem; color: #94a3b8;">Meta Diária:</label>
                    <select id="goal-select" onchange="changeDailyGoal(this.value)" style="background: #0f172a; color: #f8fafc; border: 1px solid #475569; padding: 4px 8px; border-radius: 6px; cursor: pointer; outline: none; font-size: 0.85rem;">
                        <option value="5">5 min</option>
                        <option value="10">10 min</option>
                        <option value="15">15 min</option>
                        <option value="20">20 min</option>
                    </select>
                </div>
            </div>
            <div style="margin-top: 8px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px;">
                    <span>Tempo hoje: <strong id="time-today" style="color: #3b82f6;">00:00</strong></span>
                    <span id="goal-status">0% da meta</span>
                </div>
                <div style="width: 100%; background: #334155; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div id="goal-bar" style="width: 0%; height: 100%; background: #3b82f6; transition: width 0.3s, background-color 0.3s;"></div>
                </div>
            </div>
        `;
        cardPanel.insertBefore(dashboard, cardPanel.firstChild);
    }
}

// ============================================================================
// 4. FILTRAGEM, PRIORIDADE E ALEATORIEDADE
// ============================================================================
function nextCard() {
    const totalCards = appState.cards.length;
    if (totalCards === 0) return;

    const masteredCards = appState.cards.filter(c => c.level > 3).length; 
    if (masteredCards === totalCards) {
        showLockScreen("🎉 Incrível! Você atingiu 100% de domínio em todos os cards disponíveis!");
        return;
    }

    const now = Date.now();
    let reviewQueue = appState.cards.filter(c => c.nextReview <= now && c.level <= 3);
    
    if (reviewQueue.length === 0) {
        showLockScreen("☕ Todas as revisões agendadas foram concluídas por hoje!");
        return;
    }

    let lowestLevelAvailable = Math.min(...reviewQueue.map(c => c.level));
    let targetLevelPool = reviewQueue.filter(c => c.level === lowestLevelAvailable);

    let finalSelectionPool = targetLevelPool;
    if (targetLevelPool.length > 1 && appState.lastViewedCardHanzi) {
        finalSelectionPool = targetLevelPool.filter(c => c.hanzi !== appState.lastViewedCardHanzi);
    } 
    else if (targetLevelPool.length === 1 && appState.lastViewedCardHanzi && targetLevelPool[0].hanzi === appState.lastViewedCardHanzi) {
        let fallbackPool = reviewQueue.filter(c => c.hanzi !== appState.lastViewedCardHanzi);
        if (fallbackPool.length > 0) {
            finalSelectionPool = fallbackPool;
        }
    }

    const randomIndex = Math.floor(Math.random() * finalSelectionPool.length);
    appState.currentCard = finalSelectionPool[randomIndex];
    appState.lastViewedCardHanzi = appState.currentCard.hanzi;

    renderFlashcard(appState.currentCard);
}

// ============================================================================
// 5. PROCESSAMENTO ALGORITMO SM-2 RECALIBRADO
// ============================================================================
function processSM2Response(isCorrect) {
    const card = appState.currentCard;
    const feedbackText = document.getElementById('feedback-text');
    
    const elements = document.querySelectorAll('.option-btn, .text-input-field, .submit-btn');
    elements.forEach(el => el.disabled = true);

    if (isCorrect) {
        AudioFeedbackSystem.playCorrect();
        feedbackText.style.color = "var(--success)";
        feedbackText.innerText = `Correto! Pronúncia: ${card.pinyin} | Significado: ${card.traducao}`;
        
        // Regra de evolução: Se for Nível 0, avança para 1. Nos outros níveis, sobe gradativamente.
        if (card.level === 0) {
            card.level = 1;
        } else if (card.level < 3) {
            card.level++;
        }

        if (card.repetitions === 0) {
            card.interval = 1;
        } else if (card.repetitions === 1) {
            card.interval = 6;
        } else {
            card.interval = Math.round(card.interval * card.easeFactor);
        }
        card.repetitions++;
        card.easeFactor = card.easeFactor + (0.1 - (5 - 5) * (0.08 + (5 - 5) * 0.02));
    } else {
        AudioFeedbackSystem.playWrong();
        feedbackText.style.color = "var(--danger)";
        feedbackText.innerText = `Incorreto! O correto seria: ${card.hanzi} -> ${card.pinyin} (${card.traducao})`;
        
        // Se errar, diminui o nível (desde que já esteja em revisão no nível 2 ou 3). Nível 1 e 0 não descem.
        if (card.level > 1) card.level--;
        
        card.repetitions = 0;
        card.interval = 1;
        card.easeFactor = Math.max(1.3, card.easeFactor - 0.2);
    }

    card.nextReview = Date.now() + (card.interval * 24 * 60 * 60 * 1000);

    registerStudyDay();
    saveStateToLocalStorage();
    updateDashboard();

    setTimeout(() => {
        pickNextCard();
    }, 2500);
}

// ============================================================================
// 6. ATALHOS DE TECLADO
// ============================================================================
function initKeyboardShortcuts() {
    window.removeEventListener('keydown', handleGlobalKeyDown);
    window.addEventListener('keydown', handleGlobalKeyDown);
}

function handleGlobalKeyDown(e) {
    if (!appState.currentCard || appState.currentCard.level !== 0) return;

    if (['1', '2', '3', '4'].includes(e.key)) {
        const index = parseInt(e.key) - 1; 
        const buttons = document.querySelectorAll('#input-zone button');
        if (buttons && buttons[index]) {
            buttons[index].click();
        }
    }
}

// ============================================================================
// 7. RENDERIZAÇÃO DOS FLASHCARDS
// ============================================================================
function renderFlashcard(card) {
    const mainDisplay = document.getElementById('main-display');
    const subDisplay = document.getElementById('sub-display');
    const cardLevel = document.getElementById('card-level');
    const instructionText = document.getElementById('instruction-text');
    const inputZone = document.getElementById('input-zone');
    const feedbackText = document.getElementById('feedback-text');

    if (feedbackText) feedbackText.innerText = "";
    if (subDisplay) subDisplay.innerText = "";
    
    if (cardLevel) {
        cardLevel.innerText = `Nível ${card.level + 1}`;
    }

    // NÍVEL 1: RECONHECIMENTO VISUAL (MÚLTIPLA ESCOLHA)
    if (card.level === 0) {
        if (instructionText) instructionText.innerText = "RECONHECIMENTO VISUAL: SELECIONE A TRADUÇÃO CORRETA (OU USE AS TECLAS 1, 2, 3, 4):";
        if (mainDisplay) mainDisplay.innerText = card.hanzi;

        const correctAns = card.traducao;
        const optionsSet = new Set([correctAns]);
        const pool = appState.wrongAnswersPool || [];
        const poolLength = pool.length;
        const targetSize = Math.min(4, poolLength);

        let attempts = 0;
        while (optionsSet.size < targetSize && attempts < 50) {
            attempts++;
            const randIdx = Math.floor(Math.random() * poolLength);
            const picked = pool[randIdx];
            if (picked && picked !== correctAns) {
                optionsSet.add(picked);
            }
        }

        while (optionsSet.size < Math.min(4, poolLength + 1) && optionsSet.size < 4) {
            optionsSet.add("---");
        }

        let options = Array.from(optionsSet);
        options.sort(() => Math.random() - 0.5);

        if (inputZone) {
            inputZone.innerHTML = `
                <div class="options-grid">
                    ${options.map((opt, index) => `
                        <button onclick="checkLevel1Answer('${opt.replace(/'/g, "\\'")}')" class="option-btn">
                            <span class="shortcut-badge">${index + 1}</span>
                            <span class="option-text">${opt}</span>
                        </button>
                    `).join('')}
                </div>
            `;
        }
    } 
    // NÍVEL 2: FIXAÇÃO FONÉTICA (INPUT DEL PINYIN)
    else if (card.level === 1) {
        if (instructionText) instructionText.innerText = "FIXAÇÃO FONÉTICA: DIGITE O PINYIN CORRESPONDENTE COM O TOM (Ex: lao3shi1):";
        if (mainDisplay) mainDisplay.innerText = card.hanzi;

        if (inputZone) {
            inputZone.innerHTML = `
                <div class="input-wrapper">
                    <input type="text" id="pinyin-input" class="text-input-field pinyin-field" placeholder="Ex: xue2sheng5" autocomplete="off" />
                    <button onclick="checkLevel2Answer()" class="submit-btn btn-pinyin">Verificar Resposta</button>
                    <div class="tone-guide-box">
                        <span class="tone-guide-title">Guia de Tons de Referência:</span>
                        <img src="tons.png" class="tone-guide-img" alt="Tons Mandarim" />
                    </div>
                </div>
            `;

            const inputEl = document.getElementById('pinyin-input');
            if (inputEl) {
                inputEl.focus();
                inputEl.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') checkLevel2Answer();
                });
            }
        }
    }
    // NÍVEL 3: MANDARIM VISUAL (INPUT DEL HANZI)
    else if (card.level === 2) {
        if (instructionText) instructionText.innerText = "MANDARIM VISUAL: COM O TECLADO CHINÊS ATIVADO, DIGITE OS CARACTERES:";
        if (mainDisplay) mainDisplay.innerText = card.traducao;
        if (subDisplay) subDisplay.innerText = `Leitura de apoio: ${card.pinyin}`;

        if (inputZone) {
            inputZone.innerHTML = `
                <div class="input-wrapper">
                    <input type="text" id="hanzi-input" class="text-input-field hanzi-field" placeholder="Digite nihao -> converta para 你好" autocomplete="off" />
                    <button onclick="checkLevel3Answer()" class="submit-btn btn-hanzi">Validar Caracteres</button>
                </div>
            `;

            const inputEl = document.getElementById('hanzi-input');
            if (inputEl) {
                inputEl.focus();
                inputEl.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') checkLevel3Answer();
                });
            }
        }
    }
}

// ============================================================================
// 8. VERIFICAÇÕES DE RESPOSTAS E FEEDBACKS
// ============================================================================
function checkLevel1Answer(selectedOption) {
    const feedbackText = document.getElementById('feedback-text');
    const isCorrect = selectedOption === appState.currentCard.traducao;

    if (isCorrect) {
        SoundFeedback.playSuccess();
        triggerStreakUpdate();
        if (feedbackText) {
            feedbackText.style.color = "#10b981";
            feedbackText.innerText = `Correto! Palavra promovida para o Nível ${appState.currentCard.level + 2} (Fixação Fonética).`;
        }
        setTimeout(() => processSM2Response(true), 1200);
    } else {
        SoundFeedback.playError();
        if (feedbackText) {
            feedbackText.style.color = "#ef4444";
            feedbackText.innerText = `Incorreto! Retornada ao Nível 1. Resposta: ${appState.currentCard.traducao}`;
        }
        setTimeout(() => processSM2Response(false), 2000);
    }
}

function checkLevel2Answer() {
    const inputEl = document.getElementById('pinyin-input');
    const feedbackText = document.getElementById('feedback-text');
    if (!inputEl) return;

    const userInput = inputEl.value.trim().toLowerCase().replace(/\s+/g, '');
    const correctTargetNumeric = convertPinyinToNumbers(appState.currentCard.pinyin);
    
    if (userInput === correctTargetNumeric) {
        SoundFeedback.playSuccess();
        triggerStreakUpdate();
        if (feedbackText) {
            feedbackText.style.color = "#10b981";
            feedbackText.innerText = `Correto! Palavra promovida para o Nível ${appState.currentCard.level + 2} (Mandarim Visual).`;
        }
        setTimeout(() => processSM2Response(true), 1200);
    } else {
        SoundFeedback.playError();
        if (feedbackText) {
            feedbackText.style.color = "#ef4444";
            feedbackText.innerText = `Incorreto! Retornada ao Nível 1. Esperado: ${correctTargetNumeric}`;
        }
        setTimeout(() => processSM2Response(false), 2500);
    }
}

function checkLevel3Answer() {
    const inputEl = document.getElementById('hanzi-input');
    const feedbackText = document.getElementById('feedback-text');
    if (!inputEl) return;

    const userInput = inputEl.value.trim().replace(/\s+/g, '');
    const correctTargetHanzi = appState.currentCard.hanzi.trim().replace(/\s+/g, '');

    if (userInput === correctTargetHanzi) {
        SoundFeedback.playSuccess();
        triggerStreakUpdate();
        if (feedbackText) {
            feedbackText.style.color = "#10b981";
            feedbackText.innerText = "Perfeito! Palavra elevada ao Nível 4 (Domínio Concluído).";
        }
        setTimeout(() => processSM2Response(true), 1200);
    } else {
        SoundFeedback.playError();
        if (feedbackText) {
            feedbackText.style.color = "#ef4444";
            feedbackText.innerText = `Divergente! Retornada ao Nível 1. Esperado: ${correctTargetHanzi}`;
        }
        setTimeout(() => processSM2Response(false), 2500);
    }
}

function convertPinyinToNumbers(pinyinText) {
    const toneMap = {
        'ā': 'a1', 'á': 'a2', 'ǎ': 'a3', 'à': 'a4',
        'ē': 'e1', 'é': 'e2', 'ě': 'e3', 'è': 'e4',
        'ī': 'i1', 'í': 'i2', 'ǐ': 'i3', 'ì': 'i4',
        'ō': 'o1', 'ó': 'o2', 'ǒ': 'o3', 'ò': 'o4',
        'ū': 'u1', 'ú': 'u2', 'ǔ': 'u3', 'ù': 'u4',
        'ü': 'v',  'ǘ': 'v2', 'ǚ': 'v3', 'ǜ': 'v4'
    };

    let wordsArray = pinyinText.toLowerCase().trim().split(/\s+/);
    let processedWords = wordsArray.map(word => {
        let tone = '5'; 
        let cleanWord = '';
        for (let char of word) {
            if (toneMap[char]) {
                tone = toneMap[char][1];
                cleanWord += toneMap[char][0];
            } else {
                cleanWord += char;
            }
        }
        return cleanWord + tone;
    });
    return processedWords.join('');
}

function showLockScreen(message) {
    const mainDisplay = document.getElementById('main-display');
    const instructionText = document.getElementById('instruction-text');
    const inputZone = document.getElementById('input-zone');
    const subDisplay = document.getElementById('sub-display');

    if (instructionText) instructionText.innerText = "SISTEMA SEGURO";
    if (subDisplay) subDisplay.innerText = "";
    if (mainDisplay) mainDisplay.innerText = "🔒";
    if (inputZone) {
        inputZone.innerHTML = `
            <div style="text-align: center; color: #94a3b8; font-size: 0.95rem; line-height: 1.5; padding: 10px;">
                ${message}
            </div>
        `;
    }
}

// ============================================================================
// 9. TIMER E MONITOR DE OFENSIVAS
// ============================================================================
function startStudyTimer() {
    if (studyTimer) {
        clearInterval(studyTimer);
        studyTimer = null;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    if (appState.lastActiveDate !== todayStr) {
        appState.timeStudiedToday = 0;
        appState.lastActiveDate = todayStr;
    }

    studyTimer = setInterval(() => {
        const currentCheckDate = new Date().toISOString().split('T')[0];
        if (appState.lastActiveDate !== currentCheckDate) {
            appState.timeStudiedToday = 0;
            appState.lastActiveDate = currentCheckDate;
        }

        appState.timeStudiedToday++;
        
        // Sincroniza o salvamento a cada 5 segundos para não sobrecarregar o disco
        if (appState.timeStudiedToday % 5 === 0) {
            saveToLocalStorage();
        }

        updateTimerUI();
    }, 1000);
}

function triggerStreakUpdate() {
    const todayStr = new Date().toISOString().split('T')[0];
    if (appState.lastStudyDate !== todayStr) {
        const yesterdayStr = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        
        if (appState.lastStudyDate === yesterdayStr || appState.lastStudyDate === null) {
            appState.streak++;
        } else {
            appState.streak = 1;
        }
        
        appState.lastStudyDate = todayStr;
        saveToLocalStorage();
        updateTimerUI();
    }
}

function checkStreakWindow() {
    if (!appState.lastStudyDate) return;
    const todayStr = new Date().toISOString().split('T')[0];
    const yesterdayStr = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    if (appState.lastStudyDate !== todayStr && appState.lastStudyDate !== yesterdayStr) {
        appState.streak = 0;
        saveToLocalStorage();
    }
}

function changeDailyGoal(minutes) {
    appState.dailyGoalMinutes = parseInt(minutes);
    saveToLocalStorage();
    updateTimerUI();
}

function updateTimerUI() {
    const minutesStudied = Math.floor(appState.timeStudiedToday / 60);
    const secondsRemaining = appState.timeStudiedToday % 60;
    
    const timeToday = document.getElementById('time-today');
    const streakCount = document.getElementById('streak-count');
    const goalBar = document.getElementById('goal-bar');
    const goalStatus = document.getElementById('goal-status');
    const goalSelect = document.getElementById('goal-select');

    if (timeToday) timeToday.innerText = `${String(minutesStudied).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
    if (streakCount) streakCount.innerText = appState.streak;
    if (goalSelect) goalSelect.value = appState.dailyGoalMinutes;

    const targetSeconds = appState.dailyGoalMinutes * 60;
    const percentage = Math.min((appState.timeStudiedToday / targetSeconds) * 100, 100);
    
    if (goalBar) {
        goalBar.style.width = `${percentage}%`;
        goalBar.style.backgroundColor = percentage >= 100 ? "#10b981" : "#3b82f6";
    }
    if (goalStatus) goalStatus.innerText = `${Math.floor(percentage)}% da meta`;
}

function updateStatisticsUI() {
    const totalCards = appState.cards.length;
    const statTotal = document.getElementById('stat-total');
    if (statTotal) statTotal.innerText = totalCards;

    if (totalCards === 0) return;

    const lvl1 = appState.cards.filter(c => c.level === 0).length;
    const lvl2 = appState.cards.filter(c => c.level === 1).length;
    const lvl3 = appState.cards.filter(c => c.level === 2).length; 
    const lvlM = appState.cards.filter(c => c.level > 2).length; 

    const now = Date.now();
    const dueCount = appState.cards.filter(c => c.nextReview <= now && c.level <= 2).length;

    const statDue = document.getElementById('stat-due');
    if (statDue) statDue.innerText = dueCount;

    const masteryPercentage = Math.round((lvlM / totalCards) * 100);
    
    const progressPercent = document.getElementById('progress-percent');
    if (progressPercent) progressPercent.innerText = `${masteryPercentage}%`;

    const mainProgressBar = document.getElementById('main-progress-bar');
    if (mainProgressBar) mainProgressBar.style.width = `${masteryPercentage}%`;

    const countL1 = document.getElementById('count-l1');
    const countL2 = document.getElementById('count-l2');
    const countL3 = document.getElementById('count-l3');

    if (countL1) countL1.innerText = lvl1;
    if (countL2) countL2.innerText = lvl2;
    if (countL3) countL3.innerText = lvl3;

    const barL1 = document.getElementById('bar-l1');
    const barL2 = document.getElementById('bar-l2');
    const barL3 = document.getElementById('bar-l3');

    if (barL1) barL1.style.width = `${(lvl1 / totalCards) * 100}%`;
    if (barL2) barL2.style.width = `${(lvl2 / totalCards) * 100}%`;
    if (barL3) barL3.style.width = `${(lvl3 / totalCards) * 100}%`;
}

function showNotification(title, body) {
    if (!("Notification" in window)) return;
    if (Notification.permission === "granted") {
        new Notification(title, { body });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(title, { body });
            }
        });
    }
}

// Inicialização segura quando a página carrega completamente
window.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// ============================================================================
// MÓDULO ADICIONAL: INSTALAÇÃO PWA & RECUPERAÇÃO DE LOGS (RESET)
// Instrução: Cole este bloco completo exatamente no final do seu arquivo app.js
// ============================================================================

(function() {
    // Mapeamento local dos elementos adicionados no HTML
    const btnInstall = document.getElementById('btn-install');
    const btnReset = document.getElementById('btn-reset');
    let deferredPrompt;

    // Escuta o evento nativo do navegador para instalação do PWA
    window.addEventListener('beforeinstallprompt', (e) => {
        // Evita que o aviso padrão do navegador apareça de imediato
        e.preventDefault();
        // Guarda o evento para disparo controlado
        deferredPrompt = e;
        // Torna o botão de instalação visível na interface
        if (btnInstall) {
            btnInstall.style.display = 'flex';
        }
    });

    // Gerencia o clique do botão de instalação customizado
    if (btnInstall) {
        btnInstall.addEventListener('click', async () => {
            if (!deferredPrompt) return;
            
            // Ativa o prompt nativo do sistema operacional/navegador
            deferredPrompt.prompt();
            
            // Analisa a escolha feita pelo estudante
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`[PWA] Escolha de instalação do usuário: ${outcome}`);
            
            // Libera a memória do evento usado
            deferredPrompt = null;
            btnInstall.style.display = 'none';
        });
    }

    // Oculta o botão se o app já foi instalado com sucesso
    window.addEventListener('appinstalled', () => {
        console.log('[PWA] Aplicativo instalado com sucesso no dispositivo.');
        if (btnInstall) {
            btnInstall.style.display = 'none';
        }
    });

    // Gerencia a rotina de limpeza e reset do banco de progresso local
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            const confirmAction = confirm(
                "⚠️ ATENÇÃO:\n" +
                "Você tem certeza absoluta que deseja deletar todo o seu histórico de estudos e zerar seus recordes?\n\n" +
                "Esta operação é definitiva e apagará todos os dados salvos no navegador."
            );
            
            if (confirmAction) {
                // Remove as chaves de progresso que o app utiliza no LocalStorage
                localStorage.removeItem('flashcards_progress');
                
                // Nota: Adicione chaves adicionais aqui caso seu app use nomes diferentes, ex:
                // localStorage.removeItem('flashcards_config');
                
                // Emite um alerta final e reinicia a página limpa
                alert("Seu progresso foi limpo com sucesso! Reiniciando a aplicação...");
                window.location.reload();
            }
        });
    }
})();

// ============================================================================
// MÓDULO ADICIONAL: GERENCIAMENTO DE NÍVEL ZERO & CORREÇÃO DE RESET DE PROGRESSO
// Instrução: Cole este bloco completo exatamente no final do seu arquivo app.js
// ============================================================================

(function() {
    // 1. AJUSTE DE INICIALIZAÇÃO PARA SUPORTAR NÍVEL 0
    // Garante que qualquer palavra sem registro histórico inicialize em nível 0
    function interceptAndFixCardLevels() {
        if (typeof appState !== 'undefined' && appState.cards && appState.cards.length > 0) {
            appState.cards.forEach(card => {
                // Se o card não tem registro de nível, ou se o nível gravado não existe no histórico
                if (card.level === undefined || card.level === 1 && (!card.history || card.history.length === 0)) {
                    // Se nunca foi estudado/acertado, o nível real de partida é 0
                    if (!card.lastInterval && (!card.repetition || card.repetition === 0)) {
                        card.level = 0; 
                    }
                }
            });
            // Força a atualização visual do painel se a função existir no escopo global
            if (typeof updateMetrics === 'function') updateMetrics();
            if (typeof updateDashboard === 'function') updateDashboard();
        }
    }

    // Executa a correção assim que o app carregar os dados
    setTimeout(interceptAndFixCardLevels, 800);

    // 2. ESCUTA E TRATAMENTO DOS BOTÕES DE INTERAÇÃO (PROMOÇÃO DE NÍVEL)
    // Escuta o clique do botão de reset modificado para limpar o localStorage de forma correta
    const btnReset = document.getElementById('btn-reset');
    if (btnReset) {
        // Substitui ou anexa o evento corrigido de reset completo
        btnReset.onclick = function() {
            const confirmAction = confirm(
                "⚠️ ATENÇÃO:\n" +
                "Você tem certeza absoluta que deseja deletar todo o seu histórico de estudos e zerar seus recordes?\n\n" +
                "Esta operação fará com que TODAS as palavras retornem para o Nível 0 (Nunca Estudadas)."
            );
            
            if (confirmAction) {
                // Limpa as chaves de progresso que o app utiliza no LocalStorage
                localStorage.removeItem('flashcards_progress');
                localStorage.removeItem('app_progress');
                localStorage.removeItem('mandarim_ebbinghaus_state');
                
                // Emite um alerta final e reinicia a página limpa
                alert("Progresso limpo com sucesso! Todas as palavras voltaram ao estado inicial (Nível 0).");
                window.location.reload();
            }
        };
    }

    // Injeta um gancho (hook) na função global de computar respostas, caso ela exista
    // Garante que o card saia do Nível 0 e vá para o Nível 1 somente após o primeiro acerto
    const originalAnswerHandler = window.handleAnswer || window.submitAnswer || window.processAnswer;
    if (originalAnswerHandler) {
        const targetWindowFunc = window.handleAnswer ? 'handleAnswer' : (window.submitAnswer ? 'submitAnswer' : 'processAnswer');
        
        window[targetWindowFunc] = function(isCorrect, ...args) {
            if (typeof appState !== 'undefined' && appState.currentCard) {
                const card = appState.currentCard;
                
                // Se o card está no nível 0 e o usuário acertou
                if (card.level === 0 && isCorrect) {
                    card.level = 1; // Promove para o nível 1
                }
            }
            // Executa a lógica padrão do seu algoritmo SM-2 para calcular intervalos futuros
            return originalAnswerHandler.apply(this, [isCorrect, ...args]);
        };
    }
})();

// ============================================================================
// EXTENSÃO DE CORREÇÃO NATIVA PARA NÍVEL 0 & RESET COMPLETO
// Instrução: Cole este bloco no final do seu app.js original. Ele vai reconfigurar
// as funções necessárias sem destruir o resto do código.
// ============================================================================

(function() {
    // 1. Força os novos cards que entram no sistema sem progresso salvo a iniciarem no Nível 0
    const originalInit = window.initApplication;
    if (typeof initApplication === 'function') {
        window.initApplication = async function() {
            await originalInit();
            // Sobrescreve cards sem histórico para o Nível 0
            const savedData = localStorage.getItem('mandarim_ebbinghaus_state');
            if (!savedData && appState && appState.cards) {
                appState.cards.forEach(c => { c.level = 0; });
                pickNextCard();
                updateDashboard();
            }
        };
    }

    // 2. Ajusta a seleção de cartas para priorizar Nível 0 quando não houver revisões pendentes
    const originalPick = window.pickNextCard;
    if (typeof pickNextCard === 'function') {
        window.pickNextCard = function() {
            const now = Date.now();
            // Se não houver cards pendentes de revisão com nível > 0
            let due = appState.cards.filter(c => c.level > 0 && c.nextReview <= now);
            
            if (due.length === 0) {
                // Seleciona preferencialmente os cards nunca estudados (Nível 0)
                let newCards = appState.cards.filter(c => c.level === 0);
                if (newCards.length > 0) {
                    if (newCards.length > 1 && appState.lastViewedCardHanzi) {
                        newCards = newCards.filter(c => c.hanzi !== appState.lastViewedCardHanzi);
                    }
                    const selected = newCards[Math.floor(Math.random() * newCards.length)];
                    appState.currentCard = selected;
                    appState.lastViewedCardHanzi = selected.hanzi;
                    buildInterfaceForLevel(selected);
                    return;
                }
            }
            // Se não cair na regra de novos, segue o fluxo normal do seu script
            originalPick();
        };
    }

    // 3. Modifica a interface de renderização para que o Nível 0 se comporte como a escolha do Nível 1
    const originalBuild = window.buildInterfaceForLevel;
    if (typeof buildInterfaceForLevel === 'function') {
        window.buildInterfaceForLevel = function(card) {
            if (card && card.level === 0) {
                // Altera temporariamente para 1 apenas para aproveitar seu gerador de botões de escolha nativo
                card.level = 1;
                originalBuild(card);
                card.level = 0; // Devolve para zero para manter a consistência lógica
                const badge = document.getElementById('card-level');
                if (badge) badge.innerText = "Novo Card (Nível 0)";
                return;
            }
            originalBuild(card);
        };
    }

    // 4. Intercepta a resposta correta: Se acertar o Nível 0, ele vira Nível 1 permanentemente
    const originalResponse = window.processSM2Response;
    if (typeof processSM2Response === 'function') {
        window.processSM2Response = function(isCorrect) {
            if (appState.currentCard && appState.currentCard.level === 0) {
                if (isCorrect) {
                    appState.currentCard.level = 1; // Promovido!
                }
            }
            originalResponse(isCorrect);
        };
    }

    // 5. Atualização da renderização do Dashboard Analítico para exibir o contador do Nível 0
    const originalUpdateDashboard = window.updateDashboard;
    if (typeof updateDashboard === 'function') {
        window.updateDashboard = function() {
            // Executa a computação das variáveis nativas
            originalUpdateDashboard();

            // Computa e renderiza o medidor extra do Nível 0
            const totalCards = appState.cards.length;
            const lvl0 = appState.cards.filter(c => c.level === 0).length;

            const countL0 = document.getElementById('count-l0');
            const barL0 = document.getElementById('bar-l0');

            if (countL0) countL0.innerText = lvl0;
            if (barL0 && totalCards > 0) barL0.style.width = `${(lvl0 / totalCards) * 100}%`;
        };
    }

    // 6. Ativação do botão de Reset completo apagando os logs locais
    setTimeout(() => {
        const btnReset = document.getElementById('btn-reset');
        const btnInstall = document.getElementById('btn-install');

        if (btnReset) {
            btnReset.onclick = function() {
                if (confirm("⚠️ LIMPEZA COMPLETA:\nDeseja zerar todo o seu histórico? Todas as palavras voltarão a ser 'Nível 0 (Nunca estudadas)'.\nEsta ação é irreversível.")) {
                    localStorage.clear();
                    alert("Dados apagados com sucesso! Reiniciando...");
                    window.location.reload();
                }
            };
        }

        // Exibição condicional simples do instalador PWA
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            window.deferredPrompt = e;
            if (btnInstall) btnInstall.style.display = 'block';
        });
        if (btnInstall) {
            btnInstall.onclick = async function() {
                if (window.deferredPrompt) {
                    window.deferredPrompt.prompt();
                    window.deferredPrompt = null;
                    btnInstall.style.display = 'none';
                }
            };
        }
    }, 1000);
})();

// ============================================================================
// EXTENSÃO DE CORREÇÃO DEFINITIVA: FORÇAR NÍVEL 0 E INTERCEPTAR CONFLITOS
// Instrução: Substitua o bloco anterior no FINAL do seu app.js por este.
// ============================================================================

(function() {
    // 1. Força a conversão para Nível 0 ANANTES do dashboard renderizar
    function aplicarNivelZeroAbsoluto() {
        if (typeof appState !== 'undefined' && appState.cards && appState.cards.length > 0) {
            const savedData = localStorage.getItem('mandarim_ebbinghaus_state');
            
            appState.cards.forEach(card => {
                // Se não há dados salvos (pós-reset) ou se o card especificamente não tem histórico de repetições
                if (!savedData || !card.repetitions || card.repetitions === 0) {
                    card.level = 0;
                }
            });
        }
    }

    // Intercepta a função original de carregar a aplicação
    if (typeof initApplication === 'function') {
        const originalInit = initApplication;
        initApplication = async function() {
            // Executa a carga original (que vai ler o JSON e colocar nível 1)
            await originalInit();
            // Sobrescreve imediatamente para Nível 0 antes que o usuário interaja
            aplicarNivelZeroAbsoluto();
            if (typeof updateDashboard === 'function') updateDashboard();
            if (typeof pickNextCard === 'function') pickNextCard();
        };
    }

    // 2. Intercepta a seleção de cards para garantir que o Nível 0 seja incluído no fluxo
    if (typeof pickNextCard === 'function') {
        const originalPick = pickNextCard;
        pickNextCard = function() {
            const now = Date.now();
            // Verifica se existem revisões pendentes reais (cards já estudados)
            let due = appState.cards.filter(c => c.level > 0 && c.nextReview <= now);
            
            // Se não houver revisões pendentes, prioriza introduzir os cards novos (Nível 0)
            if (due.length === 0) {
                let newCards = appState.cards.filter(c => c.level === 0);
                if (newCards.length > 0) {
                    if (newCards.length > 1 && appState.lastViewedCardHanzi) {
                        newCards = newCards.filter(c => c.hanzi !== appState.lastViewedCardHanzi);
                    }
                    const selected = newCards[Math.floor(Math.random() * newCards.length)];
                    appState.currentCard = selected;
                    appState.lastViewedCardHanzi = selected.hanzi;
                    
                    if (typeof buildInterfaceForLevel === 'function') {
                        buildInterfaceForLevel(selected);
                    }
                    return;
                }
            }
            originalPick();
        };
    }

    // 3. Intercepta a renderização da interface para mapear o comportamento visual do Nível 0
    if (typeof buildInterfaceForLevel === 'function') {
        const originalBuild = buildInterfaceForLevel;
        buildInterfaceForLevel = function(card) {
            if (card && card.level === 0) {
                // Engana temporariamente o motor do nível 1 para gerar o layout de múltipla escolha
                card.level = 1;
                originalBuild(card);
                card.level = 0; // Restaura para zero imediatamente
                
                const badge = document.getElementById('card-level');
                if (badge) badge.innerText = "Novo Card (Nível 0)";
                return;
            }
            originalBuild(card);
        };
    }

    // 4. Intercepta o processamento da resposta: acertou vira Nível 1, errou continua 0
    if (typeof processSM2Response === 'function') {
        const originalResponse = processSM2Response;
        processSM2Response = function(isCorrect) {
            if (appState.currentCard && appState.currentCard.level === 0) {
                if (isCorrect) {
                    appState.currentCard.level = 1; // Promovido ao primeiro acerto
                }
            }
            originalResponse(isCorrect);
        };
    }

    // 5. Correção cirúrgica do Dashboard para recalcular a distribuição de carga incluindo o Nível 0
    if (typeof updateDashboard === 'function') {
        const originalUpdateDashboard = updateDashboard;
        updateDashboard = function() {
            // Aplica a correção de nível antes do cálculo matemático do painel original
            aplicarNivelZeroAbsoluto();
            
            originalUpdateDashboard();

            // Renderização forçada dos elementos visuais do Nível 0 adicionados no HTML
            const totalCards = appState.cards.length;
            const lvl0 = appState.cards.filter(c => c.level === 0).length;

            const countL0 = document.getElementById('count-l0');
            const barL0 = document.getElementById('bar-l0');

            if (countL0) countL0.innerText = lvl0;
            if (barL0 && totalCards > 0) {
                barL0.style.width = `${(lvl0 / totalCards) * 100}%`;
            }
        };
    }

    // 6. Configuração e escuta do clique do botão de reset de fábrica
    function vincularBotaoReset() {
        const btnReset = document.getElementById('btn-reset');
        if (btnReset) {
            btnReset.onclick = function() {
                if (confirm("⚠️ LIMPEZA COMPLETA:\nDeseja zerar todo o seu histórico? Todas as palavras voltarão a ser 'Nível 0 (Nunca estudadas)'.\nEsta ação é irreversível.")) {
                    localStorage.clear();
                    // Limpeza explícita extra por segurança
                    localStorage.removeItem('mandarim_ebbinghaus_state');
                    alert("Dados apagados com sucesso! Reiniciando...");
                    window.location.reload();
                }
            };
        }
    }

    // Executa a vinculação do botão assim que a árvore DOM estiver pronta
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', vincularBotaoReset);
    } else {
        vincularBotaoReset();
    }
})();

