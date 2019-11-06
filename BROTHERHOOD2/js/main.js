$(document).ready(function(){
		// menu
  		$(".menu").on('click',function(){
    		$(this).find(".hamberger-icon").toggleClass("open");
  		});  	
  		// zoom
  		$(function(){
		    
			if(!$.fn.imagezoomsl){
				
				$('.msg').show();
				return;
			}
		     else $('.msg').hide(); 
			
			$('.soldier-tab1').imagezoomsl({ 
		      
			  descarea: ".zoom-in-tab1", 				
			  zoomrange: [1, 12],
			  magnifiereffectanimate: "fadeIn",
			  magnifierborder: "none",
			  loadbackground: "#000",	
			});
			$('.soldier-tab2').imagezoomsl({ 
		      
			  descarea: ".zoom-in-tab2", 				
			  zoomrange: [1, 12],
			  magnifiereffectanimate: "fadeIn",
			  magnifierborder: "none",
			  loadbackground: "#000",	
			});
			$('.soldier-tab3').imagezoomsl({ 
		      
			  descarea: ".zoom-in-tab3", 				
			  zoomrange: [1, 12],
			  magnifiereffectanimate: "fadeIn",
			  magnifierborder: "none",
			  loadbackground: "#000",	
			});			  
		});  		
		// carousel
		var swiper = new Swiper('#swiper-container-one', {
	      	slidesPerView: 1,
	      	spaceBetween: 0,
	      	loop: true,
	      	initialSlide: 2, 
	      	pagination: {
	        	el: '#swiper-pagination-one',	        
	        	clickable: true,
	      	},
	      	navigation: {
	        	nextEl: '#swiper-button-next-one',
	        	prevEl: '#swiper-button-prev-one',
	      	},
	    });
		// carousel-2
		var swiper = new Swiper('#swiper-container-two', {
      		pagination: {
		        el: '#swiper-pagination-two',        
		        clickable: true,
		        renderBullet: function (index, className) {
		          return '<span class="' + className + '">' + (index + 1) + '</span>';
		        },       
		      },
    	});
});	