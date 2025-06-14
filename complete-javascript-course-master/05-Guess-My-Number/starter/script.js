'use strict';
//#76 Selecting and Manipulating Elements
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//79. Manipulating CSS Styles
// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// let score = 20;
// let highestScore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   // console.log(typeof document.querySelector('.score').textContent);
//   //when there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = 'No Number!';
//     displayMessage('No Number!');
//     //when scores are run out
//   } else if (score <= 1) {
//     //document.querySelector('.message').textContent = 'You lost the game!';
//     displayMessage('You lost the game!');
//     document.querySelector('.score').textContent = 0;

//     //when player wins
//   } else if (guess === secretNumber) {
//     //document.querySelector('.message').textContent = 'Correct Number!';
//     displayMessage('Correct Number!');
//     document.querySelector('.number').textContent = secretNumber;
//     // Change the background color when win
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (highestScore < score)
//       document.querySelector('.highscore').textContent = score;

//     //when guess is too high
//   } else if (guess !== secretNumber) {
//     guess > secretNumber
//       ? displayMessage('Too high!')
//       : displayMessage('Too low!');
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   score = 20;
//   document.querySelector('.score').textContent = 20;
//   displayMessage('Start guessing...');
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.guess').value = '';
// });
