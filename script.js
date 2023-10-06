'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let scoreEl = document.querySelector('.score');
let highScoreEl = document.querySelector('.highscore');
let body = document.querySelector('body');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No matching!';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number!';
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }

    number.style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Too High!' : 'Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  scoreEl.textContent = score;
  document.querySelector('.guess').value = '';
});
