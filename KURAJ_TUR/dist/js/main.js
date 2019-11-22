window.addEventListener('load', function() {

			//select-custom (select2)

			    $('.__select2').select2({

			        placeholder: 'Страна тура',
			        allowClear: false,
			        tags: false,
			        dropdownPosition: 'below',
			        maximumSelectionLength: 5,
			        minimumResultsForSearch: Infinity,
			        width: '180px',
			        height: '26px'

			    }); 

			  $('b[role="presentation"]').hide();
		
			;{
				let hambrgrMenu = document.querySelector('.menu'),
					hambrgrIcon = document.querySelector('.hamberger-icon');										

				hambrgrMenu.addEventListener('click', () => {					
					hambrgrIcon.classList.toggle('open');
				});

			//lazy-load
				
			    let lazyloadImages = document.querySelectorAll('img.lazy'),    
			        lazyloadThrottleTimeout;
			  
			    function lazyload () {
			      if(lazyloadThrottleTimeout) {
			        clearTimeout(lazyloadThrottleTimeout);
			      }    
			    
			      lazyloadThrottleTimeout = setTimeout(function() {

			          let scrollTop = window.pageYOffset;

			          lazyloadImages.forEach(function(img) {

			              if(img.offsetTop < (window.innerHeight + scrollTop)) {

			                img.src = img.dataset.src;

			                img.classList.remove('lazy');

			              };

			          });

			          if(lazyloadImages.length == 0) {

			            document.removeEventListener("scroll", lazyload);

			            window.removeEventListener("resize", lazyload);

			            window.removeEventListener("orientationChange", lazyload);

			          }
			      }, 20);
			    };
			  
			  document.addEventListener("scroll", lazyload);
			  window.addEventListener("resize", lazyload);
			  window.addEventListener("orientationChange", lazyload);


			//tabs

				let offers = document.getElementById('offers'),
				    tadLink = document.querySelectorAll('.tab-link'),
				    tabs = document.querySelectorAll('.tabs');	
				
				offers.addEventListener('click', event =>{

			    let dataTab = event.target.dataset.tab;

			    	if(!dataTab) return;

			    	

				    for (let i = 0; i < tabs.length; i ++) {

				        if(dataTab == i){

				          tadLink[i].classList.add('tab-link-active');
				          tabs[i].classList.add('tab-active');

				        }else{

				          tadLink[i].classList.remove('tab-link-active');
				          tabs[i].classList.remove('tab-active');

				        };        
				    }     
			      
			    });	

			//slider-offers

				let swipe1 = new Swiper('#headBanner', {

			        slidesPerView: 1,
			        spaceBetween: 0,
			        loop: true,
			        speed: 2500,
			        autoplay: {	      	
					    delay: 3000,		            
			  		},			     
			        initialSlide: 0,      
			        pagination: {
			        	el: '#headBannerPagination',
			        	clickable: true,
			      	},   
			        keyboard: {
			        	enabled: true,
			      	},		    
			        navigation: false,
			      
			    });

				let swiper2 = new Swiper('#swiperOffer1', {

			        slidesPerView: 3,
			        spaceBetween: 60,
			        loop: true,
			        speed: 1500,
			        initialSlide: 1,      
			        pagination: false,     
			     	breakpoints: {       
				        1750: {
				          slidesPerView: 2,
				          spaceBetween: 0,
				        },
				        1325: {
				          slidesPerView: 1,
				          spaceBetween: 0,
				        },       
			      	},
			      	navigation: {
			        	nextEl: '.button-offer-next1',
			        	prevEl: '.button-offer-prev1',
			      	},
			      
			    });

			    let swiper3 = new Swiper('#swiperOffer2', {
			        slidesPerView: 3,
			        spaceBetween: 60,
			        loop: true,
			        speed: 1000,
			        initialSlide: 2,      
			        pagination: false,			       		     
			      	breakpoints: {       
				        1750: {
				          slidesPerView: 2,
				          spaceBetween: 0,
				        },
				        1325: {
				          slidesPerView: 1,
				          spaceBetween: 0,
				        },       
			      	},
			     	navigation: {
			        	nextEl: '.button-offer-next2',
			        	prevEl: '.button-offer-prev2',
			      },
			      
			    });				

			//slim-scroll
				
                    let elemScroll = document.querySelectorAll('.slimScroll');                       
                   
					let advantagesScroll = new slimScroll(elemScroll[0], {
                        'wrapperClass': 'wrapper',
                        'scrollBarContainerClass': 'scrollBarContainer',
                        'scrollBarClass': 'scrollBar'
                    });        
					
					window.onresize = function(){ 

                        advantagesScroll.resetValues(); 

                    };                   
              

            //form-offer
                let userList = [];               
        		
				document.querySelectorAll('.form-offer').forEach( function (form) {

                	
	                form.addEventListener('submit', function (event) {
	                	

	                	event.preventDefault();	                	

	                	form.userName.onfocus = (()=>{

	                		form.userName.style.animation = '';
	                	});

	                	form.userEmail.onfocus = (()=>{
	                		                		
	                		form.userEmail.style.animation = '';
	                	});	

	                	form.userTel.onfocus = (()=>{
	                		              		
	                		form.userTel.style.animation = '';	
	                	});

	                	form.userSelect.onfocus = (()=>{
	                		
	                		alert()

	                	});	

	                	form.userSelect.onchange = (()=>{
	                		
	                		form.querySelector('.select2-selection').style.animation = '';

	                	});	                

	                	if(form.userName.value == ''){

	                	   form.userName.style.animation = 'blink 1.1s ease infinite';	                		
	                	};
	                	if(form.userEmail.value == ''){

	                	   form.userEmail.style.animation = 'blink 1.1s ease infinite';

	                	};
	                	if(form.userTel.value == ''){

                           form.userTel.style.animation = 'blink 1.1s ease infinite';                          	

	                	}; 
	                	

	                	if(form.userSelect.value == ''){	                		
	                	
	                		form.querySelector('.select2-selection').style.animation = 'blink 1.1s ease infinite';        		                                               	

	                	}; 

	                	let id = userList.length  + 1,
	                	    user = {
	                		
	                		number: id,
	                		name: form.userName.value,
	                		email: form.userEmail.value,
	                		tel: form.userTel.value,
	                		select: form.userSelect.value

	                	};	                	                 	

	                	if(user.name == '' || user.email == '' || user.tel == '' || form.userSelect.value == ''){

	                		return false;

	                	}else{	                	

	                		alert(`
	                			   user: ${user.number}		                			   
	                			   name: ${user.name}
	                			   email: ${user.email}
	                			   tel: ${user.tel}
	                			   select: ${user.select}
	                			   Данные сохраняються в sessionStorage. 
	                			  `);	

	                		userList.push(user);

	        				sessionStorage.setItem('userList', JSON.stringify(userList));

	        				form.reset();

	        				form.querySelector('.select-selected').innerHTML = 'Страна тура';		

	        			};
	                });
            	});
			};
		});	