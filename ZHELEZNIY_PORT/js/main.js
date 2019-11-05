	//Modal Comment
		window.addEventListener('load', function() {

			let sectionComments = document.getElementById('comments'),
				commentSend = document.getElementById('comment_send'),
			    formComment = document.getElementById('comment_form'),			  		
			    commentSwiper = document.getElementById('comments_user'),			  
			    date = new Date(),
			    report = true,
			    rerun = true;

			window.addEventListener('scroll', () =>{
				if(sectionComments.getBoundingClientRect().top < 200){					
					
					if(report == true){
						alert("Оставьте отзыв, и он появиться на странице!");
					};
					report = false;					
				};
			});    
			  		

			let session = JSON.parse(sessionStorage.getItem('comment')) || []; 		 	   

			function addComment (template) {
				if(template.username == undefined || template.textarea == undefined) return;
				if (template.month < 10) template.month = '0' + template.month;
				if (template.day < 10) template.day = '0' + template.day;					
				commentSwiper.innerHTML = `<p>${template.textarea}</p>
				    <span class="signature">${template.username}</span>
				    <span class="date_when">${template.day}.${template.month}.${template.year}</span>
				    `;
				if(!rerun){   
				let commentText = document.querySelector('#comments_user>p');
					animateText(commentText);
				};    

			}; 	
			
    		addComment(session);

		    commentSend.addEventListener('click', (event) => {

			    formComment.comment_user_name.onfocus = (() =>{

			    	formComment.comment_user_name.classList.remove('invalid_form');
			    	formComment.comment_textarea.classList.remove('invalid_form');
			    	formComment.comment_user_name.placeholder = 'Имя, фамилия*';
			    	formComment.comment_textarea.placeholder = 'Ваше сообщение...';		    	
			    });

			    formComment.comment_textarea.onfocus = (() =>{

			    	formComment.comment_user_name.classList.remove('invalid_form');
			    	formComment.comment_textarea.classList.remove('invalid_form');
			    	formComment.comment_user_name.placeholder = 'Имя, фамилия*';
			    	formComment.comment_textarea.placeholder = 'Ваше сообщение...';		    	
			    });			    	

			 	if(formComment.comment_user_name.value == ''){

			 		formComment.comment_user_name.classList.add('invalid_form');		 		
			 		formComment.comment_user_name.placeholder = 'Это поле не должно быть пустым!';
			 		commentSend.dataset.dismiss = '';			 		
			 		event.preventDefault(commentSend);
			 	};
			 	if(formComment.comment_textarea.value == ''){

			 		formComment.comment_textarea.classList.add('invalid_form');
			 		formComment.comment_textarea.placeholder = 'Это поле не должно быть пустым!';
			 		commentSend.dataset.dismiss = '';
			 		event.preventDefault(commentSend);
			 	}else{

				 	let template = {
				 		username: formComment.comment_user_name.value,
				 		textarea: formComment.comment_textarea.value,
				 		day: date.getDate(),
				 		month: date.getMonth() + 1,
				 		year: date.getFullYear().toString().substr(-2)
				 	};			 	
				 	sessionStorage.setItem('comment', JSON.stringify(template));
				 	rerun = false;				 	
				 	addComment (template);
				 	formComment.reset(); 				 	
					commentSend.dataset.dismiss = 'modal';	
          		};				
			});

			function animate({timing, draw, duration}) {

		        let start = performance.now();

		        requestAnimationFrame(function animate(time) {    
		          let timeFraction = (time - start) / duration;
		          if (timeFraction > 1) timeFraction = 1;
		          
		          let progress = timing(timeFraction);

		          draw(progress); 

		          if (timeFraction < 1) {
		            requestAnimationFrame(animate);
		          }
		      });
    		};

    		function animateText(textArea) {
		        let text = textArea.innerHTML;
		        let to = text.length,
		          from = 0;

		        animate({
		          duration: 3000,
		          timing:  function(timeFraction) {
		            return timeFraction;
		          },
		          draw: function(progress) {
		            let result = (to - from) * progress + from;
		            textArea.innerHTML = text.substr(0, Math.ceil(result))
		          }
		        });
		     };

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