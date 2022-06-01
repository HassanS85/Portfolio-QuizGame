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
const questionTime = 10; // 10s
const timerWidth = 150; // 150px
const timerUnit = gaugeWidth / questionTime;
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

function quizProgress(){

    for(let Index = 0; Index <= previousQuestion; Index++){

        progressBar.innerHTML += `<div class="quizProgress" id="Index"></div>`;

    }

}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    
    askQuestion();
    
    qusetionProgress();
    questionCounter();
    timesInterval = setInterval(questionCounter,1000); // 1000ms = 1s

}

// the progress so far.
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter function to show the progress


// show the score of the quiz so far


//function to see if the answer is correct or not

//function to change the colour of the options(A,B,C) if the incorrect answer is given

//function to change the colour of the options(A,B,C) if the correct answer is given


//function to show the score currently in percentage.


//calculate the amount answered correctly/incorrectly.
//will need to use (Math.round here.)

// 

