// get random number between 1 to 6
const randNum = () => Math.trunc(Math.random() * 6) + 1;

// clear the dice
function clearDice() {
  for (let i = 1; i <= 6; i += 1) {
    document.getElementById(`dice-${i}`).classList.add("d-none");
  }
}

// get the dice based on randNum function and toggle it
function getDice(num) {
  clearDice();
  const dice = document.getElementById(`dice-${num()}`);
  dice.classList.toggle("d-none");
}

// Roll button
const holdBtn = document.getElementById("btn-hold");
const rollBtn = document.getElementById("btn-roll");

rollBtn.addEventListener("click", () => getDice(randNum));


// Players
const leftPlayer = {

}

const rightPlayer = {
  
}