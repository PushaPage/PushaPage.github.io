 window.addEventListener('load', function() {

    ;{

      let output = document.getElementById('output'),
          laps = document.querySelector('.laps-box'),
          alert = document.querySelector('.alert'),
          toggle = false;   
       

      class Watch {

        constructor () {

          this.min = '00';
          this.sec = '00';
          this.ms = 0;
          this.num = 0;      
         
        };

        render(){
          
          this.ms++;        

          if(this.ms > 9){

            this.ms++;
            this.sec++;          
            this.ms = 0;
            if (this.sec < 10) this.sec = '0' + this.sec;

          };

          if(this.sec > 59){

            this.sec++;
            this.min++;
            this.sec = '00';
            if (this.min < 10) this.min = '0' + this.min;

          };

          this.timer = setTimeout(() => this.render(), 100);
        };      

        start () {
            
            this.render();                      
        };

        stop () {

            clearTimeout(this.timer);                  
        };

      }; 

      class StopWatch extends Watch {
        

        render() {

          super.render();

          output.innerHTML = `<span class="digital">${this.min}</span>:<span class="digital">${this.sec}</span>,<span class="digital">${this.ms}</span>`;
        };

        reset() {

          super.stop();
          this.min = '00';
          this.sec = '00';
          this.ms = 0;
           output.innerHTML = `<span class="digital">${this.min}</span>:<span class="digital">${this.sec}</span>,<span class="digital">${this.ms}</span>`;
        };

      };

      class lapWatch extends Watch {      

        lap () {

          this.num++;  

          laps.insertAdjacentHTML('afterBegin', [
            `<p class="lap-time">
                <span class="lap-number">
                <i class="fas fa-running icon-font"></i>
                <i class="fas fa-history icon-font"></i>#${this.num}:</span>
                <span class="digital">${this.min}</span>:         
                <span class="digital">${this.sec}</span>,
                <span class="digital">${this.ms}</span>  
            </p>`
          ].join('') );

          this.min = '00';
          this.sec = '00';
          this.ms = 0;s
           
        };

      };

      let stopwatch = new StopWatch (),
          lapwatch = new lapWatch ();
       
       
      document.addEventListener('click', (event) => {
              
              let target = event.target.dataset.action;

              if(!target) return;

              switch (target) {

                  case 'start':

                      if(!toggle){

                          stopwatch.start();
                          lapwatch.start();
                          alert.style.top = '-200px';
                          toggle = true;
                      }  
                      
                  break;

                  case 'stop':
                      
                      stopwatch.stop();
                      lapwatch.stop();
                      toggle = false;   
                  break;

                  case 'lap':
                      if(!toggle) {

                        alert.style.top = 0;
                      }else{

                        lapwatch.lap();
                      };                      
                  break;

                  case 'reset':

                      stopwatch.reset();
                      laps.innerHTML = '';
                      lapwatch.num = 0;
                      toggle = false;                   
                  break;            
        }         

      });
 
    };
  });    