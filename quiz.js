// select all elements

const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const questionImg = document.getElementById("qImg");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const counter = document.getElementById("counter");

const timer = document.getElementById("timeGauge");

const progressBar = document.getElementById("progress");

const scoreDiv = document.getElementById("scoreContainer");

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

const previosuQuestion = questions.length - 1;

let currentQuestion = 0;



const askQuestion = () => {

    let  = questions[currentQuestion];

   

    question.innerHTML = `<p>${q.question}</p>`;

    questionImg.innerHTML = "<img src="+ q.imgSrc +">";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

}