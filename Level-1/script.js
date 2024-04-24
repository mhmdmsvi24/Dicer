// Game Logic (Roll, Hold, Scores)

// Players
const redPlayer = {
  name: "red",
  pos: "left",
  score: 0,
};

const bluePlayer = {
  name: "blue",
  pos: "right",
  score: 0,
};

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
}

const randNum = () => Math.trunc(Math.random() * 6) + 1;

// Live Score
const liveScore = document.getElementById("live-score");
let currentLiveScore = 0;

liveScore.textContent = currentLiveScore;
function showLive(score) {
  currentLiveScore += score;
  liveScore.textContent = currentLiveScore;
}
