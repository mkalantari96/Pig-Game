"use strict";
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
score0El.textContent = 0;
score1El.textContent = 0;

const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");
currentScore0El.textContent = 0;
currentScore1El.textContent = 0;

const diceEl = document.querySelector(".dice");
diceEl.classList.add("hidden");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const scores = [0, 0];
let activeUser = 0;
let currentScroe = 0;
let playing = true;
btnRoll.addEventListener("click", function () {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${diceNumber}.png`;
    diceEl.classList.remove("hidden");

    if (diceNumber !== 1) {
      currentScroe += diceNumber;
      document.querySelector(`#current--${activeUser}`).textContent =
        currentScroe;
    } else {
      currentScroe = 0;
      document.querySelector(`#current--${activeUser}`).textContent =
        currentScroe;
      document
        .querySelector(`.player--${activeUser}`)
        .classList.remove("player--active");
      activeUser === 0 ? (activeUser = 1) : (activeUser = 0);
      document
        .querySelector(`.player--${activeUser}`)
        .classList.add("player--active");
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activeUser] += currentScroe;
    document.querySelector(`#score--${activeUser}`).textContent =
      scores[activeUser];
    currentScroe = 0;
    document.querySelector(`#current--${activeUser}`).textContent =
      currentScroe;

    if (scores[activeUser] >= 20) {
      document
        .querySelector(`.player--${activeUser}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeUser}`)
        .classList.remove("player--active");
      playing = false;

      diceEl.classList.add("hidden");
    } else {
      document
        .querySelector(`.player--${activeUser}`)
        .classList.remove("player--active");
      activeUser === 0 ? (activeUser = 1) : (activeUser = 0);
      document
        .querySelector(`.player--${activeUser}`)
        .classList.add("player--active");
    }
  }
});

btnNew.addEventListener("click", function () {
  playing = true;
  scores[0] = 0;
  scores[1] = 0;
  document
    .querySelector(`.player--${activeUser}`)
    .classList.remove("player--active");
  document
    .querySelector(`.player--${activeUser}`)
    .classList.remove("player--winner");
  activeUser = 0;
  currentScroe = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  document
    .querySelector(`.player--${activeUser}`)
    .classList.add("player--active");
});
