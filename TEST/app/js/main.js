
window.addEventListener('load', function() {

	;{                    
		//PRELOADER
		document.querySelectorAll('.preload').forEach( preload => {							

			preload.addEventListener('click', function (event) {

				let btn = event.target;

				if (btn.matches('[data-click="preload"]')) {
				
					this.querySelectorAll('.preload__item').forEach( item => {									

						switch (item.className) {

					        case 'preload__item preload__item_hidden':								        	
					            	
					            	btn.classList.remove('preload__btn_hover');
					            	btn.classList.add('preload__btn_loading');

						            setTimeout( ()=> {

						            	btn.classList.remove('preload__btn_loading');
					            	    btn.classList.add('preload__btn_hover');
										item.classList.remove('preload__item_hidden');
										item.classList.add('preload__item_show');													

									}, 2000)												

									return false;												

							case 'preload__item preload__item_show':

								item.classList.remove('preload__item_show');
								item.classList.add('preload__item_hidden');  
								return false;

							default:

								return false;
					    }
					});
				}						
			});
		});

		//TABS
		document.querySelectorAll('.tabs').forEach( tabs => {

			tabs.addEventListener('click', function(event) {

				event.preventDefault();

				if (event.target.matches('.tabs__link')) {

					tabs.querySelectorAll('.tabs__link').forEach( link => {

							link.classList.remove('tabs__link_active');
					});

					tabs.querySelectorAll('.tabs__pane').forEach( pane => {

							pane.classList.remove('tab__pane_active');
					});

					event.target.classList.add('tabs__link_active');

					let selector = event.target.getAttribute('href');
					tabs.querySelector(selector).classList.add('tab__pane_active');
				}

			});
		});

		//PROPOVER
		document.querySelectorAll('.propover').forEach( propover => {

			propover.addEventListener('click', function(event) {							

				let btn = event.target,
					item = propover.querySelector('.propover__item'),
					close = propover.querySelector('.propover__btn-close');

				if (btn.matches('[data-click="propover-show"]')) {

					item.classList.add('propover__item_show');
					
					let coords = btn.getBoundingClientRect();										       					     
			      
			        if (coords.left < (item.offsetWidth / 2)) {
			      		
			      		item.classList.add('propover__item_figure-left');
			      	}

			        if (window.innerWidth >= coords.left - item.offsetWidth) {						      		
			      		
			      		item.classList.add('propover__item_figure-right');
			      		close.classList.remove('propover__btn-close_right');
			      		close.classList.add('propover__btn-close_left');						      		
			      	}

			      	if (window.innerWidth >= coords.left + item.offsetWidth) {
			      		
			      		item.classList.remove('propover__item_figure-right');
			      		close.classList.remove('propover__btn-close_left');
			      		close.classList.add('propover__btn-close_right');
			      	} 

			      	if (coords.left > (item.offsetWidth / 2)) {

			      		item.classList.remove('propover__item_figure-left');      		
			      	}

			      	let top = coords.top - (item.offsetHeight + 17);						      

			      	if (top < 0) {      	
			      	    
			      		item.classList.remove('propover__item_figure-bottom');
			      		item.classList.add('propover__item_figure-top');
			      		item.style.top = 100 + '%';
			      		item.style.marginTop = 17 + 'px';						      		
			        
			      	} else {						      		

			      		item.classList.remove('propover__item_figure-top');
			      		item.classList.add('propover__item_figure-bottom');
			      		item.style.top = - (item.offsetHeight + 17) + 'px';
			      		item.style.marginTop = 0;
			      		
			      	}
				}

				if (btn.matches('[data-click="propover-close"]')) {

					item.classList = 'propover__item'; 
				}
			});
		});									
	};

	//TIMER UNTIL THE END OF SUMMER

		let countTime = document.getElementById('countTime'),
		    eventDate = new Date('September 1, 2020'),
		    endPhrase = 'Лето уже закончилось';


		let timerEvent = new CountdownToEvent(eventDate, countTime, endPhrase);

			timerEvent.out();	
});