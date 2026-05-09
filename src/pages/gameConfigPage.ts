import { init } from "../main";
import { gameState } from "../main";

function getImage(path: string): string {
  return import.meta.env.BASE_URL + path;
}

export function createConfigScreen() {

  document.getElementById('configScreen')!.innerHTML = /*html*/`

<div class="config-screen__settings">
    <div class="config-screen__settings-wrapper">
        <h1>Settings</h1>
        <img src="${getImage('images/items/line3.svg')}" alt="">
    </div>

<div>
<fieldset class="fieldset ">
  <legend class="settings__config">
    <img 
      class="settings__config--img" 
      src="${getImage('images/items/palette.svg')}" 
      alt="palette">
    <p class="settings__config--headline">Game themes</p>
  </legend>

  <label for="CodeVibes">
  <div class="settings__config--optins">
    <input type="radio" id="CodeVibes" name="theme" value="codeVibes"/>
    <span class="settings__config--circle"></span>
     Code vibes
    <div class="settings__config--checkmark">
      <span class="settings__config--checkline"></span>
      <span class="settings__config--checkpoint"></span>
    </div>
     </label>
  </div>

<label for="daPproject">
  <div class="settings__config--optins">
    <input type="radio" id="daPproject" name="theme" value="daPproject" />
    <span class="settings__config--circle"></span>
      DA Project
    <div class="settings__config--checkmark">
      <span class="settings__config--checkline"></span>
      <span class="settings__config--checkpoint"></span>
    </div>
  </div>
  </label>
</fieldset>
</div>

<div>
<fieldset class="fieldset">
  <legend class="settings__config">
    <img 
      class="settings__config--img" 
      src="${getImage('images/items/chess_pawn.svg')}" 
      alt="chess pawn">
    <p class="settings__config--headline">Choose player</p>
  </legend>

  <label for="player1">
  <div class="settings__config--optins">
    <input type="radio" id="player1" name="player" value="blue"/>
    <span class="settings__config--circle"></span>
      Blue
    <div class="settings__config--checkmark">
      <span class="settings__config--checkline"></span>
      <span class="settings__config--checkpoint"></span>
    </div>
  </div>
</label>

<label for="player2">
  <div class="settings__config--optins">
    <input type="radio" id="player2" name="player" value="orange" />
    <span class="settings__config--circle"></span>
      Orange
    <div class="settings__config--checkmark">
      <span class="settings__config--checkline"></span>
      <span class="settings__config--checkpoint"></span>
    </div>
  </div>
</label>

</fieldset>
</div>

<fieldset class="fieldset">
  <legend class="settings__config">
    <img 
      class="settings__config--img" 
      src="${getImage('images/items/style.svg')}" 
      alt="style book">

    <p class="settings__config--headline">Board size</p>
  </legend>

<label for="card16">
  <div class="settings__config--optins">
    <input type="radio" id="card16" name="boardSize" value="16"/>
    <span class="settings__config--circle"></span>
      16 cards
    <div class="settings__config--checkmark">
      <span class="settings__config--checkline"></span>
      <span class="settings__config--checkpoint"></span>
    </div>
  </div>
</label>


<label for="card24">
  <div class="settings__config--optins">
    <input type="radio" id="card24" name="boardSize" value="24" />
    <span class="settings__config--circle"></span>
      24 cards
    <div class="settings__config--checkmark">
      <span class="settings__config--checkline"></span>
      <span class="settings__config--checkpoint"></span>
    </div>
  </div>
</label>

<label for="card36">
  <div class="settings__config--optins">
    <input type="radio" id="card36" name="boardSize" value="36" />
    <span class="settings__config--circle"></span>
      36 cards
    <div class="settings__config--checkmark">
      <span class="settings__config--checkline"></span>
      <span class="settings__config--checkpoint"></span>
    </div>
  </div>
</label>

</fieldset>
</div>
</div>

<div class="config-screen__image">
    
    <img 
      id="imageGame" 
      src="${getImage('images/items/theme_Visual.svg')}" 
      alt="config theme"
    >

    <div class="config-screen__image--text">

      <div id="selectedTheme">Theme</div>

      <img src="${getImage('images/items/line6.svg')}" alt="">

      <div id="selectedPlayer">Player</div>

      <img src="${getImage('images/items/line6.svg')}" alt="">

      <div id="selectedBoard">Board size</div>

      <button id="start-game-btn" class="config-screen__image--btn" disabled>
          <img 
            src="${getImage('images/items/play_btn.svg')}" 
            alt="config theme">

          <div>Start</div>
      </button>
    </div>
</div>
`;

  updatePreview();

  const inputs = document.querySelectorAll('input[type="radio"]');

inputs.forEach(input => {
  input.addEventListener('change', (e) => {

    const target = e.target as HTMLInputElement;

    if (target.name === 'theme') {
      changeImage(target.value);
    }

    updatePreview();
    updateButtonState();
  });
});

  function updatePreview() {

    const selectedTheme =
      (document.querySelector('input[name="theme"]:checked') as HTMLInputElement)?.value;

    const selectedPlayer =
      (document.querySelector('input[name="player"]:checked') as HTMLInputElement)?.value;

    const selectedBoard =
      (document.querySelector('input[name="boardSize"]:checked') as HTMLInputElement)?.value;

    const themeEl = document.getElementById('selectedTheme');
    const playerEl = document.getElementById('selectedPlayer');
    const boardEl = document.getElementById('selectedBoard');

    if (themeEl) {

      if (!selectedTheme) {
        themeEl.textContent = 'Theme';
      } else if (selectedTheme === 'codeVibes') {
        themeEl.textContent = 'Code vibes';
      } else {
        themeEl.textContent = 'DA Project';
      }
    }

    if (playerEl) {

      if (!selectedPlayer) {
        playerEl.textContent = 'Player';
      } else if (selectedPlayer === 'blue') {
        playerEl.textContent = 'Blue';
      } else {
        playerEl.textContent = 'Orange';
      }
    }

    if (boardEl) {

      if (!selectedBoard) {
        boardEl.textContent = 'Board size';
      } else {
        boardEl.textContent = `${selectedBoard} cards`;
      }
    }
  }

  const startBtn = document.getElementById('start-game-btn');

  startBtn?.addEventListener('click', () => {

    const selectedTheme = (document.querySelector('input[name="theme"]:checked') as HTMLInputElement)?.value;

    const selectedPlayer = (document.querySelector('input[name="player"]:checked') as HTMLInputElement)?.value;

    const selectedBoardSize = Number(
      (document.querySelector('input[name="boardSize"]:checked') as HTMLInputElement)?.value
    );

    startGame(selectedTheme, selectedPlayer, selectedBoardSize);
  });
}


function updateButtonState() {

  const selectedTheme = document.querySelector(
    'input[name="theme"]:checked'
  );

  const selectedPlayer = document.querySelector(
    'input[name="player"]:checked'
  );

  const selectedBoard = document.querySelector(
    'input[name="boardSize"]:checked'
  );

  const startBtn = document.getElementById(
    'start-game-btn'
  ) as HTMLButtonElement;

  if (!startBtn) return;

  const allSelected =
    selectedTheme &&
    selectedPlayer &&
    selectedBoard;

  startBtn.disabled = !allSelected;
}



function startGame(theme: string, player: string, size: number) {
  gameState.theme = theme;
  gameState.player = player;
  gameState.boardSize = size;

  applyTheme(theme);

  const field = document.getElementById('field');

  field?.classList.remove('grid-4', 'grid-6');

  if (size === 16) {
    field?.classList.add('grid-4');
  } else {
    field?.classList.add('grid-6');
  }

  const fieldRef = document.getElementById('field');
  const header = document.getElementById('header');

  document.getElementById('configScreen')?.classList.add('hidden');
  document.getElementById('gameScreen')?.classList.remove('hidden');

  init(fieldRef, header, size, player);
}

function applyTheme(theme: string) {
  document.body.className = '';

  document.body.classList.add(`theme-${theme}`);
}

function changeImage(theme: string) {
  const image = document.getElementById('imageGame') as HTMLImageElement;

  if (!image) return;

  image.src =
    theme === 'codeVibes'
      ? getImage('images/items/theme_Visual.svg')
      : getImage('images/items/Da.svg');
}