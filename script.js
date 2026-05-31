// BASE DE DADOS COMPLETA DE ALGORITMOS (Mapeado exatamente com os arquivos da sua pasta)
const listaCasos = [
    // GRUPO OLL (1 a 57)
    { id: "oll-01", grupo: "OLL", nome: "Caso 01", algoritmo: "R U R' U R U2 R'", imagem: "oll-caso-01.png" },
    { id: "oll-02", grupo: "OLL", nome: "Caso 02", algoritmo: "R' U' R U' R' U2 R", imagem: "oll-caso-02.png" },
    { id: "oll-03", grupo: "OLL", nome: "Caso 03", algoritmo: "R U R' U R U' R' U R U2 R'", imagem: "oll-caso-03.png" },
    { id: "oll-04", grupo: "OLL", nome: "Caso 04", algoritmo: "R U2 R2 U' R2 U' R2 U2 R", imagem: "oll-caso-04.png" },
    { id: "oll-05", grupo: "OLL", nome: "Caso 05", algoritmo: "Rw U R' U' Rw' F R F'", imagem: "oll-caso-05.png" },
    { id: "oll-06", grupo: "OLL", nome: "Caso 06", algoritmo: "F' Rw U R' U' Rw' F R", imagem: "oll-caso-06.png" },
    { id: "oll-07", grupo: "OLL", nome: "Caso 07", algoritmo: "R2 D' R U2 R' D R U2 R", imagem: "oll-caso-07.png" },
    { id: "oll-08", grupo: "OLL", nome: "Caso 08", algoritmo: "R U R' U' R' F R F'", imagem: "oll-caso-08.png" },
    { id: "oll-09", grupo: "OLL", nome: "Caso 09", algoritmo: "F R U R' U' F'", imagem: "oll-caso-09.png" },
    { id: "oll-10", grupo: "OLL", nome: "Caso 10", algoritmo: "Rw U2 R' U' R U' Rw'", imagem: "oll-caso-10.png" },
    { id: "oll-11", grupo: "OLL", nome: "Caso 11", algoritmo: "Rw' U2 R U R' U Rw", imagem: "oll-caso-11.png" },
    { id: "oll-12", grupo: "OLL", nome: "Caso 12", algoritmo: "Fw R U R' U' Fw'", imagem: "oll-caso-12.png" },
    { id: "oll-13", grupo: "OLL", nome: "Caso 13", algoritmo: "Fw' L' U' L U Fw", imagem: "oll-caso-13.png" },
    { id: "oll-14", grupo: "OLL", nome: "Caso 14", algoritmo: "S R U R' U' R' F R Fw'", imagem: "oll-caso-14.png" },
    { id: "oll-15", grupo: "OLL", nome: "Caso 15", algoritmo: "R' U' F U R U' R' F' R", imagem: "oll-caso-15.png" },
    { id: "oll-16", grupo: "OLL", nome: "Caso 16", algoritmo: "Rw U R' U' M U R U' R'", imagem: "oll-caso-16.png" },
    { id: "oll-17", grupo: "OLL", nome: "Caso 17", algoritmo: "R U R' U' M' U R U' Rw'", imagem: "oll-caso-17.png" },
    { id: "oll-18", grupo: "OLL", nome: "Caso 18", algoritmo: "R' U' R' F R F' U R", imagem: "oll-caso-18.png" },
    { id: "oll-19", grupo: "OLL", nome: "Caso 19", algoritmo: "R U R2 U' R' F R U R U' F'", imagem: "oll-caso-19-.png" }, // Hífen extra detectado na imagem da pasta
    { id: "oll-20", grupo: "OLL", nome: "Caso 20", algoritmo: "F R U' R' U' R U R' F'", imagem: "oll-caso-20.png" },
    { id: "oll-21", grupo: "OLL", nome: "Caso 21", algoritmo: "R U2 R2 F R F' R U2 R'", imagem: "oll-caso-21.png" },
    { id: "oll-22", grupo: "OLL", nome: "Caso 22", algoritmo: "R U R' U R' F R F' R U2 R'", imagem: "oll-caso-22.png" },
    { id: "oll-23", grupo: "OLL", nome: "Caso 23", algoritmo: "R U R' U' R' F R2 U R' U' F'", imagem: "oll-caso-23-.png" }, // Hífen extra detectado na imagem da pasta
    { id: "oll-24", grupo: "OLL", nome: "Caso 24", algoritmo: "Rw U R' U R U2 Rw'", imagem: "oll-caso-24.png" },
    { id: "oll-25", grupo: "OLL", nome: "Caso 25", algoritmo: "Rw' U' R U' R' U2 Rw", imagem: "oll-caso-25.png" },
    { id: "oll-26", grupo: "OLL", nome: "Caso 26", algoritmo: "Rw' R2 U R' U R U2 R' U M'", imagem: "oll-caso-26.png" },
    { id: "oll-27", grupo: "OLL", nome: "Caso 27", algoritmo: "F R U R' U' F' U F R U R' U' F'", imagem: "oll-caso-27.png" },
    { id: "oll-28", grupo: "OLL", nome: "Caso 28", algoritmo: "Rw' U' R U' R' U R U' R' U2 Rw", imagem: "oll-caso-28.png" },
    { id: "oll-29", grupo: "OLL", nome: "Caso 29", algoritmo: "Rw U R' U R U' R' U R U2 Rw'", imagem: "oll-caso-29.png" },
    { id: "oll-30", grupo: "OLL", nome: "Caso 30", algoritmo: "Rw U' Rw2 U Rw2 U Rw2 U' Rw", imagem: "oll-caso-30.png" },
    { id: "oll-31", grupo: "OLL", nome: "Caso 31", algoritmo: "Rw' U Rw2 U' Rw2 U' Rw2 U Rw'", imagem: "oll-caso-31.png" },
    { id: "oll-32", grupo: "OLL", nome: "Caso 32", algoritmo: "F' L' U' L U L' U' L U F", imagem: "oll-caso-32.png" },
    { id: "oll-33", grupo: "OLL", nome: "Caso 33", algoritmo: "F R U R' U' R U R' U' F'", imagem: "oll-caso-33.png" },
    { id: "oll-34", grupo: "OLL", nome: "Caso 34", algoritmo: "R U R' U R U' R' U' R' F R F'", imagem: "oll-caso-34.png" },
    { id: "oll-35", grupo: "OLL", nome: "Caso 35", algoritmo: "L' U' L U' L' U L U L F' L' F", imagem: "oll-caso-35.png" },
    { id: "oll-36", grupo: "OLL", nome: "Caso 36", algoritmo: "R' F R U R' F' R F U' F'", imagem: "oll-caso-36.png" },
    { id: "oll-37", grupo: "OLL", nome: "Caso 37", algoritmo: "Rw U' Rw' U' Rw U Rw' F' U F", imagem: "oll-caso-37.png" },
    { id: "oll-38", grupo: "OLL", nome: "Caso 38", algoritmo: "Rw' U' Rw R' U' R U Rw' U Rw", imagem: "oll-caso-38.png" },
    { id: "oll-39", grupo: "OLL", nome: "Caso 39", algoritmo: "Rw U Rw' R U R' U' Rw U' Rw'", imagem: "oll-caso-39.png" },
    { id: "oll-40", grupo: "OLL", nome: "Caso 40", algoritmo: "Fw R U R' U' R U R' U' Fw'", imagem: "oll-caso-40.png" },
    { id: "oll-41", grupo: "OLL", nome: "Caso 41", algoritmo: "Rw U Rw' U R U' R' U R U' R' Rw U' Rw'", imagem: "oll-caso-41.png" },
    { id: "oll-42", grupo: "OLL", nome: "Caso 42", algoritmo: "R U R' U R Dw' R U' R' F'", imagem: "oll-caso-42.png" },
    { id: "oll-43", grupo: "OLL", nome: "Caso 43", algoritmo: "R U2 R2 U' R U' R' U2 F R F'", imagem: "oll-caso-43.png" },
    { id: "oll-44", group: "OLL", nome: "Caso 44", algoritmo: "R' U' R U' R' U2 R F R U R' U' F'", imagem: "oll-caso-44.png" },
    { id: "oll-45", grupo: "OLL", nome: "Caso 45", algoritmo: "R U R' U R U2 R' F R U R' U' F'", imagem: "oll-caso-45.png" },
    { id: "oll-46", grupo: "OLL", nome: "Caso 46", algoritmo: "M U R U R' U' R' F R F' M'", imagem: "oll-caso-46.png" },
    { id: "oll-47", grupo: "OLL", nome: "Caso 47", algoritmo: "F U R U2 R' U' R U2 R' U' F'", imagem: "oll-caso-47.png" },
    { id: "oll-48", grupo: "OLL", nome: "Caso 48", algoritmo: "L F' L' U' L U F U' L'", imagem: "oll-caso-48.png" },
    { id: "oll-49", grupo: "OLL", nome: "Caso 49", algoritmo: "R' F R U R' U' F' U R", imagem: "oll-caso-49.png" },
    { id: "oll-50", grupo: "OLL", nome: "Caso 50", algoritmo: "Rw U R' U R U2 Rw2 U' R U' R' U2 Rw", imagem: "oll-caso-50.png" },
    { id: "oll-51", grupo: "OLL", nome: "Caso 51", algoritmo: "M U R U R' U' M' R' F R F'", imagem: "oll-caso-51.png" },
    { id: "oll-52", grupo: "OLL", nome: "Caso 52", algoritmo: "Fw R U R' U' Fw' U' F R U R' U' F'", imagem: "oll-caso-52.png" },
    { id: "oll-53", grupo: "OLL", nome: "Caso 53", algoritmo: "Fw R U R' U' Fw' U F R U R' U' F'", imagem: "oll-caso-53.png" },
    { id: "oll-54", grupo: "OLL", nome: "Caso 54", algoritmo: "R U2 R2' F R F' U2' R' F R F'", imagem: "oll-caso-54.png" },
    { id: "oll-55", grupo: "OLL", nome: "Caso 55", algoritmo: "F R U R' U' S R U R' U' Fw'", imagem: "oll-caso-55.png" },
    { id: "oll-56", grupo: "OLL", nome: "Caso 56", algoritmo: "R U R' U R' F R F' U2 R' F R F'", imagem: "oll-caso-56.png" },
    { id: "oll-57", grupo: "OLL", nome: "Caso 57", algoritmo: "M U R U R' U' M2 U R U' Rw'", imagem: "oll-caso-57.png" },

    // GRUPO PLL (21 casos mapeados com precisão)
    { id: "pll-u-h", grupo: "PLL", nome: "Caso U horário", algoritmo: "R' U R' U' R' U' R' U R U R2", imagem: "pll-caso-u-h-01.png" },
    { id: "pll-u-a", grupo: "PLL", nome: "Caso U anti-horário", algoritmo: "R2 U' R' U' R U R U R U' R", imagem: "pll-caso-u-a-01.png" },
    { id: "pll-a-h", grupo: "PLL", nome: "Caso A horário", algoritmo: "x R' U R' D2 R U' R' D2 R2 x'", imagem: "pll-caso-a-h-01.png" },
    { id: "pll-a-a", grupo: "PLL", nome: "Caso A anti-horário", algoritmo: "x R2' D2 R U R' D2 R U' R x'", imagem: "pll-caso-a-a-01.png" },
    { id: "pll-h", grupo: "PLL", nome: "Caso H", algoritmo: "M2 U M2 U2 M2 U M2", imagem: "pll-caso-h-01.png" },
    { id: "pll-z", grupo: "PLL", nome: "Caso Z", algoritmo: "M2 U M2 U M' U2 M2 U2 M'", imagem: "pll-caso-z-01.png" },
    { id: "pll-t", grupo: "PLL", nome: "Caso T", algoritmo: "R U R' U' R' F R2 U' R' U' R U R' F'", imagem: "pll-caso-t-01.png" },
    { id: "pll-f", grupo: "PLL", nome: "Caso F", algoritmo: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R", imagem: "pll-caso-f-01.png" },
    { id: "pll-y", grupo: "PLL", nome: "Caso Y", algoritmo: "F R U' R' U' R U R' F' R U R' U' R' F R F'", imagem: "pll-caso-y-01.png" },
    { id: "pll-e", grupo: "PLL", nome: "Caso E", algoritmo: "x' R U' R' D R U R' D' R U R' D R U' R' D' x", imagem: "pll-caso-e-01.png" },
    { id: "pll-v", grupo: "PLL", nome: "Caso V", algoritmo: "R' U R' Dw' R' F' R2 U' R' U R' F R F", imagem: "pll-caso-v-01.png" },
    { id: "pll-r1", grupo: "PLL", nome: "Caso R1", algoritmo: "R U' R' U' R U R D R' U' R D' R' U2 R' U'", imagem: "pll-caso-r1-01.png" },
    { id: "pll-r2", grupo: "PLL", nome: "Caso R2", algoritmo: "R' U2 R U2' R' F R U R' U' R' F' R2 U'", imagem: "pll-caso-r2-01.png" },
    { id: "pll-j1", grupo: "PLL", nome: "Caso J1", algoritmo: "x R2 F R F' R U2 Rw' U Rw U2 x'", imagem: "pll-caso-j1-01.png" },
    { id: "pll-j2", group: "PLL", nome: "Caso J2", algoritmo: "R U R' F' R U R' U' R' F R2 U' R' U'", imagem: "pll-caso-j2-01.png" },
    { id: "pll-n1", grupo: "PLL", nome: "Caso N1", algoritmo: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'", imagem: "pll-caso-n1-01.png" },
    { id: "pll-n2", grupo: "PLL", nome: "Caso N2", algoritmo: "R' U R U' R' F' U' F R U R' F R' F' R U' R", imagem: "pll-caso-n2-01.png" },
    { id: "pll-g1", grupo: "PLL", nome: "Caso G1", algoritmo: "R2' Uw R' U R' U' R Uw' R2 y' R' U R", imagem: "pll-caso-g1-01.png" },
    { id: "pll-g2", grupo: "PLL", nome: "Caso G2", algoritmo: "R' U' R U D' R2 U R' U R U' R U' R2 D U'", imagem: "pll-caso-g2-01.png" },
    { id: "pll-g3", grupo: "PLL", nome: "Caso G3", algoritmo: "R2 U' R U' R U R' U R2 D' U R U' R' D U'", imagem: "pll-caso-g3-01.png" },
    { id: "pll-g4", grupo: "PLL", nome: "Caso G4", algoritmo: "R U R' y' R2 Uw' R U' R' U R' Uw R2", imagem: "pll-caso-g4-01.png" }
];

// ESTADO GLOBAL DO APLICATIVO
let progresso = JSON.parse(localStorage.getItem('cube_progresso')) || {};
let historicoTempos = JSON.parse(localStorage.getItem('cube_historico_tempos')) || [];
let grupoAtivo = 'OLL';
let telaAtiva = 'screen-study';
let casoEstudoAtual = null;
let casoRevisaoAtual = null;

// ESTADO DO TIMER
let timerStatus = 'IDLE'; 
let timerStartTime = 0;
let timerInterval = null;
let holdingTimeout = null;
let currentScramble = '';

// Garanta que dentro do DOMContentLoaded esteja assim:
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    configurarAbas();
    configurarFiltroGrupo();
    configurarTimerEvents();
    
    carregarNovoTimer();
    renderizarTelas();
    
    document.getElementById('btn-clear-history').addEventListener('click', limparHistorico);

    // Esta função agora inicializa os dois botões novos e gerencia o input oculto
    processarBackupRecebido(); 
});

function initTheme() {
    const darkSalvo = localStorage.getItem('cube_dark_mode');
    if (darkSalvo === 'true' || (!darkSalvo && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark');
    }
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('cube_dark_mode', document.body.classList.contains('dark'));
    });
}

function configurarAbas() {
    document.querySelectorAll('nav .nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget.getAttribute('data-target');
            document.querySelectorAll('nav .nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.main-content').forEach(screen => screen.classList.add('hidden'));

            e.currentTarget.classList.add('active');
            document.getElementById(target).classList.remove('hidden');
            telaAtiva = target;

            const selector = document.getElementById('group-selector-container');
            if (target === 'screen-timer' || target === 'screen-times') {
                selector.classList.add('hidden');
            } else {
                selector.classList.remove('hidden');
            }

            document.getElementById('record-badge').classList.add('hidden');
            renderizarTelas();
        });
    });
}

function configurarFiltroGrupo() {
    document.querySelectorAll('.group-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.group-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            grupoAtivo = e.currentTarget.getAttribute('data-group');
            
            casoEstudoAtual = null;
            casoRevisaoAtual = null;
            renderizarTelas();
        });
    });
}

function salvarProgresso() {
    localStorage.setItem('cube_progresso', JSON.stringify(progresso));
}

function obterDadosCaso(id) {
    if (!progresso[id]) {
        progresso[id] = { estudado: false, erros: 0 };
    }
    return progresso[id];
}

function calcularAoN(temposDisponiveis, n) {
    if (temposDisponiveis.length < n) return null;
    const ultimosN = temposDisponiveis.slice(0, n).map(t => t.tempo);
    const melhor = Math.min(...ultimosN);
    const pior = Math.max(...ultimosN);
    const soma = ultimosN.reduce((acc, val) => acc + val, 0) - melhor - pior;
    return soma / (n - 2);
}

function renderizarTelas() {
    if (telaAtiva === 'screen-study') renderizarEstudo();
    if (telaAtiva === 'screen-review') renderizarRevisao();
    if (telaAtiva === 'screen-timer') renderizarValoresTimer();
    if (telaAtiva === 'screen-times') renderizarHistorico();
    if (telaAtiva === 'screen-manage') renderizarGerenciador();
}

function configurarTimerEvents() {
    const areaToque = document.getElementById('timer-touch-area');
    const display = document.getElementById('time-counter');

    const iniciarPreparacao = (e) => {
        e.preventDefault();

        // Se terminou um solve, o primeiro toque apenas prepara o próximo scramble sem zerar a tela
        if (timerStatus === 'STOPPED') {
            document.getElementById('record-badge').classList.add('hidden');
            currentScramble = gerarScrambleWCA();
            document.getElementById('scramble-display').innerText = currentScramble;
            timerStatus = 'IDLE';
            return;
        }

        if (timerStatus === 'RUNNING') {
            pararTimer();
            return;
        }
        if (timerStatus !== 'IDLE') return;

        timerStatus = 'HOLDING';
        display.className = "timer-display holding";

        holdingTimeout = setTimeout(() => {
            timerStatus = 'READY';
            display.className = "timer-display ready";
        }, 500);
    };

    const dispararTimer = (e) => {
        e.preventDefault();
        if (timerStatus === 'HOLDING') {
            clearTimeout(holdingTimeout);
            timerStatus = 'IDLE';
            display.className = "timer-display";
        } else if (timerStatus === 'READY') {
            timerStatus = 'RUNNING';
            // O tempo antigo só some da tela e vira "0.00" aqui, no início real do novo solve!
            display.innerText = "0.00";
            timerStartTime = performance.now();
            timerInterval = setInterval(() => {
                const diff = performance.now() - timerStartTime;
                display.innerText = (diff / 1000).toFixed(2);
            }, 10);
        }
    };

    areaToque.addEventListener('touchstart', iniciarPreparacao, { passive: false });
    areaToque.addEventListener('touchend', dispararTimer, { passive: false });

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && telaAtiva === 'screen-timer' && !e.repeat) {
            iniciarPreparacao(e);
        }
    });
    window.addEventListener('keyup', (e) => {
        if (e.code === 'Space' && telaAtiva === 'screen-timer') {
            dispararTimer(e);
        }
    });
}

function carregarNovoTimer() {
    currentScramble = gerarScrambleWCA();
    document.getElementById('scramble-display').innerText = currentScramble;
    document.getElementById('time-counter').innerText = "0.00";
    document.getElementById('time-counter').className = "timer-display";
    timerStatus = 'IDLE';
}

function pararTimer() {
    clearInterval(timerInterval);
    const finalTime = parseFloat(((performance.now() - timerStartTime) / 1000).toFixed(2));
    document.getElementById('time-counter').innerText = finalTime.toFixed(2);
    
    timerStatus = 'STOPPED';
    document.getElementById('time-counter').className = "timer-display stopped";

    const agora = new Date();
    const dataFormatada = `${String(agora.getDate()).padStart(2, '0')}/${String(agora.getMonth() + 1).padStart(2, '0')} ${String(agora.getHours()).padStart(2, '0')}:${String(agora.getMinutes()).padStart(2, '0')}`;

    const oldAo5 = calcularAoN(historicoTempos, 5);
    const oldAo12 = calcularAoN(historicoTempos, 12);
    const isFirstRecord = historicoTempos.length === 0;
    const oldBest = !isFirstRecord ? Math.min(...historicoTempos.map(t => t.tempo)) : Infinity;

    const novoTempo = {
        id: Date.now(),
        tempo: finalTime,
        data: dataFormatada,
        scramble: currentScramble
    };

    historicoTempos.unshift(novoTempo);
    localStorage.setItem('cube_historico_tempos', JSON.stringify(historicoTempos));

    checarConquistasERecordes(finalTime, oldBest, isFirstRecord, oldAo5, oldAo12);

    // O reset automático que estava aqui foi removido para manter o tempo na tela!
}

function checarConquistasERecordes(finalTime, oldBest, isFirstRecord, oldAo5, oldAo12) {
    const badge = document.getElementById('record-badge');
    let msgConquista = "";

    if (finalTime < oldBest && !isFirstRecord) {
        msgConquista = "🔥 NOVO RECORDE PESSOAL (PB)! 🔥";
    } else {
        const copiaOrdenada = [...historicoTempos].sort((a,b) => a.tempo - b.tempo);
        const indexNoTop12 = copiaOrdenada.findIndex(t => t.id === historicoTempos[0].id);
        if (indexNoTop12 !== -1 && indexNoTop12 < 12) {
            msgConquista = `✨ Entrou no Top 12 (#${indexNoTop12 + 1})! ✨`;
        }
    }

    if (msgConquista) {
        badge.innerText = msgConquista;
        badge.classList.remove('hidden');
    }

    renderizarValoresTimer(oldAo5, oldAo12);
}

function renderizarValoresTimer(oldAo5 = null, oldAo12 = null) {
    const currentAo5 = calcularAoN(historicoTempos, 5);
    const currentAo12 = calcularAoN(historicoTempos, 12);
    const currentAo50 = calcularAoN(historicoTempos, 50);
    const currentAo100 = calcularAoN(historicoTempos, 100);

    const ao5El = document.getElementById('timer-ao5');
    const ao12El = document.getElementById('timer-ao12');
    const ao50El = document.getElementById('timer-ao50');
    const ao100El = document.getElementById('timer-ao100');
    
    const trendAo5El = document.getElementById('trend-ao5');
    const trendAo12El = document.getElementById('trend-ao12');

    if (currentAo5 !== null) {
        ao5El.innerText = currentAo5.toFixed(2) + "s";
        if (oldAo5 !== null) {
            const diff = currentAo5 - oldAo5;
            if (diff < 0) {
                trendAo5El.innerHTML = ` (${diff.toFixed(2)}s) v`;
                trendAo5El.className = "trend-down";
            } else if (diff > 0) {
                trendAo5El.innerHTML = ` (+${diff.toFixed(2)}s) ^`;
                trendAo5El.className = "trend-up";
            } else { trendAo5El.innerText = ""; }
        } else { trendAo5El.innerText = ""; }
    } else { ao5El.innerText = "-"; trendAo5El.innerText = ""; }

    if (currentAo12 !== null) {
        ao12El.innerText = currentAo12.toFixed(2) + "s";
        if (oldAo12 !== null) {
            const diff = currentAo12 - oldAo12;
            if (diff < 0) {
                trendAo12El.innerHTML = ` (${diff.toFixed(2)}s) v`;
                trendAo12El.className = "trend-down";
            } else if (diff > 0) {
                trendAo12El.innerHTML = ` (+${diff.toFixed(2)}s) ^`;
                trendAo12El.className = "trend-up";
            } else { trendAo12El.innerText = ""; }
        } else { trendAo12El.innerText = ""; }
    } else { ao12El.innerText = "-"; trendAo12El.innerText = ""; }

    // RENDERIZAÇÃO DOS NOVOS COMPONENTES SOLICITADOS (Ao50 e Ao100)
    if (ao50El) ao50El.innerText = currentAo50 !== null ? currentAo50.toFixed(2) + "s" : "-";
    if (ao100El) ao100El.innerText = currentAo100 !== null ? currentAo100.toFixed(2) + "s" : "-";
}

function renderizarHistorico() {
    const container = document.getElementById('times-list-container');
    const averagesSub = document.getElementById('times-screen-averages');
    
    // 1. ATUALIZAÇÃO INDIVIDUAL E SIMÉTRICA DAS QUATRO MÉDIAS NAS CAIXINHAS GLOBAIS
    const configuracaoAverages = [
        { n: 5, spanId: 'timer-ao5', trendId: 'trend-ao5' },
        { n: 12, spanId: 'timer-ao12', trendId: 'trend-ao12' },
        { n: 50, spanId: 'timer-ao50', trendId: 'trend-ao50' },
        { n: 100, spanId: 'timer-ao100', trendId: 'trend-ao100' }
    ];

    configuracaoAverages.forEach(({ n, spanId, trendId }) => {
        const elSpan = document.getElementById(spanId);
        const elTrend = document.getElementById(trendId);
        
        if (!elSpan) return;

        const atual = calcularAoN(historicoTempos, n);
        
        if (!atual) {
            elSpan.innerText = "-";
            if (elTrend) { elTrend.innerText = ""; elTrend.className = ""; }
            return;
        }

        elSpan.innerText = atual.toFixed(2) + "s";

        if (elTrend && historicoTempos.length > n) {
            const historicoAnterior = historicoTempos.slice(1);
            const anterior = calcularAoN(historicoAnterior, n);

            if (anterior) {
                const diff = atual - anterior;
                if (diff < -0.001) {
                    elTrend.innerText = "▲"; 
                    elTrend.className = "trend-up";
                } else if (diff > 0.001) {
                    elTrend.innerText = "▼"; 
                    elTrend.className = "trend-down";
                } else {
                    elTrend.innerText = "■";
                    elTrend.className = "";
                }
            } else {
                elTrend.innerText = "";
                elTrend.className = "";
            }
        } else if (elTrend) {
            elTrend.innerText = "";
            elTrend.className = "";
        }
    });

    // 2. VERIFICAÇÃO DE HISTÓRICO VAZIO
    if (historicoTempos.length === 0) {
        container.innerHTML = `<div class="empty-state"><p>Nenhum tempo registrado.</p></div>`;
        if (averagesSub) averagesSub.innerText = "ao5: - | ao12: - | ao50: - | ao100: -";
        return;
    }

    // 3. ATUALIZAÇÃO DO TEXTO DO SUB-CABEÇALHO SECUNDÁRIO NATIVO
    if (averagesSub) {
        const curAo5 = calcularAoN(historicoTempos, 5);
        const curAo12 = calcularAoN(historicoTempos, 12);
        const curAo50 = calcularAoN(historicoTempos, 50);
        const curAo100 = calcularAoN(historicoTempos, 100);
        averagesSub.innerText = `ao5: ${curAo5 ? curAo5.toFixed(2)+'s' : '-'} | ao12: ${curAo12 ? curAo12.toFixed(2)+'s' : '-'} | ao50: ${curAo50 ? curAo50.toFixed(2)+'s' : '-'} | ao100: ${curAo100 ? curAo100.toFixed(2)+'s' : '-'}`;
    }

    // 4. RESTAURAÇÃO DO FILTRO: Filtra e ordena estritamente os TOP 12 Melhores Tempos (Ranking)
    const top12Melhores = [...historicoTempos]
        .sort((a, b) => a.tempo - b.tempo)
        .slice(0, 12);

    // 5. RENDERIZAÇÃO DAS LINHAS DO RANKING
    container.innerHTML = top12Melhores.map((t, idx) => {
        // Mapeia metadados do caso (Nome e Algoritmo)
        const casoObj = listaCasos.find(c => c.id === t.caso);
        const nomeCaso = casoObj ? casoObj.nome : (t.caso || "Geral");
        const algoritmoCaso = casoObj ? casoObj.algoritmo : "Sem algoritmo mapeado";

        return `
            <div class="time-row">
                <div class="time-row-summary">
                    <div class="time-row-left">
                        <span class="time-index">#${idx + 1}</span>
                        <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 1px;">
                            <span class="time-value" style="${idx === 0 ? 'color: var(--warning); font-weight: bold;' : ''}">${t.tempo.toFixed(2)}s</span>
                            <span style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 500;">${nomeCaso}</span>
                        </div>
                    </div>
                    <div>
                        <span class="time-date">${t.data}</span>
                        <button class="btn-delete-time" data-del="${t.id}">&times;</button>
                    </div>
                </div>
                <div class="time-row-detail">
                    <strong>Scramble:</strong> <code style="background: var(--bg-main); padding: 2px 4px; border-radius: 4px; font-size: 0.75rem; word-break: break-all; display: inline-block; margin-bottom: 4px;">${t.scramble}</code>
                    <div style="margin-top: 4px; border-top: 1px dashed var(--border); padding-top: 4px; font-size: 0.8rem;">
                        <strong>Algoritmo do Caso:</strong> <span style="color: var(--accent); font-weight: 600; font-family: monospace;">${algoritmoCaso}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // 6. RE-VINCULAÇÃO DOS COMPORTAMENTOS DE EXPANSÃO NATIVOS (ACCORDION)
    document.querySelectorAll('.time-row-summary').forEach(summary => {
        summary.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-delete-time')) return;
            const row = summary.parentElement;
            row.classList.toggle('expanded');
        });
    });

    // 7. RE-VINCULAÇÃO DA EXCLUSÃO INDIVIDUAL DE REGISTROS
    document.querySelectorAll('[data-del]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const idDeletar = parseInt(e.currentTarget.getAttribute('data-del'));
            if (confirm("Remover definitivamente este tempo do histórico?")) {
                historicoTempos = historicoTempos.filter(t => t.id !== idDeletar);
                localStorage.setItem('cube_historico_tempos', JSON.stringify(historicoTempos));
                renderizarHistorico();
            }
        });
    });
}

// 1. FUNÇÃO DE EXPORTAÇÃO (Gera e baixa o arquivo .json na hora)
function exportarDadosJSON() {
    try {
        const pacoteDados = {
            progresso: JSON.parse(localStorage.getItem('cube_progresso') || "{}"),
            historico: JSON.parse(localStorage.getItem('cube_historico_tempos') || "[]")
        };
        
        const jsonString = JSON.stringify(pacoteDados, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        
        const linkDownload = document.createElement("a");
        const agora = new Date();
        const dataStr = `${agora.getFullYear()}-${String(agora.getMonth() + 1).padStart(2, '0')}-${String(agora.getDate()).padStart(2, '0')}`;
        
        linkDownload.href = url;
        linkDownload.download = `cubetrainer_backup_${dataStr}.json`;
        
        document.body.appendChild(linkDownload);
        linkDownload.click();
        document.body.removeChild(linkDownload);
        URL.revokeObjectURL(url);
    } catch (e) {
        alert("Erro ao exportar o arquivo de backup.");
        console.error(e);
    }
}

function processarBackupRecebido() {
    // Remove se já existir um input duplicado perdido na árvore DOM
    const existente = document.getElementById('input-import-json-oculto');
    if (existente) existente.remove();

    // Cria o seletor de arquivos oculto do sistema com ID persistente
    const inputArquivoOculto = document.createElement('input');
    inputArquivoOculto.type = 'file';
    inputArquivoOculto.accept = '.json';
    inputArquivoOculto.style.display = 'none';
    inputArquivoOculto.id = 'input-import-json-oculto';

    inputArquivoOculto.addEventListener('change', (e) => {
        const arquivo = e.target.files[0];
        if (!arquivo) return;

        const leitor = new FileReader();
        leitor.onload = function(evento) {
            try {
                const dadosImportados = JSON.parse(evento.target.result);
                
                if (dadosImportados && (dadosImportados.progresso || dadosImportados.historico)) {
                    if (confirm("📥 Backup Válido!\n\nDeseja importar estes dados? Isso substituirá permanentemente todo o progresso e histórico atual deste dispositivo.")) {
                        
                        const stringProgresso = JSON.stringify(dadosImportados.progresso || {});
                        const stringHistorico = JSON.stringify(dadosImportados.historico || []);

                        localStorage.setItem('cube_progresso', stringProgresso);
                        localStorage.setItem('cube_historico_tempos', stringHistorico);
                        
                        progresso = JSON.parse(stringProgresso);
                        historicoTempos = JSON.parse(stringHistorico);
                        
                        alert("✅ Dados restaurados com sucesso!");
                        renderizarTelas();
                    }
                } else {
                    alert("Erro: O arquivo selecionado não possui um formato de backup válido.");
                }
            } catch (err) {
                alert("Erro ao processar o arquivo JSON. Certifique-se de que o arquivo não está corrompido.");
                console.error(err);
            }
            inputArquivoOculto.value = ''; 
        };
        leitor.readAsText(arquivo);
    });

    document.body.appendChild(inputArquivoOculto);
}

function limparHistorico() {
    if (confirm("Deseja apagar todo o histórico de tempos?")) {
        historicoTempos = [];
        localStorage.removeItem('cube_historico_tempos');
        renderizarHistorico();
    }
}

function sortearCasoPorPeso(casos) {
    let totalPeso = 0;
    const casosComPeso = casos.map(c => {
        const dados = obterDadosCaso(c.id);
        const peso = 1 + (dados.erros * 3);
        totalPeso += peso;
        return { caso: c, pesoAcumulado: totalPeso };
    });

    const r = Math.random() * totalPeso;
    for (let i = 0; i < casosComPeso.length; i++) {
        if (r <= casosComPeso[i].pesoAcumulado) {
            return casosComPeso[i].caso;
        }
    }
    return casos[0];
}

function gerarScrambleWCA() {
    const faces = ['R', 'L', 'U', 'D', 'F', 'B'];
    const modificadores = ['', "'", '2'];
    const eixoFace = { 'R': 0, 'L': 0, 'U': 1, 'D': 1, 'F': 2, 'B': 2 };

    let scramble = [];
    let ultimoEixo = -1;
    let penultimoEixo = -1;
    let ultimaFace = '';

    while (scramble.length < 21) {
        let faceSorteada = faces[Math.floor(Math.random() * faces.length)];
        let eixoSorteado = eixoFace[faceSorteada];

        if (faceSorteada === ultimaFace) continue;
        if (eixoSorteado === ultimoEixo && eixoSorteado === penultimoEixo) continue;

        let mod = modificadores[Math.floor(Math.random() * modificadores.length)];
        scramble.push(faceSorteada + mod);

        penultimoEixo = ultimoEixo;
        ultimoEixo = eixoSorteado;
        ultimaFace = faceSorteada;
    }
    return scramble.join(' ');
}

function renderizarEstudo() {
    const container = document.getElementById('study-container');
    const casosNaoEstudados = listaCasos.filter(c => c.grupo === grupoAtivo && !obterDadosCaso(c.id).estudado);

    if (casosNaoEstudados.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>Parabéns! 🎉</h3>
                <p>Você concluiu todos os casos de ${grupoAtivo}. Alterne o grupo ou vá para a aba "Revisar".</p>
            </div>`;
        return;
    }

    if (!casoEstudoAtual || casoEstudoAtual.grupo !== grupoAtivo || obterDadosCaso(casoEstudoAtual.id).estudado) {
        casoEstudoAtual = casosNaoEstudados[0];
    }

    const dados = obterDadosCaso(casoEstudoAtual.id);
    const totalGrupo = listaCasos.filter(c => c.grupo === grupoAtivo).length;
    const concluidosGrupo = listaCasos.filter(c => c.grupo === grupoAtivo && obterDadosCaso(c.id).estudado).length;

    container.innerHTML = `
        <div class="card-header" style="margin-bottom: 15px;">
            <span class="case-title" style="font-size: 1.5rem; font-weight: bold; display: block; text-align: center;">${casoEstudoAtual.nome}</span>
            <div class="case-stats-badge" style="text-align: center; opacity: 0.8; font-size: 0.9rem; margin-top: 5px;">Progresso em ${grupoAtivo}: ${concluidosGrupo} / ${totalGrupo}</div>
        </div>
        
        <div class="image-wrapper" style="display: flex; justify-content: center; align-items: center; margin: 20px 0; background-color: #ffffff; padding: 25px; border-radius: 16px; width: 100%; max-width: 100%; box-sizing: border-box; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
            <img src="${casoEstudoAtual.imagem}" alt="Diagrama ${casoEstudoAtual.nome}" style="width: 100%; max-width: 280px; height: auto; object-fit: contain; display: block;" onerror="this.src='imagens/'+'${casoEstudoAtual.imagem}';">
        </div>

        <div class="algorithm-box" style="margin-top: 25px; font-size: 1.25rem; letter-spacing: 1px;">${casoEstudoAtual.algoritmo}</div>
        <div class="card-actions" style="margin-top: 25px;">
            <button class="btn btn-success" id="btn-learned" style="width: 100%; padding: 14px; font-size: 1.1rem; font-weight: bold;">Marcar como Aprendido</button>
        </div>
    `;

    document.getElementById('btn-learned').addEventListener('click', () => {
        dados.estudado = true;
        salvarProgresso();
        casoEstudoAtual = null;
        renderizarEstudo();
    });
}

function renderizarRevisao() {
    const container = document.getElementById('review-container');
    const casosEstudados = listaCasos.filter(c => c.grupo === grupoAtivo && obterDadosCaso(c.id).estudado);

    if (casosEstudados.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>Nenhum algoritmo pronto</h3>
                <p>Aprenda novos casos na aba "Estudar" antes de começar as revisões de ${grupoAtivo}.</p>
            </div>`;
        return;
    }

    if (!casoRevisaoAtual || casoRevisaoAtual.grupo !== grupoAtivo) {
        casoRevisaoAtual = sortearCasoPorPeso(casosEstudados);
    }

    const dados = obterDadosCaso(casoRevisaoAtual.id);

    container.innerHTML = `
        <div class="card-header" style="margin-bottom: 15px;">
            <span class="case-title" style="font-size: 1.5rem; font-weight: bold; display: block; text-align: center;">Revisar: ${casoRevisaoAtual.nome}</span>
            <div class="case-stats-badge" style="text-align: center; opacity: 0.8; font-size: 0.9rem; margin-top: 5px;">Erros registrados: ${dados.erros}</div>
        </div>
        
        <div class="image-wrapper" style="display: flex; justify-content: center; align-items: center; margin: 20px 0; background-color: #ffffff; padding: 25px; border-radius: 16px; width: 100%; max-width: 100%; box-sizing: border-box; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
            <img src="${casoRevisaoAtual.imagem}" alt="Diagrama ${casoRevisaoAtual.nome}" style="width: 100%; max-width: 280px; height: auto; object-fit: contain; display: block;" onerror="this.src='imagens/'+'${casoRevisaoAtual.imagem}';">
        </div>

        <div class="algorithm-box" style="margin-top: 25px; font-size: 1.25rem; letter-spacing: 1px;">${casoRevisaoAtual.algoritmo}</div>
        <div class="card-actions" style="margin-top: 25px; display: flex; gap: 15px;">
            <button class="btn btn-danger" id="btn-rev-err" style="flex: 1; padding: 14px; font-weight: bold; font-size: 1.05rem;">Errei</button>
            <button class="btn btn-primary" id="btn-rev-ok" style="flex: 1; padding: 14px; font-weight: bold; font-size: 1.05rem;">Acertei</button>
        </div>
    `;

    document.getElementById('btn-rev-err').addEventListener('click', () => {
        dados.erros += 1;
        salvarProgresso();
        casoRevisaoAtual = null;
        renderizarRevisao();
    });

    document.getElementById('btn-rev-ok').addEventListener('click', () => {
        casoRevisaoAtual = null;
        renderizarRevisao();
    });
}

function renderizarGerenciador() {
    const statsBox = document.getElementById('manage-stats');
    const listContainer = document.getElementById('manage-list-container');

    const casosFiltrados = listaCasos.filter(c => c.grupo === grupoAtivo);
    const total = casosFiltrados.length;
    const concluidos = casosFiltrados.filter(c => obterDadosCaso(c.id).estudado).length;

    statsBox.innerHTML = `
        <div>Foco: <strong>${grupoAtivo}</strong></div>
        <div>Progresso: <strong>${concluidos} / ${total}</strong></div>
    `;

    // CORREÇÃO DA FOTO: Adicionado o caminho correto 'imagens/' antes do nome do arquivo de imagem
    listContainer.innerHTML = casosFiltrados.map(c => {
        const dados = obterDadosCaso(c.id);
        return `
            <div class="manage-item">
                <div class="manage-item-info">
                    <img src="imagens/${c.imagem}" class="manage-thumb" style="width: 30px; height: 30px; background: #fff; border-radius: 4px;" onerror="this.style.display='none'">
                    <div class="manage-name">${c.nome}</div>
                </div>
                <button class="btn ${dados.estudado ? 'btn-success' : 'btn-secondary'}" data-toggle-id="${c.id}" style="padding:6px 12px; font-size:0.75rem; flex:none; max-width:100px;">
                    ${dados.estudado ? 'Concluído' : 'Pendente'}
                </button>
            </div>
        `;
    }).join('');

    document.querySelectorAll('[data-toggle-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-toggle-id');
            const dados = obterDadosCaso(id);
            dados.estudado = !dados.estudado;
            salvarProgresso();
            renderizarGerenciador();
        });
    });

    // CORREÇÃO DOS BOTÕES: Re-vincula os eventos de clique sempre que a tela gerenciar renderizar
    const btnExport = document.getElementById('btn-export-json');
    const btnImport = document.getElementById('btn-import-json');
    
    // Busca o input oculto gerado pelo sistema
    let inputArquivoOculto = document.getElementById('input-import-json-oculto');

    if (btnExport) {
        btnExport.replaceWith(btnExport.cloneNode(true)); // Limpa listeners órfãos antigos
        document.getElementById('btn-export-json').addEventListener('click', exportarDadosJSON);
    }
    if (btnImport && inputArquivoOculto) {
        btnImport.replaceWith(btnImport.cloneNode(true)); // Limpa listeners órfãos antigos
        document.getElementById('btn-import-json').addEventListener('click', () => inputArquivoOculto.click());
    }
}