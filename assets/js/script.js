var startbutton = document.querySelector(".start-btn");
var mathbutton = document.querySelector(".math-btn");
var historybutton = document.querySelector(".history-btn");
var sciencebutton = document.querySelector(".science-btn");

var startscreen = document.querySelector("#start-screen");
var selectScreen = document.querySelector("#selection-screen");
var questionscreen = document.querySelector("#question-screen");
var quizresults = document.querySelector("#quiz-results");
var wins = document.querySelector(".win");
var losses = document.querySelector(".lose");
let questionMath = [
    "What is the formula for the pythagorean theorem?",
    "What is the formula for slope?",
    "An equation must have two equal?",
    "What is the formula for a circle's area?",
    "What is the formula for a cone's volume?"
];
let answerMath = [
    "a^2+b^2 = c^2",
    "m = (y2-y1)/(x2-x1)",
    "Expressions",
    "A = pi*radius^2",
    "V = (1/3)pi*h*radius^2"
];
let choicesMath = [
    ["a+b=c","a^2+b^2 = c^2","(a/2)+(b/2)=(c/2)", "a=b=c"],
    ["m = (x1-y1)/(x2-y2)","m = (y/y)-(x/x)", "m = y2-1/x2-1", "m = (y2-y1)/(x2-x1)"],
    ["Expressions","Examples","Extractions","Excuses"],
    ["A = 2*radius*pi","A = pi*radius^2","A = radius*pi","A = 2*radius"],
    ["V = (1/3)pi*radius", "V = pi*radius*2","V = pi*radius*h^2","V = (1/3)pi*h*radius^2"]
];
let questionHistory = [
    "What was the shortest war in human history?",
    "Who killed Julius Caesar?",
    "What was th Cold War about?",
    "Who painted the Mona Lisa?",
    "Where was the Last Supper painted?"
];
let answerHistory = [
    "D.The England and Zanzibar War",
    "C.A and B",
    "C.The rivalry between the United States and the Soviet Union",
    "D.Leonardo",
    "B.Milano"
];
let choicesHistory = [
    ["A.The Civil War", "B.World War 2", "C.The Korean War", "D.The England and Zanzibar War"],
    ["A.Brutus", "B.Longinus", "C.A and B", "D.Cleopatra"],
    ["A.The aftermath of World War II", "B.The cold air occupying European countries", "C.The rivalry between the United States and the Soviet Union", "D.The Race to reach the Moon"],
    ["A.Raphael", "B.Michealangelo", "C.Donatello", "D.Leonardo"],
    ["A.New York City", "B.Milano", "C.Spain", "D.China"]
];
let questionScience = [
    "Which is the most abundant element in the universe?",
    "What is the hardest natural substance on Earth?",
    "How many colors are in the rainbow?",
    "How many hearts does an octopus have?",
    "What is the largest known animal?"
];
let answerScience = [
    "Hydrogen",
    "Diamond",
    "Seven",
    "3",
    "Blue Whale"
];
let choicesScience = [
    ["Hydrogen", "Oxygen", "Lithium", "Boron"],
    ["Rock", "Diamond", "Crystal", "Dirt"],
    ["Ten", "Five", "Eight", "Seven"],
    ["3", "5", "6", "8"],
    ["Hippo", "Blue Whale", "Lion", "Elephant"]
];
var questionNumber;
//question id and answer buttons for quiz game
var question = document.getElementById("question");
var but1 = document.querySelector(".button_1");
var but2 = document.querySelector(".button_2");
var but3 = document.querySelector(".button_3");
var but4 = document.querySelector(".button_4");
var rightWrong = document.querySelector(".right-wrong");
var winCount;
var lossCount;

function mathquiz() {
    startscreen.classList.add("hide");
    selectScreen.classList.add("hide");
    questionscreen.classList.remove("hide");
    quizresults.classList.add("hide");
    questionNumber = 0;
    winCount = 0;
    lossCount = 0;

    setMathQuestion();
}
function setMathQuestion() {
    displayMathQuestion(questionNumber);
}
function displayMathQuestion(x){
    question.innerText = questionMath[x];
    but1.innerText = choicesMath[x][0];
    but2.innerText = choicesMath[x][1];
    but3.innerText = choicesMath[x][2];
    but4.innerText = choicesMath[x][3];
}
function nextMathQuestion(){
    questionNumber++;
    if (questionNumber >= questionMath.length) {
        resultransition();
    } else {
        displayMathQuestion(questionNumber);
    }
}

function resultransition() {
    startscreen.classList.add("hide");
    selectScreen.classList.add("hide");
    questionscreen.classList.add("hide");
    quizresults.classList.remove("hide");
    wins.innerText = winCount;
    losses.innerText = lossCount;
}

//History Section

function historyquiz() {
    startscreen.classList.add("hide");
    selectScreen.classList.add("hide");
    questionscreen.classList.remove("hide");
    quizresults.classList.add("hide");
    questionNumber = 0;
    winCount = 0;
    lossCount = 0;

    setHistoryQuestion();
}
function setHistoryQuestion() {
    displayHistoryQuestion(questionNumber);
}
function displayHistoryQuestion(x){
    question.innerText = questionHistory[x];
    but1.innerText = choicesHistory[x][0];
    but2.innerText = choicesHistory[x][1];
    but3.innerText = choicesHistory[x][2];
    but4.innerText = choicesHistory[x][3];
}
function nextHistoryQuestion(){
    questionNumber++;
    if (questionNumber >= questionHistory.length) {
        resultransition();
    } else {
        displayHistoryQuestion(questionNumber);
    }
}

// Science Part
function sciencequiz() {
    startscreen.classList.add("hide");
    selectScreen.classList.add("hide");
    questionscreen.classList.remove("hide");
    quizresults.classList.add("hide");
    questionNumber = 0;
    winCount = 0;
    lossCount = 0;

    setScienceQuestion();
}
function setScienceQuestion() {
    displayScienceQuestion(questionNumber);
}
function displayScienceQuestion(x){
    question.innerText = questionScience[x];
    but1.innerText = choicesScience[x][0];
    but2.innerText = choicesScience[x][1];
    but3.innerText = choicesScience[x][2];
    but4.innerText = choicesScience[x][3];
}
function nextScienceQuestion(){
    questionNumber++;
    if (questionNumber >= questionScience.length) {
        resultransition();
    } else {
        displayScienceQuestion(questionNumber);
    }
}

function genretransition(){
    startscreen.classList.add("hide");
    selectScreen.classList.remove("hide");
    questionscreen.classList.add("hide");
    quizresults.classList.add("hide");
}
function questransition() {
    startscreen.classList.add("hide");
    selectScreen.classList.add("hide");
    questionscreen.classList.remove("hide");
    quizresults.classList.add("hide");
}

//Hide Start Screen, Selection Screen, Question Screen, Quiz-Results
startbutton.addEventListener("click",genretransition);
mathbutton.addEventListener("click",  mathquiz);
historybutton.addEventListener("click", historyquiz);
sciencebutton.addEventListener("click", sciencequiz);

but1.addEventListener("click", function(){
    if (choicesMath[questionNumber][0] == answerMath[questionNumber]){
        rightWrong.innerText = "Correct!";
        winCount++;
    } else if (choicesMath[questionNumber][0] !== answerMath[questionNumber]){
        rightWrong.innerText = "Incorrect...";
        lossCount++;
    }
    nextMathQuestion();
});
but2.addEventListener("click", function(){
    if (choicesMath[questionNumber][1] == answerMath[questionNumber]){
        rightWrong.innerText = "Correct!";
        winCount++;
    } else if (choicesMath[questionNumber][1] !== answerMath[questionNumber]){
        rightWrong.innerText = "Incorrect...";
        lossCount++;
    }
    nextMathQuestion();
});
but3.addEventListener("click", function(){
    if (choicesMath[questionNumber][2] == answerMath[questionNumber]){
        rightWrong.innerText = "Correct!";
        winCount++;
    } else if (choicesMath[questionNumber][2] !== answerMath[questionNumber]){
        rightWrong.innerText = "Incorrect...";
        lossCount++;
    }
    nextMathQuestion();
});
but4.addEventListener("click", function(){
    if (choicesMath[questionNumber][3] == answerMath[questionNumber]){
        rightWrong.innerText = "Correct!";
        winCount++;
    } else if (choicesMath[questionNumber][3] !== answerMath[questionNumber]){
        rightWrong.innerText = "Incorrect...";
        lossCount++;
    }
    nextMathQuestion();
});

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '51de4ff89emsh832450e987c5f19p1b38e8jsnec37dd644ea6',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
};

fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

fetch('https://en.wikipedia.org/w/api.php')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
