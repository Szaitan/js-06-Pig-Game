'use strict';
// Player 0 Data
const sectionPlayer0 = document.querySelector('.player--0');
const scoreElPlayer0 = document.getElementById('score--0');
const currentscoreElPlayer0 = document.getElementById('score--0');

// Player 1 Data
const sectionPlayer1 = document.querySelector('.player--1');
const scoreElPlayer1 = document.getElementById('score--1');
const currentscoreElPlayer1 = document.getElementById('score--1');

// General Data
let diceImage = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

// Functions
function init() {
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  diceImage.classList.add('hidden');
}

function showDice() {
  diceImage.classList.remove('hidden');
}

init();
let activePlayer = 0;
let totalScore = [0, 0];
let playersCurrentScore = [0, 0];
let play = true;

function rollDice() {
  if (play) {
    if (diceImage.classList.contains('hidden')) showDice();
    let rollValue = Math.trunc(Math.random() * 6 + 1);
    diceImage.src = `dice-${rollValue}.png`;
    if (rollValue !== 1) {
      playersCurrentScore[activePlayer] += rollValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        playersCurrentScore[activePlayer];
    } else {
      playersCurrentScore[activePlayer] = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        playersCurrentScore[activePlayer];
      activePlayer = activePlayer === 0 ? 1 : 0;
      sectionPlayer0.classList.toggle('player--active');
      sectionPlayer1.classList.toggle('player--active');
    }
  }
}

function holdScore() {
  if (play) {
    totalScore[activePlayer] += playersCurrentScore[activePlayer];
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    if (totalScore[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--winner');
      play = false;
    } else {
      sectionPlayer0.classList.toggle('player--active');
      sectionPlayer1.classList.toggle('player--active');
      activePlayer = activePlayer === 0 ? 1 : 0;
    }
  }
}

function newGame() {
  activePlayer = 0;
  totalScore = [0, 0];
  scoreElPlayer0.textContent = 0;
  scoreElPlayer1.textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  init();
}

btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNewGame.addEventListener('click', newGame);
