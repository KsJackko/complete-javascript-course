'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
// Clicking the roll dice button
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);

  // 2. Display dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;
  // 3. Check for rolled 1: if true, switch to next player
  if (diceNumber === 1 && player0.classList.contains('player--active')) {
    switchPlayer();
    currentScore0.textContent = 0;
  } else if (diceNumber === 1 && player1.classList.contains('player--active')) {
    switchPlayer();
    currentScore1.textContent = 0;
  }
  // 4. Add dice to the score
  else if (player0.classList.contains('player--active')) {
    currentScore0.textContent = Number(currentScore0.textContent) + diceNumber;
  } else if (player1.classList.contains('player--active')) {
    currentScore1.textContent = Number(currentScore1.textContent) + diceNumber;
  }
});

// Clicking the hold button
btnHold.addEventListener('click', function () {
  // Add current score to total score
  if (player0.classList.contains('player--active')) {
    score0El.textContent =
      Number(score0El.textContent) + Number(currentScore0.textContent);
    currentScore0.textContent = 0;
  } else if (player1.classList.contains('player--active')) {
    score1El.textContent =
      Number(score1El.textContent) + Number(currentScore1.textContent);
    currentScore1.textContent = 0;
  }

  // Check winner
  if (Number(score0El.textContent) >= 100) {
    player0.classList.add('player--winner');
    player0.classList.remove('player--active');
  } else if (Number(score1El.textContent) >= 100) {
    player1.classList.add('player--winner');
    player1.classList.remove('player--active');
  } else {
    switchPlayer();
  }
});
