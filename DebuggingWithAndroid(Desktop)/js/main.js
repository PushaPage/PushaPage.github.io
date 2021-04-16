window.addEventListener('load', () => {
    (() => {
        let playingField = document.getElementById('playingField'),
            activeScreen = document.getElementById('activeScreen'),
            menuGame = document.getElementById('menuGame'),
            optionPage = document.getElementById('optionPage'),
            bugSpecification = document.getElementById('bugSpecification'),
            countlevels = document.getElementById('countlevels'),
            GameOver = document.getElementById('GameOver'),
            creepBugOne = document.getElementById('creepBug1'),
            creepBugTwo = document.getElementById('creepBug2'),
            creepBugThree = document.getElementById('creepBug3'),
            creepBugFour = document.getElementById('creepBug4'),
            bugDead = document.getElementById('bugDead'),
            gameWin = document.getElementById('gameWin'),
            buttonPlayIn = document.querySelector('.button-play-in'),
            buttonPause = document.querySelector('.button-pause'),
            buttonSound = document.getElementById('buttonSound'),
            levelTwo = document.getElementById('levelTwo'),
            levelThree = document.getElementById('levelThree'),
            levelFour = document.getElementById('levelFour'),
            levelFive = document.getElementById('levelFive'),
            countDeadBugs = document.getElementById('countDeadBugs'),
            android = document.getElementById('android');

        let control = {
                stepAndroid: 10,
                goPlay: true,
                sound: false,
                counterLevel: 1,
                levelOneFlag: true,
                levelTwoFlag: true,
                levelThreeFlag: true,
                levelFourFlag: true,
                levelFiveFlag: true,
                victoryResults: null,
                creepBugs: null,
            },
            bugsOffsetOne = {},
            soundShot = new Audio(),
            soundBug = new Audio(),
            bugsOffsetTwo = {},
            bugsOffsetThree = {},
            bugsOffsetFour = {},
            bugsOffsetFive = {},
            bgLevels = ['url("img/bg-Field.jpg")', 'url("img/bg-Field2.jpg")', 'url("img/bg-Field3.jpg")'],
            audioEffects = [
                'audio/bugOrdinary.mp3',
                'audio/bugArmored.mp3',
                'audio/bugManyFaces.mp3',
                'audio/levelUp.mp3',
                'audio/gameOver.mp3',
                'audio/gameWin.mp3',
                'audio/shot.mp3',
            ],
            clipBullets = [];

        const bugSpec = {
            ordinary: 'fas fa-bug bugOrdinary',
            armored: 'fas fa-spider bugOrdinary bugArmored',
            rowDown: 'fad fa-bug bugOrdinary bugRowDown',
            rowDown2: 'fad fa-spider bugOrdinary bugRowDown2',
            manyFaces: 'far fa-bug bugOrdinary bugManyFaces',
            rowUp: 'fal fa-spider-black-widow bugOrdinary bugRowUp',
            rowUp2: 'fas fa-spider-black-widow bugOrdinary bugRowUp2',
            manyFacesArmored: 'fal fa-bug bugOrdinary bugArmoredManyFaces',

            ordinarySpider: 'fas fa-spider bugOrdinary',
            ordinaryArmored: 'fas fa-bug bugOrdinary bugArmored',
            rowDownArmored: 'fad fa-bug bugOrdinary bugRowDown bugRowDownArmored',
            rowDown2Armored: 'fad fa-spider bugOrdinary bugRowDown2 bugRowDownArmored',
            rowUpArmored: 'fas fa-spider-black-widow bugOrdinary bugRowUp2 bugRowUpArmored',
            rowUp2Armored: 'fal fa-spider-black-widow bugOrdinary bugRowUp bugRowUpArmored',
            ordinarySpiderArmored: 'fal fa-spider bugOrdinary bugArmored',
        };

        const selectRandomClass = [
            bugSpec.ordinary,
            bugSpec.ordinarySpider,
            bugSpec.rowDown,
            bugSpec.rowDown2,
            bugSpec.rowUp,
        ];

        const selectArmoredClass = [
            bugSpec.ordinaryArmored,
            bugSpec.armored,
            bugSpec.rowDownArmored,
            bugSpec.rowDown2Armored,
            bugSpec.rowUpArmored,
            bugSpec.rowUp2Armored,
        ];

        const createBugs = sum => {
            let iterator = {
                a: 1,
                b: 0,
                c: 0,
                d: 0,
            };

            while (iterator.a <= 5) {
                let el = document.createElement('div');
                el.setAttribute('id', 'row' + iterator.a);
                el.style.top = 20 + 50 * (iterator.a - 1) + 'px';
                el.style.pointerEvents = 'none';
                playingField.appendChild(el);

                iterator.a++;
            }

            while (iterator.b <= 9) {
                let el = document.createElement('i');
                el.classList = bugSpec.ordinary;
                el.style.left = 240 + 50 * iterator.b + 'px';
                row1.appendChild(el);
                row2.appendChild(el.cloneNode(true));
                row3.appendChild(el.cloneNode(true));
                row4.appendChild(el.cloneNode(true));
                row5.appendChild(el.cloneNode(true));
                bugsOffsetOne['x' + iterator.b] = el.offsetLeft;

                iterator.b++;
            }

            bugsOffsetTwo = Object.setPrototypeOf({}, bugsOffsetOne);
            bugsOffsetThree = Object.setPrototypeOf({}, bugsOffsetOne);
            bugsOffsetFour = Object.setPrototypeOf({}, bugsOffsetOne);
            bugsOffsetFive = Object.setPrototypeOf({}, bugsOffsetOne);

            android.style.color = 'rgb(48, 209, 88)';
            bugDead.style.animation = 'bugDead 3.5s linear infinite';

            while (iterator.c <= 1) {
                if (!control.levelOneFlag) {
                    row1.childNodes[4 + iterator.c].classList = bugSpec.armored;
                    row2.childNodes[1 + 7 * iterator.c].classList = bugSpec.armored;
                    row3.childNodes[4 + iterator.c].classList = bugSpec.rowDown;
                }
                if (!control.levelTwoFlag) {
                    row2.childNodes[1 + 7 * iterator.c].classList = bugSpec.manyFaces;
                    row2.childNodes[4 + iterator.c].classList = bugSpec.rowDown2;
                    row5.childNodes[1 + 7 * iterator.c].classList = bugSpec.rowDown;
                    row5.childNodes[4 + iterator.c].classList = bugSpec.armored;
                    row5.childNodes[5 + iterator.c].classList = bugSpec.armored;
                }
                if (!control.levelThreeFlag) {
                    row1.childNodes[iterator.c].classList = bugSpec.armored;
                    row1.childNodes[8 + iterator.c].classList = bugSpec.armored;
                    row2.childNodes[2 + 1 * iterator.c].classList = bugSpec.armored;
                    row2.childNodes[6 + 1 * iterator.c].classList = bugSpec.armored;
                    row3.childNodes[4 + 1 * iterator.c].classList = bugSpec.armored;
                    row4.childNodes[1 + 7 * iterator.c].classList = bugSpec.manyFaces;
                    row4.childNodes[2 + iterator.c].classList = bugSpec.armored;
                    row4.childNodes[4 + iterator.c].classList = bugSpec.manyFaces;
                    row4.childNodes[6 + iterator.c].classList = bugSpec.armored;
                    row5.childNodes[iterator.c].classList = bugSpec.armored;
                    row5.childNodes[8 + iterator.c].classList = bugSpec.armored;
                }
                if (!control.levelFourFlag) {
                    row5.childNodes[0 + 2 * iterator.c].classList = bugSpec.rowDown2;
                    row5.childNodes[1 + 7 * iterator.c].classList = bugSpec.rowUp2;
                    row5.childNodes[4 + iterator.c].classList = bugSpec.rowUp;
                    row5.childNodes[3 + 3 * iterator.c].classList = bugSpec.manyFaces;
                    row5.childNodes[7 + 2 * iterator.c].classList = bugSpec.rowDown2;
                }
                iterator.c++;
            }

            while (iterator.d <= sum) {
                if (!control.levelOneFlag) {
                    row4.childNodes[2 + iterator.d].classList = bugSpec.armored;
                }
                if (!control.levelTwoFlag) {
                    row3.childNodes[iterator.d].classList = bugSpec.armored;
                    row4.childNodes[iterator.d].classList = bugSpec.armored;
                }
                if (!control.levelThreeFlag) {
                    row5.childNodes[3 + iterator.c].classList = bugSpec.rowDown;
                }
                if (!control.levelFourFlag) {
                    row2.childNodes[iterator.d].classList = bugSpec.armored;
                    row3.childNodes[iterator.d].classList = bugSpec.manyFacesArmored;
                    row4.childNodes[iterator.d].classList = bugSpec.armored;
                }
                if (!control.levelFiveFlag) {
                    row2.childNodes[iterator.d].classList = bugSpec.manyFaces;
                    row3.childNodes[iterator.d].classList = bugSpec.manyFaces;
                    row4.childNodes[iterator.d].classList = bugSpec.manyFaces;
                    row5.childNodes[iterator.d].classList = bugSpec.manyFacesArmored;
                }
                iterator.d++;
            }

            if (!control.levelThreeFlag) {
                row2.childNodes[9].classList = bugSpec.rowDown2;
                row2.childNodes[0].classList = bugSpec.rowUp;
                row4.childNodes[9].classList = bugSpec.rowUp2;
                row4.childNodes[0].classList = bugSpec.rowDown2;
            }

            if (!control.levelFourFlag) {
                row1.childNodes[9].classList = bugSpec.rowUp2;
                row1.childNodes[0].classList = bugSpec.rowUp;
            }

            if (!control.levelFiveFlag) {
                row3.childNodes[2].classList = bugSpec.rowUp;
                row3.childNodes[7].classList = bugSpec.rowUp2;
                row4.childNodes[1].classList = bugSpec.rowUp2;
                row4.childNodes[8].classList = bugSpec.rowUp;
                row5.childNodes[0].classList = bugSpec.rowUp;
                row5.childNodes[9].classList = bugSpec.rowUp2;
            }
        };

        const fadeInFadeOut = (fadeIn, fadeOut) => {
            fadeIn.classList.add('fade-in');
            fadeIn.classList.remove('fade-out');
            fadeOut.classList.add('fade-out');
            fadeOut.classList.remove('fade-in');
        };

        const buttonActive = (on, off) => {
            on.classList.add('button-active');
            on.classList.remove('button-no-active');
            off.classList.add('button-no-active');
            off.classList.remove('button-active');
        };

        const playSoundShot = () => {
            if (!control.goPlay) {
                if (!control.sound) {
                    soundShot.src = audioEffects[6];

                    let playPromise = soundShot.play();

                    if (playPromise !== null) {
                        playPromise.catch(() => {
                            soundShot.play();
                        });
                    }
                }
            }
        };

        const playSoundGame = effect => {
            if (!control.goPlay) {
                if (!control.sound) {
                    soundBug.src = effect;

                    let playPromise = soundBug.play();

                    if (playPromise !== null) {
                        playPromise.catch(() => {
                            soundBug.play();
                        });
                    }
                }
            }
        };

        const soundOnOff = () => {
            if (buttonSound.classList == 'fas fa-volume-up sound-on') {
                buttonSound.classList = 'fas fa-volume-slash sound-off';
            } else {
                buttonSound.classList = 'fas fa-volume-up sound-on';
            }
            if (!control.sound) {
                control.sound = true;
            } else {
                control.sound = false;
            }
        };

        const CreepBug = () => {
            delay(9e2).then(() => {
                creepBugOne.style.animation = 'bugCreepFive 4s linear 2s';
                creepBugTwo.style.animation = 'bugCreepOne 7s linear';
                creepBugThree.style.animation = 'bugCreepThree 6.8s linear .7s';
                creepBugFour.style.animation = 'bugBlink 1.1s ease infinite';
            });

            delay(9e3).then(() => {
                creepBugOne.style.animation = 'bugCreepSix 4s linear 1s';
                creepBugTwo.style.animation = 'bugCreepTwo 5s linear .5s';
                creepBugThree.style.animation = 'bugCreepFour 3.5s linear 1s';
                creepBugFour.style.animation = 'bugBlink 2s ease';
            });
        };

        //Game Play
        document.addEventListener('click', event => {
            let target = event.target.dataset.game;
            if (!target) return;

            switch (target) {
                case 'play':
                    fadeInFadeOut(playingField, menuGame);
                    playingField.style.backgroundImage = bgLevels[0];
                    control.levelOneFlag = false;
                    createBugs(5);
                    GameStart();
                    break;
                case 'option':
                    fadeInFadeOut(optionPage, menuGame);
                    break;
                case 'specification':
                    fadeInFadeOut(bugSpecification, menuGame);
                    bugSpecification.querySelectorAll('.bug-no-active').forEach(el => {
                        el.classList.remove('bug-no-active');
                        el.classList.add('bug-active');
                    });
                    break;
                case 'backMenu':
                    fadeInFadeOut(menuGame, optionPage);
                    bugSpecification.querySelectorAll('.bug-active').forEach(el => {
                        el.classList.remove('bug-active');
                        el.classList.add('bug-no-active');
                    });
                    break;
                case 'backMenu2':
                    fadeInFadeOut(menuGame, bugSpecification);
                    break;
                case 'playInGame':
                    control.goPlay = false;
                    buttonActive(buttonPlayIn, buttonPause);
                    break;
                case 'pause':
                    control.goPlay = true;
                    buttonActive(buttonPause, buttonPlayIn);
                    break;
                case 'sound':
                    soundOnOff();
                    break;
                case 'levelTwo':
                    fadeInFadeOut(playingField, levelTwo);
                    playingField.style.backgroundImage = bgLevels[1];
                    control.levelTwoFlag = false;
                    createBugs(9);
                    GameStart();
                    break;
                case 'levelThree':
                    fadeInFadeOut(playingField, levelThree);
                    control.levelThreeFlag = false;
                    createBugs(3);
                    GameStart();
                    break;
                case 'levelFour':
                    fadeInFadeOut(playingField, levelFour);
                    control.levelFourFlag = false;
                    createBugs(9);
                    GameStart();
                    break;
                case 'levelFive':
                    fadeInFadeOut(playingField, levelFive);
                    playingField.style.backgroundImage = bgLevels[2];
                    control.levelFiveFlag = false;
                    createBugs(9);
                    GameStart();
                    break;
                case 'winRestartGame':
                    control.counterLevel = 1;
                    control.levelOneFlag = true;
                    control.levelTwoFlag = true;
                    control.levelThreeFlag = true;
                    control.levelFourFlag = true;
                    control.levelFiveFlag = true;
                    fadeInFadeOut(menuGame, gameWin);
                    break;
                case 'restartGame':
                    control.counterLevel = 1;
                    control.levelOneFlag = true;
                    control.levelTwoFlag = true;
                    control.levelThreeFlag = true;
                    control.levelFourFlag = true;
                    control.levelFiveFlag = true;
                    clearInterval(creepBugs);
                    fadeInFadeOut(menuGame, GameOver);
                    break;
            }
        });

        activeScreen.addEventListener('click', () => {
            createBullet();
            playSoundShot();
        });

        document.addEventListener('keydown', event => {
            if (!control.goPlay) {
                let offsetAndroid = android.offsetLeft;

                if (event.key == 'ArrowLeft' || event.code == 'KeyA') {
                    event.preventDefault();
                    android.style.left = offsetAndroid - control.stepAndroid + 'px';
                    arrowRight.style.color = '';
                    arrowLeft.style.color = 'rgb(48, 209, 88)';
                } else if (event.key == 'ArrowRight' || event.code == 'KeyD') {
                    event.preventDefault();
                    android.style.left = offsetAndroid + control.stepAndroid + 'px';
                    arrowLeft.style.color = '';
                    arrowRight.style.color = 'rgb(48, 209, 88)';
                }
                if (android.offsetLeft < 30) {
                    android.style.left = offsetAndroid + control.stepAndroid - 10 + 'px';
                    arrowLeft.style.color = 'rgb(255, 69, 58)';
                }
                if (playingField.offsetWidth < android.offsetLeft + android.offsetWidth - 60) {
                    android.style.left = offsetAndroid - control.stepAndroid + 10 + 'px';
                    arrowRight.style.color = 'rgb(255, 69, 58)';
                }
            }
        });

        document.addEventListener('keyup', event => {
            if (event.key == 'ArrowLeft' || event.code == 'KeyA') {
                event.preventDefault();
                arrowLeft.style.color = '';
            }
            if (event.key == 'ArrowRight' || event.code == 'KeyD') {
                event.preventDefault();
                arrowRight.style.color = '';
            }
            if (
                event.code == 'ArrowDown' ||
                event.code == 'ControlRight' ||
                event.code == 'ControlLeft' ||
                event.code == 'KeyS'
            ) {
                event.preventDefault();
                createBullet();
                playSoundShot();
            }
            if (event.code == 'Space') {
                event.preventDefault();
                if (!control.goPlay) {
                    control.goPlay = true;
                    buttonActive(buttonPause, buttonPlayIn);
                } else {
                    control.goPlay = false;
                    buttonActive(buttonPlayIn, buttonPause);
                }
            }
            if (event.code == 'ShiftRight' || event.code == 'ShiftLeft') {
                event.preventDefault();
                soundOnOff();
            }
        });

        const createBullet = () => {
            if (!control.goPlay) {
                let bullet = document.createElement('div');
                bullet.classList = 'bullet fad fa-meteor';
                bullet.style.left = android.offsetLeft - 5 + 'px';
                playingField.append(bullet);
                clipBullets.push({ bullet: bullet, pos: bullet.offsetTop, newPos: bullet.offsetTop });
            }
        };

        const GameStart = () => {
            control.goPlay = false;

            const Extermination = () => {
                playingField.querySelectorAll('div').forEach(el => {
                    el.remove();
                });
                bugDead.style.animation = '';
            };

            const RandomBugName = async bug => {
                let inBug = document.createElement('span');
                inBug.classList = 'far fa-bug ascensionBugMany';
                bug.appendChild(inBug);

                let i = 1;
                while (i <= selectRandomClass.length) {
                    ++i;
                    await delay(300);
                    const randomClass = selectRandomClass[Math.floor(Math.random() * selectRandomClass.length)];
                    bug.classList = randomClass;
                }
            };

            const RandomArmoredBugName = async bug => {
                let inBug = document.createElement('span');
                inBug.classList = 'fal fa-bug ascensionBugManyArm';
                bug.appendChild(inBug);

                let i = 1;
                while (i <= selectArmoredClass.length) {
                    ++i;
                    await delay(300);
                    const randomClass = selectRandomClass[Math.floor(Math.random() * selectArmoredClass.length)];
                    bug.classList = randomClass;
                }
            };

            // подсчет длинны гипотенузы по теореме Пифагора
            const Distance = (a, b) => {
                return Math.sqrt(Math.pow(Math.abs(a.left - b.left), 2) + Math.pow(Math.abs(a.top - b.top), 2));
            };

            const collision = (el, bul) => {
                el.getBoundingClientRect();
                bul.getBoundingClientRect();

                let radius1 = el.offsetHeight / 2;
                let radius2 = bul.offsetHeight / 2;

                // растояние между центрами объектов
                let distance = Distance(center(el), center(bul));

                if (distance < radius1 + radius2) {
                    let classCheck = el.className;

                    switch (classCheck) {
                        case bugSpec.ordinaryArmored:
                            el.style.animation = 'ascension-bug .8s linear';
                            playSoundGame(audioEffects[1]);
                            el.classList.remove('bugArmored');
                            bul.remove();
                            return false;
                        case bugSpec.armored:
                            el.style.animation = 'ascension-bug .8s linear';
                            playSoundGame(audioEffects[1]);
                            el.classList.remove('bugArmored');
                            // el.style.fontSize = '10px';
                            bul.remove();
                            return false;
                        case bugSpec.ordinarySpiderArmored:
                            el.style.animation = 'ascension-bug .8s linear';
                            playSoundGame(audioEffects[1]);
                            el.classList.remove('bugArmored');
                            bul.remove();
                            return false;
                        case bugSpec.rowDownArmored:
                            el.style.animation = 'ascension-bug .8s linear';
                            playSoundGame(audioEffects[1]);
                            el.classList.remove('bugRowDownArmored');
                            bul.remove();
                            return false;
                        case bugSpec.rowDown2Armored:
                            el.style.animation = 'ascension-bug .8s linear';
                            playSoundGame(audioEffects[1]);
                            el.classList.remove('bugRowDownArmored');
                            bul.remove();
                            return false;
                        case bugSpec.rowUp2Armored:
                            el.style.animation = 'ascension-bug .8s linear';
                            playSoundGame(audioEffects[1]);
                            el.classList.remove('bugRowUpArmored');
                            bul.remove();
                            return false;
                        case bugSpec.rowUpArmored:
                            el.style.animation = 'ascension-bug .8s linear';
                            playSoundGame(audioEffects[1]);
                            el.classList.remove('bugRowUpArmored');
                            bul.remove();
                            return false;
                        case bugSpec.manyFaces:
                            playSoundGame(audioEffects[2]);
                            RandomBugName(el);
                            bul.remove();
                            return false;
                        case bugSpec.manyFacesArmored:
                            playSoundGame(audioEffects[2]);
                            RandomArmoredBugName(el);
                            bul.remove();
                            return false;
                        case bugSpec.rowDown:
                            speed.directionRow = speed.directionRow + 1;
                            playSoundGame(audioEffects[0]);
                            el.remove();
                            bul.remove();
                            return false;
                        case bugSpec.rowDown2:
                            speed.directionRow = speed.directionRow + 2;
                            playSoundGame(audioEffects[0]);
                            el.remove();
                            bul.remove();
                            return false;
                        case bugSpec.rowUp:
                            speed.directionRow = speed.directionRow - 1;
                            playSoundGame(audioEffects[0]);
                            el.remove();
                            bul.remove();
                            return false;
                        case bugSpec.rowUp2:
                            speed.directionRow = speed.directionRow - 2;
                            playSoundGame(audioEffects[0]);
                            el.remove();
                            bul.remove();
                            return false;
                        default:
                            playSoundGame(audioEffects[0]);
                            el.remove();
                            bul.remove();
                            return false;
                    }
                } else {
                    return false;
                }
            };

            // функция которая вычисляет координаты центра блока
            const center = el => {
                let object = el.getBoundingClientRect();

                // координаты относительно документа
                // (pageYOffset и pageXOffset это размер прокрутки, если она есть)
                let y = object.top + pageYOffset;
                let x = object.left + pageXOffset;

                return {
                    top: y + el.offsetHeight / 2, // y + половина высоты
                    left: x + el.offsetWidth / 2, // x + половина ширины
                };
            };

            let row = {
                    one: document.getElementById('row1'),
                    two: document.getElementById('row2'),
                    three: document.getElementById('row3'),
                    four: document.getElementById('row4'),
                    five: document.getElementById('row5'),
                },
                bugRow = {
                    one: row.one.querySelectorAll('i'),
                    two: row.two.querySelectorAll('i'),
                    three: row.three.querySelectorAll('i'),
                    four: row.four.querySelectorAll('i'),
                    five: row.five.querySelectorAll('i'),
                },
                speed = {
                    offsetOne: 2,
                    offsetTwo: 2,
                    offsetThree: 2,
                    offsetFour: 2,
                    offsetFive: 2,
                    offsetYrowOne: row.one.offsetTop,
                    offsetYrowTwo: row.two.offsetTop,
                    offsetYrowThree: row.three.offsetTop,
                    offsetYrowFour: row.four.offsetTop,
                    offsetYrowFive: row.five.offsetTop,
                    direction1: 1,
                    direction2: 1,
                    direction3: 1,
                    direction4: 1,
                    direction5: -1,
                    directionRow: 1,
                };

            if (!control.levelTwoFlag) {
                speed.offsetOne = 2;
                speed.offsetTwo = 2.4;
                speed.offsetThree = 2.3;
                speed.offsetFour = 2.8;
            }
            if (!control.levelThreeFlag) {
                speed.offsetOne = 3.1;
                speed.offsetTwo = 3.2;
                speed.offsetThree = 3.3;
                speed.offsetFour = 3.4;
                speed.offsetFive = 3.5;
            }
            if (!control.levelFourFlag) {
                speed.offsetOne = 4.1;
                speed.offsetTwo = 4;
                speed.offsetThree = 3;
                speed.offsetFour = 4;
                speed.offsetFive = 4;
            }
            if (!control.levelFiveFlag) {
                speed.offsetOne = 5;
                speed.offsetTwo = 5;
                speed.offsetThree = 5;
                speed.offsetFour = 5;
                speed.offsetFive = 5;
            }

            let update = step => {
                if (!control.goPlay) {
                    clipBullets.forEach(o => {
                        o.bullet.style.bottom = o.pos - (o.newPos -= 15) + 'px';

                        if (o.newPos < 0) {
                            o.bullet.remove();
                            clipBullets.shift(o);
                        }

                        if (o.bullet.getBoundingClientRect().top < activeScreen.getBoundingClientRect().top - 5) {
                            o.bullet.remove();
                        }

                        if (o.bullet.getBoundingClientRect().top < row.five.getBoundingClientRect().bottom) {
                            playingField.querySelectorAll('.bugOrdinary').forEach(el => {
                                collision(el, o.bullet);
                            });
                        }
                    });
                    playingField.querySelectorAll('i').forEach((el, i) => {
                        control.victoryResults = i;
                        if (el.getBoundingClientRect().top >= android.getBoundingClientRect().bottom - 70) {
                            android.style.animation = 'ascension-android 1s linear';
                            android.style.color = 'rgb(28, 28, 30)';
                            playSoundGame(audioEffects[4]);
                            control.goPlay = true;
                            Extermination();
                            fadeInFadeOut(GameOver, playingField);
                            CreepBug();
                            creepBugs = setInterval(CreepBug, 14700);
                        }
                    });

                    countlevels.innerHTML = control.counterLevel;
                    countDeadBugs.innerHTML = control.victoryResults;

                    if (control.victoryResults == 0) {
                        control.counterLevel++;
                        if (control.counterLevel == 2) {
                            playSoundGame(audioEffects[3]);
                            fadeInFadeOut(levelTwo, playingField);
                            control.goPlay = true;
                            control.levelOneFlag = true;
                            Extermination();
                        }
                        if (control.counterLevel == 3) {
                            playSoundGame(audioEffects[3]);
                            fadeInFadeOut(levelThree, playingField);
                            control.goPlay = true;
                            control.levelTwoFlag = true;
                            Extermination();
                        }
                        if (control.counterLevel == 4) {
                            playSoundGame(audioEffects[3]);
                            fadeInFadeOut(levelFour, playingField);
                            control.goPlay = true;
                            control.levelThreeFlag = true;
                            Extermination();
                        }
                        if (control.counterLevel == 5) {
                            playSoundGame(audioEffects[3]);
                            fadeInFadeOut(levelFive, playingField);
                            control.goPlay = true;
                            control.levelFourFlag = true;
                            Extermination();
                        }
                        if (control.counterLevel == 6) {
                            playSoundGame(audioEffects[5]);
                            fadeInFadeOut(gameWin, playingField);
                            control.goPlay = true;
                            Extermination();
                        }
                    }

                    speed.offsetYrowOne += 0.1 * speed.directionRow;
                    speed.offsetYrowTwo += 0.1 * speed.directionRow;
                    speed.offsetYrowThree += 0.1 * speed.directionRow;
                    speed.offsetYrowFour += 0.1 * speed.directionRow;
                    speed.offsetYrowFive += 0.1 * speed.directionRow;

                    if (speed.offsetYrowOne < 15) {
                        speed.directionRow = 1.5;
                    }

                    //rowOneBugs
                    bugRow.one.forEach((el, i) => {
                        bugsOffsetOne['x' + i] += speed.offsetOne * speed.direction1;

                        if (playingField.offsetWidth <= el.offsetLeft + el.offsetWidth) {
                            speed.direction1 = -1;
                        }
                        if (el.offsetLeft < -1) {
                            speed.direction1 = 1;
                        }
                    });

                    bugRow.two.forEach((el, i) => {
                        bugsOffsetTwo['x' + i] -= speed.offsetTwo * speed.direction2;

                        if (el.offsetLeft < -1) {
                            speed.direction2 = -1;
                        }
                        if (playingField.offsetWidth <= el.offsetLeft + el.offsetWidth) {
                            speed.direction2 = 1;
                        }
                    });
                    //rowThreeBugs
                    bugRow.three.forEach((el, i) => {
                        bugsOffsetThree['x' + i] += speed.offsetThree * speed.direction3;

                        if (playingField.offsetWidth <= el.offsetLeft + el.offsetWidth) {
                            speed.direction3 = -1;
                        }
                        if (el.offsetLeft < -1) {
                            speed.direction3 = 1;
                        }
                    });
                    //rowFourBugs
                    bugRow.four.forEach((el, i) => {
                        bugsOffsetFour['x' + i] -= speed.offsetFour * speed.direction4;

                        if (el.offsetLeft < -1) {
                            speed.direction4 = -1;
                        }
                        if (playingField.offsetWidth <= el.offsetLeft + el.offsetWidth) {
                            speed.direction4 = 1;
                        }
                    });
                    //rowFiveBugs
                    bugRow.five.forEach((el, i) => {
                        bugsOffsetFive['x' + i] -= speed.offsetFive * speed.direction5;

                        if (playingField.offsetWidth <= el.offsetLeft + el.offsetWidth) {
                            speed.direction5 = 1;
                        }
                        if (el.offsetLeft < -1) {
                            speed.direction5 = -1;
                        }
                    });
                }
            };

            let render = () => {
                asyncEach(bugRow.one, (el, i) => {
                    el.style.left = bugsOffsetOne['x' + i] + 'px';
                });

                asyncEach(bugRow.two, (el, i) => {
                    el.style.left = bugsOffsetTwo['x' + i] + 'px';
                });

                asyncEach(bugRow.three, (el, i) => {
                    el.style.left = bugsOffsetThree['x' + i] + 'px';
                });

                asyncEach(bugRow.four, (el, i) => {
                    el.style.left = bugsOffsetFour['x' + i] + 'px';
                });

                asyncEach(bugRow.five, (el, i) => {
                    el.style.left = bugsOffsetFive['x' + i] + 'px';
                });

                row.one.style.top = speed.offsetYrowOne + 'px';
                row.two.style.top = speed.offsetYrowTwo + 'px';
                row.three.style.top = speed.offsetYrowThree + 'px';
                row.four.style.top = speed.offsetYrowFour + 'px';
                row.five.style.top = speed.offsetYrowFive + 'px';
            };

            // переопределить requestAnimationFrame, чтобы эмулировать различное количество FPS (одинаково во всех примерах игрового цикла)
            window.requestAnimationFrame = func => {
                clearTimeout(window.rafTimer);
                window.rafTimer = setTimeout(func, 1000 / (window.maxFPS || 60));
            };

            // game loop
            let last = performance.now(),
                step = 1 / 60, // обновление должно вызываться 60 раз в секунду
                dt = 0,
                now;

            let frame = () => {
                now = performance.now();
                dt += (now - last) / 1000;
                while (dt > step) {
                    dt = dt - step;
                    update(step);
                }
                last = now;

                render();
                requestAnimationFrame(frame);
            };

            requestAnimationFrame(frame);
        };
    })();
});
