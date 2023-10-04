'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😎 Correct Number!';

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 99;

console.log((document.querySelector('.guess').value = 34));
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1); //5

let score = 20; //18

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  // 1

  const guess = Number(document.querySelector('.guess').value); //2
  console.log(guess); //3

  // when there is no input  //4
  if (!guess) {
    document.querySelector('.message').textContent = '❗❗ NO NUMBER ❗❗';

    // when player wins
  } else if (guess === secretNumber) {
    //6
    document.querySelector('.message').textContent = '😎 CORRECT NUMBER 😎'; //7
    document.querySelector('body').style.backgroundColor = '#34e403';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is low
  } else if (guess === secretNumber - 1 || guess === secretNumber - 2) {
    //8
    document.querySelector('.message').textContent = 'low 😑'; //9
    document.querySelector('body').style.backgroundColor = '#ff0000';
    score = score - 1; //19
  } else if (guess <= secretNumber - 3) {
    //10
    document.querySelector('.message').textContent = 'Too Low 😑😫😑'; //11
    document.querySelector('body').style.backgroundColor = '#ff0000';
    score = score - 2; //20

    // when guess is High
  } else if (guess >= secretNumber + 3) {
    //12
    document.querySelector('.message').textContent = 'Too high 😑😫😑'; //13
    document.querySelector('body').style.backgroundColor = '#ff0000';
    score = score - 2; //21
  } else if (guess === secretNumber + 1 || guess === secretNumber + 2) {
    //14
    document.querySelector('.message').textContent = 'high 😑'; //15
    document.querySelector('body').style.backgroundColor = '#ff0000';
    score = score - 1; //22
  }

  // when score becomes ZERO
  if (score <= 0) {
    //23
    document.querySelector('.message').textContent = 'Game over'; //24
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
