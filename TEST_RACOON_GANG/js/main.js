	window.addEventListener('load', function() {
		
		;{
			let nav = document.querySelector('.navbar'),
				navToggle = document.querySelector('.navbar-toggler'),
				navToggleText = document.querySelector('.navbar-toggler-text'),
				navCollapse = document.querySelector('.navbar-collapse');

			navToggle.addEventListener('click', () => {

				navCollapse.classList.toggle('show');
			});	

			nav.addEventListener('click', event => {

		      if (event.target.matches('.nav-link')) {

		        nav.querySelectorAll('.nav-link').forEach( el => {
		          el.classList.remove('active');			          
		        });
		     
		        event.target.classList.add('active');
		        navToggleText.innerHTML = event.target.innerHTML;
		        navCollapse.classList.remove('show');
		        
		      }
		      
		    });

		}
	});