// Game Logic (Roll, Hold, Scores)

// Players
const redPlayer = {
  name: "red",
  pos: "left",
  score: 0
}

const bluePlayer = {
  name: "blue",
  pos: "right",
  score: 0
}

// Roll
const rollBtn = document.getElementById("btn-roll");
rollBtn.addEventListener("click", () => roll(randNum))

function roll(randNum) {
 clearDice();
 const diceToShow = document.getElementById(`dice-${randNum()}`);
 diceToShow.classList.remove("d-none");
}

function clearDice() {
  for (let i = 1; i <= 6; i += 1) {
    document.getElementById(`dice-${i}`).classList.add("d-none");
  }
}

const randNum = () => Math.trunc(Math.random() * 6) + 1;