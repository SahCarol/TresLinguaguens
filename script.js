const perguntas = [
    {
        texto: "O que é linguagem articulada?",
        opcoes: ["Linguagem dos sinais", "Comunicação pelo espaço pessoal", "Fala baseada em sons organizados", "Desenhos em cavernas"],
        correta: 2
    },
    {
        texto: "O que é linguagem proxêmica?",
        opcoes: ["Comunicação por abraços", "Uso do espaço pessoal e distâncias", "Linguagem dos animais", "Falar em voz baixa"],
        correta: 1
    },
    {
        texto: "Qual exemplo representa a linguagem proxêmica?",
        opcoes: ["Escrever uma carta", "Sentar muito perto de alguém", "Falar alto no telefone", "Memorizar um poema"],
        correta: 1
    },
    {
        texto: "O que significa 'linguagem histórica'?",
        opcoes: ["Falar só do passado", "A língua que não muda", "A língua se transforma com o tempo", "Linguagem de museu"],
        correta: 2
    },
    {
        texto: "Como a linguagem pode influenciar o pensamento?",
        opcoes: ["Ela impede o raciocínio", "Diferentes línguas mudam a forma de entender o mundo", "Só existe pensamento sem linguagem", "A linguagem não afeta a mente"],
        correta: 1
    },
    {
        texto: "João está bravo. Em vez de falar, ele senta longe de Pedro. Qual linguagem?",
        opcoes: ["Articulada", "Proxêmica", "Histórica", "Escrita"],
        correta: 1
    },
    {
        texto: "Maria explica as regras do jogo em voz alta. Qual linguagem?",
        opcoes: ["Proxêmica", "Histórica", "Articulada", "Dos sinais"],
        correta: 2
    },
    {
        texto: "A palavra 'selfie' surgiu com os celulares. Isso é exemplo de:",
        opcoes: ["Proxêmica", "Mudança histórica da língua", "Linguagem articulada", "Comunicação não verbal"],
        correta: 1
    },
    {
        texto: "Sentar na primeira carteira perto do professor demonstra:",
        opcoes: ["Medo", "Interesse e respeito (proxêmica)", "Raiva", "Desprezo"],
        correta: 1
    },
    {
        texto: "Qual NÃO é exemplo de linguagem articulada?",
        opcoes: ["Um debate", "Um telefonema", "Um sorriso e um passo para trás", "Uma apresentação oral"],
        correta: 2
    }
];

let perguntaAtual = 0;
let pontuacao = 0;
let jogoFinalizado = false;

const perguntaTexto = document.getElementById("pergunta-texto");
const opcoesContainer = document.getElementById("opcoes-container");
const pontuacaoSpan = document.getElementById("pontuacao");
const totalPerguntasSpan = document.getElementById("total-perguntas");
const reiniciarBtn = document.getElementById("reiniciar");

totalPerguntasSpan.textContent = perguntas.length;

function carregarPergunta() {
    if (jogoFinalizado) return;
    
    const pergunta = perguntas[perguntaAtual];
    perguntaTexto.textContent = pergunta.texto;
    
    opcoesContainer.innerHTML = "";
    
    pergunta.opcoes.forEach((opcao, idx) => {
        const div = document.createElement("div");
        div.classList.add("opcao");
        div.textContent = opcao;
        div.dataset.indice = idx;
        div.addEventListener("click", () => responder(idx));
        opcoesContainer.appendChild(div);
    });
}

function responder(indiceEscolhido) {
    if (jogoFinalizado) return;
    
    const pergunta = perguntas[perguntaAtual];
    const estaCorreta = (indiceEscolhido === pergunta.correta);
    
    const opcoesDiv = document.querySelectorAll(".opcao");
    
    opcoesDiv.forEach((div, idx) => {
        div.style.pointerEvents = "none";
        if (idx === pergunta.correta) {
            div.classList.add("certa");
        }
        if (idx === indiceEscolhido && idx !== pergunta.correta) {
            div.classList.add("errada");
        }
    });
    
    if (estaCorreta) {
        pontuacao++;
        pontuacaoSpan.textContent = pontuacao;
    }
    
    setTimeout(() => {
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            carregarPergunta();
        } else {
            finalizarJogo();
        }
    }, 1200);
}

function finalizarJogo() {
    jogoFinalizado = true;
    perguntaTexto.textContent = `🎉 Fim de jogo! Você acertou ${pontuacao} de ${perguntas.length}.`;
    opcoesContainer.innerHTML = "";
    reiniciarBtn.style.display = "inline-block";
}

function reiniciarJogo() {
    perguntaAtual = 0;
    pontuacao = 0;
    jogoFinalizado = false;
    pontuacaoSpan.textContent = "0";
    reiniciarBtn.style.display = "none";
    carregarPergunta();
}

reiniciarBtn.addEventListener("click", reiniciarJogo);

carregarPergunta();
