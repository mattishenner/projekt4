
const questions = [
    {
        question: "I nogle tilfælde kan stress, hjælpe en i en presset situation som for eksempel en eksamen, fordi:?",
        answers: [
            { text: "Vi oplever en øget glæde og lyst til at snakke", correct: false},
            { text: "Koncentrationen bliver skarpere og hurtigere", correct: true},
            { text: "Hjernen falder til ro, og vi slapper mere af", correct: false},
            { text: "Vi husker bedre i pressede situationer", correct: false}
        ]
    },
    {
        question: "Hvordan tror du at man bedst minimere sin eksamensangst?",
        answers: [
            { text: "Ved at lave mindfulness-øvelser", correct: false},
            { text: "Ved at meditere hver dag", correct: false},
            { text: "Ved at skrive om din angst", correct: true},
            { text: "Ved at tale om din angst", correct: false}
        ]
    },
    {
        question: "Forskning viser, at du skal motionere, efter du har læst til eksamen. Hvorfor tror du, at man skal det?",
        answers: [
            { text: "Fordi du får fornyet energi til næste læsning", correct: false},
            { text: "For at undgå nakkesmerter og andre gener, når du har siddet stille i lang tid", correct: false},
            { text: "Fordi man skal afstresse ved at få pulsen op", correct: false},
            { text: "Fordi du bliver bedre til at huske det, du læste, hvis du får pulsen op, efter du har læst det.", correct: true}
        ]
    },
    {
        question: "9. Hvorfor er det godt for nogle at skrive eksamensnoter med skrifttyper som Comic Sans og Bodoni MT?",
        answers: [
            { text: "De to skrifttyper gør det sværere for censor og din lærer at se, hvad du har skrevet i dine noter", correct: false},
            { text: "De hukommeelse bliver bedre, hvis du skriver med en anden skrifttype end du er vant til", correct: false},
            { text: `Jo sværere du gør det for dig selv at læse og forstå stoffet med "besværlige" skrifttyper, jo mere vil du huske det`, correct: true},
            { text: "Din hjerne har gavn af, at dine noter på computeren ser ud, som om de er håndskrevne", correct: false}
        ]
    },
    {
        question: "Hvad er de vigtigste ting, du skal huske, når du begynder at læse til eksamen??",
        answers: [
            { text: "At få læst et tilstrækkeligt med antal sider", correct: false},
            { text: "At kunne alt udenad", correct: false},
            { text: "At huske mest muligt", correct: false},
            { text: "At spørge, hvad er det, jeg bliver bedt om at forstå her?", correct: true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const continueButton = document.getElementById("continue-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Næste";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
   nextButton.style.display = "none";
   while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Godt gået!<br><br>Du svarede rigtigt på ${score} ud af ${questions.length}!`;
    continueButton.innerHTML = "Færdig";
    continueButton.style.display = "block";
    playAnimation();
};

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();









// *************** Confetti Animation *************** //
let animation = bodymovin.loadAnimation({
    container: document.getElementById('animation container'),
    path: 'confeti-animation.json',
    render: 'svg',
    loop: false,
    autoplay: false,
    name: 'conf animation'
});

const confetti = document.querySelector(".confetti");

function resetAnimation() {
    animation.goToAndStop(0, true);
    confetti.style.opacity = "0";
}

function playAnimation() {
    animation.play();
    confetti.style.opacity = "1";
}

resetAnimation();