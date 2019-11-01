window.addEventListener('load', function() {
   ;(function (){
  

    var playingField = document.getElementById('playingField'),
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


    
    var soundShot = new Audio(),
        soundBug = new Audio(), 
        control = {
          stepAndroid: 10,
          shot: soundShot.currentTime > 0 && !soundShot.paused && !soundShot.ended 
          && soundShot.readyState > 2,
          effect: soundBug.currentTime > 0 && !soundBug.paused && !soundBug.ended 
          && soundBug.readyState > 2,
          goPlay: true,
          sound: false,
          counterLevel: 1,
          levelOneFlag: true,
          levelTwoFlag: true,
          levelThreeFlag: true,
          levelFourFlag: true,
          levelFiveFlag: true,       
          victoryResults: null,
          creepBugs: null          
        },       
        bugsOffsetOne = {
          x0: 0,
          x1: 0,
          x2: 0,
          x3: 0,
          x4: 0,
          x5: 0,
          x6: 0,
          x7: 0,
          x8: 0,
          x9: 0
        },
        bugsOffsetTwo = {},
        bugsOffsetThree = {},
        bugsOffsetFour = {},
        bugsOffsetFive = {},
        bgLevels = [
             'url("img/bg-Field.jpg")',
             'url("img/bg-Field2.jpg")',
             'url("img/bg-Field3.jpg")'  
        ],              
        audioEffects = [
            'audio/bugOrdinary.mp3',
            'audio/bugArmoded.mp3',
            'audio/bugManyFaces.mp3', 
            'audio/levelUp.mp3', 
            'audio/gameOver.mp3',
            'audio/gameWin.mp3',
            'audio/shot.mp3'            
            ],         
        clipBullets = [];      
    
      
    function createBugs(sum) {

        let iterator = {

              a: 1,
              b: 0,
              c: 0,
              d: 0 
            };

       while (iterator.a <= 5) {               
           let el = document.createElement('div');
               el.setAttribute('id', 'row' + iterator.a);               
               el.style.top = 20 + (50 * (iterator.a - 1)) + 'px';
               el.style.pointerEvents = 'none';               
               playingField.appendChild(el);

            iterator.a++;                                                        
        };                                

        while (iterator.b <= 9) { 
           let el = document.createElement('i');              
               el.classList = 'fas fa-bug bugOrdinary';                          
               el.style.left = 240 + (50 * iterator.b) + 'px';                                                  
               row1.appendChild(el);
               row2.appendChild(el.cloneNode(true));
               row3.appendChild(el.cloneNode(true));
               row4.appendChild(el.cloneNode(true));
               row5.appendChild(el.cloneNode(true));
               bugsOffsetOne['x' + iterator.b] = el.offsetLeft;

            iterator.b++;                          
        };

        bugsOffsetTwo = Object.setPrototypeOf({}, bugsOffsetOne);
        bugsOffsetThree = Object.setPrototypeOf({}, bugsOffsetOne);
        bugsOffsetFour = Object.setPrototypeOf({}, bugsOffsetOne);
        bugsOffsetFive = Object.setPrototypeOf({}, bugsOffsetOne);         

        android.style.color = 'rgb(48, 209, 88)';
        bugDead.style.animation = 'bugDead 3.5s linear infinite';      

        while (iterator.c <= 1) {

            if(!control.levelOneFlag){ 
              row1.childNodes[4 + iterator.c].classList = 'fas fa-spider bugOrdinary bugArmored';
              row2.childNodes[1 + (7 * iterator.c)].classList = 'fas fa-spider bugOrdinary bugArmored';
              row3.childNodes[4 + iterator.c].classList = 'fad fa-bug bugOrdinary bugRowDown';
            };
            if(!control.levelTwoFlag){ 
              row2.childNodes[1 + (7 * iterator.c)].classList = 'far fa-bug bugOrdinary bugManyFaces';
              row2.childNodes[4 + iterator.c].classList = 'fad fa-spider bugOrdinary bugRowDown2';
              row5.childNodes[1 + (7 * iterator.c)].classList = 'fad fa-bug bugOrdinary bugRowDown';
              row5.childNodes[4 + iterator.c].classList = 'fas fa-spider bugOrdinary bugArmored';
              row5.childNodes[5 + iterator.c].classList = 'fas fa-spider bugOrdinary bugArmored';
            };
            if(!control.levelThreeFlag){
              row1.childNodes[iterator.c].classList = 'fas fa-spider bugOrdinary bugArmored';
              row1.childNodes[8 + iterator.c].classList = 'fas fa-spider bugOrdinary bugArmored';              
              row2.childNodes[2 + (1 * iterator.c)].classList = 'fas fa-spider bugOrdinary bugArmored';
              row2.childNodes[6 + (1 * iterator.c)].classList = 'fas fa-spider bugOrdinary bugArmored';
              row3.childNodes[4 + (1 * iterator.c)].classList = 'fas fa-spider bugOrdinary bugArmored';              
              row4.childNodes[1 + (7 * iterator.c)].classList = 'far fa-bug bugOrdinary bugManyFaces';
              row4.childNodes[2 + iterator.c].classList = 'fas fa-spider bugOrdinary bugArmored';
              row4.childNodes[4 + iterator.c].classList = 'far fa-bug bugOrdinary bugManyFaces';
              row4.childNodes[6 + iterator.c].classList = 'fas fa-spider bugOrdinary bugArmored';
              row5.childNodes[iterator.c].classList = 'fas fa-spider bugOrdinary bugArmored';
              row5.childNodes[8 + iterator.c].classList = 'fas fa-spider bugOrdinary bugArmored';
            };
            if(!control.levelFourFlag){             
              row5.childNodes[0 + (2 * iterator.c)].classList = 'fad fa-spider bugOrdinary bugRowDown2';
              row5.childNodes[1 + (7 * iterator.c)].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2';
              row5.childNodes[4 + iterator.c].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp';
              row5.childNodes[3 + (3 * iterator.c)].classList = 'far fa-bug bugOrdinary bugManyFaces';
              row5.childNodes[7 + (2 * iterator.c)].classList = 'fad fa-spider bugOrdinary bugRowDown2';
            };            
            iterator.c++ 
        };

        while (iterator.d <= sum) {
            
            if(!control.levelOneFlag){   
              row4.childNodes[2 + iterator.d].classList = 'fas fa-spider bugOrdinary bugArmored';
            };
            if(!control.levelTwoFlag){
              row3.childNodes[iterator.d].classList = 'fas fa-spider bugOrdinary bugArmored';   
              row4.childNodes[iterator.d].classList = 'fas fa-spider bugOrdinary bugArmored';
            };
            if(!control.levelThreeFlag){ 
              row5.childNodes[3 + iterator.c].classList = 'fad fa-bug bugOrdinary bugRowDown';
            };
            if(!control.levelFourFlag){ 
              row2.childNodes[iterator.d].classList = 'fas fa-spider bugOrdinary bugArmored';
              row3.childNodes[iterator.d].classList = 'fal fa-bug bugOrdinary bugArmoredManyFaces';
              row4.childNodes[iterator.d].classList = 'fas fa-spider bugOrdinary bugArmored';
            };
            if(!control.levelFiveFlag){
              row2.childNodes[iterator.d].classList = 'far fa-bug bugOrdinary bugManyFaces';
              row3.childNodes[iterator.d].classList = 'far fa-bug bugOrdinary bugManyFaces';
              row4.childNodes[iterator.d].classList = 'far fa-bug bugOrdinary bugManyFaces';
              row5.childNodes[iterator.d].classList = 'fal fa-bug bugOrdinary bugArmoredManyFaces';
            };  
            iterator.d++ 
        }; 

        if(!control.levelThreeFlag){
            row2.childNodes[9].classList = 'fad fa-spider bugOrdinary bugRowDown2';
            row2.childNodes[0].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp';
            row4.childNodes[9].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2';
            row4.childNodes[0].classList = 'fad fa-spider bugOrdinary bugRowDown2';
        };

        if(!control.levelFourFlag){
            row1.childNodes[9].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2';
            row1.childNodes[0].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp';
        };   
    
        if(!control.levelFiveFlag){           
             row3.childNodes[2].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp'; 
             row3.childNodes[7].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2';          
             row4.childNodes[1].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2'; 
             row4.childNodes[8].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp';          
             row5.childNodes[0].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp'; 
             row5.childNodes[9].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2'; 
        };          
                             
      };     
    
  
   function fadeInFadeOut (fadeIn,fadeOut){
        fadeIn.classList.add('fade-in');
        fadeIn.classList.remove('fade-out');
        fadeOut.classList.add('fade-out');
        fadeOut.classList.remove('fade-in');
    };

   function buttonActive (on,off){
        on.classList.add('button-active');
        on.classList.remove('button-no-active');
        off.classList.add('button-no-active');
        off.classList.remove('button-active');
    }; 

  function playSoundShot () {
    if(!control.goPlay){ 
      if(!control.sound){ 
        soundShot.src = audioEffects[6];        
        if (!control.shot){
            soundShot.play();
        };
       };  
     };          
   };

   function playSoundGame (effect) {
    if(!control.goPlay){ 
      if(!control.sound){ 
        soundBug.src = effect;        
         if (!control.effect){
            soundBug.play();
        };
      };
     };   
   };
  function soundOnOff(){
    if(buttonSound.classList == 'fas fa-volume-up sound-on'){
       buttonSound.classList = 'fas fa-volume-slash sound-off';      
    }else{
       buttonSound.classList = 'fas fa-volume-up sound-on';       
    }
    if(!control.sound){                 
        control.sound = true;           
       }else{
        control.sound = false;             
            }; 
  };

  function CreepBug (){ 
     setTimeout ( () => {
        creepBugOne.style.animation = 'bugCreepFive 4s linear 2s';
        creepBugTwo.style.animation = 'bugCreepOne 7s linear';
        creepBugThree.style.animation = 'bugCreepThree 6.8s linear .7s';
        creepBugFour.style.animation = 'bugBlink 1.1s ease infinite'; 
      }, 900);
     setTimeout ( () => {
        creepBugOne.style.animation = 'bugCreepSix 4s linear 1s';
        creepBugTwo.style.animation = 'bugCreepTwo 5s linear .5s';
        creepBugThree.style.animation = 'bugCreepFour 3.5s linear 1s';
        creepBugFour.style.animation = 'bugBlink 2s ease';  
      }, 9000);
    }; 
    
     
      //Game Play
    document.addEventListener('click', function (event){
      let target = event.target.dataset.game;
      if(!target) return;      

      switch (target) {

        case 'play':
              fadeInFadeOut (playingField,menuGame);
              playingField.style.backgroundImage = bgLevels[0];       
              control.levelOneFlag = false;
              createBugs(5);                
              GameStart();   
            break;
        case 'option':
              fadeInFadeOut (optionPage,menuGame);            
            break;
        case 'specification':
              fadeInFadeOut (bugSpecification,menuGame);
              bugSpecification.querySelectorAll('.bug-no-active').forEach( el => {
                 el.classList.remove('bug-no-active');  
                 el.classList.add('bug-active'); 
              });            
            break;     
        case 'backMenu':
              fadeInFadeOut (menuGame,optionPage);
               bugSpecification.querySelectorAll('.bug-active').forEach( el => {
                 el.classList.remove('bug-active');  
                 el.classList.add('bug-no-active'); 
              });            
            break;
        case 'backMenu2':
              fadeInFadeOut (menuGame,bugSpecification);            
            break;               
        case 'playInGame':                                         
              control.goPlay = false;
              buttonActive (buttonPlayIn,buttonPause);              
          break;
        case 'pause':             
              control.goPlay = true;
              buttonActive (buttonPause,buttonPlayIn);          
            break;
        case 'sound':             
              soundOnOff();     
            break;       
        case 'levelTwo':
              fadeInFadeOut (playingField,levelTwo);
              playingField.style.backgroundImage = bgLevels[1];                            
              control.levelTwoFlag = false;
              createBugs(9); 
              GameStart();
            break;
        case 'levelThree':
              fadeInFadeOut (playingField,levelThree);            
              control.levelThreeFlag = false;
              createBugs(3);
              GameStart();
            break;
        case 'levelFour':
              fadeInFadeOut (playingField,levelFour);                        
              control.levelFourFlag = false;
              createBugs(9);
              GameStart();
            break;
        case 'levelFive':
              fadeInFadeOut (playingField,levelFive);
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
              fadeInFadeOut (menuGame,gameWin);                          
            break;                       
        case 'restartGame':
              control.counterLevel = 1; 
              control.levelOneFlag = true;
              control.levelTwoFlag = true;
              control.levelThreeFlag = true;
              control.levelFourFlag =  true;
              control.levelFiveFlag = true; 
              clearInterval(creepBugs);               
              fadeInFadeOut (menuGame,GameOver);                
           break;
         
                 
      };
    });

    activeScreen.addEventListener('click', function (event){
        createBullet ();
        playSoundShot ();       
    });  
     
    document.addEventListener('keydown', function(event){ 
             
        if(!control.goPlay){ 

          let offsetAndroid = android.offsetLeft;

          if (event.key == 'ArrowLeft' || event.code =='KeyA'){
                event.preventDefault(); 
                android.style.left = (offsetAndroid - control.stepAndroid) + 'px';
                arrowRight.style.color = '';
                arrowLeft.style.color = 'rgb(48, 209, 88)';
          }
          else if (event.key == 'ArrowRight' || event.code =='KeyD'){
                event.preventDefault(); 
                android.style.left =  (offsetAndroid + control.stepAndroid) + 'px';
                arrowLeft.style.color = '';
                arrowRight.style.color = 'rgb(48, 209, 88)';
          }
          if(android.offsetLeft < 30){
                android.style.left =  (offsetAndroid + control.stepAndroid) - 10 + 'px';
                arrowLeft.style.color = 'rgb(255, 69, 58)';
          }
          if (playingField.offsetWidth < (android.offsetLeft + android.offsetWidth - 60)) {
                android.style.left = (offsetAndroid - control.stepAndroid) + 10 + 'px';
                arrowRight.style.color = 'rgb(255, 69, 58)';
          }        
        };  
    });

    document.addEventListener('keyup', function(event){   


        if (event.key == 'ArrowLeft'|| event.code =='KeyA'){
            event.preventDefault(); 
            arrowLeft.style.color = '';   
        }
        if (event.key == 'ArrowRight' || event.code =='KeyD'){
            event.preventDefault();           
            arrowRight.style.color = '';        
        } 
        if(event.code == 'ArrowDown' || event.code == 'ControlRight' || event.code == 'ControlLeft' || event.code =='KeyS'){
              event.preventDefault(); 
              createBullet ();
              playSoundShot ();                
        } 
        if(event.code == 'Space'){
           event.preventDefault();
           if(!control.goPlay){                 
            control.goPlay = true;
            buttonActive (buttonPause,buttonPlayIn);
           }else{
            control.goPlay = false;
            buttonActive (buttonPlayIn,buttonPause);  
           } 
        } 
        if(event.code == 'ShiftRight' || event.code == 'ShiftLeft'){
           event.preventDefault();
           soundOnOff();
        }       
    }); 

    function createBullet () {
      if(!control.goPlay){ 
        let bullet = document.createElement('div');      
            bullet.classList = 'bullet fad fa-meteor';          
            bullet.style.left = (android.offsetLeft  - 5) + 'px';
            playingField.append(bullet); 
            clipBullets.push({bullet: bullet, pos: bullet.offsetTop, newPos: bullet.offsetTop}); 
      };       
   };
 
function GameStart(){

     
        control.goPlay = false;      

      function Extermination () {
          playingField.querySelectorAll('div').forEach( (el) => {
              el.remove(); 
          });
          bugDead.style.animation = '';
      };
       
      function RandomBugName (bug){
        let selectClass = [
          'fas fa-bug bugOrdinary',
          'fas fa-spider bugOrdinary bugArmored',       
          'fad fa-bug bugOrdinary bugRowDown',
          'fad fa-spider bugOrdinary bugRowDown2',       
          'fal fa-spider-black-widow bugOrdinary bugRowUp',
        ]; 
        let randomClass = selectClass[Math.floor(Math.random()*selectClass.length)];
        bug.classList = randomClass; 
     };

      function RandomArmoredBugName (bug){
        let selectClass = [
          'fas fa-bug bugOrdinary bugArmored',
          'fas fa-spider bugOrdinary bugArmored',       
          'fad fa-bug bugOrdinary bugRowDown bugRowDownArmored',
          'fad fa-spider bugOrdinary bugRowDown2 bugRowDownArmored',
          'fas fa-spider-black-widow bugOrdinary bugRowUp2 bugRowUpArmored',
          'fal fa-spider-black-widow bugOrdinary bugRowUp bugRowUpArmored',         
        ]; 
        let randomClass = selectClass[Math.floor(Math.random()*selectClass.length)];
        bug.classList = randomClass; 
     };

        // подсчет длинны гипотенузы по теореме Пифагора
      function Distance(a, b) {
        return Math.sqrt(
          Math.pow(Math.abs(a.left - b.left), 2) + 
          Math.pow(Math.abs(a.top  - b.top ), 2)
        );
      }

      function collision(el,bul) {
     
          el.getBoundingClientRect();
          bul.getBoundingClientRect(); 

      let radius1 = (el.offsetHeight / 2);
      let radius2 = (bul.offsetHeight / 2);
      
      // растояние между центрами обьектов
      let distance = Distance(
         center(el), 
         center(bul)
      );
       
       if (distance < (radius1 + radius2)) {
        
          
          let classCheck = el.className; 
  
          switch (classCheck) {
            case 'fas fa-bug bugOrdinary bugArmored':
                   playSoundGame (audioEffects[1]);          
                   el.classList.remove('bugArmored');
                   bul.remove();
                break; 
             case 'fas fa-spider bugOrdinary bugArmored':
                   playSoundGame (audioEffects[1]);         
                   el.classList.remove('bugArmored');                   
                   bul.remove();
                break;           
             case 'fal fa-spider bugOrdinary bugArmored':
                   playSoundGame (audioEffects[1]);          
                   el.classList.remove('bugArmored');
                   bul.remove();                  
                break;
             case 'fad fa-bug bugOrdinary bugRowDown bugRowDownArmored':
                   playSoundGame (audioEffects[1]);          
                   el.classList.remove('bugRowDownArmored');
                   bul.remove();                  
                break;    
             case 'fad fa-spider bugOrdinary bugRowDown2 bugRowDownArmored':
                   playSoundGame (audioEffects[1]);          
                   el.classList.remove('bugRowDownArmored');
                   bul.remove();                  
                break;
             case 'fal fa-spider-black-widow bugOrdinary bugRowUp bugRowUpArmored':
                   playSoundGame (audioEffects[1]);          
                   el.classList.remove('bugRowUpArmored');
                   bul.remove();                  
                break;     
             case 'fas fa-spider-black-widow bugOrdinary bugRowUp2 bugRowUpArmored':
                   playSoundGame (audioEffects[1]);          
                   el.classList.remove('bugRowUpArmored');
                   bul.remove();                  
                break;         
             case 'far fa-bug bugOrdinary bugManyFaces':
                   playSoundGame (audioEffects[2]);   
                   RandomBugName (el);
                   bul.remove();              
                break;
             case 'fal fa-bug bugOrdinary bugArmoredManyFaces':
                   playSoundGame (audioEffects[2]); 
                   RandomArmoredBugName (el);
                   bul.remove();                             
                break;
             case 'fad fa-bug bugOrdinary bugRowDown':
                   speed.directionRow = speed.directionRow + 1;
                   playSoundGame (audioEffects[0]);              
                   el.remove();
                   bul.remove();                             
                break;
              case 'fad fa-spider bugOrdinary bugRowDown2':
                   speed.directionRow = speed.directionRow + 2;
                   playSoundGame (audioEffects[0]);              
                   el.remove();
                   bul.remove();
                break; 
              case 'fal fa-spider-black-widow bugOrdinary bugRowUp':
                   speed.directionRow = speed.directionRow - 1;
                   playSoundGame (audioEffects[0]);              
                   el.remove();
                   bul.remove();
                break;  
              case 'fas fa-spider-black-widow bugOrdinary bugRowUp2':
                   speed.directionRow = speed.directionRow - 2;
                   playSoundGame (audioEffects[0]);              
                   el.remove();
                   bul.remove();
                break;        
                default:
                  playSoundGame (audioEffects[0]);
                  el.remove();
                  bul.remove();                  
                break;
          };
      }else{
        return;
      }

      };  

      // функция которая вычисляет координаты центра блока
      function center (el){
      let object = el.getBoundingClientRect();
      
      // координаты относительно документа
      // (pageYOffset и pageXOffset это размер прокрутки, если она есть)
      let y = (object.top + pageYOffset);
      let x = (object.left + pageXOffset);

      return {
        top: y + (el.offsetHeight / 2), // y + половина высоты
        left: x + (el.offsetWidth / 2)  // x + половина ширины
        };
      };    
   
     
      var row = {

            one: document.getElementById('row1'),
            two: document.getElementById('row2'),
            three: document.getElementById('row3'),
            four: document.getElementById('row4'),
            five: document.getElementById('row5')           

          },
          bugRow ={
            one: row.one.querySelectorAll('i'),
            two: row.two.querySelectorAll('i'),
            three: row.three.querySelectorAll('i'),
            four: row.four.querySelectorAll('i'),
            five: row.five.querySelectorAll('i')
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
            directionRow: 1 
        }; 

      if(!control.levelTwoFlag){ 
          speed.offsetOne = 2;        
          speed.offsetTwo = 2.4;
          speed.offsetThree = 2.3;
          speed.offsetFour = 2.8;
      }
      if(!control.levelThreeFlag){ 
          speed.offsetOne = 3.1;        
          speed.offsetTwo = 3.2;
          speed.offsetThree = 3.3;
          speed.offsetFour = 3.4;
          speed.offsetFive = 3.5;
      }
      if(!control.levelFourFlag){
          speed.offsetOne = 4.1;        
          speed.offsetTwo = 4;
          speed.offsetThree = 3;
          speed.offsetFour = 4;
          speed.offsetFive = 4;
      }
      if(!control.levelFiveFlag){
          speed.offsetOne = 5;        
          speed.offsetTwo = 5;
          speed.offsetThree = 5;
          speed.offsetFour = 5;
          speed.offsetFive = 5;
      }     
    
      

  var update = (step) => {      
      
      if(!control.goPlay){ 

        clipBullets.forEach((o)=>{
          o.bullet.style.bottom = (o.pos - (o.newPos -= 15)) + 'px';                 
      
       if(o.newPos < 0){
          o.bullet.remove();            
          clipBullets.shift(o);
       };

       if(o.bullet.getBoundingClientRect().top < activeScreen.getBoundingClientRect().top - 5){
          o.bullet.remove();
       };    
         
       if(o.bullet.getBoundingClientRect().top < row.five.getBoundingClientRect().bottom){
          playingField.querySelectorAll('.bugOrdinary').forEach( el => {          
              collision(el,o.bullet);     
          });          
       };
        
      });
        playingField.querySelectorAll('i').forEach( (el,i) => {            
          control.victoryResults = i;                   
            if(el.getBoundingClientRect().top >= (android.getBoundingClientRect().bottom - 70)){
                android.style.color = 'rgb(28, 28, 30)';
                playSoundGame (audioEffects[4]);   
                control.goPlay = true;                            
                Extermination ();
                fadeInFadeOut (GameOver,playingField);
                CreepBug ();
                creepBugs = setInterval(CreepBug, 14700);                                        
            };   
        });

          countlevels.innerHTML = control.counterLevel;
          countDeadBugs.innerHTML = control.victoryResults;
        
          if(control.victoryResults == 0){             
               control.counterLevel++
              if(control.counterLevel == 2){
                playSoundGame (audioEffects[3]);               
                fadeInFadeOut(levelTwo,playingField);                 
                control.goPlay = true;
                control.levelOneFlag = true;
                Extermination ();             
              };
              if(control.counterLevel == 3){
                playSoundGame (audioEffects[3]);               
                fadeInFadeOut(levelThree,playingField);                 
                control.goPlay = true;
                control.levelTwoFlag = true;
                Extermination ();                                                
              };
              if(control.counterLevel == 4){
                playSoundGame (audioEffects[3]);
                fadeInFadeOut(levelFour,playingField);                 
                control.goPlay = true;               
                control.levelThreeFlag = true;
                Extermination ();                                                  
              };
              if(control.counterLevel == 5){
                playSoundGame (audioEffects[3]);
                fadeInFadeOut(levelFive,playingField);                 
                control.goPlay = true;                
                control.levelFourFlag = true;
                Extermination ();                                                   
              };
              if(control.counterLevel == 6){
                playSoundGame (audioEffects[5]);
                fadeInFadeOut(gameWin,playingField);                 
                control.goPlay = true;
                Extermination ();              
              };          
            }; 
    

      speed.offsetYrowOne += .1 * speed.directionRow;
      speed.offsetYrowTwo += .1 * speed.directionRow;
      speed.offsetYrowThree += .1 * speed.directionRow;
      speed.offsetYrowFour += .1 * speed.directionRow;
      speed.offsetYrowFive += .1 * speed.directionRow;
    
      if(speed.offsetYrowOne < 15){
         speed.directionRow = 1.5;        
      }

    //rowOneBugs
        bugRow.one.forEach( (el,i) =>{

          bugsOffsetOne['x' + i] += speed.offsetOne * speed.direction1;

          if (playingField.offsetWidth <= (el.offsetLeft + el.offsetWidth)){
                speed.direction1 = -1;                
          } 
          if(el.offsetLeft <-1){
                speed.direction1 = 1;                
          };
          
        });
   
        bugRow.two.forEach( (el,i) => {

          bugsOffsetTwo['x' + i] -= speed.offsetTwo * speed.direction2;

            if(el.offsetLeft <-1){
                speed.direction2 = -1;
            } 
            if(playingField.offsetWidth <= (el.offsetLeft + el.offsetWidth)){
                speed.direction2 = 1;
            }        
        });
      //rowThreeBugs
        bugRow.three.forEach( (el,i) => {

          bugsOffsetThree['x' + i] += speed.offsetThree * speed.direction3;

            if (playingField.offsetWidth <= (el.offsetLeft + el.offsetWidth)){
                speed.direction3 = -1;                
            } 
            if(el.offsetLeft <-1){
                speed.direction3 = 1;                
            }         
        });
      //rowFourBugs
        bugRow.four.forEach( (el,i) => {

          bugsOffsetFour['x' + i] -= speed.offsetFour * speed.direction4;

            if(el.offsetLeft <-1){
                speed.direction4 = -1;
            } 
            if(playingField.offsetWidth <= (el.offsetLeft + el.offsetWidth)){
                speed.direction4 = 1;
            }        
        });
      //rowFiveBugs
        bugRow.five.forEach( (el,i) => {

          bugsOffsetFive['x' + i] -= speed.offsetFive * speed.direction5;

            if (playingField.offsetWidth <= (el.offsetLeft + el.offsetWidth)) {
                speed.direction5 = 1;                
            } 
            if(el.offsetLeft <-1){             
                speed.direction5 = -1;                
            }         
        });  
      };   
    };
     
    var render = () => {

      bugRow.one.forEach( (el,i) =>{
          el.style.left = bugsOffsetOne['x' + i] + 'px';
      });

      bugRow.two.forEach( (el,i) =>{
          el.style.left = bugsOffsetTwo['x' + i] + 'px';
      });

      bugRow.three.forEach( (el,i) =>{
          el.style.left = bugsOffsetThree['x' + i] + 'px';
      });
      
      bugRow.four.forEach( (el,i) =>{
          el.style.left = bugsOffsetFour['x' + i] + 'px';
      });

      bugRow.five.forEach( (el,i) =>{
          el.style.left = bugsOffsetFive['x' + i] + 'px';
      }); 

      row.one.style.top = speed.offsetYrowOne + 'px';
      row.two.style.top = speed.offsetYrowTwo + 'px';
      row.three.style.top = speed.offsetYrowThree + 'px';
      row.four.style.top = speed.offsetYrowFour + 'px';
      row.five.style.top = speed.offsetYrowFive + 'px';              
       
    };

   // переопределить requestAnimationFrame, чтобы эмулировать различное количество FPS (одинаково во всех примерах игрового цикла)
    window.requestAnimationFrame = (func) => {
      clearTimeout(window.rafTimer);
      window.rafTimer = setTimeout(func, 1000 / (window.maxFPS || 60));
    };

    // game loop
    var last = performance.now(),
        step = 1 / 60, // обновление должно вызываться 60 раз в секунду
        dt = 0,
        now;

    var frame = () => {
      now = performance.now();
      dt += (now - last) / 1000;
      while(dt > step) {
        dt = dt - step;
        update(step);
      }
      last = now;

      render();
      requestAnimationFrame(frame); 
    }
      
      requestAnimationFrame(frame); 
    };
  
      
    }());
  });
