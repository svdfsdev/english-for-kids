import categories from './dictionary.js';
import {
  AUDIO_SUCCES, AUDIO_ERROR, PROGRES, CONTAINER, START_GAME, success, fail, 
  MENU, SWITCH_BTN, MENU_LIST, htmlMenuCategory, htmlCardCategory, htmlCardWord,
  MENU_BTN, succesStar, errorStar, frontTurn, front, tegAudio, guessed, hidden, 
  idError, backTurn, openClass, clear, defaultClass, current, playClass, card, playMode, back, frontTitle, train, play, switchPlay, playModeBkg, 
} from './elements.js';


export function showStatistics() {
  for (const category in categories) {
    TABLE.insertAdjacentHTML('beforeend', `<tr><td>${category}</td></tr>`);

    for (const word in categories[category]) {
      TABLE.insertAdjacentHTML('beforeend', `<tr>
                                                <td></td>
                                                <td>${word}</td>
                                                <td>${categories[category][word]}</td>
                                              </tr>`);
    }
  }
}

export function gameStarting() {
  let wordList = Array.from(document.querySelectorAll(front));

  wordList = shuffle(wordList);

  let currentWord = wordList[wordList.length - 1];

  currentWord.querySelector(tegAudio).play();

  CONTAINER.addEventListener('click', (event) => {
    if (!event.target.closest(front).classList.contains(guessed)) {
      let result;

      if (event.target.closest(front) === currentWord) {
        AUDIO_SUCCES.play();
        event.target.closest(front).classList.add(guessed);

        wordList.pop();
        currentWord = wordList[wordList.length - 1];

        setTimeout(() => currentWord.querySelector(tegAudio).play(), 2000);

        result = succesStar;
      } else if (event.target.closest(front) !== currentWord && event.target.closest(front)) {
        AUDIO_ERROR.play();
        result = errorStar;

        setTimeout(() => currentWord.querySelector(tegAudio).play(), 2000);
      }

      PROGRES.insertAdjacentHTML('beforeend', result);

      if (wordList.length === 0) {
        CONTAINER.removeEventListener('click', gameStarting());
        endGame();

        wordList = [];
      }
    }
  });
}

export function endGame() {
  CONTAINER.innerHTML = '';
  START_GAME.classList.add(hidden);

  const countMistakes = PROGRES.querySelectorAll(idError).length || 0;
  const resultPicture = (countMistakes === 0) ? success : `<p class="result">Error  ${countMistakes}</p>${fail}`;
  const finalAudio = (countMistakes === 0) ? AUDIO_SUCCES : AUDIO_ERROR;

  CONTAINER.innerHTML = resultPicture;

  setTimeout(() => finalAudio.play(), 1000);

  PROGRES.innerHTML = '';
  CONTAINER.id = '';

  setTimeout(() => { CONTAINER.innerHTML = ''; draw(CONTAINER); }, 5000);
}

export function shuffle(array) {
  const shuffleArray = [];
  const max = array.length - 1;
  const min = 0;

  for (let i = 0; i < array.length; i++) {
    let j = 0;

    do {
      j = Math.round(min - 0.5 + Math.random() * (max - min + 0.5));
    } while (shuffleArray[j] !== undefined);

    shuffleArray[j] = array[i];
  }

  return shuffleArray;
}

export function turnCard(element) {
  element.children[0].classList.toggle(frontTurn);
  element.children[1].classList.toggle(backTurn);
}

export function showMenu() {
  MENU.classList.toggle(openClass);

  if (window.screen.width < 410) {
    SWITCH_BTN.classList.toggle(clear);
  }
}

export function activeCategoryMenu(element) {
  const activeCategory = (element.id) ? `#${element.id}` : defaultClass;

  MENU_LIST.querySelectorAll('a').forEach((el) => el.classList.remove(current));
  MENU_LIST.querySelector(activeCategory).classList.add(current);
}

export function draw(element) {
  let nameList = [];

  if (element.id) {
    nameList = Object.keys(categories[element.id]);
  } else {
    nameList = Object.keys(categories);
  }

  const htmlCode = (element === MENU_LIST) ? htmlMenuCategory
                 : (element === CONTAINER && !element.id) ? htmlCardCategory
                 : (element === CONTAINER) ? htmlCardWord : '';

  for (const name of nameList) {
    let htmlCodeModified = htmlCode.replace(/name/gi, name);
    if (element.id) {
      htmlCodeModified = htmlCodeModified.replace(/translate/gi, categories[element.id][name]);
    }

    element.insertAdjacentHTML('beforeend', htmlCodeModified);
  }

  if (SWITCH_BTN.innerText === playClass) {
    stylePlayMode();
  }

  if (CONTAINER.id && SWITCH_BTN.innerHTML === playClass) {
    START_GAME.classList.remove(hidden);
  } else {
    START_GAME.classList.add(hidden);
  }
}

export function stylePlayMode() {
  document.querySelectorAll(card).forEach((el) => el.classList.toggle(playMode));
  document.querySelectorAll(front).forEach((el) => el.classList.toggle(playMode));
  document.querySelectorAll(back).forEach((el) => el.classList.toggle(playMode));
  document.querySelectorAll(frontTitle).forEach((el) => el.classList.toggle(hidden));
}

export function switchMode() {
  SWITCH_BTN.innerText = (SWITCH_BTN.innerText === train) ? play : train;

  SWITCH_BTN.classList.toggle(switchPlay);
  MENU.classList.toggle(playModeBkg);
  MENU_BTN.classList.toggle(playModeBkg);

  if (CONTAINER.id) {
    CONTAINER.innerHTML = '';

    draw(CONTAINER);
  } else {
    stylePlayMode();
  }
}
