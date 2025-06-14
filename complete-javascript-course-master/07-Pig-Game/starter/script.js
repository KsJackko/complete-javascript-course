'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Clicking the roll dice button
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);

  // 2. Display dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;
  // 3. Check for rolled 1: if true, switch to next player
});
