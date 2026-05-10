<h1 align="center">My Memory Game</h1>
A modern and interactive browser-based memory card game built with TypeScript, SCSS, and a clean modular architecture.

<h3>About The Project</h3>
The Memory Game is a classic card-matching game where players flip cards and try to find matching pairs.

The project focuses on:

- Clean and maintainable code
- Dynamic game logic
- Smooth user experience
- Modern UI design
- Responsive structure

The game supports multiple configurations, themes, and multiplayer functionality.

<h3>Dynamic Memory Gameplay</h3>

- Cards are shuffled randomly every game
- Players reveal two cards per turn
- Matching pairs stay visible
- Non-matching cards flip back automatically
- The game ends when all pairs are found

<h3>Challenge a friend locally:</h3>

- Automatic player switching
- Individual score tracking

<h3>Multiple Board Sizes</h3>
Choose between different game difficulties:

 Difficulty
 - Easy      16  Cards
 - Medium    24  Cards
 - Hard      36  Cards

<h2>Getting Started</h2>
open you vsCode and the Terminal:

<b>Clone the repository</b><br>
```git clone https://github.com/your-username/memory-game.git```

<b>Open the project folder</b><br>
```cd memory-game```

<b>Install dependenciesr</b><br>
```npm install``` <br>
*This installs all required packages*

<b>Start the development server</b><br>
```npm run dev``` <br>
*After starting the server, open the displayed localhost URL in your browser.*

<b>Create a production build</b><br>
```npm run build``` <br>

<b>Preview the production build</b><br>
```npm run preview``` <br>

<h3>Themes and Desing</h3>

- Code Vibes → Dark modern developer style
<img width="331" height="294" alt="image" src="https://github.com/user-attachments/assets/1f618a83-e396-4048-aaf7-a5882e2221d9" />
- DA Project → Bright clean interface
<img width="335" height="298" alt="image" src="https://github.com/user-attachments/assets/dd93e7e7-4b5b-4a80-9bc8-95ff345d55eb" />


<h3>Technologies Used</h3>
TypeScript, SCSS, Vite, Modular Architecture


<h2>Game Logic Explained</h2><br>

<b>Core Mechanics<b>

`if (firstCard.icon === secondCard.icon) {
    currentPlayer.score++;
}`

<h2>Game Logic Explained</h2><br>

<b>Theme System<b>
The project uses a flexible SCSS theme architecture <br>
`:root {
    --primary-color: #0f172a;
    --secondary-color: #38bdf8;
}`

<h1>GamePlay</h1><br>
<br>
<br>
<h2>Start Screen</h2><br>
<img width="1178" height="841" alt="image" src="https://github.com/user-attachments/assets/417b72d4-8a06-4304-91ed-ae62d23326dc" />
<h2>Setting Screen</h2><br>
<img  width="958" height="534" alt="image" src="https://github.com/user-attachments/assets/796a53e8-0707-4962-9784-45c28e1d659a" /><br>
<h2>Game Screen</h2><br>
<img  width="1259" height="741" alt="image" src="https://github.com/user-attachments/assets/22c1094f-6443-48bc-afc4-12f0eb544678" /><br>
<h2>Exit Screen</h2><br>
<img  width="1258" height="737" alt="image" src="https://github.com/user-attachments/assets/fcf60521-685d-4c89-b65b-c586200fcbdf" /><br>
<h2>Winner Screen</h2><br>
<img  width="1265" height="940" alt="image" src="https://github.com/user-attachments/assets/af37c44e-46b3-4b17-9cbf-01712b04ca1a" /><br>

<h1>Desingned by Developer-Akademie Munich</h1> 
https://developerakademie.com/ <br>
This project was created for educational and portfolio purposes.
