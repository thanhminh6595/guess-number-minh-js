'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//Tao ham display Message
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

//Tao ham secretNumber
const secretNumberFunction = function (secretNumber) {
  document.querySelector(`.number`).textContent = secretNumber;
};

//Tao ham letGuess
const scoreFunction = function (score) {
  document.querySelector(`.score`).textContent = score;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  // console.log(guess, typeof guess);

  if (!guess) {
    //Neu gia tri cua guess la 0 hoac khong dien thi thuc hien cau lenh
    // document.querySelector(`.message`).textContent = `No number `;
    displayMessage(`No Number`);

    //when player winer
  } else if (guess === secretNumber) {
    // document.querySelector(`.message`).textContent = `Correct number`;
    displayMessage(`Correct Number!`);
    // document.querySelector(`.highscore`).textContent = score;
    // document.querySelector(`.number`).textContent = secretNumber;
    secretNumberFunction(secretNumber);
    document.querySelector(`body`).style.backgroundColor = `#74b816`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess > secretNumber + 3 && guess < 21 && guess > 0) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent = `Too high `;
      displayMessage(`Too high`);
      score--;
      // document.querySelector(`.score`).textContent = score;
      scoreFunction(score);
      // document.querySelector(`.highscore`).textContent = score;
    } else {
      // score--;
      // document.querySelector(`.message`).textContent = `You lost `;

      displayMessage('You lost');
      // document.querySelector(`.score`).textContent = 0;
      scoreFunction(0);
    }
  } else if (guess > secretNumber && guess < 21 && guess > 0) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent = `A Litter bit high `;
      displayMessage(`A Litter bit high `);
      score--;
      // document.querySelector(`.score`).textContent = score;
      scoreFunction(score);
      // document.querySelector(`.highscore`).textContent = score;
    } else {
      // score--;
      // document.querySelector(`.message`).textContent = `You lost`;
      displayMessage('You lost');
      document.querySelector(`.score`).textContent = 0;
    }
  } else if (guess < secretNumber - 3 && guess < 21 && guess > 0) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent = `Too low `;
      displayMessage(`Too low`);
      score--;
      // document.querySelector(`.score`).textContent = score;
      scoreFunction(score);
      // document.querySelector(`.highscore`).textContent = score;
    } else {
      // score--;
      // document.querySelector(`.message`).textContent = `You lost`;
      displayMessage('You lost');
      document.querySelector(`.score`).textContent = 0;
    }
  } else if (guess < secretNumber && guess < 21 && guess > 0) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent = `A Litter bit low `;
      displayMessage('A litte bit low');
      score--;
      // document.querySelector(`.score`).textContent = score;
      scoreFunction(score);
      // document.querySelector(`.highscore`).textContent = score;
    } else {
      // score--;
      // document.querySelector(`.message`).textContent = `You lost`;
      displayMessage('You lost');
      // document.querySelector(`.score`).textContent = 0;
      scoreFunction(0);
    }
  } else if (guess > 21 || guess < 0) {
    // document.querySelector(`.message`).textContent = `between 1 and 20 `;
    displayMessage('between 1 and 20');

    // document.querySelector(`.score`).textContent = score;
    scoreFunction(score);
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.score`).textContent = score;
  // document.querySelector(`.number`).textContent = `?`;
  secretNumberFunction(`?`);
  document.querySelector(`.guess`).value = ``;
  // document.querySelector(`.message`).textContent = `Start guessing...`;
  displayMessage('Start guessing...');
});
