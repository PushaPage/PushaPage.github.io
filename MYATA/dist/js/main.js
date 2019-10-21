window.addEventListener('load', function() {
		// menu
  		$('.navbar-toggler').on('click', function(){
    		$(this).toggleClass('open');
  		});
  		// slider#1
  		var swiper = new Swiper('#swiper-container-one', {
	      slidesPerView: 1,
	      spaceBetween: 0,	     	      
	      loop: true,
	      speed: 2000,
	      autoplay: {	      	
		    delay: 3000,		            
  		  },
	      pagination: {
	        el: '#swiper-pagination-one',
	        clickable: true,
	      }	      
	    });
	    // slider#2
	       
	    var swiper = new Swiper('#swiper-container-two', {
	      slidesPerView: 1,
	      spaceBetween: 0,
	      loop: true,
	      speed: 1500,
	      pagination: {
	        el: '#swiper-pagination-two',
	        clickable: true,
	        type : 'custom',
	        bulletClass:'pagination-bullet',
  			renderCustom: function(swiper, current, total) {
  			 	var names = [];
				$('#swiper-container-two .swiper-slide').each(function(i) {
			    	names.push($(this).data('name'));
				});
        		var text = '<div class="pagination-container">';
        			for (let i = 1; i <= total; i++) {                
            			if (current == i) {
                			text += '<span class="pagination-bullet pagination-bullet-active">' + names[i] + '</span>';
                        }else{
                			text += '<span class="pagination-bullet">' + names[i] + '</span>';
            			};            
        			}
        				text += '</div>';
        				return text;
    			}
	      	},
	      navigation: {
	        nextEl: '#swiper-button-next-two',
	        prevEl: '#swiper-button-prev-two',
	      },	
	    });
	  //in-basket:hover 	      
	     document.addEventListener('mouseover', function (event){
	     	let target = event.target.dataset.basket;	     	
	     	let photo = event.target.closest('LI');

   		     if(!target) return;

	     		photo.firstElementChild.style.border = '1px solid #2ecc71';
	     		
	     		if(photo.firstElementChild.classList == 'no-available-offer-photo'){
	     			photo.firstElementChild.style.border = '1px solid  #e74c3c';
	     		};     	
	     });

	      document.addEventListener('mouseout', function (event){
	     	let target = event.target.dataset.basket;	     	
	     	let photo = event.target.closest('LI');

   		     if(target === 'in-basket')
	     		photo.firstElementChild.style.border = '';     	
	     });
	  //click-show-all	  
	   document.addEventListener('click', function (event){	   	   
	   		let sight = event.target.dataset.showAll;           
            let target = event.target.closest('DIV');            
            
            if(!sight) return;            
              target.children[0].style.height = 'auto';           
           	
	   });    	   
  	});
