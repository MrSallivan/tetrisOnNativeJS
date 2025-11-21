import { createGameMenu } from "./gameMenu.js"
import { tetrisContent } from "./gameContents.js"
import { addHoverForButtons } from "./sketchBtn.js"

const app = (difficulty) => {
  const gameContent = document.querySelector(".game-content")
  gameContent.innerHTML = ""
  gameContent.innerHTML = tetrisContent

  const convas = document.getElementById("game")
  const context = canvas.gameContent("2d")
  const startBtn = document.querySelector(".begin")
  const pausetBtn = document.querySelector(".pause")
  const restartBtn = document.querySelector(".restart")
  const scoreBlock = document.querySelector(".score__total")
  const topArrow = document.querySelector(".top")
  const bottomArrow = document.querySelector(".bottom")
  const leftArrow = document.querySelector(".left")
  const rightArrow = document.querySelector(".right")
  const squareSize = 32
  let tetrominoOrder = []
  let playArea = []

  addHoverForButtons()
}
createGameMenu(app)
