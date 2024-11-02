'use strict';
// Player 0 Data
const sectionPlayer0 = document.querySelector('.player--0');
const scoreElPlayer0 = document.getElementById('score--0');

// Player 1 Data
const sectionPlayer1 = document.querySelector('.player--1');
const scoreElPlayer1 = document.getElementById('score--1');

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

function rollDice() {
  if (diceImage.classList.contains('hidden')) showDice();
  let rollValue = Math.trunc(Math.random() * 6 + 1);
  diceImage.src = `dice-${rollValue}.png`;
  document.getElementById(`current--${activePlayer}`).textContent = rollValue;
  if (rollValue !== 1) {
    totalScore[activePlayer] += rollValue;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
  } else {
    totalScore[activePlayer] = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    activePlayer = activePlayer === 0 ? 1 : 0;
    sectionPlayer0.classList.toggle('player--active');
    sectionPlayer1.classList.toggle('player--active');
  }
}

function holdScore() {
  sectionPlayer0.classList.toggle('player--active');
  sectionPlayer1.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
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
