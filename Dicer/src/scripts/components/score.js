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
  clearLiveScore();
}

export { clearLiveScore, showLive, holdScore, currentLiveScore };
