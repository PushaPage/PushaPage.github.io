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


    
    var stepAndroid = 10,        
        goPlay = true,
        sound = false,
        counterLevel = 1,
        levelOneFlag = true,
        levelTwoFlag = true,
        levelThreeFlag = true,
        levelFourFlag = true,
        levelFiveFlag = true,       
        victoryResults = null,
        creepBugs = null,
        soundShot = new Audio(),
        soundBug = new Audio(),
        bugsOffsetOne = {},
        bugsOffsetTwo = {},
        bugsOffsetThree = {},
        bugsOffsetFour = {},
        bugsOffsetFive = {},       
        audioEffects = [
            'audio/bugOrdinary.mp3',
            'audio/bugArmoded.mp3',
            'audio/bugManyFaces.mp3', 
            'audio/levelUp.mp3', 
            'audio/gameOver.mp3',
            'audio/gameWin.mp3',            
            ],         
        clipBullets = [];
        for(let a = 2; a <= 9; a++){
          console.log(a)
        }

            
      
    function createBugs() {

       for(let i = 1; i<=5; i++){               
           let el = document.createElement('div');
               el.setAttribute('id', 'row' + i);               
               el.style.top = 20 + (50 * (i - 1)) + 'px';
               el.style.pointerEvents = 'none';               
               playingField.appendChild(el);                                                     
        };                                

        for(let i = 0; i<=9; i++){
           let el = document.createElement('i');              
               el.classList = 'fas fa-bug bugOrdinary';                          
               el.style.left = 240 + (50 * i) + 'px';                                                  
               row1.appendChild(el);
               row2.appendChild(el.cloneNode(true));
               row3.appendChild(el.cloneNode(true));
               row4.appendChild(el.cloneNode(true));
               row5.appendChild(el.cloneNode(true));
               bugsOffsetOne['x'+i] = el.offsetLeft;                       
        }; 


          bugsOffsetTwo = Object.setPrototypeOf({}, bugsOffsetOne);
          bugsOffsetThree = Object.setPrototypeOf({}, bugsOffsetOne);
          bugsOffsetFour = Object.setPrototypeOf({}, bugsOffsetOne);
          bugsOffsetFive = Object.setPrototypeOf({}, bugsOffsetOne);         

        android.style.color = 'rgb(48, 209, 88)';
        bugDead.style.animation = 'bugDead 3.5s linear infinite';

           let rowOneBugs = row1.querySelectorAll('i');
               rowTwoBugs = row2.querySelectorAll('i');
               rowThreeBugs = row3.querySelectorAll('i');
               rowFourBugs = row4.querySelectorAll('i');
               rowFiveBugs = row5.querySelectorAll('i');


        if(!levelOneFlag){   
            rowOneBugs[4].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowOneBugs[5].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowTwoBugs[1].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowTwoBugs[8].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowThreeBugs[4].classList = 'fad fa-bug bugOrdinary bugRowDown';
            rowThreeBugs[5].classList = 'fad fa-bug bugOrdinary bugRowDown';
            rowFourBugs[2].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFourBugs[3].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFourBugs[4].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFourBugs[5].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFourBugs[6].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFourBugs[7].classList = 'fas fa-spider bugOrdinary bugArmored';    
        };
        if(!levelTwoFlag){
            rowThreeBugs.forEach((el)=>{
               el.classList = 'fas fa-spider bugOrdinary bugArmored';
            });
            rowFourBugs.forEach((el)=>{
               el.classList = 'fas fa-spider bugOrdinary bugArmored';
            });
            rowTwoBugs[1].classList = 'far fa-bug bugOrdinary bugManyFaces';
            rowTwoBugs[4].classList = 'fad fa-spider bugOrdinary bugRowDown2';
            rowTwoBugs[5].classList = 'fad fa-spider bugOrdinary bugRowDown2';
            rowTwoBugs[8].classList = 'far fa-bug bugOrdinary bugManyFaces';
            rowFiveBugs[2].classList = 'fad fa-bug bugOrdinary bugRowDown';
            rowFiveBugs[4].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFiveBugs[5].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFiveBugs[6].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFiveBugs[9].classList = 'fad fa-bug bugOrdinary bugRowDown'; 
        };
        if(!levelThreeFlag){        
            rowOneBugs[0].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowOneBugs[1].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowOneBugs[8].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowOneBugs[9].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowTwoBugs[0].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp';
            rowTwoBugs[9].classList = 'fad fa-spider bugOrdinary bugRowDown2';
            rowTwoBugs[2].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowTwoBugs[3].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowTwoBugs[6].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowTwoBugs[7].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowThreeBugs[4].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowThreeBugs[5].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFourBugs[9].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2';
            rowFourBugs[0].classList = 'fad fa-spider bugOrdinary bugRowDown2';
            rowFourBugs[1].classList = 'far fa-bug bugOrdinary bugManyFaces';
            rowFourBugs[8].classList = 'far fa-bug bugOrdinary bugManyFaces';
            rowFourBugs[2].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFourBugs[3].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFourBugs[4].classList = 'far fa-bug bugOrdinary bugManyFaces';
            rowFourBugs[5].classList = 'far fa-bug bugOrdinary bugManyFaces';
            rowFourBugs[6].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFourBugs[7].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFiveBugs[8].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFiveBugs[9].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFiveBugs[0].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFiveBugs[1].classList = 'fas fa-spider bugOrdinary bugArmored';
            rowFiveBugs[3].classList = 'fad fa-bug bugOrdinary bugRowDown';
            rowFiveBugs[4].classList = 'fad fa-bug bugOrdinary bugRowDown';
            rowFiveBugs[5].classList = 'fad fa-bug bugOrdinary bugRowDown';
            rowFiveBugs[6].classList = 'fad fa-bug bugOrdinary bugRowDown';     
        };
        if(!levelFourFlag){
            rowOneBugs[0].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2';
            rowOneBugs[9].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp';
            rowTwoBugs.forEach((el)=>{
               el.classList = 'fas fa-spider bugOrdinary bugArmored';
            });
            rowThreeBugs.forEach((el)=>{
               el.classList = 'fal fa-bug bugOrdinary bugArmoredManyFaces';
            });
            rowFourBugs.forEach((el)=>{
               el.classList = 'fas fa-spider bugOrdinary bugArmored';
            });
            rowFiveBugs[0].classList = 'fad fa-spider bugOrdinary bugRowDown2';
            rowFiveBugs[1].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2';
            rowFiveBugs[2].classList = 'fad fa-spider bugOrdinary bugRowDown2';
            rowFiveBugs[3].classList = 'far fa-bug bugOrdinary bugManyFaces';
            rowFiveBugs[4].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp';
            rowFiveBugs[5].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp';
            rowFiveBugs[6].classList = 'far fa-bug bugOrdinary bugManyFaces';
            rowFiveBugs[7].classList = 'fad fa-spider bugOrdinary bugRowDown2';
            rowFiveBugs[8].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2';
            rowFiveBugs[9].classList = 'fad fa-spider bugOrdinary bugRowDown2'; 
        } 
        if(!levelFiveFlag){
            rowTwoBugs.forEach((el)=>{
               el.classList = 'far fa-bug bugOrdinary bugManyFaces';
            });
            rowThreeBugs.forEach((el)=>{
               el.classList = 'far fa-bug bugOrdinary bugManyFaces';
            });
            rowThreeBugs[2].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp'; 
            rowThreeBugs[7].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2';
            rowFourBugs.forEach((el)=>{
               el.classList = 'far fa-bug bugOrdinary bugManyFaces';
            });
            rowFourBugs[1].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2'; 
            rowFourBugs[8].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp';
            rowFiveBugs.forEach((el)=>{
               el.classList = 'fal fa-bug bugOrdinary bugArmoredManyFaces';
            });
            rowFiveBugs[0].classList = 'fal fa-spider-black-widow bugOrdinary bugRowUp'; 
            rowFiveBugs[9].classList = 'fas fa-spider-black-widow bugOrdinary bugRowUp2'; 
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
    if(!goPlay){ 
      if(!sound){ 
        soundShot.src = 'audio/shot.mp3';        
        soundShot.play();
       };  
     };          
   };

   function playSoundGame (effect) {
    if(!goPlay){ 
      if(!sound){ 
        soundBug.src = effect;        
        soundBug.play();
      };
     };   
   };
  function soundOnOff(){
    if(buttonSound.classList == 'fas fa-volume-up sound-on'){
       buttonSound.classList = 'fas fa-volume-slash sound-off';      
    }else{
       buttonSound.classList = 'fas fa-volume-up sound-on';       
    }
    if(!sound){                 
        sound = true;           
       }else{
        sound = false;             
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
              playingField.style.backgroundImage = 'url("img/bg-Field.jpg")';                             
              goPlay = false;
              levelOneFlag = false;
              createBugs();                
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
              goPlay = false;
              buttonActive (buttonPlayIn,buttonPause);              
          break;
        case 'pause':             
              goPlay = true;
              buttonActive (buttonPause,buttonPlayIn);          
            break;
        case 'sound':             
              soundOnOff();     
            break;       
        case 'levelTwo':
              fadeInFadeOut (playingField,levelTwo);
              playingField.style.backgroundImage = 'url("img/bg-Field2.jpg")';               
              goPlay = false;             
              levelTwoFlag = false;
              createBugs();
              GameStart();
            break;
        case 'levelThree':
              fadeInFadeOut (playingField,levelThree);            
              goPlay = false;
              levelThreeFlag = false;
              createBugs();
              GameStart();
            break;
        case 'levelFour':
              fadeInFadeOut (playingField,levelFour);                        
              goPlay = false;
              levelFourFlag = false;
              createBugs();
              GameStart();
            break;
        case 'levelFive':
              fadeInFadeOut (playingField,levelFive);
              playingField.style.backgroundImage = 'url("img/bg-Field3.jpg")';           
              goPlay = false;
              levelFiveFlag = false;
              createBugs();
              GameStart();
            break; 
        case 'winRestartGame':
              counterLevel = 1;  
              levelOneFlag = true;
              levelTwoFlag = true;
              levelThreeFlag = true;
              levelFourFlag = true;
              levelFiveFlag = true;              
              fadeInFadeOut (menuGame,gameWin);                          
            break;                       
        case 'restartGame':
              counterLevel = 1; 
              levelOneFlag = true;
              levelTwoFlag = true;
              levelThreeFlag = true;
              levelFourFlag =  true;
              levelFiveFlag = true; 
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
             
        if(!goPlay){ 

          let offsetAndroid = android.offsetLeft;

          if (event.key == 'ArrowLeft' || event.code =='KeyA'){
                event.preventDefault(); 
                android.style.left = (offsetAndroid - stepAndroid) + 'px';
                arrowRight.style.color = '';
                arrowLeft.style.color = 'rgb(48, 209, 88)';
          }
          else if (event.key == 'ArrowRight' || event.code =='KeyD'){
                event.preventDefault(); 
                android.style.left =  (offsetAndroid + stepAndroid) + 'px';
                arrowLeft.style.color = '';
                arrowRight.style.color = 'rgb(48, 209, 88)';
          }
          if(android.offsetLeft < 30){
                android.style.left =  (offsetAndroid + stepAndroid) - 10 + 'px';
                arrowLeft.style.color = 'rgb(255, 69, 58)';
          }
          if (playingField.offsetWidth < (android.offsetLeft + android.offsetWidth - 60)) {
                android.style.left = (offsetAndroid - stepAndroid) + 10 + 'px';
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
           if(!goPlay){                 
            goPlay = true;
            buttonActive (buttonPause,buttonPlayIn);
           }else{
            goPlay = false;
            buttonActive (buttonPlayIn,buttonPause);  
           } 
        } 
        if(event.code == 'ShiftRight' || event.code == 'ShiftLeft'){
           event.preventDefault();
           soundOnOff();
        }       
    }); 

    function createBullet () {
      if(!goPlay){ 
        let bullet = document.createElement('div');      
            bullet.classList = 'bullet fad fa-meteor';          
            bullet.style.left = (android.offsetLeft  - 5) + 'px';
            playingField.append(bullet); 
            clipBullets.push({bullet: bullet, pos: bullet.offsetTop, newPos: bullet.offsetTop}); 
      };       
   };
 
function GameStart(){


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
      }

      var rowOneBugs = row1.querySelectorAll('i');
          rowTwoBugs = row2.querySelectorAll('i');
          rowThreeBugs = row3.querySelectorAll('i');
          rowFourBugs = row4.querySelectorAll('i');
          rowFiveBugs = row5.querySelectorAll('i');
     
   
     
      
      var   speed = {

            offsetOne: 2,
            offsetTwo: 2,
            offsetThree: 2,
            offsetFour: 2,
            offsetFive: 2,
            offsetYrowOne: row1.offsetTop,
            offsetYrowTwo: row2.offsetTop,
            offsetYrowThree: row3.offsetTop,
            offsetYrowFour: row4.offsetTop,
            offsetYrowFive: row5.offsetTop,
            direction1: 1,
            direction2: 1,
            direction3: 1,
            direction4: 1,
            direction5: -1,
            directionRow: 1 
        }; 

      if(!levelTwoFlag){ 
          speed.offsetOne = 2;        
          speed.offsetTwo = 2.4;
          speed.offsetThree = 2.3;
          speed.offsetFour = 2.8;
      }
      if(!levelThreeFlag){ 
          speed.offsetOne = 3.1;        
          speed.offsetTwo = 3.2;
          speed.offsetThree = 3.3;
          speed.offsetFour = 3.4;
          speed.offsetFive = 3.5;
      }
      if(!levelFourFlag){
          speed.offsetOne = 4.1;        
          speed.offsetTwo = 4;
          speed.offsetThree = 3;
          speed.offsetFour = 4;
          speed.offsetFive = 4;
      }
      if(!levelFiveFlag){
          speed.offsetOne = 5;        
          speed.offsetTwo = 5;
          speed.offsetThree = 5;
          speed.offsetFour = 5;
          speed.offsetFive = 5;
      }     
    
      

  var update = (step) => {      
      
      if(!goPlay){ 

        clipBullets.forEach((o)=>{
          o.bullet.style.bottom = (o.pos - (o.newPos -= 15)) + 'px';                 
      
       if(o.newPos < 0){
          o.bullet.remove();            
          clipBullets.shift(o);
       };

       if(o.bullet.getBoundingClientRect().top < activeScreen.getBoundingClientRect().top - 5){
          o.bullet.remove();
       };    
         
       if(o.bullet.getBoundingClientRect().top < row5.getBoundingClientRect().bottom){
          playingField.querySelectorAll('.bugOrdinary').forEach( el => {          
              collision(el,o.bullet);     
          });          
       };
        
      });
        playingField.querySelectorAll('i').forEach( (el,i) => {            
          victoryResults = i;                   
            if(el.getBoundingClientRect().top >= (android.getBoundingClientRect().bottom - 70)){
                android.style.color = 'rgb(28, 28, 30)';
                playSoundGame (audioEffects[4]);   
                goPlay = true;                            
                Extermination ();
                fadeInFadeOut (GameOver,playingField);
                CreepBug ();
                creepBugs = setInterval(CreepBug, 14700);                                        
            };   
        });

          countlevels.innerHTML = counterLevel;
          countDeadBugs.innerHTML = victoryResults;
        
          if(victoryResults == 0){             
               counterLevel++
              if(counterLevel == 2){
                playSoundGame (audioEffects[3]);              
                Extermination ();
                fadeInFadeOut(levelTwo,playingField);                 
                goPlay = true;
                levelOneFlag = true;             
              };
              if(counterLevel == 3){
                playSoundGame (audioEffects[3]);   
                Extermination ();
                fadeInFadeOut(levelThree,playingField);                 
                goPlay = true;
                levelTwoFlag = true;                                                
              };
              if(counterLevel == 4){
                playSoundGame (audioEffects[3]);   
                Extermination ();
                fadeInFadeOut(levelFour,playingField);                 
                goPlay = true;               
                levelThreeFlag = true;                                                  
              };
              if(counterLevel == 5){
                playSoundGame (audioEffects[3]);   
                Extermination ();
                fadeInFadeOut(levelFive,playingField);                 
                goPlay = true;                
                levelFourFlag = true;                                                   
              };
              if(counterLevel == 6){
                playSoundGame (audioEffects[5]);   
                Extermination ();
                fadeInFadeOut(gameWin,playingField);                 
                goPlay = true;              
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
        rowOneBugs.forEach( (el,i) =>{

          bugsOffsetOne['x' + i] += speed.offsetOne * speed.direction1;

          if (playingField.offsetWidth <= (el.offsetLeft + el.offsetWidth)){
                speed.direction1 = -1;                
          } 
          if(el.offsetLeft <-1){
                speed.direction1 = 1;                
          };
          
        });
   
        rowTwoBugs.forEach( (el,i) => {

          bugsOffsetTwo['x' + i] -= speed.offsetTwo * speed.direction2;

            if(el.offsetLeft <-1){
                speed.direction2 = -1;
            } 
            if(playingField.offsetWidth <= (el.offsetLeft + el.offsetWidth)){
                speed.direction2 = 1;
            }        
        });
      //rowThreeBugs
        rowThreeBugs.forEach( (el,i) => {

          bugsOffsetThree['x' + i] += speed.offsetThree * speed.direction3;

            if (playingField.offsetWidth <= (el.offsetLeft + el.offsetWidth)){
                speed.direction3 = -1;                
            } 
            if(el.offsetLeft <-1){
                speed.direction3 = 1;                
            }         
        });
      //rowFourBugs
        rowFourBugs.forEach( (el,i) => {

          bugsOffsetFour['x' + i] -= speed.offsetFour * speed.direction4;

            if(el.offsetLeft <-1){
                speed.direction4 = -1;
            } 
            if(playingField.offsetWidth <= (el.offsetLeft + el.offsetWidth)){
                speed.direction4 = 1;
            }        
        });
      //rowFiveBugs
        rowFiveBugs.forEach( (el,i) => {

          bugsOffsetFive['x' + i] -= speed.offsetFive * speed.direction5;

            if (playingField.offsetWidth <= (bugsOffsetFive['x' + i] + el.offsetWidth)) {
                speed.direction5 = 1;                
            } 
            if(el.offsetLeft <-1){             
                speed.direction5 = -1;                
            }         
        });  
      };   
    };
     
    var render = () => {

      rowOneBugs.forEach( (el,i) =>{
          el.style.left = bugsOffsetOne['x' + i] + 'px';
      });

      rowTwoBugs.forEach( (el,i) =>{
          el.style.left = bugsOffsetTwo['x' + i] + 'px';
      });

      rowThreeBugs.forEach( (el,i) =>{
          el.style.left = bugsOffsetThree['x' + i] + 'px';
      });
      
      rowFourBugs.forEach( (el,i) =>{
          el.style.left = bugsOffsetFour['x' + i] + 'px';
      });

      rowFiveBugs.forEach( (el,i) =>{
          el.style.left = bugsOffsetFive['x' + i] + 'px';
      }); 

      row1.style.top = speed.offsetYrowOne + 'px';
      row2.style.top = speed.offsetYrowTwo + 'px';
      row3.style.top = speed.offsetYrowThree + 'px';
      row4.style.top = speed.offsetYrowFour + 'px';
      row5.style.top = speed.offsetYrowFive + 'px';              
       
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
