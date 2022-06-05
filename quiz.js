
// select all elements
const start = document.getElementById("quiz__start");
const quiz = document.getElementById("quiz__main");
const question = document.getElementById("quiz__question");
const qImg = document.getElementById("quiz__Image");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("quiz__counter");
const timeGauge = document.getElementById("foregroundTimeGauge");
const progress = document.getElementById("progressBar");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "./images/html.png",
        choiceA : "Hyper Text Markup Language",
        choiceB : "Hyperlinks and Text Markup Language",
        choiceC : "Home Tool Markup Language",
        correct : "A"
    },{
        question : "What does CSS stand for?",
        imgSrc : "./images/css.png",
        choiceA : "Colourful Style Sheets",
        choiceB : "Cascading Style Sheets",
        choiceC : "Computer Style Sheets",
        correct : "B"
    },{
        question : "Which property is used to change the font of an element?",
        imgSrc : "./images/css.png",
        choiceA : "font-family",
        choiceB : "font-weight",
        choiceC : "font-style",
        correct : "A"
    }, {
        question : "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        imgSrc : "./images/html.png",
        choiceA : "title",
        choiceB : "src",
        choiceC : "alt",
        correct : "C"
    }, {
        question : "Which SQL statement is used to return only different values?",
        imgSrc : "./images/sql.png",
        choiceA : "SELECT UNIQUE",
        choiceB : "SELECT DISTINCT",
        choiceC : "SELECT DIFFERENT",
        correct : "B"
    }, {
        question : "How do you select elements with class name 'test'?",
        imgSrc : "./images/css.png",
        choiceA : ".test",
        choiceB : "#test",
        choiceC : "test",
        correct : "A"
    }, {
        question : "Which operator is used to assign a value to a variable?",
        imgSrc : "./images/js.png",
        choiceA : "*",
        choiceB : "X",
        choiceC : "=",
        correct : "C"
    }, {
        question : "How do you select an element with id 'demo'?",
        imgSrc : "./images/css.png",
        choiceA : ".demo",
        choiceB : "#demo",
        choiceC : "demo",
        correct : "B"
    }, {
        question : "What does SQL stand for?",
        imgSrc : "./images/sql.png",
        choiceA : "Structured Query Language",
        choiceB : "Strong Question Language",
        choiceC : "Structured Question Language",
        correct : "A"
    }, {
        question : "In Git, a branch is:",
        imgSrc : "./images/github.png",
        choiceA : "Nothing",
        choiceB : "a separate version of the main repository",
        choiceC : "a part of Git config",
        correct : "A"
    }, {
        question : "Which operator is used to multiply numbers?",
        imgSrc : "./images/js.png",
        choiceA : "#",
        choiceB : "X",
        choiceC : "*",
        correct : "C"
    }
];

// create some variables

const previousQuestion = questions.length - 1;
let currentQuestion = 0;
let count = 0;
const questionTime = 20; // 20s
const timeGaugeWidth = 200; // 200px
const timeGaugeUnit = timeGaugeWidth / questionTime;
let score = 0;

// render a question
const askQuestion = () => {
    let q = questions[currentQuestion];
    
    question.innerHTML = `<p>${q.question}</p>`;
    qImg.innerHTML = `<img src="${q.imgSrc}">`;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}


// start quiz
const startQuiz = () => {
    start.style.display = "none";
    askQuestion();
    quiz.style.display = "block";
    questionProgress();
    questionCounter();
    timingBelt = setInterval(questionCounter,1000); // 1000ms = 1s
}
start.addEventListener("click",startQuiz);





// render progress
const questionProgress = () => {
    for(let qIndex = 0; qIndex <= previousQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

const questionCounter = () => {
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * timeGaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        incorrectAnswer();
        if(currentQuestion < previousQuestion){
            currentQuestion++;
            askQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(timingBelt);
            userScore();
        }
    }
}

// checkAnwer

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
        clearInterval(timingBelt);
        userScore();
    }
}


// answer is correct
const correctAnswer = () => {
    document.getElementById(currentQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
const incorrectAnswer = () => {
    document.getElementById(currentQuestion).style.backgroundColor = "#f00";
}

choiceA.addEventListener("click",checkAnswer);
choiceB.addEventListener("click",checkAnswer);
choiceC.addEventListener("click",checkAnswer);



// score render
const userScore =() => {
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "./images/5.png" :
              (scorePerCent >= 60) ? "./images/5.png" :
              (scorePerCent >= 40) ? "./images/5.png" :
              (scorePerCent >= 20) ? "./images/5.png" :
              "./images/1.png";
    
    scoreDiv.innerHTML = `<img src="${img}">`;
    scoreDiv.innerHTML += `<p>${scorePerCent}%</p>`;
}












