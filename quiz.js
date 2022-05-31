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
        imgSrc: "img/html.png",
        choiceA: "Correct",
        choiceB: "Incorrect",
        choiceC: "Incorrect",
        correct: "A"
    }, {
        question : "What does CSS stand for?",
        imgSrc: "img/html.png",
        choiceA: "Incorrect",
        choiceB: "Correct",
        choiceC: "Incorrect",
        correct: "B"
    }, {
        question : "What does JS stand for?",
        imgSrc: "img/html.png",
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


//asks a question
//uses currentQuestion starting from 0
const askQuestion = () => {

    let anyQuestion = questions[currentQuestion];

   

    question.innerHTML = `<p>${anyQuestion.question}</p>`;

    questionImg.innerHTML = `<img src="${anyQuestion.imgSrc}">`;

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

}

// to measure the progress

function quizProgress(){

    for(let Index = 0; Index <= lastQuestion; Index++){

        progressBar.innerHTML += `<div class="quizProgress" id="Index"></div>`;

    }

}