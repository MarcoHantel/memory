Memory Game

A modern browser-based memory card game built with TypeScript, SCSS, and modular architecture.

Features
🔹 Multiple board sizes (16, 24, 36 cards)
🔹 Theme switching (Code Vibes / DA Project)
🔹 Two-player mode
🔹 Dynamic game state handling
🔹 Animated card flipping
🔹 Score tracking
🔹 Winner & Game Over screens

Tech Stack
TypeScript
SCSS (with variables & themes)
Vite (build tool)
Modular JavaScript architecture

Getting Started
- 1. Install dependencies
- npm install
- 2. Run development server
- npm run dev
- 3. Build for production
- npm run build
- 4. Preview production build
- npm run preview
Themes

The game supports dynamic themes using CSS variables:

Code Vibes (dark)
DA Project (light )

<img width="988" height="646" alt="image" src="https://github.com/user-attachments/assets/135bb121-7778-418d-8632-ecd7c846185c" />

Themes are applied via:
document.body.classList.add('theme-codeVibes');

Game Logic

Cards are shuffled dynamically
Players take turns flipping cards
Matching pairs increase score
Game ends when all pairs are found
Winner is determined by score
<img width="1247" height="776" alt="image" src="https://github.com/user-attachments/assets/39f4d22b-5d08-403a-a12e-b78470eb03bc" />

All my skills I go from https://developerakademie.com/
