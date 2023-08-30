// DEPENDCIES =========================================
var questionDisplayEl = document.getElementById("question-line");
var choiceEl = document.getElementsByClassName("option-button-container");
var checkcorrect = document.getElementsByClassName("checker");
var timerEl = document.getElementById("Time-Left");
var highscore = document.getElementById("view-highscore");
var startButton = document.getElementById("start-btn");
var option = document.getElementsByClassName("option");
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
function showQuestion() {
  questionDisplayEl.textContent = questionSet[startingQuestion].question;
  //-- with 4 choices
  // choiceEl.innerHTML = "";---------------keep for insurance----------------------
  for (var i = 0; i < 4; i++) {
    option[i].textContent = questionSet[startingQuestion].choices[i];
  }
}

//* if select the correct one,
function checkAnswer() {
  var correctWrong = document.getElementsByClassName("checker");
  if (questionSet[startingQuestion].choice[i] == correctAnswer[i]) {
    startingQuestion++;
    // --- go to next question
    return showQuestion();
    //* if wrong,
    // --- subtract time to time-left
  } else timeLeft - 10;
  // ---go to next question
  return showQuestion();
}

// USER INTERACTIONS ==================================

function quizIsOver() {}
//* game is over/finish
//  -- when time is over
//  -- or answer all question
//* shown score
//  -- with a name input box

// INITIALIZATION ======================================
// start quiz
