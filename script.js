// DEPENDCIES =========================================
var question = document.getElementById("question-line");
var answer = document.getElementsByClassName("option-button-container");
var checkcorrect = document.getElementsByClassName("checker");
var time = document.getElementById("Time-Left");
var highscore = document.getElementById("view-highscore");

console.log(checkcorrect);

// DATA ==============================================
// question sets

// FUNCTION ==========================================

// USER INTERACTIONS ==================================
//* when user click start,
//-- one question will shown
//-- and timer will start to countdown
//-- with 4 choices
//* if select the correct one,
// --- go to next question
//* if wrong,
// --- subtract time to time-left
// ---go to next question
//* game is over/finish
//  -- when time is over
//  -- or answer all question
//* shown score
//  -- with a name input box

// INITIALIZATION ======================================
// start quiz
