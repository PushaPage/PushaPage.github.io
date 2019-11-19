 			//form-offer
 	window.addEventListener('load', function() {
 			
 			;{
                let userList = [],
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

	                	let id = userList.length,
	                	    user = {
	                		
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

	        				document.querySelectorAll('.duplicate-select').forEach( value => {

	        					value.innerHTML = 'Страна тура';

	        				});

	                	};
	                });
            	});
            };
        });    	