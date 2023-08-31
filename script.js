// DEPENDCIES =========================================
var questionDisplayEl = document.getElementById("question-line");
var choiceEl = document.getElementsByClassName("option-button-container");
// var checkcorrect = document.getElementsByClassName("checker");
var timerEl = document.getElementById("Time-Left");
var highscore = document.getElementById("view-highscore");
var startButton = document.getElementById("start-btn");
var optionButton = document.getElementsByClassName("option");
var startingQuestion = 0;
var timeLeft = 60;

// DATA ==============================================
// question sets

var questionSet = [
  {
    question: "what is 1+1 equal to?",
    choices: ["one", "twwo", "too", "two"],
    correctAnswer: "two",
  },
  {
    question: "what is 2+3 equal to?",
    choices: ["one", "two", "too", "five"],
    correctAnswer: "five",
  },
  {
    question: "what is 3-2 equal to?",
    choices: ["one", "two", "too", "seven"],
    correctAnswer: "one",
  },
];

// FUNCTION ==========================================
//* when user click start,
startButton.addEventListener("click", start);

function start(event) {
  event.preventDefault();
  // showChoice();
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

  var newBtn = document.createElement("button");
  var newQu = document.createTextNode("1st");
  newBtn.appendChild(newQu);

  for (var i = 0; i < 4; i++) {
    newBtn = optionButton[i].textContent =
      questionSet[startingQuestion].choices[i];
  }

  // optionButton;

  // return clickChoice();

  var all4Choice = document.getElementById("option-4-btn");
  all4Choice.addEventListener("click", checkAnswer);
  console.log(all4Choice);

  var all3Choice = document.getElementById("option-3-btn");
  all3Choice.addEventListener("click", checkAnswer);

  var all2Choice = document.getElementById("option-2-btn");
  all2Choice.addEventListener("click", checkAnswer);

  var all1Choice = document.getElementById("option-1-btn");
  all1Choice.addEventListener("click", checkAnswer);
}

// function clickChoice(i) {
//   document
//     .getElementById("option-1-btn")
//     .addEventListener("click", checkAnswer(i));
//   document
//     .getElementById("option-2-btn")
//     .addEventListener("click", checkAnswer(i));
//   document
//     .getElementById("option-3-btn")
//     .addEventListener("click", checkAnswer(i));
//   document
//     .getElementById("option-4-btn")
//     .addEventListener("click", checkAnswer(i));
// }

//* if select the correct one,
console.log(questionSet[0].choices);
console.log(questionSet[0].correctAnswer);
console.log(questionSet[1].choices[3]);
console.log(questionSet[1].correctAnswer);

function checkAnswer(all1Choice, all2Choice, all3Choice, all4Choice) {
  var correctWrong = document.getElementById("checker");

  if (
    questionSet[startingQuestion].choices[
      (all1Choice, all2Choice, all3Choice, all4Choice)
    ] === questionSet[startingQuestion].correctAnswer
  ) {
    correctWrong.textContent = "true";
    startingQuestion++;
    // --- go to next question
    return showQuestion();
    //* if wrong,
    // --- subtract time to time-left
  } else correctWrong.textContent = "false";
  startingQuestion++;
  timeLeft -= 10;
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
function hideButtonsOnLoad() {
  // hide choice buttons on page load
  var query = document.querySelectorAll("div");

  for (var i = 0; i < 4; i++) {
    query[i].setAttribute("style", "display:none");
  }
}
// show choice button after start is clicked

function showBtn() {
  var query = document.querySelectorAll("option-button-container");

  for (var i = 0; i < 4; i++) {
    query[i].setAttribute("style", "display: block");
  }
}
// hideButtonsOnLoad();
