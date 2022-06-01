import { array } from "./data.js";
console.log(array);

// select all elements

const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const questionImg = document.getElementById("questionImg");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const counter = document.getElementById("counter");

const timer = document.getElementById("timer");

const progressBar = document.getElementById("progressBar");

const scoreDiv = document.getElementById("scoreContainer");

//examples questions in an array
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc: ".png",
        choiceA: "Correct",
        choiceB: "Incorrect",
        choiceC: "Incorrect",
        correct: "A"
    }, {
        question : "What does CSS stand for?",
        imgSrc: ".png",
        choiceA: "Incorrect",
        choiceB: "Correct",
        choiceC: "Incorrect",
        correct: "B"
    }, {
        question : "What does JS stand for?",
        imgSrc: ".png",
        choiceA: "Incorrect",
        choiceB: "Incorrect",
        choiceC: "Correct",
        correct: "C"
    }
]
//previous question goes to the back -1
const previousQuestion = questions.length - 1;

// current question starts from 0
let currentQuestion = 0;
let count = 0;

//creating the timer for the game
const questionTime = 20; // 20s
const timerWidth = 200; // 200px
const timerUnit = timerWidth / questionTime;
let countdown = 0;
let score = 0;


//asks a question
//uses currentQuestion starting from 0
const askQuestion = () => {

    let anyQuestion = questions[currentQuestion];
    question.innerHTML = `<p>${anyQuestion.question}</p>`;
    questionImg.innerHTML = `<img src="${anyQuestion.imgSrc}">`;
    choiceA.innerHTML = anyQuestion.choiceA;
    choiceB.innerHTML = anyQuestion.choiceB;
    choiceC.innerHTML = anyQuestion.choiceC;

}

// to measure the progress

const quizProgress = () => {

    for(let Index = 0; Index <= previousQuestion; Index++){

        progressBar.innerHTML += `<div class="quizProgress" id="Index"></div>`;

    }

}

const startQuiz = () => {
    quiz.style.display = "none";
    askQuestion();
    start.style.display = "block";
    questionProgress();
    questionCounter();
    timerInterval = setInterval(questionCounter,1000); // 1000ms = 1s
    console.log()
}


start.addEventListener("click", startQuiz);

// start quiz


// the progress so far.
const questionProgress = () => {
    for(let questionIndex = 0; questionIndex <= previousQuestion; questionIndex++){
        progressBar.innerHTML += `<div class="prog" id="questionIndex"></div>`;
    }console.log()
}

// counter function to show the progress
const questionCounter = () => {
    if(count <= questionTime){
        counter.innerHTML = count;
        timer.style.width = count * timerUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color if the answer is incorrect
        incorrectAnswer();
        if(currentQuestion < previousQuestion){
            currentQuestion++;
            askQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(timerInterval);
            userScore();
        }
    }
}
//function to see if the answer is correct or not

//function to change the colour of the options(A,B,C) if the incorrect answer is given

//function to change the colour of the options(A,B,C) if the correct answer is given
const checkAnswer = (answer) => {
    if( answer == questions[currentQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        correctAnswer();
    }else{
        // answer is wrong
        // change progress color to red
        incorrectAnswer();
    }
    count = 0;
    if(currentQuestion < previousQuestion){
        currentQuestion++;
        askQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(timer);
        scoreRender();
    }
}

//  if the answer is correct
const correctAnswer = () => {
    document.getElementById(currentQuestion).style.backgroundColor = "#green";
}

//if the answer is wrong
const incorrectAnswer = () => {
    document.getElementById(currentQuestion).style.backgroundColor = "#red";
}












