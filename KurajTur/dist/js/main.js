window.addEventListener('load', function() {			
			;{
				let hambrgrMenu = document.querySelector('.menu'),
					hambrgrIcon = document.querySelector('.hamberger-icon');										

				hambrgrMenu.addEventListener('click', () => {					
					hambrgrIcon.classList.toggle('open');
				});

			//banner-header
				let bannerImgs = [

				    'url("img/banner-1.jpg")',
                    'url("img/banner-3.jpg")',
                    'url("img/banner-5.jpg")'

					],
					header = document.querySelector('header'),
					bannerHead = document.querySelector('.header-pagination'),
					bannerHeadBullet = document.querySelectorAll('.header-pagination-bullet');			


					bannerHead.addEventListener('click', event => {

						let target = event.target.dataset.banner;

			    		if(!target) return;

						for (let i = 0; i < bannerHeadBullet.length; i ++) {

					        if(target == i){

					          bannerHeadBullet[i].classList.add('header-bullet-active');

					          header.style.background = bannerImgs[i]  + 'no-repeat 50%/cover';				          

					        }else{

					          bannerHeadBullet[i].classList.remove('header-bullet-active');				          

					        };        
					    };  

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
				let swipe1 = new Swiper('#swiperOffer1', {
			        slidesPerView: 3,
			        spaceBetween: 60,
			        loop: true,
			        speed: 1500,
			        initialSlide: 1,      
			        pagination: false,
			        keyboard: {
			        	enabled: true,
			      	},  
			     
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

			    let swiper2 = new Swiper('#swiperOffer2', {
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
				if(!navigator.userAgent.match('Macintosh')){
                    let element = document.querySelectorAll('.slimScroll');
                                   
                    let advantagesScroll = new slimScroll(element[0], {
                        'wrapperClass': 'wrapper',
                        'scrollBarContainerClass': 'scrollBarContainer',
                        'scrollBarClass': 'scrollBar'
                    });        
					
					window.onresize = function(){                    	
                        advantagesScroll.resetValues();                      
                    };
                }
                else{
                    document.write("For Mac users, this custom slimscroll styles will not be applied");
                };

            //form-offer
                let userList = [],                                                          
                    id = userList.length,                   
                    selectvalue = document.querySelector('.duplicate-select');                                                 
                     
                    
                document.querySelectorAll('.offer-select-wrapper').forEach( select => {

	                select.addEventListener('click', function (event){

	                	document.querySelectorAll('.duplicate-select-list').forEach( selectList => {
	                	
	                    	selectList.classList.toggle('select-open');

	                    });                    	
	                    
	        			if(event.target.className == 'duplicate-option'){

	        				document.querySelectorAll('.duplicate-select').forEach( selected => {
	        					
	        					selectvalue.innerHTML = event.target.textContent;  
	        					selected.innerHTML = event.target.textContent;

	        				});	        				      				
	        			};
	        		});
        		});	   
                    
                document.querySelectorAll('.form-offer').forEach( function (form) {

	                form.addEventListener('submit', function (event) {
	                	

	                	event.preventDefault();
	                	

	                	form.userName.onfocus = (()=>{

	                		noBlink ();
	                	});

	                	form.userEmail.onfocus = (()=>{
	                		                		
	                		noBlink ();
	                	});	

	                	form.userTel.onfocus = (()=>{
	                		                		
	                		noBlink ();
	                	});


	                	function noBlink () {

	                		form.userName.style.animation = '';
	                		form.userEmail.style.animation = '';
	                		form.userTel.style.animation = '';	                		
	                	};	

	                	if(form.userName.value == ''){

	                	   form.userName.style.animation = 'blink 1.1s ease infinite';	                		
	                	};
	                	if(form.userEmail.value == ''){

	                	   form.userEmail.style.animation = 'blink 1.1s ease infinite';

	                	};
	                	if(form.userTel.value == ''){

                           form.userTel.style.animation = 'blink 1.1s ease infinite';                          	

	                	};                	


	                	let user = {

	                		number: id++,
	                		name: form.userName.value,
	                		email: form.userEmail.value,
	                		tel: form.userTel.value,
	                		select: selectvalue.innerHTML

	                	};                	

	                	if(user.name == '' || user.email == '' || user.tel == '' || selectvalue.innerHTML == 'Страна тура'){

	                		return false;

	                	}else{

	                		alert(`
	                			   user: ${id}
	                			   name: ${user.name}
	                			   email: ${user.email}
	                			   tel: ${user.tel}
	                			   select: ${user.select}
	                			   Данные сохраняються в sessionStorage. 
	                			  `);	

	                		userList.push(user);

	        				sessionStorage.setItem('userList', JSON.stringify(userList));

	        				form.reset();

	        				document.querySelectorAll('.duplicate-select').forEach( value => {

	        					value.innerHTML = 'Страна тура';

	        				});

	                	};
	                });
            	});
			};
		});	