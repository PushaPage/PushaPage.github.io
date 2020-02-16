					

	class CountdownToEvent {

		constructor(event, htmlout, endPhrase) {
      		
      		this.event = event;
      		this.htmlOut = htmlout;
      		this.endPhrase = endPhrase; 				      		
      		
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


	    		let template = `<ul class="countdown">
									<li class="countdown__item">
										<span class="countdown__date">${fulDaysRmans}</span>
										<span class="countdown__title">${dayName}</span>
									</li>
									<li class="countdown__item">
										<span class="countdown__date">${fulHoursRmans}</span>
										<span class="countdown__title">${hourName}</span>
									</li>
									<li class="countdown__item">
										<span class="countdown__date">${minRmans}</span>
										<span class="countdown__title">${minName}</span>
									</li>
									<li class="countdown__item">
										<span class="countdown__date">${lastSec}</span>
										<span class="countdown__title">${secName}</span>
									</li>	
	    						</ul>`;	 	

				this.htmlOut.innerHTML = template;				    		

	    		setTimeout(() => this.render(), 1000);

    		} else {

    			this.htmlOut.innerHTML = `<h2 class="title-countdown">${this.endPhrase}<i class="title-countdown__icon fas fa-sad-tear"></i></h2>`;	
    		}	
    		
    	}

    	out () {

    		this.render();    		
    	}
	};