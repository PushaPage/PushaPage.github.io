	//Modal Comment
		window.addEventListener('load', function() { 			
			var commentSend = document.getElementById('comment_send'),
			    commentUserName = document.getElementById('comment_user_name'),
			    commentDay = document.getElementById('comment_day'),
			    commentMonth = document.getElementById('comment_month'),
			    commentYear = document.getElementById('comment_year'),			
			    commentTextarea = document.getElementById('comment_textarea'),			
			    commentSwiper = document.getElementById('comments_user');			

			var session = JSON.parse(sessionStorage.getItem('comment')) || []; 		 	   

			function addComment (template) {
				if(template.username == undefined || template.textarea == undefined) return;				
				commentSwiper.innerHTML = `<p>${template.textarea}</p>
				    <span class="signature">${template.username}</span>
				    <span class="date_when">${template.day}.${template.month}.${template.year}</span>
				    `;
			}; 	
			
    		addComment(session);

		    commentSend.addEventListener('click', function (event) {			 	
			 	if(commentUserName.value == ''){			 		
			 		commentUserName.placeholder = 'Это поле не должно быть пустым!';
			 		commentTextarea.placeholder = 'Если вы оставете свой отзыв, то он сразу появиться на странице!';
			 		event.preventDefault(commentSend);
			 	}else{		 		
				 	let template = {
				 		username: commentUserName.value,
				 		textarea: commentTextarea.value,
				 		day: commentDay.value,
				 		month: commentMonth.value,
				 		year: commentYear.value,
				 	};			 	
				 	sessionStorage.setItem('comment', JSON.stringify(template));
				 	addComment (template);
					commentSend.dataset.dismiss = 'modal';	
          		};				
			});

	    var swiper_1 = new Swiper('.swiper_1', {
	      slidesPerView: 1,
	      spaceBetween: 0,      
	      loop: true,
	      speed: 1000,
	      pagination: {
	        el: '.pagination_1',
	        clickable: true,
	      },     
	      navigation: {
	        nextEl: '.button-next_1',
	        prevEl: '.button-prev_1',
	      },
	      
	    });
	    var swiper_2 = new Swiper('.swiper_2', {
	      slidesPerView: 1,
	      spaceBetween: 0,	   
	      loop: true,
	      speed: 1000,
	      pagination: {
	        el: '.pagination_2',
	        clickable: true,        
	      },
	      navigation: {
	        nextEl: '.button-next_2',
	        prevEl: '.button-prev_2',
	      },
	      
	    });
	    var swiper_3 = new Swiper('.swiper_3', {
	      slidesPerView: 1,     
	      spaceBetween: 0,	      
	      loop: true,
	      speed: 1000,
	      pagination: {
	        el: '.pagination_3',
	        clickable: true,        
	      },      
	      navigation: {
	        nextEl: '.button-next_3',
	        prevEl: '.button-prev_3',
	      },
	      
	    });
	    var swiper_4 = new Swiper('.swiper_4', {
	      slidesPerView: 2,
	      spaceBetween: 90,
	      loop: true,
	      speed: 1000,
	      initialSlide: 2,      
	      pagination: {
	        el: '.pagination_4',
	        clickable: true,
	      },
	         keyboard: {
	        enabled: true,
	      },  
	     
	      breakpoints: {       
	        768: {
	          slidesPerView: 1,
	          spaceBetween: 80,
	        },       
	      },
	      navigation: {
	        nextEl: '.button-next_4',
	        prevEl: '.button-prev_4',
	      },
	      
	    });	
	 // hamburger menu
	    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

	    var hamburgers = document.querySelectorAll(".hamburger");
	    if (hamburgers.length > 0) {
	      forEach(hamburgers, function(hamburger) {
	        hamburger.addEventListener("click", function() {
	          this.classList.toggle("is-active");
	        }, false);
	      });
	    };

    });