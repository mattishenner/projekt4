// ===== Quiz =====

//Her laves spørgsmålene til quizen + svarmulighederne
const questions = [
    {
        question: "Hvad er spørgsmål 1?",
        answers: [
            { text: "Bla 1", correct: false},
            { text: "Bla bla 2", correct: true},
            { text: "Bla bla bla 3", correct: false},
            { text: "Bla 4", correct: false}
        ]
    },
    {
        question: "Hvad er spørgsmål 2?",
        answers: [
            { text: "Bla 1", correct: false},
            { text: "Bla bla 2", correct: true},
            { text: "Bla bla bla 3", correct: false},
            { text: "Bla 4", correct: false}
        ]
    },
    {
        question: "Hvad er spørgsmål 3?",
        answers: [
            { text: "Bla 1", correct: false},
            { text: "Bla bla 2", correct: true},
            { text: "Bla bla bla 3", correct: false},
            { text: "Bla 4", correct: false}
        ]
    },
    {
        question: "Hvad er spørgsmål 4?",
        answers: [
            { text: "Bla 1", correct: false},
            { text: "Bla bla 2", correct: true},
            { text: "Bla bla bla 3", correct: false},
            { text: "Bla 4", correct: false}
        ]
    },
    {
        question: "Hvad er spørgsmål 5?",
        answers: [
            { text: "Bla 1", correct: false},
            { text: "Bla bla 2", correct: true},
            { text: "Bla bla bla 3", correct: false},
            { text: "Bla 4", correct: false}
        ]
    }
];

//Tilføjelse af variablerne for 3 elementer (question, answer-btn, next-btn)
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//Variabler for at holde styr på spørgsmåls index og score
let currentQuestionIndex = 0;
let score = 0;

//Funktion til at starte quiz - her vil spørgsmålet reset index og score til 0
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//Denne funktion vil vise spørgsmålet med nummer og svarmulighederne der hører til 
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        // Her tilføjer vi svarene
        const button = document.createElement("button");
        // Her bliver teksten tilføjet til btn
        button.innerHTML = answer.text;
        button.classList.add("answer-btn");
        // for at vise button i div'en (id="answer-buttons") 
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        //Når man klikker vil tage fat i denne funktion
        button.addEventListener("click", selectAnswer);
    })
}

//Fjerner alle tidlige svar
function resetState(){
   nextButton.style.display = "none";
   while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    // efter klik vil den tage dette element i variablen
    const selectedBtn = e.target;
    // så vil den tjekke data set og se om den er true eller ikke add class 
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    //array for answer buttons children
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        // disabled klik så svaret er låst
        button.disabled = true;
    });
    //Herefter vil next btn vis sig
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Du fik ${score} ud af ${questions.length}!`;
    nextButton.innerHTML = "Prøv igen";
    nextButton.style.display = "block";
};

// Vil vise spørgsmål eller score, hvis der ikke er flere spørgsmål
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

// Funktion for next-btn 
nextButton.addEventListener("click", ()=>{
    // vil se hvor mange spørgsmål der har været 
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    // hvis flere end 4 vil den restarte quiz
    }else{
        startQuiz();
    }
});

startQuiz();  

// *************** Animation *************** //
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation container'),
    path: 'confeti-animation.json',
    render: 'svg',
    loop: true,
    autoplay: true,
    name: 'conf animation'
});