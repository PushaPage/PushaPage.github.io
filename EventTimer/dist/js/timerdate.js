					

	class CountdownToEvent {

		constructor(event, htmlOut, eventName, eventText) {
      		
      		this.event = event;
      		this.htmlOut = htmlOut;
      		this.eventName = eventName;
      		this.eventText = eventText;        			 				      		
      		
    	}

    	render() {

    		let nowDate = new Date();

    		let totlRmans = this.event.getTime() - nowDate.getTime();


    		if (totlRmans > 1) {

	    		let	secRmans = parseInt(totlRmans / 1000);

	    		let	fulDaysRmans = parseInt(secRmans / (24 * 60 * 60)),
	    			secLastDay = secRmans - fulDaysRmans * 24 * 3600;

	    		let	fulHoursRmans = parseInt(secLastDay / 3600),
	    			secInLastHour = secLastDay - fulHoursRmans * 3600;

				let	minRmans = parseInt(secInLastHour / 60);

				if (minRmans < 10 ) { minRmans = '0' + minRmans };

				let lastSec = secInLastHour - minRmans * 60;

				if (lastSec < 10) { lastSec = '0' + lastSec};


				let dayName = '',
					lastDigtlDay = fulDaysRmans.toString().substr(-1);

				if (fulDaysRmans > 4 && fulDaysRmans < 21) { dayName = 'Дней'; }

				else if (lastDigtlDay == 1) { dayName = 'День'; }

				else if (lastDigtlDay == 2 || lastDigtlDay == 3 || lastDigtlDay == 4 ) {

					dayName = 'Дня';

				} else { dayName = 'Дней'; }
					
				let hourName = '',
					lastDigtlHour = fulHoursRmans.toString().substr(-1);

				if (fulHoursRmans > 4 && fulHoursRmans < 21) { hourName = 'Часов'; }

				else if (lastDigtlHour == 1) { hourName = 'Час'; }

				else if (lastDigtlHour == 2 || lastDigtlHour == 3 || lastDigtlHour == 4 ) {

					hourName = 'Часа';

				} else { hourName = 'Часов'; }

				let minName = '',
					lastDigtlMin = minRmans.toString().substr(-1);

				if (minRmans > 4 && minRmans < 21) { minName = 'Минут'; }

				else if (lastDigtlMin == 1) { minName = 'Минута'; }

				else if (lastDigtlMin == 2 || lastDigtlMin == 3 || lastDigtlMin == 4 ) {

					minName = 'Минуты';

				} else { minName = 'Минут'; }


				let secName = '',
					lastDigtlSec = lastSec.toString().substr(-1);

				if (lastSec > 4 && lastSec < 21) { secName = 'Секунд'; }

				else if (lastDigtlSec == 1) { secName = 'Секунда'; }

				else if (lastDigtlSec == 2 || lastDigtlSec == 3 || lastDigtlSec == 4 ) {

					secName = 'Секунды';

				} else { secName = 'Секунд'; }

					this.htmlOut.innerHTML = `<h3 class="event-title-main">${this.eventName}</h3>
											  <span class="event-title-sign">${this.eventText}</span>
											  <h4 class="event-title m-0 pr-0">Событие начнеться через:</h4>
											  <ul class="d-flex">
												<li class="col-3 event-item p-0">                            
						                            <div class="event-number">${fulDaysRmans}</div>                      
													<div class="event-time-name">${dayName}</div>
												</li>
												<li class="col-3 event-item p-0">                            
						                            <div class="event-number">${fulHoursRmans}</div>                      
													<div class="event-time-name">${hourName}</div>
												</li>
												<li class="col-3 event-item p-0">                            
						                            <div class="event-number">${minRmans}</div>                      
													<div class="event-time-name">${minName}</div>
												</li>
												<li class="col-3 event-item p-0">                            
						                            <div class="event-number event-number_red">${lastSec}</div>                      
													<div class="event-time-name event-time-name_black">${secName}</div>
												</li>
											</ul>
											<button type="button" class="btn-event-remove fas fa-times" data-click="remove"></button>`;


	    		setTimeout(() => this.render(), 1000);	    		

    		} else {

    			this.htmlOut.innerHTML = `<h3 class="event-title-main">${this.eventName}</h3>
    									  <span class="event-title-sign">${this.eventText}</span>
										  <h4 class="event-title event-title_red">Это событие уже произошло!<i class="event-icon far fa-sad-tear"></i></h4>
										  <button type="button" class="btn-event-remove fas fa-times" data-click="remove"></button>`;	
    		}	
    		
    	}

    	out () {

    		this.render();
    	}
	};