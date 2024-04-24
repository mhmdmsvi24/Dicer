// utils
import { randNum } from "../utilities/utils";

// entities (players, board, game envirnoment)
import { redPlayer, bluePlayer } from "../entities/entity";

const players = [redPlayer, bluePlayer];
switchPlayers(players);

// Roll
const rollBtn = document.getElementById("btn-roll");
rollBtn.addEventListener("click", () => roll(randNum));

function roll(randNum) {
  const score = randNum();
  clearDice();
  const diceToShow = document.getElementById(`dice-${score}`);
  diceToShow.classList.remove("d-none");

  // if dice 1 occurence happend clearLiveScore, else liveScore += score
  score !== 1 ? showLive(score) : clearLiveScore();
}

// clear the dice (d-none)
function clearDice() {
  for (let i = 1; i <= 6; i += 1) {
    document.getElementById(`dice-${i}`).classList.add("d-none");
  }
}

// clear the liveScore (currentLiveScore = 0)
function clearLiveScore() {
  currentLiveScore = 0;
  liveScore.textContent = currentLiveScore;
  switchPlayers(players);
}

// Live Score
const liveScore = document.getElementById("live-score");
let currentLiveScore = 0;
liveScore.textContent = currentLiveScore;

function showLive(score) {
  currentLiveScore += score;
  liveScore.textContent = currentLiveScore;
}


// Current Player (player turns)
function switchPlayers(players) {
  players.map((player) => {
    if (player.turn) {
      player.id.classList.remove("opacity-50");
      player.turn = false;
    } else {
      player.id.classList.add("opacity-50");
      player.turn = true;
    }
  })
}

// Hold functionality
const holdBtn = document.getElementById("btn-hold");
holdBtn.addEventListener("click", () => holdScore(currentLiveScore));

redPlayer.scoreLink.textContent = redPlayer.score;
bluePlayer.scoreLink.textContent = bluePlayer.score;

function holdScore(score) {
  const currentPlayer = redPlayer.turn !== true ? redPlayer : bluePlayer;
  currentPlayer.score += score;
  currentPlayer.scoreLink.textContent = currentPlayer.score;
  clearLiveScore();
}