var highscores = document.querySelector(".pastscores")
var timerEl = document.querySelector(".timer")
var questions = document.querySelector(".content")
var availableAnswers = document.querySelector(".question-option")
var start = document.querySelector(".startButton")
var buttonOne = document.querySelector("#buttonOne")
var buttonTwo = document.querySelector("#buttonTwo")
var buttonThree = document.querySelector("#buttonThree")
var buttonFour = document.querySelector("#buttonFour")
var buttonFive = document.querySelector("#buttonFive")
var questionBox = document.querySelector(".question-section")

var timer;
var timeCount = 60

var options = [{
    title: "What is the 1st fundamental structure of any webpage?",
    answer1: "css",
    answer2: "javaScript",
    answer3: "jQuery",
    answer4: "html",
    answer5: "bootstrap",
    correct: "html"
},
{
    title: "To fade one color into another, what is the short-hand code?",
    answer1: "color",
    answer2: "background-color",
    answer3: "line-gradient(rgba)",
    answer4: "style.mix",
    answer5: "transition-property: background",
    correct: "line-gradient(rgba)"
},
{
    title: "Which of these is not considered within the Semantic Elements",
    answer1: "div",
    answer2: "article",
    answer3: "footer",
    answer4: "header",
    answer5: "aside",
    correct: "div"
},
{
    title: "Which element is used to link a javascript file to an html file",
    answer1: "link",
    answer2: "style",
    answer3: "script",
    answer4: "head",
    answer5: "meta",
    correct: "script"
},
{
    title: "What is the code command to show input in a webpage's console under inspect?",
    answer1: "console.enter",
    answer2: "console.input",
    answer3: "console.enter",
    answer4: "console.comment",
    answer5: "console.log",
    correct: "console.log"
}]

var i = 0




start.addEventListener("click", function () {
    start.style.display = "none"
    questionBox.style.display = "display"

    startTimer()
    
    
    questionSegment()
});

function questionSegment() {


    if  (i < options.length){
        question.innerHTML = options[i].title;
        buttonOne.innerHTML = options[i].answer1;
        buttonTwo.innerHTML = options[i].answer2;
        buttonThree.innerHTML = options[i].answer3;
        buttonFour.innerHTML = options[i].answer4;
        buttonFive.innerHTML = options[i].answer5;
    } else {
        clearInterval(timer)
        results()
    }

}

function checkAnswer(event) {
    if  (i > options.length){
        clearInterval(timer)
        results()
    }
    if (event.target.innerHTML === options[i].correct){
        i++ 
        questionSegment()
        console.log('correct' + i)
    } else {
        timeCount = timeCount - 10
        i++
        questionSegment()
        console.log('wrong' + i)

    }
}

questionBox.addEventListener('click', checkAnswer)


function startTimer (){

timer = setInterval(function(){
    timeCount--;
    timerEl.textContent = "Time: " + timeCount

    if (timeCount <= 0){
        clearInterval(timer)
        localStorage.setItem("timeCount",JSON.stringify(timeCount))
        results()
    }
    
},1000)
}

var initials;

var score = {
    initials: initials,
    score: timeCount
}

function results(){
     initials = prompt("Enter your initials")
    localStorage.setItem("initials", JSON.stringify(initials))
}

