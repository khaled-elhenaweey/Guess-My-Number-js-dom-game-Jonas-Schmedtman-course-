'use strict';
// control all element game :
const bodyBackground = document.querySelector('body');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
// guess input
const guessNumber = document.querySelector('.guess');
// the random hidden number
let hiddenNumber = document.querySelector('.number');
// score
let scoreNumber = document.querySelector('.score');
const scoreMessage = document.querySelector('.message');
const scoreHigh = document.querySelector('.highscore');
// the random value function
const hiddenValue = function () {
  hiddenNumber.value = Math.trunc(Math.random() * 20 + 1);
};
// check btn event
checkBtn.addEventListener('click', function () {
  let hiddenValue = hiddenNumber.value;
  let guessValue = guessNumber.value;
  // check the value
  if (
    guessValue > hiddenValue &&
    guessValue < 20 &&
    Number(guessValue) < Number(hiddenValue + 3)
  ) {
    scoreMessage.textContent = '📈 high number but you are close';
    scoreNumber.textContent--;
  } else if (guessValue > hiddenValue && guessValue < 20) {
    scoreMessage.textContent = '📈 Too high!';
    scoreNumber.textContent--;
  } else if (
    guessValue < hiddenValue &&
    guessValue > 1 &&
    Number(guessValue) > Number(hiddenValue - 3)
  ) {
    scoreMessage.textContent = '📉 low number but you are close';
    scoreNumber.textContent--;
  } else if (guessValue < hiddenValue && guessValue > 1) {
    scoreMessage.textContent = '📉 Too low!';
    scoreNumber.textContent--;
  } else if (guessValue > 20 || guessValue < 1) {
    scoreMessage.textContent = '⛔️ You Are Out Of The Range [ 1 : 20 ]';
    scoreNumber.textContent--;
  } else if (Number(guessValue) === Number(hiddenValue)) {
    scoreMessage.textContent = '🎉 Correct Number!';
    bodyBackground.style.backgroundColor = '#60b347';
    hiddenNumber.style.width = '30rem';
    hiddenNumber.textContent = hiddenValue;
    scoreHigh.textContent = scoreHigh.textContent;
    if (scoreNumber.textContent > scoreHigh.textContent) {
      scoreHigh.textContent = scoreNumber.textContent;
    }
  }
  // disabled the check btn
  if (Number(scoreNumber.textContent) === 0) {
    checkBtn.disabled = true;
    checkBtn.style.backgroundColor = 'rgb(154 78 75)';
    scoreMessage.textContent = '⛔️ Try Again';
    hiddenNumber.textContent = hiddenValue;
    bodyBackground.style.backgroundColor = 'rgb(192, 90, 90)';
  }
  // console.log(hiddenValue);
});
// try again btn event
againBtn.addEventListener('click', function () {
  // reset the necessary values
  scoreMessage.textContent = 'Start guessing...';
  scoreNumber.textContent = 20;
  hiddenNumber.textContent = '?';
  guessNumber.value = '';
  hiddenNumber.style.width = '15rem';
  bodyBackground.style.backgroundColor = '#222';
  checkBtn.disabled = false;
  checkBtn.style.backgroundColor = ' #eee';
  // call the random value function
  hiddenValue();
});
// call the random value function
hiddenValue();
