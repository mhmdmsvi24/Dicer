// utils
import { randNum } from "./scripts/utilities/utils";

// entities (players, board, game envirnoment)
import * as Player from "./scripts/entities/players";

// Score
import * as Score from "./scripts/components/score";

// dice component
import { roll } from "./scripts/components/dice";

// CSS
import "./styles/style.css";
import "./styles/utils.css";
import "./styles/var.css";

// Assest
import choaticNight from "./assets/images/choatic-night-moon.jpg";
const bodyWrapper = document.getElementById("body-wrapper");
bodyWrapper.style.backgroundImage = `url(${choaticNight})`;
bodyWrapper.classList.add("bg-img");

Player.switchPlayers(Player.players);

// Roll
const rollBtn = document.getElementById("btn-roll");
rollBtn.addEventListener("click", () => roll(randNum));

// Hold functionality
const holdBtn = document.getElementById("btn-hold");
holdBtn.addEventListener("click", () => Score.holdScore(Score.currentLiveScore));

redPlayer.scoreLink.textContent = Player.redPlayer.score;
bluePlayer.scoreLink.textContent = Player.bluePlayer.score;
