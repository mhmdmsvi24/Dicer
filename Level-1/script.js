// Players
const leftPlayer = {
  id: document.getElementById("left-player"),
  roundScore: 0,
  finalScore: 0,
  active: true,
}

const rightPlayer = {
  id: document.getElementById("right-player"),
  roundScore: 0,
  finalScore: 0,
  active: false,
}

const players = [leftPlayer, rightPlayer]

// changing active player color
function activePlayer(players) {
  players.map((player) => {
    player.active === false 
    ? player.id.classList.add("opacity-50")
    : player.id.classList.remove("opacity-50");
  })

  return players.filter((player) => player.active);
}

// switches the players turn
function switchPlayer(player) {
  player.map((player) => {
    player.active = player.active === true ? false : true;
  });

  activePlayer(player);
}

const holdBtn = document.getElementById("btn-hold");
holdBtn.addEventListener("click", () => switchPlayer(players));

