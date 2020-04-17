
	window.addEventListener('load', function() {			
	    //TIMER
            class CountdownTimer {

            constructor(event, htmlout) {
                
                this.event = event;
                this.htmlOut = htmlout;            
            }

            render() {

                let nowDate = new Date();

                let totlRmans = this.event.getTime() - nowDate.getTime();


                if (totlRmans > 1) {

                    let secRmans = parseInt(totlRmans / 1000);

                    let fulDaysRmans = parseInt(secRmans / (24 * 60 * 60)),
                        secLastDay = secRmans - fulDaysRmans * 24 * 3600;

                    let fulHoursRmans = parseInt(secLastDay / 3600),
                        secInLastHour = secLastDay - fulHoursRmans * 3600;

                    let minRmans = parseInt(secInLastHour / 60);

                    if (fulDaysRmans < 10 ) { fulDaysRmans = '0' + fulDaysRmans };                

                    if (fulHoursRmans < 10 ) { fulHoursRmans = '0' + fulHoursRmans };

                    if (minRmans < 10 ) { minRmans = '0' + minRmans };

                    let lastSec = secInLastHour - minRmans * 60;

                    if (lastSec < 10) { lastSec = '0' + lastSec};


                    this.htmlOut.forEach( timer => {

                        timer.querySelectorAll('.price-timer__number').forEach( el => {

                            switch (el.dataset.timer) {

                                case 'days':

                                    el.innerHTML = fulDaysRmans; 
                                    break;

                                case 'hours':

                                    el.innerHTML = fulHoursRmans;
                                    break;

                                case 'min':

                                    el.innerHTML = minRmans;
                                    break;

                                case 'sec':

                                    el.innerHTML = lastSec;
                                    break;    

                                default:

                                    return false;
                            }
                        })

                    })                                     

                    setTimeout(() => this.render(), 1000);

                } else {

                    this.htmlOut.forEach( timer => {

                        timer.querySelectorAll('.price-timer__number').forEach( el => {

                            el.innerHTML = '00';
                            el.classList.add('price-timer__number_time-over');

                        })
                    }) 
                }                
            }

            out () {

                this.render();          
            }
        };

        
        let priceTimer = document.querySelectorAll('.price-timer'),
            eventDate = new Date('April 26, 2020 12:25:00');

        let countDown = new CountdownTimer(eventDate, priceTimer);

            countDown.out();

    
    //SLIDER
        let swiper = new Swiper('.slider-reviews__container', {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            speed: 1500,
            initialSlide: 0, 
            pagination: {
                el: '.slider-reviews__pagination',           
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-reviews__button-next',
                prevEl: '.slider-reviews__button-prev',
            },
            breakpoints: {       
                1200: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                991: {
                  initialSlide: 1,  
                  slidesPerView: 1,
                  spaceBetween: 25
                }                        
            },
        });

    //POP UP

        let popUp = document.querySelector('.wrap-pop-up');
            
        let popVisit = localStorage.getItem('visit') || 'no-visit';       
        
            popUp.dataset.action = popVisit;
       
        popUp.addEventListener('click', function (e) {

            let el = e.target;

                if (el.matches('[data-action="close"]')) { 

                    setTimeout( ()=> {

                        this.classList.remove('wrap-pop-up_show');
                        this.dataset.action = 'visited';

                        localStorage.setItem('visit', 'visited');

                    }, 100);                    
                }  
        });

        window.addEventListener('scroll', () => {

            if (pageYOffset => 200) {

                if (popUp.dataset.action === 'no-visit') {
                   
                    popUp.classList.add('wrap-pop-up_show');                  
                
                } else { return false; }                
            }
        });

    //ANIMATE BLOCKS
        new WOW().init();    		
	});		