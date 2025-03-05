const questions = [
    {
        question: "(FAG) Sobre o Arcadismo, é correto o que se afirma em:",
        answers: [
            { id: 1, text: "Nesse período o homem é regido pelas leis físico-químicas, pela hereditariedade e pelo meio social.", correct: false },
            { id: 2, text: "A poesia dessa época dá ênfase ao poder de vidência do artista.", correct: false },
            { id: 3, text: "Destaca-se nessa fase certo gosto pelo equilíbrio, pela simplicidade e pela harmonia, a partir dos modelos clássicos antigos.", correct: true },
            { id: 4, text: "Há nessa Escola Literária uma tendência à valorização do humor, com vistas a afugentar as circunstâncias desagradáveis da vida.", correct: false },
            { id: 5, text: "Enfatiza-se na criação poética, desse momento, a utilização do valor sugestivo da música.", correct: false }
        ]
    },
    {
        question: "(ITA) Uma das afirmações abaixo é incorreta. Assinale-a:",
        answers: [
            { id: 1, text: "O escritor árcade reaproveita os seres criados pela mitologia greco-romana, deuses e entidades pagãs. Mas esses mesmos deuses convivem com outros seres do mundo cristão.", correct: false },
            { id: 2, text: "A produção literária do Arcadismo brasileiro constitui-se sobretudo de poesia, que pode ser lírico-amorosa, épica e satírica.", correct: false },
            { id: 3, text: "O árcade recusa o jogo de palavras e as complicadas construções da linguagem barroca, preferindo a clareza, a ordem lógica na escrita.", correct: false },
            { id: 4, text: "O poema épico Caramuru, de Santa Rita Durão, tem como assunto o descobrimento da Bahia, levado a efeito por Diogo Álvares Correia, misto de missionário e colono português.", correct: false },
            { id: 5, text: "A morte de Moema, índia que se deixa picar por uma serpente, como prova de fidelidade e amor ao índio Cacambo, é trecho mais conhecido da obra O Uruguai, de Basílio da Gama.", correct: true }
        ]
    },
    {
        question: "(UFSC) Considere as afirmativas sobre Barroco e o Arcadismo e assinale a opção que só contém afirmativas sobre o Arcadismo. <br> 1. Simplificação da língua literária – ordem direta – imitação dos antigos gregos e romanos. <br> 2. Valorização dos sentidos – imaginação exaltada – emprego dos vocábulos raros. <br> 3. Vida campestre idealizada como verdadeiro estado de poesia- clareza-harmonia. <br> 4. Emprego frequente de trocadilhos e de perífrases – malabarismos verbais – oratória. <br> 5. Sugestões de luz, cor e som – antítese entre a vida e a morte – espírito cristão antiterreno. ", 
        answers: [
            { id: 1, text: "1, 4 e 5", correct: false },
            { id: 2, text: "2, 3 e 5", correct: false },
            { id: 3, text: "2, 4 e 5", correct: false },
            { id: 4, text: "1 e 3", correct: true },
            { id: 5, text: "1, 2 e 5", correct: false }
        ]
    },
    {
        question: "(MACKENZIE)<br> Já sobre o coche de ébano estrelado<br> Deu meio giro a noite escura e feia;<br> Que profundo silêncio me rodeia<br> Neste deserto bosque, à luz vedado!<br> Jaz entre as folhas Zéfiro abafado,<br>O Tejo adormeceu na lisa areia;<br> Nem o mavioso rouxinol gorjeia,<br> Nem pia o mocho, às trevas costumado:<br> Só eu velo, só eu, pedindo à sorte<br> Que o fio, com que está minha alma presa<br> À vil matéria lânguida me corte:<br> Consola-me este horror, esta tristeza;<br> Porque a meus olhos se afigura a morte<br> No silêncio total da natureza.<br> <br>(Bocage)<br><br> Nesse poema, a referência à cultura mitológica (Zéfiro) revela influência da estética:",
        answers: [
            { id: 1, text: "Romântica", correct: false },
            { id: 2, text: "Simbolista", correct: false },
            { id: 3, text: "Trovadoresca", correct: false },
            { id: 4, text: "Árcade", correct: true },
            { id: 5, text: "Parnasiana", correct: false }
        ]
    },
    {
        question: "(UFRR) Sobre o Arcadismo, é correto afirmar que:",
        answers: [
            { id: 1, text: "Expressa a sociedade medieval, teocêntrica, de caráter servil e fortemente religioso. Ao mesmo tempo, é marcado pelo surgimento de formas de expressões artísticas de caráter popular, vinculadas a classes sociais consideradas ‘inferiores’ à época.", correct: false },
            { id: 2, text: "É marcado pelo rebuscamento das formas, pela riqueza de detalhes e pelos contrastes. Influenciado pela Contrarreforma, foi concebido como uma reação ao Renascimento.", correct: false },
            { id: 3, text: "É também chamado de Neoclassicismo, surge como uma releitura do Renascimento (ou Classicismo), preconizando uma arte pautada pela observância das formas clássicas e dos ideais humanistas. O bucolismo e o pastoralismo podem ser citados como características do Estilo no Brasil.", correct: true },
            { id: 4, text: "Surge como reação direta à arte e às concepções de mundo medievais, valorizando o passado greco-latino e a explicação científica do mundo; é teocêntrico, em contraponto ao antropocentrismo difundido pela Igreja.", correct: false },
            { id: 5, text: "É marcado pelo rebuscamento das formas, pela riqueza de detalhes e pelos contrastes. Expressa a sociedade medieval, teocêntrica, de caráter servil e fortemente religioso. Surge como reação direta à arte e às concepções de mundo medievais e é marcado pelo surgimento de formas de expressões artísticas de caráter popular, vinculadas a classes sociais consideradas ‘inferiores’ à época.", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function reset() {
    nextButton.style.display = "none";
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function showQuestion() {
    reset();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answersButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    const answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.find(answer => answer.correct);

    const selectedBtn = e.target;
    const isCorrect = parseInt(selectedBtn.dataset.id) === correctAnswer.id;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answersButtons.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    reset();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Tentar Novamente.";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();