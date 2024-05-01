const infoIcon = document.querySelector(".info-icon");
const modal = document.querySelector(".info-modal");

function showModal() {
  infoIcon.classList.remove("animation-blink");
  modal.classList.toggle("d-none");
}

function hideModal() {
  modal.classList.add("d-none");
}

export{
  showModal,
  hideModal
}