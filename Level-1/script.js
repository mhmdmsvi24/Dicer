// Players
const leftPlayer = {
  id: document.getElementById("left-player"),
  roundScore: 0,
  finalScore: 0,
  active: true,
};

const rightPlayer = {
  id: document.getElementById("right-player"),
  roundScore: 0,
  finalScore: 0,
  active: false,
};

const players = [leftPlayer, rightPlayer];

// changing active player color
function activePlayer(players) {
  players.map((player) => {
    player.active === false
      ? player.id.classList.add("opacity-50")
      : player.id.classList.remove("opacity-50");
  });

  return players.filter((player) => player.active);
}

// init and selects current player
const currentPlayer = activePlayer(players);

// switches the players turn
function switchPlayer(player) {
  player.map((player) => {
    player.active = player.active === true ? false : true;
  });

  activePlayer(player);
}

const holdBtn = document.getElementById("btn-hold");
holdBtn.addEventListener("click", () => switchPlayer(players));

// Roll functionality

// random number (1 - 6)
const randNum = () => Math.trunc(Math.random() * 6) + 1;

const rollBtn = document.getElementById("btn-roll");
rollBtn.addEventListener("click", () => dice(randNum()));

const d1 = document.getElementById("dice-1");
const d2 = document.getElementById("dice-2");
const d3 = document.getElementById("dice-3");
const d4 = document.getElementById("dice-4");
const d5 = document.getElementById("dice-5");
const d6 = document.getElementById("dice-6");

const dices = [d1, d2, d3, d4, d5, d6];

function dice(currentRand) {
  const randDice = document.getElementById(`dice-${currentRand}`);

  dices.forEach((dice) => {
    dice === randDice
      ? dice.classList.remove("d-none")
      : dice.classList.add("d-none");
  });

  if (currentRand === 1) {
    switchPlayer(players)
    updateLiveScore(0, true);
  } else {
    updateLiveScore(currentRand);
  }
}

const liveScore = document.getElementById("live-score");
let score = 0;
liveScore.textContent = score;

function updateLiveScore(value, turn = false) {
  if (turn) {
    score = 0;
    liveScore.textContent = score;
    return;
  }
  score += value;
  liveScore.textContent = score;
}