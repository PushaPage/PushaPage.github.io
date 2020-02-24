window.addEventListener('load', ()=> {

	let year = new Date().getFullYear();

	let eventForm = document.getElementById('EventForm'),
		eventName = document.getElementById('eventName'),
		selectYear = document.getElementById('eventYear'),
		selectMonth = document.getElementById('eventMonth'),
		selectDate = document.getElementById('eventDate');

	let	eventContainer = document.getElementById('EventContainer');

    let storageEvents = JSON.parse(localStorage.getItem('events')) || [],
        lastId = storageEvents.length; 			

			

  	eventForm.addEventListener('click', event => {

  		let btn = event.target;

  		if (btn.matches('[data-action="in-input"]')) {

  			eventName.value = btn.innerHTML;
            eventName.classList.remove('is-invalid');
  		}

  	});

    for (let i = 0; i <= 10; i++) {

    	let option = new Option(year + i, year + i);
    		selectYear.appendChild(option);
    }

    function optionDate (num) {

    	let options = selectDate.querySelectorAll('option'),
    	    option = null;

    	for (let i = 1; i < options.length; i++) {

    		options[i].remove();
    		
    	}

    	for (let i = 1; i <= num; i++) {	        			
        
        	let option = new Option(i, i);                	
        		selectDate.appendChild(option);
    	
    	}	
    }

    function isInteger(num) {

			return (num ^ 0) === num;  				
	}

	function leapYear (year) {

		let leap = Number.isInteger(year / 4);

		if (!leap) {

			optionDate (28)

		} else { optionDate (29) }
	}

//onChange
    selectYear.onchange = () => {

    	if (selectYear.value !== '') {
            
           if (selectMonth.value === 'February') {

           	  leapYear (selectYear.value)
           }

           selectMonth[0].selected = true;
           selectDate[0].selected = true;
    	   selectMonth.disabled = false;
    	}

    }

    selectMonth.onchange = () => {

    	if (selectMonth.value === '') return false;	        	

    	if (selectMonth.value === 'January' || selectMonth.value === 'March' 
    		|| selectMonth.value === 'May' || selectMonth.value === 'July'
    		|| selectMonth.value === 'August' || selectMonth.value === 'October'
    		|| selectMonth.value === 'December') {

    		optionDate(31)	
    		
    	} else { optionDate(30)	}

    	if (selectMonth.value === 'February') {

    		leapYear(selectYear.value)

    	} 

    	selectDate[0].selected = true;
    	selectDate.disabled = false;
    }

//onFocus
    eventName.onfocus = function ()  {
    
    	this.classList.remove('is-invalid');
    }

    selectYear.onfocus = function ()  {
    
    	this.classList.remove('is-invalid');
    }

    selectMonth.onfocus = function ()  {
    
    	this.classList.remove('is-invalid');
    }

    selectDate.onfocus = function ()  {
    
    	this.classList.remove('is-invalid');
    }

//TimerEvent
	function timerEvent (template) {

		let eventDate = new Date(`${template.month} ${template.date}, ${template.year}`),
            dateText = `(${template.date} ${template.monthText} ${template.year + ' года'})`;
		let element = document.createElement('div');
            element.dataset.id = template.id;
			element.classList.add('event-block');

		let timerEvent = new CountdownToEvent(eventDate, element, template.nameEvt, dateText);

		timerEvent.out()

		eventContainer.prepend(element);			
	}

    storageEvents.forEach( eventDate =>{

        timerEvent (eventDate);
    });


    eventForm.addEventListener('submit', event => {

    	event.preventDefault();

    	if (eventName.value === '') { 

    		eventName.classList.add('is-invalid');	        		
    	}

    	if (selectYear.value === '' && selectYear.disabled === false) { 	        		

    		selectYear.classList.add('is-invalid');	        			        		
    	}

    	if (selectMonth.value === '' && selectMonth.disabled === false) { 	        		

    		selectMonth.classList.add('is-invalid');	        		        			
    	}

    	if (selectDate.value === '' && selectDate.disabled === false) { 	        		

    		selectDate.classList.add('is-invalid');	        			        		        		
    	
    	} 

    	if (eventName.value !== '' && selectYear.value !== '' &&
    		selectMonth.value !== '' && selectDate.value !== '') {

            let optSelctd = Array.from(selectMonth).find( opt => opt.selected === true),
                optText = (optSelctd.innerText.substr(-1) == 'ь' || optSelctd.innerText.substr(-1) == 'й') 
                        ? optSelctd.innerText.slice(0, -1) + 'я' : optSelctd.innerText + 'a';

                console.log(optText)

    		let template = {

                id: lastId++,
    			nameEvt: eventName.value,
    			year: selectYear.value,
    			month: selectMonth.value,                
    			date: selectDate.value,
                monthText: optText.toLowerCase()
    		};
            
            storageEvents.push(template);
            localStorage.setItem('events', JSON.stringify(storageEvents));

    		timerEvent (template);

    		eventForm.reset();
    		selectMonth.disabled = true;
    		selectDate.disabled = true;    		
    	}

    });

    eventContainer.addEventListener('click', event => {

        let el = event.target;

        if (el.matches('[data-click="remove"]')) {

            let parent = el.closest('[data-id]');

            for (let i in storageEvents) {

                if (storageEvents[i].id == parent.dataset.id) {

                    storageEvents.splice(i, 1);
                    localStorage.setItem('events', JSON.stringify(storageEvents));
                    break;
                }
            }

            parent.remove();
        }
    });
    
});