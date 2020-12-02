export const SWITCH_BTN = document.querySelector('.switch');
export const START_GAME = document.querySelector('button.start-game');
export const MENU = document.querySelector('.menu');
export const MENU_LIST = document.querySelector('.menu-list');
export const MENU_BTN = document.querySelector('.menu-btn');
export const CONTAINER = document.querySelector('.container');
export const PAGE_TITLE = document.querySelector('p.category');
export const AUDIO_ERROR = document.querySelector('#error');
export const AUDIO_SUCCES = document.querySelector('#success');
export const PROGRES = document.querySelector('.progres');
export const TABLE = document.querySelector('table');

localStorage.setItem('mode', 'Train');

export const htmlCardCategory = `<a href="#" class="card" id="name">
                                    <img class="img-card" src="./assetes/images/name.jpg" alt="name">
                                    <p class="title">name</p>
                                 </a>`;

export const htmlCardWord = `           <div class="card" id="name">
                                            <div class="front">
                                                <img class="img-card" src="./assetes/images/name.jpg" alt="name">
                                                <audio src="./assetes/audio/name.mp3"></audio>
                                                <div class="front-title">
                                                    <p class="title">name</p>
                                                    <img class="btn-turn" src="./assetes/images/revert.png" alt="">
                                                </div>
                                            </div>
                                            <div class="back">
                                                <img class="img-card" src="./assetes/images/name.jpg" alt="name">
                                                <p class="title">translate</p>
                                            </div>
                                        </div>`;

export const htmlMenuCategory = '<a href="#" id="name" class="">name</a>';

export const htmlCodePageTitle = '<p class="category">text</p>';

export const succesStar = '<img id="success" class="star" src="./assetes/images/star-win.svg" alt="">';

export const errorStar = '<img id="error" class="star" src="./assetes/images/star.svg" alt="">';

export const fail = '<img class="fail" src="./assetes/images/fail.jpg" alt="">';

export const success = '<img class="success" src="./assetes/images/success.jpg" alt="">';

export const back = '.back';
export const card = '.card';
export const link = 'a';
export const openClass = 'open';
export const menuBtn = '.menu-btn';
export const menu = '.menu';
export const divCard = 'div.card';
export const btnMenu = '.btn-turn';
export const playClass = 'Play';
export const tegAudio = 'audio';
export const btnTurn = '.btn-turn';
export const frontTurn = 'frontTurn';
export const backTurn = 'backTurn';
export const front = '.front';
export const guessed = 'guessed';
export const hidden = 'hidden';
export const idError = '#error';
export const clear = 'clear';
export const defaultClass = '.default';
export const current = 'current';
export const playMode = 'play-mode';
export const frontTitle = '.front-title';
export const train = 'Train';
export const play = 'Play';
export const switchPlay = 'switch-play';
export const playModeBkg = 'play-mode-bkg';
