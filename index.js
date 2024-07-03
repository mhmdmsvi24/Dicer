/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/dice.js":
/*!****************************************!*\
  !*** ./src/scripts/components/dice.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDice: () => (/* binding */ clearDice),
/* harmony export */   roll: () => (/* binding */ roll)
/* harmony export */ });
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score */ "./src/scripts/components/score.js");

var dices = {
  1: document.getElementById("dice-1"),
  2: document.getElementById("dice-2"),
  3: document.getElementById("dice-3"),
  4: document.getElementById("dice-4"),
  5: document.getElementById("dice-5"),
  6: document.getElementById("dice-6")
};
function roll(randNum) {
  var score = randNum();
  clearDice();
  var diceToShow = dices[score];
  diceToShow.classList.remove("d-none");

  // if dice 1 occurence happend clearLiveScore, else liveScore += score
  score !== 1 ? (0,_score__WEBPACK_IMPORTED_MODULE_0__.showLive)(score) : (0,_score__WEBPACK_IMPORTED_MODULE_0__.clearLiveScore)();
}

// clear the dice (d-none)
function clearDice() {
  for (var i = 1; i <= 6; i += 1) {
    document.getElementById("dice-".concat(i)).classList.add("d-none");
  }
}


/***/ }),

/***/ "./src/scripts/components/info.js":
/*!****************************************!*\
  !*** ./src/scripts/components/info.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideModal: () => (/* binding */ hideModal),
/* harmony export */   showModal: () => (/* binding */ showModal)
/* harmony export */ });
var infoIcon = document.querySelector(".info-icon");
var modal = document.querySelector(".info-modal");
function showModal() {
  infoIcon.classList.remove("animation-blink");
  modal.classList.toggle("d-none");
}
function hideModal() {
  modal.classList.add("d-none");
}


/***/ }),

/***/ "./src/scripts/components/score.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/score.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearLiveScore: () => (/* binding */ clearLiveScore),
/* harmony export */   currentLiveScore: () => (/* binding */ currentLiveScore),
/* harmony export */   holdScore: () => (/* binding */ holdScore),
/* harmony export */   resetRound: () => (/* binding */ resetRound),
/* harmony export */   resetScore: () => (/* binding */ resetScore),
/* harmony export */   showLive: () => (/* binding */ showLive)
/* harmony export */ });
/* harmony import */ var _entities_players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/players */ "./src/scripts/entities/players.js");
/* harmony import */ var _win_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./win-modal */ "./src/scripts/components/win-modal.js");



// clear the liveScore (currentLiveScore = 0)
function clearLiveScore() {
  currentLiveScore = 0;
  liveScore.textContent = currentLiveScore;
  _entities_players__WEBPACK_IMPORTED_MODULE_0__.switchPlayers(_entities_players__WEBPACK_IMPORTED_MODULE_0__.players);
}

// Live Score
var liveScore = document.getElementById("live-score");
var currentLiveScore = 0;
liveScore.textContent = currentLiveScore;
function showLive(score) {
  currentLiveScore += score;
  liveScore.textContent = currentLiveScore;
}
function holdScore(score) {
  var currentPlayer = _entities_players__WEBPACK_IMPORTED_MODULE_0__.redPlayer.turn !== true ? _entities_players__WEBPACK_IMPORTED_MODULE_0__.redPlayer : _entities_players__WEBPACK_IMPORTED_MODULE_0__.bluePlayer;
  currentPlayer.score += score;
  currentPlayer.scoreLink.textContent = currentPlayer.score;
  checkRound(currentPlayer);
  clearLiveScore();
}
function checkRound(currentPlayer) {
  var playerScore = currentPlayer.score;
  if (playerScore >= 100) {
    currentPlayer.roundsWon += 1;
    resetScore();
    addRoundsUI(currentPlayer);
  }
}
function resetScore() {
  _entities_players__WEBPACK_IMPORTED_MODULE_0__.players.map(function (player) {
    player.score = 0;
    player.scoreLink.textContent = 0;
  });
}
function resetRound() {
  _entities_players__WEBPACK_IMPORTED_MODULE_0__.players.map(function (p) {
    p.roundsWon = 0;
    p.roundLink.innerHTML = "";
  });
}
function addRoundsUI(currentPlayer) {
  var RoundCircle = document.createElement("div");
  RoundCircle.classList.add("round-bar");
  currentPlayer.roundLink.append(RoundCircle);
  checkWinner(currentPlayer);
}
function checkWinner(currentPlayer) {
  if (currentPlayer.roundsWon >= 3) {
    currentPlayer.scoreLink.textContent = "WON!!!";
    (0,_win_modal__WEBPACK_IMPORTED_MODULE_1__.showWinModal)();
  }
}


/***/ }),

/***/ "./src/scripts/components/win-modal.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/win-modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showWinModal: () => (/* binding */ showWinModal)
/* harmony export */ });
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score */ "./src/scripts/components/score.js");

var winModalWrapper = document.getElementById("win-modal");
var winModalCover = document.getElementById("win-modal-cvr");
var windModalBtn = document.getElementById("win-modal-btn");
function hideWinModal() {
  winModalWrapper.classList.add("d-none");
  (0,_score__WEBPACK_IMPORTED_MODULE_0__.resetRound)();
  (0,_score__WEBPACK_IMPORTED_MODULE_0__.resetScore)();
}
function showWinModal() {
  winModalWrapper.classList.remove("d-none");
}
windModalBtn.addEventListener("click", hideWinModal);
winModalCover.addEventListener("click", hideWinModal);


/***/ }),

/***/ "./src/scripts/entities/players.js":
/*!*****************************************!*\
  !*** ./src/scripts/entities/players.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bluePlayer: () => (/* binding */ bluePlayer),
/* harmony export */   players: () => (/* binding */ players),
/* harmony export */   redPlayer: () => (/* binding */ redPlayer),
/* harmony export */   switchPlayers: () => (/* binding */ switchPlayers)
/* harmony export */ });
// Players
var redPlayer = {
  name: "red",
  pos: "left",
  score: 0,
  scoreLink: document.getElementById("left-score"),
  turn: true,
  id: document.getElementById("left-player"),
  roundsWon: 0,
  roundLink: document.getElementById("left-round")
};
var bluePlayer = {
  name: "blue",
  pos: "right",
  score: 0,
  scoreLink: document.getElementById("right-score"),
  turn: false,
  id: document.getElementById("right-player"),
  roundsWon: 0,
  roundLink: document.getElementById("right-round")
};
var players = [redPlayer, bluePlayer];

// Current Player (player turns)
function switchPlayers(players) {
  players.map(function (player) {
    if (player.turn) {
      player.id.classList.remove("opacity-50");
      player.turn = false;
    } else {
      player.id.classList.add("opacity-50");
      player.turn = true;
    }
  });
}


/***/ }),

/***/ "./src/scripts/utilities/utils.js":
/*!****************************************!*\
  !*** ./src/scripts/utilities/utils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randNum: () => (/* binding */ randNum)
/* harmony export */ });
var randNum = function randNum() {
  return Math.trunc(Math.random() * 6) + 1;
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Jersey25-Regular.ttf */ "./src/assets/fonts/Jersey25-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Jersey";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
*, *::before, *::after {
  box-sizing: border-box;
  text-decoration: none;
  margin: 0;
  padding: 0;
  user-select: none;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: "Jersey", sans-serif, serif;
  font-size: 1.2em;
}

body {
  background-color: var(--color-6);
  color: var(--color-3);
  overflow: none;
}

#body-wrapper {
  height: 95vh;
  margin: 0;
  padding: 1rem;
}

#main-container {
  border-radius: var(--border-radius-8);
  flex: 1;
}

#left-player {
  background-color: var(--color-5);
}

#right-player {
  background-color: var(--color-1);
}

/* Dice */
#dice {
  background-color: var(--color-3);
  border-radius: var(--border-radius-8);
  width: 85px;
  aspect-ratio: 1;
  border: 2px solid transparent;
  border-style: outset;
}

.dice-dot {
  width: 12px;
  aspect-ratio: 1;
  background-color: black;
}

.buttons {
  width: 150px;
  height: 50px;
}

.btn {
  color: var(--color-6);
  background-color: var(--color-4);
  line-height: 50px;
}

.hold {
  border-radius: 0.5rem 0 0 0.5rem;
}

.roll {
  border-radius: 0 0.5rem 0.5rem 0;
}

.score-font {
  font-size: 1.5rem;
}

.player-live-score {
  border-radius: var(--border-radius-8);
  background-color: var(--color-4);
  text-align: center;
  line-height: 50px;
  width: 150px;
  height: 50px;
  top: 5%;
  color: var(--color-6);
}

/* Players Round bar */
.rounds {
  top: 0;
  text-align: left;
  display: flex;
  gap: 0.2rem;
}

.round-bar {
  width: 15px;
  height: 25px;
  background-color: var(--color-3);
  border-radius: 0.1rem;
}

#left-round > * {
  transform: skewX(-25deg);
}

#right-round > * {
  transform: skewX(25deg);
}

/* info modal */
#info {
  width: 30px;
  aspect-ratio: 1;
  margin-left: 1rem;
  color: var(--color-3);
  cursor: pointer;
}

.info-icon {
  border: 2px solid var(--color-3);
  text-align: center;
  line-height: 30px;
}

.animation-blink {
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0% {
    outline: 1px solid var(--color-5);
  }
  25% {
    outline: 5px solid rgba(240, 112, 103, 0.8784313725);
  }
  50% {
    outline: 7px solid rgba(240, 112, 103, 0.5490196078);
  }
  75% {
    outline: 9px solid rgba(240, 112, 103, 0.3137254902);
  }
  100% {
    outline: 0px solid rgba(240, 112, 103, 0.3137254902);
  }
}
.info-modal {
  width: 350px;
  background-color: var(--color-1);
  font-size: 0.9em;
  padding: 1rem;
  border-radius: var(--border-radius-8);
  position: absolute;
  top: 0%;
  left: 150%;
  z-index: 2;
  cursor: default;
}

.info-modal p {
  font-size: 0.9em;
}

.info-modal ol {
  list-style-position: inside;
}

.info-modal::before {
  content: "";
  position: absolute;
  background-color: var(--color-1);
  width: 20px;
  height: 25px;
  top: 2%;
  left: -10px;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
}

.close-modal {
  font-size: 1em;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
}

/* Win modal */
.win-modal-wrapper {
  z-index: 3;
}

.win-modal {
  z-index: 99;
  height: 150px;
  width: 400px;
  background-color: var(--color-4);
  border-radius: var(--border-radius-8);
  color: var(--color-5);
  font-family: inherit;
  font-size: 1.3em;
}

.win-modal-cover {
  background-color: var(--color-7);
  opacity: 0.5;
}

.win-modal-wrapper button {
  width: 100px;
  height: 50px;
  border: 0;
  border-radius: var(--border-radius-8);
  background-color: var(--color-5);
  font-family: inherit;
  font-size: 0.8em;
}
.win-modal-wrapper button:hover {
  opacity: 0.9;
  cursor: pointer;
}

@media screen and (orientation: landscape) {
  #main-container {
    width: 550px;
    height: 500px;
  }
}
@media screen and (orientation: portrait) {
  #main-container {
    width: 70vw;
    min-width: 350px;
    height: 50%;
  }
  #live-score, #dice, .buttons {
    transform: scale(0.9);
  }
  .info-modal {
    transform: scale(0.8);
    top: -25px;
    left: 10px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,4CAAA;AACF;AAEA;EACE,sBAAA;EACA,qBAAA;EACA,SAAA;EACA,UAAA;EACA,iBAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,wCAAA;EACA,gBAAA;AAAF;;AAGA;EACE,gCAAA;EACA,qBAAA;EACA,cAAA;AAAF;;AAGA;EACE,YAAA;EACA,SAAA;EACA,aAAA;AAAF;;AAGA;EACE,qCAAA;EACA,OAAA;AAAF;;AAGA;EACE,gCAAA;AAAF;;AAGA;EACE,gCAAA;AAAF;;AAGA,SAAA;AACA;EACE,gCAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,6BAAA;EACA,oBAAA;AAAF;;AAGA;EACE,WAAA;EACA,eAAA;EACA,uBAAA;AAAF;;AAGA;EACE,YAAA;EACA,YAAA;AAAF;;AAGA;EACE,qBAAA;EACA,gCAAA;EACA,iBAAA;AAAF;;AAGA;EACE,gCAAA;AAAF;;AAGA;EACE,gCAAA;AAAF;;AAGA;EACE,iBAAA;AAAF;;AAGA;EACE,qCAAA;EACA,gCAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,YAAA;EACA,OAAA;EACA,qBAAA;AAAF;;AAGA,sBAAA;AACA;EACE,MAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,gCAAA;EACA,qBAAA;AAAF;;AAGA;EACE,wBAAA;AAAF;;AAIA;EACE,uBAAA;AADF;;AAIA,eAAA;AACA;EACE,WAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;AADF;;AAIA;EACE,gCAAA;EACA,kBAAA;EACA,iBAAA;AADF;;AAIA;EACE,8BAAA;AADF;;AAIA;EACE;IACE,iCAAA;EADF;EAIA;IACE,oDAAA;EAFF;EAKA;IACE,oDAAA;EAHF;EAMA;IACE,oDAAA;EAJF;EAOA;IACE,oDAAA;EALF;AACF;AAQA;EACE,YAAA;EACA,gCAAA;EACA,gBAAA;EACA,aAAA;EACA,qCAAA;EACA,kBAAA;EACA,OAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;AANF;;AASA;EACE,gBAAA;AANF;;AASA;EACE,2BAAA;AANF;;AASA;EACE,WAAA;EACA,kBAAA;EACA,gCAAA;EACA,WAAA;EACA,YAAA;EACA,OAAA;EACA,WAAA;EACA,4CAAA;AANF;;AASA;EACE,cAAA;EACA,6BAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;AANF;;AASA,cAAA;AACA;EACE,UAAA;AANF;;AASA;EACE,WAAA;EACA,aAAA;EACA,YAAA;EACA,gCAAA;EACA,qCAAA;EACA,qBAAA;EACA,oBAAA;EACA,gBAAA;AANF;;AASA;EACE,gCAAA;EACA,YAAA;AANF;;AASA;EACE,YAAA;EACA,YAAA;EACA,SAAA;EACA,qCAAA;EACA,gCAAA;EACA,oBAAA;EACA,gBAAA;AANF;AAQE;EACE,YAAA;EACA,eAAA;AANJ;;AAUA;EACE;IACE,YAAA;IACA,aAAA;EAPF;AACF;AAUA;EACE;IACE,WAAA;IACA,gBAAA;IACA,WAAA;EARF;EAWA;IACE,qBAAA;EATF;EAYA;IACE,qBAAA;IACA,UAAA;IACA,UAAA;EAVF;AACF","sourcesContent":["@font-face {\r\n  font-family: \"Jersey\";\r\n  src: url(\"../assets/fonts/Jersey25-Regular.ttf\");\r\n}\r\n\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  user-select: none;\r\n}\r\n\r\nhtml, body {\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: \"Jersey\", sans-serif, serif;\r\n  font-size: 1.2em;\r\n}\r\n\r\nbody {  \r\n  background-color: var(--color-6);\r\n  color: var(--color-3);\r\n  overflow: none;\r\n}\r\n\r\n#body-wrapper {\r\n  height: 95vh;\r\n  margin: 0;\r\n  padding: 1rem;\r\n}\r\n\r\n#main-container {\r\n  border-radius: var(--border-radius-8);\r\n  flex: 1;\r\n}\r\n\r\n#left-player {\r\n  background-color: var(--color-5);\r\n}\r\n\r\n#right-player {\r\n  background-color: var(--color-1);\r\n}\r\n\r\n/* Dice */\r\n#dice {\r\n  background-color: var(--color-3);\r\n  border-radius: var(--border-radius-8);\r\n  width: 85px;\r\n  aspect-ratio: 1;\r\n  border: 2px solid transparent;\r\n  border-style: outset;\r\n}\r\n\r\n.dice-dot {\r\n  width: 12px;\r\n  aspect-ratio: 1;\r\n  background-color: black;\r\n}\r\n\r\n.buttons {\r\n  width: 150px;\r\n  height: 50px;\r\n}\r\n\r\n.btn {\r\n  color: var(--color-6);\r\n  background-color: var(--color-4);\r\n  line-height: 50px;\r\n}\r\n\r\n.hold {\r\n  border-radius: 0.5rem 0 0 0.5rem;\r\n}\r\n\r\n.roll {\r\n  border-radius: 0 0.5rem 0.5rem 0;\r\n}\r\n\r\n.score-font {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.player-live-score {\r\n  border-radius: var(--border-radius-8);\r\n  background-color: var(--color-4);\r\n  text-align: center;\r\n  line-height: 50px;\r\n  width: 150px;\r\n  height: 50px;\r\n  top: 5%;\r\n  color: var(--color-6);\r\n}\r\n\r\n/* Players Round bar */\r\n.rounds {\r\n  top: 0;\r\n  text-align: left;\r\n  display: flex;\r\n  gap: 0.2rem;\r\n}\r\n\r\n.round-bar {\r\n  width: 15px;\r\n  height: 25px;\r\n  background-color: var(--color-3);\r\n  border-radius: 0.1rem;\r\n}\r\n\r\n#left-round > * {\r\n  transform: skewX(-25deg);\r\n  \r\n}\r\n\r\n#right-round > * {\r\n  transform: skewX(25deg);\r\n}\r\n\r\n/* info modal */\r\n#info {\r\n  width: 30px;\r\n  aspect-ratio: 1;\r\n  margin-left: 1rem;\r\n  color: var(--color-3);\r\n  cursor: pointer;\r\n}\r\n\r\n.info-icon {\r\n  border: 2px solid var(--color-3);\r\n  text-align: center;\r\n  line-height: 30px;\r\n}\r\n\r\n.animation-blink {\r\n  animation: blink 0.8s infinite;\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n    outline: 1px solid var(--color-5);\r\n  }\r\n\r\n  25% {\r\n    outline: 5px solid #f07067e0;\r\n  }\r\n\r\n  50% {\r\n    outline: 7px solid #f070678c;\r\n  }\r\n\r\n  75% {\r\n    outline: 9px solid #f0706750;\r\n  }\r\n\r\n  100% {\r\n    outline: 0px solid #f0706750;\r\n  }\r\n}\r\n\r\n.info-modal {\r\n  width: 350px;\r\n  background-color: var(--color-1);\r\n  font-size: 0.9em;\r\n  padding: 1rem;\r\n  border-radius: var(--border-radius-8);\r\n  position: absolute;\r\n  top: 0%;\r\n  left: 150%;\r\n  z-index: 2;\r\n  cursor: default;\r\n}\r\n\r\n.info-modal p {\r\n  font-size: 0.9em;\r\n}\r\n\r\n.info-modal ol {\r\n  list-style-position: inside;\r\n}\r\n\r\n.info-modal::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: var(--color-1);\r\n  width: 20px;\r\n  height: 25px;\r\n  top: 2%;\r\n  left: -10px;\r\n  clip-path: polygon(0 50%, 100% 0, 100% 100%);\r\n}\r\n\r\n.close-modal {\r\n  font-size: 1em;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n/* Win modal */\r\n.win-modal-wrapper {\r\n  z-index: 3;\r\n}\r\n\r\n.win-modal {\r\n  z-index: 99;\r\n  height: 150px;\r\n  width: 400px;\r\n  background-color: var(--color-4);\r\n  border-radius: var(--border-radius-8);\r\n  color: var(--color-5);\r\n  font-family: inherit;\r\n  font-size: 1.3em;\r\n}\r\n\r\n.win-modal-cover {\r\n  background-color: var(--color-7);\r\n  opacity: 0.5;\r\n}\r\n\r\n.win-modal-wrapper button {\r\n  width: 100px;\r\n  height: 50px;\r\n  border: 0;\r\n  border-radius: var(--border-radius-8);\r\n  background-color: var(--color-5);\r\n  font-family: inherit;\r\n  font-size: 0.8em;\r\n\r\n  &:hover {\r\n    opacity: 0.9;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@media screen and (orientation: landscape) {\r\n  #main-container {\r\n    width: 550px;\r\n    height: 500px;\r\n  }\r\n}\r\n\r\n@media screen and (orientation: portrait) {\r\n  #main-container {\r\n    width: 70vw;\r\n    min-width: 350px;\r\n    height: 50%;\r\n  }\r\n\r\n  #live-score, #dice, .buttons {\r\n    transform: scale(0.9);\r\n  }\r\n\r\n  .info-modal {\r\n    transform: scale(0.8);\r\n    top: -25px;\r\n    left: 10px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/utils.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/utils.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Flex-box */
.d-flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

.justify-around {
  justify-content: space-around;
}

.justify-between {
  justify-content: space-between;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.align-center {
  align-items: center;
}

.align-start {
  align-items: flex-start;
}

.align-end {
  align-items: flex-end;
}

.gap-0 {
  gap: 0.1rem;
}

/* Height */
.height-100 {
  height: 100%;
}

.height-50 {
  height: 50%;
}

.height-33 {
  height: 33.3333333333%;
}

/* Width */
.width-100 {
  width: 100%;
}

.width-50 {
  width: 50%;
}

.width-33 {
  width: 33.3333333333%;
}

/* Padding */
.padd-1 {
  padding: 1rem;
}

/* overflow */
.overflow-hidden {
  overflow: hidden;
}

/* Position */
.p-absolute {
  position: absolute;
}

.p-relative {
  position: relative;
}

.middle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Display */
.d-none {
  display: none;
}

.d-block {
  display: block;
}

/* Border */
.border-round {
  border-radius: 50%;
}

/* Font/Text */
.text-center {
  text-align: center;
}

/* Shadow */
.shadow {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Opacity */
.opacity-50 {
  opacity: 0.5;
}

/* z-index */
.z-index-1 {
  z-index: 1;
}

/* margin */
.margin-auto {
  margin: auto;
}`, "",{"version":3,"sources":["webpack://./src/styles/utils.css"],"names":[],"mappings":"AAAA,aAAA;AACA;EACE,aAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,6BAAA;AACF;;AAEA;EACE,8BAAA;AACF;;AAEA;EACE,2BAAA;AACF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,qBAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA,WAAA;AACA;EACE,YAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA,UAAA;AACA;EACE,WAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,qBAAA;AACF;;AAEA,YAAA;AACA;EACE,aAAA;AACF;;AAEA,aAAA;AACA;EACE,gBAAA;AACF;;AAEA,aAAA;AACA;EACE,kBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,QAAA;EACA,SAAA;EACA,gCAAA;AACF;;AAEA,YAAA;AACA;EACE,aAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA,WAAA;AACA;EACE,kBAAA;AACF;;AAEA,cAAA;AACA;EACE,kBAAA;AACF;;AAEA,WAAA;AAEA;EACE,0CAAA;AAAF;;AAGA,YAAA;AACA;EACE,YAAA;AAAF;;AAIA,YAAA;AACA;EACE,UAAA;AADF;;AAIA,WAAA;AACA;EACE,YAAA;AADF","sourcesContent":["/* Flex-box */\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.flex-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.justify-center {\r\n  justify-content: center;\r\n}\r\n\r\n.justify-around {\r\n  justify-content: space-around;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.justify-start {\r\n  justify-content: flex-start;\r\n}\r\n\r\n.justify-end {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.align-center {\r\n  align-items: center;\r\n}\r\n\r\n.align-start {\r\n  align-items: flex-start;\r\n}\r\n\r\n.align-end {\r\n  align-items: flex-end;\r\n}\r\n\r\n.gap-0 {\r\n  gap: 0.1rem\r\n}\r\n\r\n/* Height */\r\n.height-100 {\r\n  height: 100%;\r\n}\r\n\r\n.height-50 {\r\n  height: 50%;\r\n}\r\n\r\n.height-33 {\r\n  height: calc(100% / 3);\r\n}\r\n\r\n/* Width */\r\n.width-100 {\r\n  width: 100%;\r\n}\r\n\r\n.width-50 {\r\n  width: 50%;\r\n}\r\n\r\n.width-33 {\r\n  width: calc(100% / 3);\r\n}\r\n\r\n/* Padding */\r\n.padd-1 {\r\n  padding: 1rem;\r\n}\r\n\r\n/* overflow */\r\n.overflow-hidden {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Position */\r\n.p-absolute {\r\n  position: absolute;\r\n}\r\n\r\n.p-relative {\r\n  position: relative;\r\n}\r\n\r\n.middle {\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n/* Display */\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.d-block {\r\n  display: block;\r\n}\r\n\r\n/* Border */\r\n.border-round {\r\n  border-radius: 50%;\r\n}\r\n\r\n/* Font/Text */\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n/* Shadow */\r\n\r\n.shadow {\r\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/* Opacity */\r\n.opacity-50 {\r\n  opacity: 0.5;\r\n}\r\n\r\n\r\n/* z-index */\r\n.z-index-1 {\r\n  z-index: 1;\r\n}\r\n\r\n/* margin */\r\n.margin-auto {\r\n  margin: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/var.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/var.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  /* Color Palette */
  --color-1: #0081a7;
  --color-2: #00afb9;
  --color-3: #fdfcdc;
  --color-4: #fed9b7;
  --color-5: #f07167;
  --color-6: #001524;
  --color-7: #70d6ff;
  /* Border Radius */
  --border-radius-8: 8px;
  --border-radius-16: 16px;
}`, "",{"version":3,"sources":["webpack://./src/styles/var.css"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EAEA,kBAAA;EACA,sBAAA;EACA,wBAAA;AAAF","sourcesContent":[":root {\r\n  /* Color Palette */\r\n  --color-1: #0081a7;\r\n  --color-2: #00afb9;\r\n  --color-3: #fdfcdc;\r\n  --color-4: #fed9b7;\r\n  --color-5: #f07167;\r\n  --color-6: #001524;\r\n  --color-7: #70d6ff;\r\n\r\n  /* Border Radius */\r\n  --border-radius-8: 8px;\r\n  --border-radius-16: 16px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/utils.css":
/*!******************************!*\
  !*** ./src/styles/utils.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./utils.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/utils.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/var.css":
/*!****************************!*\
  !*** ./src/styles/var.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_var_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./var.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/var.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_var_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_var_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_var_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_var_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Jersey25-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Jersey25-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Jersey25-Regular.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_utils_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/utils.css */ "./src/styles/utils.css");
/* harmony import */ var _styles_var_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/var.css */ "./src/styles/var.css");
/* harmony import */ var _scripts_components_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/components/info */ "./src/scripts/components/info.js");
/* harmony import */ var _scripts_entities_players__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/entities/players */ "./src/scripts/entities/players.js");
/* harmony import */ var _scripts_utilities_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/utilities/utils */ "./src/scripts/utilities/utils.js");
/* harmony import */ var _scripts_components_score__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/components/score */ "./src/scripts/components/score.js");
/* harmony import */ var _scripts_components_dice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/components/dice */ "./src/scripts/components/dice.js");








_scripts_entities_players__WEBPACK_IMPORTED_MODULE_4__.switchPlayers(_scripts_entities_players__WEBPACK_IMPORTED_MODULE_4__.players);

// Roll
var rollBtn = document.getElementById("btn-roll");
rollBtn.addEventListener("click", function () {
  return (0,_scripts_components_dice__WEBPACK_IMPORTED_MODULE_7__.roll)(_scripts_utilities_utils__WEBPACK_IMPORTED_MODULE_5__.randNum);
});

// Hold functionality
var holdBtn = document.getElementById("btn-hold");
holdBtn.addEventListener("click", function () {
  return _scripts_components_score__WEBPACK_IMPORTED_MODULE_6__.holdScore(_scripts_components_score__WEBPACK_IMPORTED_MODULE_6__.currentLiveScore);
});
_scripts_entities_players__WEBPACK_IMPORTED_MODULE_4__.redPlayer.scoreLink.textContent = _scripts_entities_players__WEBPACK_IMPORTED_MODULE_4__.redPlayer.score;
_scripts_entities_players__WEBPACK_IMPORTED_MODULE_4__.bluePlayer.scoreLink.textContent = _scripts_entities_players__WEBPACK_IMPORTED_MODULE_4__.bluePlayer.score;
var infoIcon = document.querySelector(".info-icon");
var closeBtn = document.querySelector(".close-modal");
infoIcon.addEventListener("click", _scripts_components_info__WEBPACK_IMPORTED_MODULE_3__.showModal);
closeBtn.addEventListener("click", _scripts_components_info__WEBPACK_IMPORTED_MODULE_3__.hideModal);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map