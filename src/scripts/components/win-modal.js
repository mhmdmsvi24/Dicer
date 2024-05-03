import { resetRound, resetScore } from "./score";

const winModalWrapper = document.getElementById("win-modal");
const winModalCover = document.getElementById("win-modal-cvr");
const windModalBtn = document.getElementById("win-modal-btn");

function hideWinModal() {
  winModalWrapper.classList.add("d-none");
  resetRound();
  resetScore();
}

function showWinModal() {
  winModalWrapper.classList.remove("d-none");
}

windModalBtn.addEventListener("click", hideWinModal);
winModalCover.addEventListener("click", hideWinModal);

export {
  showWinModal,
}