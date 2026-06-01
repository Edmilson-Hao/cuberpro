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
    { id: "oll-19", grupo: "OLL", nome: "Caso 19", algoritmo: "R U R2 U' R' F R U R U' F'", imagem: "oll-caso-19-.png" },
    { id: "oll-20", grupo: "OLL", nome: "Caso 20", algoritmo: "F R U' R' U' R U R' F'", imagem: "oll-caso-20.png" },
    { id: "oll-21", grupo: "OLL", nome: "Caso 21", algoritmo: "R U2 R2 F R F' R U2 R'", imagem: "oll-caso-21.png" },
    { id: "oll-22", grupo: "OLL", nome: "Caso 22", algoritmo: "R U R' U R' F R F' R U2 R'", imagem: "oll-caso-22.png" },
    { id: "oll-23", grupo: "OLL", nome: "Caso 23", algoritmo: "R U R' U' R' F R2 U R' U' F'", imagem: "oll-caso-23-.png" },
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
    { id: "oll-44", grupo: "OLL", nome: "Caso 44", algoritmo: "R' U' R U' R' U2 R F R U R' U' F'", imagem: "oll-caso-44.png" },
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
    { id: "pll-j2", grupo: "PLL", nome: "Caso J2", algoritmo: "R U R' F' R U R' U' R' F R2 U' R' U'", imagem: "pll-caso-j2-01.png" },
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
let streakDados = JSON.parse(localStorage.getItem('cube_streak_dados')) || { dias: 0, ultimaData: "", solvesHoje: 0 };
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

let idSolveParaVincular = null;
let grupoModalAtivo = 'OLL';

window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    configurarAbas();
    configurarFiltroGrupo();
    configurarTimerEvents();
    
    atualizarEVerificarStreak();
    carregarNovoTimer();
    renderizarTelas();
    
    document.getElementById('btn-clear-history').addEventListener('click', limparHistorico);
    processarBackupRecebido(); 
    
    document.getElementById('btn-fechar-modal-caso').addEventListener('click', () => {
        document.getElementById('modal-vincular-caso').classList.add('hidden');
    });
    document.getElementById('modal-tab-oll').addEventListener('click', () => mudarGrupoModal('OLL'));
    document.getElementById('modal-tab-pll').addEventListener('click', () => mudarGrupoModal('PLL'));
});

function initTheme() {
    const darkSalvo = localStorage.getItem('cube_dark_mode');
    if (darkSalvo === 'true' || (!darkSalvo && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark');
    }
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('cube_dark_mode', document.body.classList.contains('dark'));
        if (telaAtiva === 'screen-times') renderizarGraficoEvolucao();
    });
}

function configurarAbas() {
    document.querySelectorAll('nav .nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // REGRA 1: Se mudar de tela enquanto o timer estiver correndo, força o DNF na hora
            if (timerStatus === 'RUNNING') {
                aplicarDNF();
            }

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
    if (telaAtiva === 'screen-times') {
        renderizarHistorico();
        renderizarGraficoEvolucao();  // Média Global Eficiente
        renderizarGraficoCurvaBell(); // Distribuição de Tempos
        calcularDiagnosticoGargalos(); // Identificador de Gargalos
    }
    if (telaAtiva === 'screen-manage') {
        renderizarGerenciador();
        atualizarPainelVisualStreak();
    }
}

function configurarTimerEvents() {
    const areaToque = document.getElementById('timer-touch-area');
    const display = document.getElementById('time-counter');
    const btnDnf = document.getElementById('btn-timer-dnf');

    // Evento mobile prioritário para o botão DNF
    if (btnDnf) {
        btnDnf.addEventListener('touchstart', (e) => {
            e.stopPropagation();
            aplicarDNF(e);
        }, { passive: false });
        btnDnf.addEventListener('click', (e) => {
            aplicarDNF(e);
        });
    }

    const iniciarPreparacao = (e) => {
        if (e.target && (e.target.id === 'btn-timer-dnf' || e.target.closest('#btn-timer-dnf'))) return;
        if (e.preventDefault) e.preventDefault();

        if (timerStatus === 'STOPPED') {
            document.getElementById('record-badge').classList.add('hidden');
            if (btnDnf) btnDnf.classList.add('hidden');
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
        if (e.target && (e.target.id === 'btn-timer-dnf' || e.target.closest('#btn-timer-dnf'))) return;
        if (e.preventDefault) e.preventDefault();

        if (timerStatus === 'HOLDING') {
            clearTimeout(holdingTimeout);
            timerStatus = 'IDLE';
            display.className = "timer-display";
        } else if (timerStatus === 'READY') {
            timerStatus = 'RUNNING';
            if (btnDnf) btnDnf.classList.remove('hidden');
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

    // REGRA 2: Suporte a teclado no computador (Espaço para armar/parar | Esc ou Backspace para DNF)
    window.addEventListener('keydown', (e) => {
        if (timerStatus === 'RUNNING' && (e.code === 'Escape' || e.code === 'Backspace')) {
            e.preventDefault();
            aplicarDNF(e);
            return;
        }

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

function aplicarDNF(e) {
    if (e) {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
    }
    clearInterval(timerInterval);
    
    const display = document.getElementById('time-counter');
    const btnDnf = document.getElementById('btn-timer-dnf');
    
    if (display) {
        display.innerText = "DNF";
        display.className = "timer-display stopped";
    }
    if (btnDnf) btnDnf.classList.add('hidden');
    timerStatus = 'STOPPED';
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
    const btnDnf = document.getElementById('btn-timer-dnf');
    if (btnDnf) btnDnf.classList.add('hidden');

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

    registrarSolveNoStreak();
    abrirModalVinculo(novoTempo.id);
    checarConquistasERecordes(finalTime, oldBest, isFirstRecord, oldAo5, oldAo12);
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

    if (ao50El) ao50El.innerText = currentAo50 !== null ? currentAo50.toFixed(2) + "s" : "-";
    if (ao100El) ao100El.innerText = currentAo100 !== null ? currentAo100.toFixed(2) + "s" : "-";
}

function renderizarHistorico() {
    const container = document.getElementById('times-list-container');
    const averagesSub = document.getElementById('times-screen-averages');
    if (!container) return;

    if (historicoTempos.length === 0) {
        container.innerHTML = `<div class="empty-state"><p>Nenhum tempo registrado.</p></div>`;
        if (averagesSub) averagesSub.innerText = "ao5: - | ao12: - | ao50: - | ao100: -";
        return;
    }

    // Calcula e atualiza o painel superior de médias (WCA Averages)
    if (averagesSub) {
        const curAo5 = calcularAoN(historicoTempos, 5);
        const curAo12 = calcularAoN(historicoTempos, 12);
        const curAo50 = calcularAoN(historicoTempos, 50);
        const curAo100 = calcularAoN(historicoTempos, 100);
        averagesSub.innerText = `ao5: ${curAo5 ? curAo5.toFixed(2)+'s' : '-'} | ao12: ${curAo12 ? curAo12.toFixed(2)+'s' : '-'} | ao50: ${curAo50 ? curAo50.toFixed(2)+'s' : '-'} | ao100: ${curAo100 ? curAo100.toFixed(2)+'s' : '-'}`;
    }

    // Filtra os 12 melhores tempos ordenados por velocidade para o ranking da tela
    const top12Melhores = [...historicoTempos].sort((a, b) => a.tempo - b.tempo).slice(0, 12);

    // Renderização do HTML com suporte para exibição de múltiplos casos
    container.innerHTML = top12Melhores.map((t, idx) => {
        let nomeExibicao = "Geral";
        let algoritmoOll = "Não mapeado";
        let algoritmoPll = "Não mapeado";

        // Se houver vínculos duplos de casos, busca os nomes e algoritmos de ambos
        if (t.casosDuplos) {
            const ollObj = listaCasos.find(c => c.id === t.casosDuplos.oll);
            const pllObj = listaCasos.find(c => c.id === t.casosDuplos.pll);
            
            const nomeOll = ollObj ? ollObj.nome : "-";
            const nomePll = pllObj ? pllObj.nome : "-";
            nomeExibicao = `OLL: ${nomeOll} | PLL: ${nomePll}`;
            
            if (ollObj) algoritmoOll = ollObj.algoritmo;
            if (pllObj) algoritmoPll = pllObj.algoritmo;
        }

        return `
            <div class="time-row">
                <div class="time-row-summary">
                    <div class="time-row-left">
                        <span class="time-index">#${idx + 1}</span>
                        <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 1px;">
                            <span class="time-value" style="${idx === 0 ? 'color: var(--warning); font-weight: bold;' : ''}">${t.tempo.toFixed(2)}s</span>
                            <span style="font-size: 0.65rem; color: var(--text-secondary); font-weight: 500;">${nomeExibicao}</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="btn-vincular-retroativo" data-vinc-id="${t.id}" style="background: var(--bg-main); border: 1px solid var(--border); font-size: 0.7rem; padding: 4px 8px; border-radius: 4px; color: var(--text-primary); cursor: pointer; position: relative; z-index: 10;">🏷️ Casos</button>
                        <span class="time-date">${t.data}</span>
                        <button class="btn-delete-time" data-del="${t.id}">&times;</button>
                    </div>
                </div>
                
                <div class="time-row-detail">
                    <strong>Scramble:</strong> <code style="background: var(--bg-main); padding: 2px 4px; border-radius: 4px; font-size: 0.75rem; word-break: break-all; display: inline-block; margin-bottom: 4px;">${t.scramble}</code>
                    <div style="margin-top: 4px; border-top: 1px dashed var(--border); padding-top: 4px; font-size: 0.75rem; display: flex; flex-direction: column; gap: 2px;">
                        <div><strong>Algoritmo OLL:</strong> <span style="color: var(--accent); font-family: monospace;">${algoritmoOll}</span></div>
                        <div><strong>Algoritmo PLL:</strong> <span style="color: var(--warning); font-family: monospace;">${algoritmoPll}</span></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Listener 1: Expandir / Recolher as linhas para visualizar os scrambles e algoritmos
    document.querySelectorAll('.time-row-summary').forEach(summary => {
        summary.addEventListener('click', (e) => {
            // Evita expandir a linha se o clique ocorreu em botões de ação internos
            if (e.target.classList.contains('btn-delete-time') || e.target.classList.contains('btn-vincular-retroativo')) return;
            const row = summary.parentElement;
            row.classList.toggle('expanded');
        });
    });

    // Listener 2: Eliminar tempos do histórico com conversão correta de IDs numéricos
    document.querySelectorAll('[data-del]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const idDeletar = Number(e.currentTarget.getAttribute('data-del'));
            if (confirm("Remover definitivamente este tempo do histórico?")) {
                historicoTempos = historicoTempos.filter(t => Number(t.id) !== idDeletar);
                localStorage.setItem('cube_historico_tempos', JSON.stringify(historicoTempos));
                
                // Recarrega todos os nós e gráficos afetados em tempo real
                renderizarHistorico();
                renderizarGraficoEvolucao();
                renderizarGraficoCurvaBell();
                calcularDiagnosticoGargalos();
            }
        });
    });

    // Listener 3: Gatilho com isolamento total para abrir o Modal Duplo de Casos
    container.querySelectorAll('.btn-vincular-retroativo').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.stopImmediatePropagation();
            const idVinc = e.currentTarget.getAttribute('data-vinc-id');
            abrirModalVinculo(idVinc);
        });
    });
}

function renderizarGraficoEvolucao() {
    const wrapper = document.getElementById('svg-chart-wrapper');
    if (!wrapper) return;

    const ultimosSolves = historicoTempos.slice(0, 15).reverse();
    
    if (ultimosSolves.length < 2) {
        wrapper.innerHTML = `<div style="font-size:0.8rem; color:var(--text-secondary); text-align:center; padding-top:35px;">Registre ao menos 2 tempos para ver a evolução.</div>`;
        return;
    }

    const temposValores = ultimosSolves.map(s => s.tempo);
    const maxTempo = Math.max(...temposValores);
    const minTempo = Math.min(...temposValores);
    const range = maxTempo - minTempo === 0 ? 1 : maxTempo - minTempo;

    const width = wrapper.clientWidth || 400;
    const height = 100;
    const paddingX = 20;
    const paddingY = 15;

    const chartWidth = width - (paddingX * 2);
    const chartHeight = height - (paddingY * 2);
    const passoX = chartWidth / (ultimosSolves.length - 1);

    let pontosPath = "";
    let pontosCirculos = "";

    ultimosSolves.forEach((solve, i) => {
        const x = paddingX + (i * passoX);
        const y = paddingY + chartHeight - (((solve.tempo - minTempo) / range) * chartHeight);
        
        if (i === 0) {
            pontosPath += `M ${x} ${y}`;
        } else {
            pontosPath += ` L ${x} ${y}`;
        }
        pontosCirculos += `<circle cx="${x}" cy="${y}" r="3" fill="var(--accent)" stroke="var(--bg-card)" stroke-width="1"/>`;
    });

    const corStroke = document.body.classList.contains('dark') ? '#3b82f6' : '#2563eb';

    wrapper.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" style="overflow: visible;">
            <line x1="${paddingX}" y1="${paddingY}" x2="${width - paddingX}" y2="${paddingY}" stroke="var(--border)" stroke-dasharray="3,3" />
            <line x1="${paddingX}" y1="${height - paddingY}" x2="${width - paddingX}" y2="${height - paddingY}" stroke="var(--border)" stroke-dasharray="3,3" />
            <path d="${pontosPath}" fill="none" stroke="${corStroke}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            ${pontosCirculos}
        </svg>
    `;
    // Adicione no fim de renderizarHistorico junto com os outros seletores [data-del]
    document.querySelectorAll('[data-vinc-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const idVinc = parseInt(e.currentTarget.getAttribute('data-vinc-id'));
            abrirModalVinculo(idVinc);
        });
    });
}

function obterDataHoje() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function atualizarEVerificarStreak() {
    const hoje = obterDataHoje();
    
    if (streakDados.ultimaData !== hoje) {
        if (streakDados.ultimaData !== "") {
            const dataUltima = new Date(streakDados.ultimaData + "T00:00:00");
            const dataHoje = new Date(hoje + "T00:00:00");
            const diferencaDias = Math.floor((dataHoje - dataUltima) / (1000 * 60 * 60 * 24));
            
            if (diferencaDias > 1 && streakDados.solvesHoje < 10) {
                streakDados.dias = 0; 
            }
        }
        streakDados.solvesHoje = 0; 
        streakDados.ultimaData = hoje;
        localStorage.setItem('cube_streak_dados', JSON.stringify(streakDados));
    }
}

function registrarSolveNoStreak() {
    atualizarEVerificarStreak();
    streakDados.solvesHoje += 1;
    
    if (streakDados.solvesHoje === 10) {
        streakDados.dias += 1;
    }
    localStorage.setItem('cube_streak_dados', JSON.stringify(streakDados));
}

function atualizarPainelVisualStreak() {
    const elDias = document.getElementById('streak-days');
    const elMeta = document.getElementById('streak-meta-text');
    
    if (elDias) elDias.innerText = streakDados.dias;
    if (elMeta) {
        if (streakDados.solvesHoje >= 10) {
            elMeta.innerHTML = `<span style="color: var(--success); font-weight: bold;">Meta Concluída! ✓</span>`;
        } else {
            elMeta.innerText = `Solves hoje: ${streakDados.solvesHoje}/10`;
        }
    }
}

function exportarDadosJSON() {
    try {
        const pacoteDados = {
            progresso: JSON.parse(localStorage.getItem('cube_progresso') || "{}"),
            historico: JSON.parse(localStorage.getItem('cube_historico_tempos') || "[]"),
            streak: JSON.parse(localStorage.getItem('cube_streak_dados') || "{}")
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
    const existente = document.getElementById('input-import-json-oculto');
    if (existente) existente.remove();

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
                        const stringStreak = JSON.stringify(dadosImportados.streak || { dias: 0, ultimaData: "", solvesHoje: 0 });

                        localStorage.setItem('cube_progresso', stringProgresso);
                        localStorage.setItem('cube_historico_tempos', stringHistorico);
                        localStorage.setItem('cube_streak_dados', stringStreak);
                        
                        progresso = JSON.parse(stringProgresso);
                        historicoTempos = JSON.parse(stringHistorico);
                        streakDados = JSON.parse(stringStreak);
                        
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
        renderizarGraficoEvolucao();
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
    if (!container) return;
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
    if (!container) return;
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
    if (!statsBox || !listContainer) return;

    const casosFiltrados = listaCasos.filter(c => c.grupo === grupoAtivo);
    const total = casosFiltrados.length;
    const concluidos = casosFiltrados.filter(c => obterDadosCaso(c.id).estudado).length;

    statsBox.innerHTML = `
        <div>Foco: <strong>${grupoAtivo}</strong></div>
        <div>Progresso: <strong>${concluidos} / ${total}</strong></div>
    `;

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

    const btnExport = document.getElementById('btn-export-json');
    const btnImport = document.getElementById('btn-import-json');
    let inputArquivoOculto = document.getElementById('input-import-json-oculto');

    if (btnExport) {
        btnExport.replaceWith(btnExport.cloneNode(true));
        document.getElementById('btn-export-json').addEventListener('click', exportarDadosJSON);
    }
    if (btnImport && inputArquivoOculto) {
        btnImport.replaceWith(btnImport.cloneNode(true));
        document.getElementById('btn-import-json').addEventListener('click', () => inputArquivoOculto.click());
    }
}

// ==========================================
// MOTOR DO MODAL DE VINCULAÇÃO DUPLA (OLL + PLL) COM FECHAMENTO AUTOMÁTICO
// ==========================================
function abrirModalVinculo(solveId) {
    idSolveParaVincular = Number(solveId); 
    
    // Começa sempre pela aba de OLL para o usuário selecionar na ordem natural do CFOP
    grupoModalAtivo = 'OLL';
    mudarGrupoModal(grupoModalAtivo);
    
    // Configura o botão Fechar (X) para caso o usuário queira sair sem escolher tudo
    const btnFechar = document.getElementById('btn-fechar-modal-caso');
    if (btnFechar) {
        btnFechar.onclick = function(e) {
            e.stopPropagation();
            document.getElementById('modal-vincular-caso').classList.add('hidden');
        };
    }
    
    // Vincula a navegação manual das abas superiores
    const tabOll = document.getElementById('modal-tab-oll');
    const tabPll = document.getElementById('modal-tab-pll');
    
    if (tabOll) {
        tabOll.onclick = function(e) {
            e.stopPropagation();
            mudarGrupoModal('OLL');
        };
    }
    if (tabPll) {
        tabPll.onclick = function(e) {
            e.stopPropagation();
            mudarGrupoModal('PLL');
        };
    }
    
    document.getElementById('modal-vincular-caso').classList.remove('hidden');
}

function mudarGrupoModal(grupo) {
    grupoModalAtivo = grupo;
    const tabOll = document.getElementById('modal-tab-oll');
    const tabPll = document.getElementById('modal-tab-pll');
    
    if (!tabOll || !tabPll) return;
    
    if (grupo === 'OLL') {
        tabOll.style.color = 'var(--accent)';
        tabOll.style.borderBottom = '2px solid var(--accent)';
        tabPll.style.color = 'var(--text-secondary)';
        tabPll.style.borderBottom = 'none';
    } else {
        tabPll.style.color = 'var(--accent)';
        tabPll.style.borderBottom = '2px solid var(--accent)';
        tabOll.style.color = 'var(--text-secondary)';
        tabOll.style.borderBottom = 'none';
    }
    
    renderizarGridCasosModal();
}

function renderizarGridCasosModal() {
    const container = document.getElementById('modal-casos-grid-container');
    if (!container) return;
    
    const casosFiltrados = listaCasos.filter(c => c.grupo === grupoModalAtivo);
    const solveAtual = historicoTempos.find(t => Number(t.id) === idSolveParaVincular);

    container.innerHTML = casosFiltrados.map(c => {
        // Verifica se este caso específico está selecionado dentro do novo formato duplo
        let isSelected = false;
        if (solveAtual && solveAtual.casosDuplos) {
            if (grupoModalAtivo === 'OLL' && solveAtual.casosDuplos.oll === c.id) isSelected = true;
            if (grupoModalAtivo === 'PLL' && solveAtual.casosDuplos.pll === c.id) isSelected = true;
        }

        return `
            <div class="grid-caso-item ${isSelected ? 'selected' : ''}" data-vincular-caso-id="${c.id}">
                <img src="imagens/${c.imagem}" onerror="this.src='imagens/oll-caso-01.png'">
                <span>${c.nome}</span>
            </div>
        `;
    }).join('');

    container.querySelectorAll('[data-vincular-caso-id]').forEach(el => {
        el.onclick = function(e) {
            e.stopPropagation();
            const casoId = this.getAttribute('data-vincular-caso-id');
            
            let fechamentoAutomatico = false;

            historicoTempos = historicoTempos.map(t => {
                if (Number(t.id) === idSolveParaVincular) {
                    // Inicializa o objeto de casos duplos se ele ainda não existir no solve
                    const casos = t.casosDuplos || { oll: null, pll: null };
                    
                    if (grupoModalAtivo === 'OLL') {
                        casos.oll = casoId;
                    } else if (grupoModalAtivo === 'PLL') {
                        casos.pll = casoId;
                    }

                    // CRITÉRIO DE FECHAMENTO: Se ambos (OLL e PLL) estiverem preenchidos, ativa o fechamento automático
                    if (casos.oll && casos.pll) {
                        fechamentoAutomatico = true;
                    }

                    return { ...t, casosDuplos: casos };
                }
                return t;
            });
            
            localStorage.setItem('cube_historico_tempos', JSON.stringify(historicoTempos));
            
            if (fechamentoAutomatico) {
                // Se escolheu os dois, fecha o modal sozinho!
                document.getElementById('modal-vincular-caso').classList.add('hidden');
            } else {
                // Se escolheu apenas o OLL, muda automaticamente para a aba de PLL para agilizar a segunda escolha!
                if (grupoModalAtivo === 'OLL') {
                    mudarGrupoModal('PLL');
                } else {
                    renderizarGridCasosModal();
                }
            }
            
            // Atualiza os componentes de estatísticas e histórico na tela principal
            if (typeof renderizarTelas === 'function') {
                renderizarTelas();
            } else {
                renderizarHistorico();
                renderizarGraficoEvolucao();
                renderizarGraficoCurvaBell();
                calcularDiagnosticoGargalos();
            }
        };
    });
}

// ==========================================
// 1. MÉDIA GLOBAL EFICIENTE (RESTAURAÇÃO DO GRÁFICO EXPANDIDO)
// ==========================================
function renderizarGraficoEvolucao() {
    const wrapper = document.getElementById('svg-chart-wrapper');
    const txtGlobal = document.getElementById('txt-global-average');
    if (!wrapper) return;

    // Calcula Média Global Pura de todos os tempos salvos
    if (historicoTempos.length > 0) {
        const somaTotal = historicoTempos.reduce((acc, v) => acc + v.tempo, 0);
        if (txtGlobal) txtGlobal.innerText = `Média Geral: ${(somaTotal / historicoTempos.length).toFixed(2)}s`;
    } else {
        if (txtGlobal) txtGlobal.innerText = "";
    }

    const ultimosSolves = historicoTempos.slice(0, 15).reverse();
    if (ultimosSolves.length < 2) {
        wrapper.innerHTML = `<div style="font-size:0.8rem; color:var(--text-secondary); text-align:center; padding-top:45px;">Registre ao menos 2 tempos para ver a linha de evolução.</div>`;
        return;
    }

    const temposValores = ultimosSolves.map(s => s.tempo);
    const maxTempo = Math.max(...temposValores);
    const minTempo = Math.min(...temposValores);
    const range = maxTempo - minTempo === 0 ? 1 : maxTempo - minTempo;

    const width = wrapper.clientWidth || 400;
    const height = 120;
    const paddingX = 25;
    const paddingY = 20;

    const chartWidth = width - (paddingX * 2);
    const chartHeight = height - (paddingY * 2);
    const passoX = chartWidth / (ultimosSolves.length - 1);

    let pontosPath = "";
    let pontosTrendPath = ""; // Linha da média móvel eficiente
    let pontosCirculos = "";
    
    let somaAcumulada = 0;

    ultimosSolves.forEach((solve, i) => {
        const x = paddingX + (i * passoX);
        const y = paddingY + chartHeight - (((solve.tempo - minTempo) / range) * chartHeight);
        
        // Desenha a linha bruta do solve
        if (i === 0) pontosPath += `M ${x} ${y}`;
        else pontosPath += ` L ${x} ${y}`;

        // Cálculo da Linha de Tendência Eficiente (Média móvel acumulativa simples para suavizar picos)
        somaAcumulada += solve.tempo;
        const mediaMovel = somaAcumulada / (i + 1);
        const yTrend = paddingY + chartHeight - (((mediaMovel - minTempo) / range) * chartHeight);
        
        if (i === 0) pontosTrendPath += `M ${x} ${yTrend}`;
        else pontosTrendPath += ` L ${x} ${yTrend}`;

        pontosCirculos += `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--accent)" stroke="var(--bg-card)" stroke-width="1.5"/>`;
    });

    const corStroke = document.body.classList.contains('dark') ? '#3b82f6' : '#2563eb';
    const corTrend = '#10b981'; // Verde para a linha de tendência suave

    wrapper.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" style="overflow: visible;">
            <line x1="${paddingX}" y1="${paddingY}" x2="${width - paddingX}" y2="${paddingY}" stroke="var(--border)" stroke-dasharray="3,3" />
            <line x1="${paddingX}" y1="${height - paddingY}" x2="${width - paddingX}" y2="${height - paddingY}" stroke="var(--border)" stroke-dasharray="3,3" />
            <path d="${pontosPath}" fill="none" stroke="${corStroke}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.4" />
            <path d="${pontosTrendPath}" fill="none" stroke="${corTrend}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="trend-line" />
            ${pontosCirculos}
        </svg>
    `;
}

// ==========================================
// 2. DISTRIBUIÇÃO DE TEMPOS (CURVA DE BELL EM SVG)
// ==========================================
function renderizarGraficoCurvaBell() {
    const wrapper = document.getElementById('svg-bell-wrapper');
    if (!wrapper) return;

    if (historicoTempos.length < 5) {
        wrapper.innerHTML = `<div style="font-size:0.8rem; color:var(--text-secondary); text-align:center; padding-top:45px;">Registre no mínimo 5 solves para mapear a sua consistência.</div>`;
        return;
    }

    const tempos = historicoTempos.map(t => t.tempo);
    const min = Math.min(...tempos);
    const max = Math.max(...tempos);
    
    // Divide os tempos em 5 faixas (Grupos de consistência)
    const totalFaixas = 5;
    const tamanhoFaixa = (max - min) === 0 ? 1 : (max - min) / totalFaixas;
    const faixasContagem = new Array(totalFaixas).fill(0);

    tempos.forEach(t => {
        let index = Math.floor((t - min) / tamanhoFaixa);
        if (index >= totalFaixas) index = totalFaixas - 1;
        faixasContagem[index]++;
    });

    const maxContagem = Math.max(...faixasContagem);
    const width = wrapper.clientWidth || 400;
    const height = 120;
    const paddingX = 30;
    const paddingY = 20;

    const chartWidth = width - (paddingX * 2);
    const chartHeight = height - (paddingY * 2);
    const larguraBarra = (chartWidth / totalFaixas) - 8;

    let barrasHTML = "";
    let legendasHTML = "";

    faixasContagem.forEach((qtd, i) => {
        const alturaBarra = maxContagem === 0 ? 0 : (qtd / maxContagem) * chartHeight;
        const x = paddingX + (i * (chartWidth / totalFaixas)) + 4;
        const y = height - paddingY - alturaBarra;
        
        // Calcula o ponto médio de tempo que essa barra representa
        const tempoFaixaMedio = min + (i * tamanhoFaixa) + (tamanhoFaixa / 2);

        barrasHTML += `
            <rect x="${x}" y="${y}" width="${larguraBarra}" height="${alturaBarra}" fill="var(--accent)" opacity="0.75" rx="4" class="chart-bar-bell">
                <title>Quantidade: ${qtd} solves nesta faixa</title>
            </rect>
        `;
        
        legendasHTML += `
            <text x="${x + (larguraBarra/2)}" y="${height - 5}" font-size="8" fill="var(--text-secondary)" text-anchor="middle">
                ${tempoFaixaMedio.toFixed(1)}s
            </text>
        `;
    });

    wrapper.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" style="overflow: visible;">
            <line x1="${paddingX}" y1="${height - paddingY}" x2="${width - paddingX}" y2="${height - paddingY}" stroke="var(--border)" stroke-width="1" />
            ${barrasHTML}
            ${legendasHTML}
        </svg>
    `;
}

// ==========================================
// 3. IDENTIFICADOR INTELIGENTE DE GARGALOS (SCANNER COGNITIVO)
// ==========================================
function calcularDiagnosticoGargalos() {
    const displayElement = document.getElementById('bottleneck-diagnostics');
    if (!displayElement) return;

    // Filtra apenas os tempos do histórico que possuem um caso vinculado de verdade
    const temposComCaso = historicoTempos.filter(t => t.caso);
    
    if (temposComCaso.length < 3) {
        displayElement.innerHTML = `❌ Dados insuficientes para escanear gargalos. Vincule ao menos <strong>3 solves</strong> a casos usando o painel pós-solve.`;
        return;
    }

    // Calcula a média global pura de referência
    const mediaGlobal = historicoTempos.reduce((acc, t) => acc + t.tempo, 0) / historicoTempos.length;

    // Agrupa os tempos por ID de Caso
    const mapaCasos = {};
    temposComCaso.forEach(t => {
        if (!mapaCasos[t.caso]) mapaCasos[t.caso] = [];
        mapaCasos[t.caso].push(t.tempo);
    });

    let piorCasoID = null;
    let maiorDiferenca = -Infinity;
    let mediaDoPiorCaso = 0;

    // Vasculha o mapa para achar qual caso está mais distante e acima da média geral
    for (const casoId in mapaCasos) {
        const temposDoCaso = mapaCasos[casoId];
        const mediaDoCaso = temposDoCaso.reduce((acc, v) => acc + v, 0) / temposDoCaso.length;
        const diferenca = mediaDoCaso - mediaGlobal;

        // Queremos achar o caso mais lento que a média geral
        if (diferenca > maiorDiferenca && temposDoCaso.length >= 1) {
            maiorDiferenca = diferenca;
            piorCasoID = casoId;
            mediaDoPiorCaso = mediaDoCaso;
        }
    }

    // Se o pior caso encontrado for mais lento que a média do usuário em pelo menos 0.5 segundos, avisa!
    if (piorCasoID && maiorDiferenca > 0.5) {
        const infoCaso = listaCasos.find(c => c.id === piorCasoID);
        const nomeDoCaso = infoCaso ? `${infoCaso.grupo} - ${infoCaso.nome}` : piorCasoID;
        
        displayElement.innerHTML = `
            <span style="color: var(--danger); font-weight: bold; display: block; margin-bottom: 4px;">⚠️ GARGALO CRÍTICO DETECTADO!</span>
            Sua média geral é de <strong>${mediaGlobal.toFixed(2)}s</strong>, mas o seu rendimento no <strong style="color: var(--accent);">${nomeDoCaso}</strong> está em <strong>${mediaDoPiorCaso.toFixed(2)}s</strong>. 
            Você está perdendo em média <span style="color: var(--danger); font-weight: bold;">+${maiorDiferenca.toFixed(2)}s</span> sempre que este caso aparece. Foque em treinar esse algoritmo!
        `;
    } else {
        displayElement.innerHTML = `
            <span style="color: var(--success); font-weight: bold; display: block; margin-bottom: 4px;">✅ COMPORTAMENTO HOMOGÊNEO!</span>
            Seus algoritmos vinculados estão alinhados e equilibrados com a sua média global de <strong>${mediaGlobal.toFixed(2)}s</strong>. Continue praticando!
        `;
    }
}