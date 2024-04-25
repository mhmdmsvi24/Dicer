import "./styles/style.css";
import "./styles/utils.css";
import "./styles/var.css";

// import choaticNight from "./assets/images/choatic-night-moon.jpg";
import * as Player from "./scripts/entities/players";
import { randNum } from "./scripts/utilities/utils";
import * as Score from "./scripts/components/score";
import { roll } from "./scripts/components/dice";

// Assest
// const bodyWrapper = document.getElementById("body-wrapper");
// bodyWrapper.style.backgroundImage = `url(${choaticNight})`;
// bodyWrapper.classList.add("bg-img");

Player.switchPlayers(Player.players);

// Roll
const rollBtn = document.getElementById("btn-roll");
rollBtn.addEventListener("click", () => roll(randNum));

// Hold functionality
const holdBtn = document.getElementById("btn-hold");
holdBtn.addEventListener("click", () =>
  Score.holdScore(Score.currentLiveScore)
);

redPlayer.scoreLink.textContent = Player.redPlayer.score;
bluePlayer.scoreLink.textContent = Player.bluePlayer.score;
