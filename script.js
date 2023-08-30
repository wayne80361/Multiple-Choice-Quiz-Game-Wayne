// DEPENDCIES =========================================
var question = document.getElementById("question-line");
var answer = document.getElementsByClassName("option-button-container");
var checkcorrect = document.getElementsByClassName("checker");
var timerEl = document.getElementById("Time-Left");
var highscore = document.getElementById("view-highscore");
var startButton = document.getElementById("start-btn");
var startingQuestion = 0;
var timeLeft = 60;

// DATA ==============================================
// question sets

var questionSet = [
  {
    question: "what is 1+1 equal to?",
    choices: ["one", "two", "too", "tree"],
    correctAnswer: 1,
  },
  {
    question: "what is 2+3 equal to?",
    choices: ["one", "two", "too", "five"],
    correctAnswer: 3,
  },
  {
    question: "what is 3-2 equal to?",
    choices: ["one", "two", "too", "five"],
    correctAnswer: 0,
  },
];

// FUNCTION ==========================================
//* when user click start,
startButton.addEventListener("click", start);

function start() {
  startTimer();
  showQuestion();
}

//-- and timer will start to countdown
function startTimer() {
  updateTimer();
  var timerInterval = setInterval(function () {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      quizIsOver();
    }
  }, 1000);
  startButton.style.display = "none";
}

function updateTimer() {
  timerEl.textContent = timeLeft + " seconds";
}

//-- one question will shown
function showQuestion() {}

// USER INTERACTIONS ==================================

//-- with 4 choices

//* if select the correct one,

// --- go to next question
//* if wrong,
// --- subtract time to time-left
// ---go to next question
function quizIsOver() {}
//* game is over/finish
//  -- when time is over
//  -- or answer all question
//* shown score
//  -- with a name input box

// INITIALIZATION ======================================
// start quiz
