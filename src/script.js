
import {
  MENU_LIST, CONTAINER, MENU, SWITCH_BTN, START_GAME,
  back, card, link, openClass, menuBtn, menu, divCard,
  btnMenu, playClass, tegAudio, btnTurn, 
} from './elements.js';
import {
  draw, turnCard, activeCategoryMenu, showMenu, switchMode, gameStarting,
} from './function.js';

draw(MENU_LIST);

draw(CONTAINER);

document.body.addEventListener('mouseout', (event) => {
  if (event.target.closest(back) !== event.relatedTarget.closest(back) && event.target.closest(back)) {
    turnCard(event.target.closest(card));
  }
});

document.addEventListener('click', (event) => {
  if (event.target.closest(link)) {
    CONTAINER.id = event.target.closest(link).id;

    CONTAINER.innerHTML = '';

    draw(CONTAINER);
    activeCategoryMenu(CONTAINER);

    if (MENU.classList.contains(openClass)) {
      showMenu();
    }
  }

  if (event.target.closest(menuBtn)) {
    showMenu();
  }

  if (MENU.classList.contains(openClass) && !event.target.closest(menu)) {
    showMenu();
  }

  if (event.target.closest(divCard) && !event.target.closest(btnMenu) && SWITCH_BTN.innerText !== playClass) {
    event.target.closest(divCard).querySelector(tegAudio).play();
  }

  if (event.target.closest(btnTurn)) {
    turnCard(event.target.closest(card));
  }

  if (event.target === SWITCH_BTN) {
    switchMode();
  }

  if (event.target === START_GAME) {
    gameStarting();
  }
});
