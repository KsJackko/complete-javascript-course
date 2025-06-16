'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

let playing, activePlayer, currentScore, scores;

const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  currentScore = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

// Starting conditions
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// Clicking the roll dice button
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);

    // 2. Display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;
    // 3. Check for rolled 1: if true, switch to next player
    // if (diceNumber === 1 && player0.classList.contains('player--active')) {
    //   switchPlayer();
    //   currentScore0El.textContent = 0;
    // } else if (diceNumber === 1 && player1.classList.contains('player--active')) {
    //   switchPlayer();
    //   currentScore1El.textContent = 0;
    // }
    // // 4. Add dice to the score
    // else if (player0.classList.contains('player--active')) {
    //   currentScore0El.textContent = Number(currentScore0El.textContent) + diceNumber;
    // } else if (player1.classList.contains('player--active')) {
    //   currentScore1El.textContent = Number(currentScore1El.textContent) + diceNumber;
    // }
    if (diceNumber != 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Clicking the hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // if (player0El.classList.contains('player--active')) {
    //   score0El.textContent =
    //     Number(score0El.textContent) + Number(currentScore0El.textContent);
    //   currentScore0El.textContent = 0;
    // } else if (player1El.classList.contains('player--active')) {
    //   score1El.textContent =
    //     Number(score1El.textContent) + Number(currentScore1El.textContent);
    //   currentScore1El.textContent = 0;
    // }

    //Check winner
    // if (Number(score0El.textContent) >= 100) {
    //   player0El.classList.add('player--winner');
    //   player0El.classList.remove('player--active');
    // } else if (Number(score1El.textContent) >= 100) {
    //   player1El.classList.add('player--winner');
    //   player1El.classList.remove('player--active');
    // } else {
    //   switchPlayer();
    // }

    //Check winner
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      playing = false;
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

//User resets games
btnNew.addEventListener('click', init);
