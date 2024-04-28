import * as Player from "../entities/players";

// clear the liveScore (currentLiveScore = 0)
function clearLiveScore() {
  currentLiveScore = 0;
  liveScore.textContent = currentLiveScore;
  Player.switchPlayers(Player.players);
}

// Live Score
const liveScore = document.getElementById("live-score");
let currentLiveScore = 0;
liveScore.textContent = currentLiveScore;

function showLive(score) {
  currentLiveScore += score;
  liveScore.textContent = currentLiveScore;
}

function holdScore(score) {
  const currentPlayer =
    Player.redPlayer.turn !== true ? Player.redPlayer : Player.bluePlayer;
  currentPlayer.score += score;
  currentPlayer.scoreLink.textContent = currentPlayer.score;
  checkRound(currentPlayer);

  clearLiveScore();
}

function checkRound(currentPlayer) {
  const playerScore = currentPlayer.score;
  if (playerScore >= 20) {
    currentPlayer.roundsWon += 1;
    ResetScore(Player.players);
    addRoundsUI(currentPlayer);
  }
}

function ResetScore(players) {
  players.map((player) => {
    player.score = 0;
    player.scoreLink.textContent = 0;
  })
}

function addRoundsUI(currentPlayer) {
  const RoundCircle = document.createElement("div");
  RoundCircle.classList.add("round-bar", "border-round");
  currentPlayer.roundLink.append(RoundCircle);
}

export { clearLiveScore, showLive, holdScore, currentLiveScore };
