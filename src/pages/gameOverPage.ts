import { gameState } from "../main";
import { getThemeAssets } from "../main";

export function gameOverHtml(winnerText: string) {

    const gameOverScreen = document.getElementById('gameOverScreen');
    if (!gameOverScreen) return;

    const assets = getThemeAssets(gameState.theme);

    console.log('text', assets.contentOne, 'player', gameState.playerOneScore);

    gameOverScreen.innerHTML = /*html*/`
        <div class="gameover__winner">
            <h2 class="gameover__winner--h2">${winnerText}</h2>
            <div class="gameover__winner--text">Final score</div>
            <div class="gameover__score">
                <div class="gameover__score__player">
                    <img src="${assets.playerOne}">
                    
                    <p class="gameover__score__player--one"> ${assets.contentOne} ${gameState.playerOneScore}</p>
                </div>

                <div class="gameover__score__player">
                    <img src="${assets.playerTwo}">
                    
                    <p class="gameover__score__player--two">${assets.contentTwo} ${gameState.playerTwoScore}</p>
                </div>
            </div>
        </div>
    `;
}
