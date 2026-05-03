const perguntas = [
    // ==================== NÍVEL 1: FUNDAMENTAL 2 (20 perguntas) ====================
    {
        texto: "O que é linguagem articulada?",
        opcoes: ["Linguagem dos sinais", "Comunicação pelo espaço pessoal", "Fala baseada em sons organizados", "Desenhos em cavernas"],
        correta: 2
    },
    {
        texto: "Qual destes é um exemplo de linguagem articulada?",
        opcoes: ["Piscar os olhos", "Escrever um bilhete", "Pedir um sanduíche em voz alta", "Sentar longe do professor"],
        correta: 2
    },
    {
        texto: "O que é linguagem proxêmica?",
        opcoes: ["Comunicação por abraços", "Uso do espaço pessoal e distâncias", "Linguagem dos animais", "Falar em voz baixa"],
        correta: 1
    },
    {
        texto: "Sentar muito perto de um amigo demonstra:",
        opcoes: ["Raiva", "Intimidade e confiança", "Desprezo", "Frieza"],
        correta: 1
    },
    {
        texto: "O que significa 'linguagem histórica'?",
        opcoes: ["Falar só do passado", "A língua que não muda nunca", "A língua se transforma com o tempo", "Linguagem de museu"],
        correta: 2
    },
    {
        texto: "Qual palavra surgiu recentemente por causa da tecnologia?",
        opcoes: ["Saudade", "Selfie", "Trovão", "Cavalo"],
        correta: 1
    },
    {
        texto: "Como a linguagem pode influenciar o pensamento?",
        opcoes: ["Ela impede o raciocínio", "Diferentes línguas mudam a forma de entender o mundo", "Só existe pensamento sem linguagem", "A linguagem não afeta a mente"],
        correta: 1
    },
    {
        texto: "João está bravo. Em vez de falar, ele senta longe de Pedro. Qual linguagem ele usou?",
        opcoes: ["Articulada", "Proxêmica", "Histórica", "Escrita"],
        correta: 1
    },
    {
        texto: "Maria explica as regras do jogo em voz alta. Qual linguagem ela usou?",
        opcoes: ["Proxêmica", "Histórica", "Articulada", "Dos sinais"],
        correta: 2
    },
    {
        texto: "Na sala de aula, sentar na primeira carteira perto do professor geralmente demonstra:",
        opcoes: ["Medo", "Interesse e respeito", "Raiva", "Desprezo"],
        correta: 1
    },
    {
        texto: "Qual NÃO é um exemplo de linguagem articulada?",
        opcoes: ["Um debate na escola", "Um telefonema", "Um sorriso seguido de um passo para trás", "Uma apresentação oral"],
        correta: 2
    },
    {
        texto: "A palavra 'você' veio de 'vossa mercê'. Isso é um exemplo de:",
        opcoes: ["Linguagem proxêmica", "Mudança histórica da língua", "Linguagem articulada", "Comunicação não verbal"],
        correta: 1
    },
    {
        texto: "No elevador, as pessoas geralmente ficam de frente para a porta e evitam contato visual. Isso é explicado pela:",
        opcoes: ["Linguagem articulada", "Linguagem proxêmica", "Linguagem histórica", "Linguagem escrita"],
        correta: 1
    },
    {
        texto: "Se alguém dá um passo para trás durante uma conversa, a proxêmica sugere:",
        opcoes: ["Interesse no assunto", "Desconforto ou necessidade de distância", "Vontade de abraçar", "Alegria"],
        correta: 1
    },
    {
        texto: "O que é uma 'língua morta'?",
        opcoes: ["Uma língua que nunca existiu", "Uma língua sem falantes nativos vivos (ex: latim)", "Uma língua proibida por lei", "Uma língua muito antiga"],
        correta: 1
    },
    {
        texto: "A palavra 'saudade' surgiu nas navegações portuguesas. Isso mostra que:",
        opcoes: ["Os portugueses não sentiam falta", "A história de um povo influencia o vocabulário", "Saudade é inglesa", "Não tem relação com a história"],
        correta: 1
    },
    {
        texto: "Qual situação envolve APENAS linguagem proxêmica (sem fala e sem escrita)?",
        opcoes: ["Dizer 'sai' empurrando", "Afastar-se silenciosamente", "Escrever 'me deixe em paz'", "Gritar 'não chegue perto'"],
        correta: 1
    },
    {
        texto: "Em uma fila de banco, ficar encostado na pessoa da frente sem necessidade é uma violação de:",
        opcoes: ["Linguagem articulada", "Linguagem proxêmica", "Linguagem histórica", "Gramática"],
        correta: 1
    },
    {
        texto: "A expressão 'dar uma banana' como gesto ofensivo usa qual tipo de comunicação?",
        opcoes: ["Linguagem articulada", "Linguagem proxêmica", "Linguagem corporal/gestual (não verbal)", "Linguagem histórica"],
        correta: 2
    },
    {
        texto: "Quando você fala ao telefone com um amigo, está usando principalmente:",
        opcoes: ["Linguagem proxêmica", "Linguagem articulada", "Linguagem histórica", "Comunicação por gestos"],
        correta: 1
    },

    // ==================== NÍVEL 2: MÉDIO (18 perguntas) ====================
    {
        texto: "A 'zona íntima' na proxêmica (0 a 45 cm) geralmente é reservada para:",
        opcoes: ["Estranhos no ônibus", "Pessoas muito próximas (família, parceiros)", "Chefes no trabalho", "Autoridades policiais"],
        correta: 1
    },
    {
        texto: "Em uma entrevista de emprego, sentar-se ereto e manter uma distância de 1,2m transmite:",
        opcoes: ["Falta de educação", "Profissionalismo e respeito (zona social)", "Intimidade excessiva", "Desprezo"],
        correta: 1
    },
    {
        texto: "A 'zona pessoal' na proxêmica (45 cm a 1,2m) é usada para:",
        opcoes: ["Amigos próximos e conversas casuais", "Discursos públicos", "Apenas inimigos", "Cerimônias religiosas"],
        correta: 0
    },
    {
        texto: "Em uma sala de espera, duas pessoas desconhecidas sentam-se com uma cadeira de distância. Isso é um exemplo de:",
        opcoes: ["Respeito à zona social (proxêmica)", "Falta de educação", "Linguagem articulada", "Preconceito linguístico"],
        correta: 0
    },
    {
        texto: "Quando um político se aproxima da plateia durante um discurso, ele usa a proxêmica para:",
        opcoes: ["Mostrar medo", "Criar intimidade e empatia com o público", "Fugir do palco", "Falar mais baixo"],
        correta: 1
    },
    {
        texto: "A 'língua de sinais' (Libras) é considerada linguagem articulada?",
        opcoes: ["Não, porque não usa sons orais, mas tem estrutura gramatical complexa", "Sim, porque usa a boca", "Não, é linguagem proxêmica", "Sim, é igual ao português falado"],
        correta: 0
    },
    {
        texto: "O que são 'gírias' do ponto de vista da linguagem histórica?",
        opcoes: ["Erros de português", "Palavras que surgem e podem desaparecer ou se tornar formais com o tempo", "Apenas linguagem proxêmica", "Sons sem sentido"],
        correta: 1
    },
    {
        texto: "Por que palavras como 'internet' e 'selfie' são exemplos de linguagem histórica?",
        opcoes: ["Porque são palavras antigas", "Porque surgiram com novas tecnologias e mudanças sociais", "Porque são gestos", "Porque ninguém usa"],
        correta: 1
    },
    {
        texto: "Se uma palavra antiga mudou de significado (ex: 'vassalo' de servo a bajulador), isso é:",
        opcoes: ["Mudança semântica (histórica)", "Proxêmica", "Linguagem articulada pura", "Gíria passageira"],
        correta: 0
    },
    {
        texto: "O que o povo Pirahã (Amazônia) nos ensina sobre linguagem e pensamento?",
        opcoes: ["Que eles não pensam", "Que sua língua sem números influencia como eles pensam quantidades", "Que eles usam só proxêmica", "Que falam português perfeito"],
        correta: 1
    },
    {
        texto: "Uma criança que aprende a falar primeiro 'mamãe' e 'papai' está usando:",
        opcoes: ["Linguagem proxêmica", "Linguagem articulada em desenvolvimento", "Linguagem histórica", "Comunicação animal"],
        correta: 1
    },
    {
        texto: "O que significa a expressão 'a língua é viva'?",
        opcoes: ["Que as palavras respiram", "Que a língua muda com o tempo e o uso das pessoas", "Que só idosos falam certo", "Que a língua morre todo dia"],
        correta: 1
    },
    {
        texto: "Em uma cultura de 'alto contato' (ex: Brasil, Itália), a proxêmica tende a ter:",
        opcoes: ["Maior distância pessoal", "Menor distância pessoal e mais toque", "Proibição de toque", "Mesma distância que no Japão"],
        correta: 1
    },
    {
        texto: "No Japão, a distância de respeito em uma conversa formal é maior que no Brasil. Isso mostra que:",
        opcoes: ["Os japoneses são frios", "A proxêmica varia entre culturas", "Eles não usam linguagem", "O Brasil não tem proxêmica"],
        correta: 1
    },
    {
        texto: "Quando você escreve um bilhete para um colega, qual linguagem está usando?",
        opcoes: ["Linguagem articulada (oral)", "Linguagem escrita (derivada da articulada)", "Linguagem proxêmica", "Linguagem histórica pura"],
        correta: 1
    },
    {
        texto: "O que são 'neologismos'?",
        opcoes: ["Palavras muito antigas", "Palavras novas criadas pelos falantes", "Gestos proxêmicos", "Sons de animais"],
        correta: 1
    },
    {
        texto: "Por que o português do Brasil é diferente do de Portugal?",
        opcoes: ["Porque um é errado", "Porque as línguas mudam de forma diferente em cada lugar (história e geografia)", "Porque os brasileiros não sabem falar", "Por causa da proxêmica"],
        correta: 1
    },
    {
        texto: "Quando você está em um show e o cantor pede 'mãos para o alto', ele está usando:",
        opcoes: ["Linguagem articulada (fala) + gestual", "Apenas proxêmica", "Apenas linguagem histórica", "Comunicação animal"],
        correta: 0
    },

    // ==================== NÍVEL 3: UNIVERSITÁRIO/MISTAS (12 perguntas - sem pós) ====================
    {
        texto: "Segundo Edward T. Hall (criador da proxêmica), as distâncias sociais variam entre culturas. Um exemplo é:",
        opcoes: ["Todas as culturas têm as mesmas distâncias", "Árabes e norte-americanos têm diferentes zonas de conforto", "Proxêmica não existe em países asiáticos", "Distâncias são definidas por lei"],
        correta: 1
    },
    {
        texto: "A hipótese de Sapir-Whorf (relatividade linguística) defende que:",
        opcoes: ["Todas as línguas são iguais", "A língua que falamos molda nossa percepção da realidade", "A linguagem não afeta o pensamento", "Só existe pensamento em inglês"],
        correta: 1
    },
    {
        texto: "Em linguística, a 'arbitrariedade do signo' (Saussure) significa que:",
        opcoes: ["As palavras têm significados universais", "Não há relação natural entre o som da palavra e seu significado", "Todas as línguas são iguais", "Os sinais são desenhos"],
        correta: 1
    },
    {
        texto: "O que diferencia a linguagem humana da comunicação animal?",
        opcoes: ["Animais não se comunicam", "A linguagem humana tem dupla articulação (sons combináveis e infinitas frases)", "Animais usam só proxêmica", "Não há diferença"],
        correta: 1
    },
    {
        texto: "O que é 'diglossia'?",
        opcoes: ["Falar duas línguas", "Uma situação em que duas variantes da mesma língua coexistem com funções sociais diferentes (ex: árabe clássico vs. dialetal)", "Linguagem de sinais", "Gagueira"],
        correta: 1
    },
    {
        texto: "A 'teoria do ato de fala' (Austin/Searle) estuda:",
        opcoes: ["Apenas os sons da fala", "Como ao dizer algo também fazemos algo (prometer, ordenar, declarar)", "A distância entre falantes", "A história das palavras"],
        correta: 1
    },
    {
        texto: "O 'princípio da cooperação' de Grice (máximas conversacionais) aplica-se à:",
        opcoes: ["Linguagem proxêmica", "Linguagem articulada (conversas)", "Linguagem histórica", "Comunicação animal"],
        correta: 1
    },
    {
        texto: "Para Vygotsky, a linguagem e o pensamento têm uma relação de:",
        opcoes: ["Independência total", "Interdependência e internalização (a fala social vira pensamento interno)", "Apenas a linguagem depende do pensamento", "O pensamento não existe"],
        correta: 1
    },
    {
        texto: "O que significa 'deixis' em linguística?",
        opcoes: ["Palavras que indicam posição no tempo/espaço/pessoa (aqui, ali, agora, eu, você)", "Um tipo de proxêmica", "Uma língua morta", "Um gesto obsceno"],
        correta: 0
    },
    {
        texto: "O que são 'marcadores discursivos' (ex: 'né', 'tipo assim', 'então')?",
        opcoes: ["Erros de português", "Elementos da linguagem articulada que organizam a conversa", "Gestos proxêmicos", "Palavras antigas"],
        correta: 1
    },
    {
        texto: "Um antropólogo percebe que em uma cultura, as pessoas falam a 10 cm do rosto umas das outras. Isso seria:",
        opcoes: ["Uma variação cultural da proxêmica", "Um erro de educação", "Uma doença mental", "Um problema de audição"],
        correta: 0
    },
    {
        texto: "O 'experimento dos peixes' (Whorf) mostrou que a língua influencia:",
        opcoes: ["A respiração", "A categorização e percepção do mundo", "A altura das pessoas", "A cor dos olhos"],
        correta: 1
    }
];

// ========== LÓGICA DO JOGO (NÃO MEXER) ==========
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
    let mensagem = "";
    if (pontuacao <= 25) mensagem = "📚 Continue estudando! Revisa os conceitos básicos.";
    else if (pontuacao <= 38) mensagem = "🎉 Bom! Você tem uma base sólida.";
    else if (pontuacao <= 45) mensagem = "🌟 Muito bom! Nível avançado.";
    else mensagem = "🏆 Excelente! Você é um especialista em linguagens!";
    
    perguntaTexto.textContent = `🎯 Fim de jogo! Você acertou ${pontuacao} de ${perguntas.length}. ${mensagem}`;
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
