import {createGameMenu} from "./gameMenu.js"
import {tetrisContent} from "./gameContents.js"
import {addHoverForButtons} from "./sketchBtn.js"
import {tetrominoItems} from "./tetrominoItems";

const app = (difficulty) => {
    const gameContent = document.querySelector(".game-content")
    gameContent.innerHTML = ""
    gameContent.innerHTML = tetrisContent

    const canvas = document.getElementById("game")
    const context = canvas.getContext("2d")
    const startBtn = document.querySelector(".begin")
    const pauseBtn = document.querySelector(".pause")
    const restartBtn = document.querySelector(".restart")
    const scoreBlock = document.querySelector(".score__total")
    const topArrow = document.querySelector(".top")
    const bottomArrow = document.querySelector(".bottom")
    const leftArrow = document.querySelector(".left")
    const rightArrow = document.querySelector(".right")
    const squareSize = 32
    let tetrominoOrder = []
    let playArea = []

    for (let row = -2; row < 20; row++) {
        playArea[row] = []
        for (let col = 0; col < 10; col++) {
            playArea[row][col] = 0
        }
    }
    let count = 0
    let tetromino = createTetromino()
    let score = 0
    let isGameOver = false
    let requestAnimationId = null

    function createTetromino() {
        if (tetrominoOrder.length === 0) {
            tetrominoOrder = ['I', 'J', 'L', 'O', 'S', 'T', 'Z']
            shuffle(tetrominoOrder)
        }


        const name = tetrominoOrder.pop()
        const matrix = tetrominoItems[name]
    }

    addHoverForButtons()
}
createGameMenu(app)
