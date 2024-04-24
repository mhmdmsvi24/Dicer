// Players
const redPlayer = {
  name: "red",
  pos: "left",
  score: 0,
  scoreLink: document.getElementById("left-score"),
  turn: true,
  id: document.getElementById("left-player")
};

const bluePlayer = {
  name: "blue",
  pos: "right",
  score: 0,
  scoreLink: document.getElementById("right-score"),
  turn: false,
  id: document.getElementById("right-player")
};


export {
  redPlayer,
  bluePlayer
}