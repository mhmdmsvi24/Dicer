import "./styles/style.css";
import "./styles/utils.css";
import "./styles/var.css";

import {showModal, hideModal} from "./scripts/components/info";
import * as Player from "./scripts/entities/players";
import { randNum } from "./scripts/utilities/utils";
import * as Score from "./scripts/components/score";
import { roll } from "./scripts/components/dice";

Player.switchPlayers(Player.players);

// Roll
const rollBtn = document.getElementById("btn-roll");
rollBtn.addEventListener("click", () => roll(randNum));

// Hold functionality
const holdBtn = document.getElementById("btn-hold");
holdBtn.addEventListener("click", () =>
  Score.holdScore(Score.currentLiveScore)
);

Player.redPlayer.scoreLink.textContent = Player.redPlayer.score;
Player.bluePlayer.scoreLink.textContent = Player.bluePlayer.score;

const infoIcon = document.querySelector(".info-icon");
const closeBtn = document.querySelector(".close-modal");

infoIcon.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);