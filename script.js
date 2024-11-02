'use strict';
// Player 0 Data
const sectionPlayer0 = document.querySelector('.player--0');
let scorePlayer0 = 0;
let currentScorePlayer0 = document.querySelector('#current--0');

// Player 1 Data
const sectionPlayer1 = document.querySelector('.player--1');
let scorePlayer1 = 0;
let currentScorePlayer1 = document.querySelector('#current--1');

// General Data
let diceImage = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

// // Functions
// function rollDice() {
//   if (diceImage.classList.contains('hidden')) showDice();
//   const value = Math.floor(Math.random() * 6 + 1);
//   diceImage.src = `dice-${value}.png`;
//   if (sectionPlayer0.classList.contains('player--active')) {
//     if (value === 1) {
//       currentScorePlayer0.textContent = value;
//       scorePlayer0 = 0;
//       document.querySelector('#score--0').textContent = scorePlayer0;
//       sectionPlayer0.classList.remove('player--active');
//       sectionPlayer1.classList.add('player--active');
//     } else {
//       currentScorePlayer0.textContent = value;
//       scorePlayer0 += value;
//       document.querySelector('#score--0').textContent = scorePlayer0;
//     }
//   } else {
//     if (value === 1) {
//       currentScorePlayer1.textContent = value;
//       scorePlayer1 = 0;
//       document.querySelector('#score--1').textContent = scorePlayer1;
//       sectionPlayer1.classList.remove('player--active');
//       sectionPlayer0.classList.add('player--active');
//     } else {
//       currentScorePlayer1.textContent = value;
//       scorePlayer1 += value;
//       document.querySelector('#score--1').textContent = scorePlayer1;
//     }
//   }
// }

function init() {
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  diceImage.classList.add('hidden');
}

function showDice() {
  diceImage.classList.remove('hidden');
}

// function holdScore() {
//   if (sectionPlayer0.classList.contains('player--active')) {
//     sectionPlayer0.classList.remove('player--active');
//     sectionPlayer1.classList.add('player--active');
//   } else {
//     sectionPlayer1.classList.remove('player--active');
//     sectionPlayer0.classList.add('player--active');
//   }
// }

// function newGame() {
//   scorePlayer0 = 0;
//   scorePlayer1 = 0;
//   currentScorePlayer0.textContent = 0;
//   currentScorePlayer1.textContent = 0;
//   document.querySelector('#score--0').textContent = scorePlayer0;
//   document.querySelector('#score--1').textContent = scorePlayer1;
// }

// // Events
// btnRollDice.addEventListener('click', rollDice);
// btnHold.addEventListener('click', holdScore);
// btnNewGame.addEventListener('click', newGame);

// init();
