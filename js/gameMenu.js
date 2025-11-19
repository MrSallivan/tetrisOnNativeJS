import {menuContent} from "./gameContents.js";
import {addHoverForButtons} from "./sketchBtn.js";

export const createGameMenu = () => {
    const gameContent = document.querySelector('.game-content')
    gameContent.innerHTML = ''
    gameContent.innerHTML = menuContent

    addHoverForButtons()
}
