
import { cardFace } from "../GameConfig";
import { Card } from "../model/card.class";

export function createDeck(boardSize: number): Card[] {
    const pairCount: number = boardSize / 2;
    const selectedCards = [...cardFace].slice(0, pairCount);
    const doubleCards = [...selectedCards, ...selectedCards];
    const shuffledDeck = shuffleArray(doubleCards);
    const cardObjects = shuffledDeck.map(value => new Card(value));

    return cardObjects;
}

function shuffleArray(array: string[]): string[] {


    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    return shuffled;
}
