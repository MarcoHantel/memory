import { gameState } from "../main";
import { getThemeAssets } from "../main";
import { createConfigScreen } from "./gameConfigPage";

// export function gameWinnerHtml(winnerText: string) {
//     const gameWinnerScreen = document.getElementById('gameWinnerScreen');

//     if (!gameWinnerScreen) return;

//     const winnerClass =
//         gameState.playerOneScore > gameState.playerTwoScore
//             ? 'winner-blue'
//             : gameState.playerTwoScore > gameState.playerOneScore
//             ? 'winner-orange'
//             : 'winner-draw';

//     const winnerImage = getWinnerImage();

//     gameWinnerScreen.innerHTML = /*html*/`
//         <div class="gamewinner__winner ${winnerClass}">
//             <img src="./src/images/items/confetti.svg" alt="">
//             <p class="gamewinner__winner--text">The winner is</p>
//             <h2 class="gamewinner__winner--h2">${winnerText}</h2>
//             <img class="gamewinner__winner--image" src="${winnerImage}" alt="">

//             <button class="gamewinner__winner--btn"><p>Home</p></button>

//         </div>
//     `;
// }

export function gameWinnerHtml(winnerText: string) {
    const gameWinnerScreen = document.getElementById('gameWinnerScreen');
    if (!gameWinnerScreen) return;

    const winnerClass =
        gameState.playerOneScore > gameState.playerTwoScore
            ? 'winner-blue'
            : gameState.playerTwoScore > gameState.playerOneScore
            ? 'winner-orange'
            : 'winner-draw';

    const winnerImage = getWinnerImage();

    gameWinnerScreen.innerHTML = /*html*/`
        <div class="gamewinner__winner ${winnerClass}">
            <img src="./src/images/items/confetti.svg" alt="">
            <p class="gamewinner__winner--text">The winner is</p>
            <h2 class="gamewinner__winner--h2">${winnerText}</h2>
            <img class="gamewinner__winner--image" src="${winnerImage}" alt="">
            <button class="gamewinner__winner--btn"><p>Home</p></button>
        </div>
    `;

    // 🔥 HIER kommt der Listener
    const homeBtn = gameWinnerScreen.querySelector('.gamewinner__winner--btn');
    homeBtn?.addEventListener('click', goToConfigScreen);
}


function goToConfigScreen() {

    // 🔄 GameState zurücksetzen (wichtig!)
    gameState.playerOneScore = 0;
    gameState.playerTwoScore = 0;
    gameState.currentPlayer = true;

    // 🧹 Winner Screen ausblenden
    document.getElementById('gameWinnerScreen')?.classList.add('hidden');

    // 🎮 Game Screen ausblenden
    document.getElementById('gameScreen')?.classList.add('hidden');

    // ⚙️ Config Screen anzeigen
    document.getElementById('configScreen')?.classList.remove('hidden');

    // 🔥 Config neu rendern (wichtig, sonst alte Events kaputt)
    createConfigScreen();
}





function getWinnerImage(): string {
    const assets = getThemeAssets(gameState.theme);

    if (gameState.playerOneScore > gameState.playerTwoScore) {
        return assets.bluePlayer;
    } else if (gameState.playerTwoScore > gameState.playerOneScore) {
        return assets.orangePlayer;
    } else if (gameState.playerTwoScore == gameState.playerOneScore){
        return assets.drawGame;
    }
    return '';
}