// Players
const redPlayer = {
  name: "red",
  pos: "left",
  score: 0,
  scoreLink: document.getElementById("left-score"),
  turn: true,
  id: document.getElementById("left-player"),
};

const bluePlayer = {
  name: "blue",
  pos: "right",
  score: 0,
  scoreLink: document.getElementById("right-score"),
  turn: false,
  id: document.getElementById("right-player"),
};

const players = [redPlayer, bluePlayer];

// Current Player (player turns)
function switchPlayers(players) {
  players.map((player) => {
    if (player.turn) {
      player.id.classList.remove("opacity-50");
      player.turn = false;
    } else {
      player.id.classList.add("opacity-50");
      player.turn = true;
    }
  });
}

export { redPlayer, bluePlayer, players, switchPlayers };
