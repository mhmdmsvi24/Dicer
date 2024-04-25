import { showLive, clearLiveScore } from "./score";

const dices = {
  1: document.getElementById("dice-1"),
  2: document.getElementById("dice-2"),
  3: document.getElementById("dice-3"),
  4: document.getElementById("dice-4"),
  5: document.getElementById("dice-5"),
  6: document.getElementById("dice-6"),
};

function roll(randNum) {
  const score = randNum();
  clearDice();
  const diceToShow = dices[score];
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

export { roll, clearDice };
