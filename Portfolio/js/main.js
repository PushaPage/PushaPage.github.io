
	window.addEventListener('load', function() {			
			;{

				let hambrgrMenu = document.querySelector('.menu'),
					hambrgrIcon = document.querySelector('.hamberger-icon'),
					onUp = document.querySelector('.on-up'),
					onPrtfl = document.querySelector('.link-prtfl'),
					onSkills = document.querySelector('.link-skills'),
					portflio = document.querySelector('#portfolio'),
					skills = document.querySelector('#skills'),  					
					clock = document.querySelector('#clock'),					
					flagTime = true;					

				hambrgrMenu.addEventListener('click', () => {

					hambrgrMenu.classList.toggle('small-cross');
					hambrgrIcon.classList.toggle('open');

				});
				
				onSkills.addEventListener('click', function (event){

				    window.scrollTo({

				      top: skills.getBoundingClientRect().top,
				      left: 0,
				      behavior: 'smooth'

				    });
				});

				onPrtfl.addEventListener('click', function (event){

				    window.scrollTo({

				      top: portflio.getBoundingClientRect().top,
				      left: 0,
				      behavior: 'smooth'

				    });
				});

				onUp.addEventListener('click', function (event){

				    window.scrollTo({

				      top: 0,
				      left: 0,
				      behavior: 'smooth'

				    });
				});

				
	
			//Clock
				class Clock_Date {

				    constructor({time},{date}) {
				      this.time = time;
				      this.date = date;
				    }
				  
				    render() {
				      let date = new Date();

				      let year = date.getFullYear().toString().substr(-2);

				      let month = date.getMonth() + 1;
				      if (month < 10) month = '0' + month;

				      let day = date.getDate();
				      if (day < 10) day = '0' + day; 
				  
				      let hours = date.getHours();
				      if (hours < 10) hours = '0' + hours;
				  
				      let mins = date.getMinutes();
				      if (mins < 10) mins = '0' + mins;
				  
				      let secs = date.getSeconds();
				      if (secs < 10) secs = '0' + secs;
				      
				  
				      let setTime = this.time
				        .replace('h', hours)
				        .replace('m', mins)
				        .replace('s', secs);

				      let setDate = this.date
				        .replace('d', day)
				        .replace('m', month)
				        .replace('y', year);

				      if (secs == 30) {
				      	 flagTime = false;
				      };
				      if (secs == 35) {
				      	 flagTime = true;
				      };  
				      if (!flagTime) {
			 			clock.innerHTML = '<i class="fal fa-calendar-alt icon-date"></i>' + setDate;
			 		  }else{
			 			clock.innerHTML = '<i class="fal fa-clock icon-watch"></i>' + setTime;
			 		  };			 		  
				  	}
				  
				    stop() {
				      clearInterval(this.timer);
				    }
				  
				    start() {
				      this.render();
				      this.timer = setInterval(() => this.render(), 1000);
				    }
				  };	  
	  
			  let clock_date = new Clock_Date({time: 'h:m:s'},{date: 'd.m.y'});
			  	  clock_date.start();
			  	  

			 clock.addEventListener('click', () => {

			 	if (!flagTime) {
			 		flagTime = true;
			 	} else {
			 		flagTime = false;
			 	};
			 });	  
			};


		//Change language	
			;{

				let langRus = document.getElementById('langRus'),
					langEng = document.getElementById('langEng'),
					navLang = document.querySelectorAll('.nav-lang'),
					titlsLang = document.querySelectorAll('.title-lang'),
					skillLang = document.querySelectorAll('.skill-lang'),
					lookLang = document.querySelectorAll('.look-lang'),
					codeLang = document.querySelectorAll('.code-lang'),
					usingLang = document.querySelectorAll('.using-lang'),
					onlyLang = document.querySelectorAll('.only-lang'),
					titleNamedJs = document.querySelectorAll('.section-title-js-lang'),
					aboutMeLang = document.querySelectorAll('.about-me-lang')[0],
					resumeTitleLang = document.querySelectorAll('.resume-title-lang'),
					resumeMeLang = document.querySelectorAll('.resume-me-lang'),
					objectivsLang = document.querySelectorAll('.objectivs-lang'),
					educationLlang = document.querySelectorAll('.education-lang'),
					knowledgeLang = document.querySelectorAll('.knowledge-lang')[0],
					workExperienceLang = document.querySelectorAll('.work-experience-lang');					

					
					
				let rus = {

						nav: {

							0: 'Навыки',
							1: 'Мои роботы',
							2: 'Контакты'	

						},

						title: {

							0: 'Привет',
							1: 'Навыки',
							2: 'Мои роботы'

						},

						aboutMe: {

							0: 'Mеня зовут Саленко Павел и я Front-end разработчик, у меня большой интерес к IT сфере, мне нравиться создавать сайты, и я люблю то, что делаю.'
						},

						skills: {
							
							0: 'Принцип и особености работаты с flexbox, float, inline-block',
							1: 'Создание HTML-страницы сайта на основе дизайн-макетов (PerfectPixel)',
							2: 'Адаптивная кросс-браузерная, валидная верстка',
							3: 'Avocode, Adobe Photoshop (на уровне нарезки шаблона и оптимизации изображений)',
							4: 'Умение работать с Bootstrap 3 и 4',
							5: 'Создание геометрических фигур при помощи CSS',
							6: 'Применение СSS анимаций (@keyframes), трансформация обьектов',
							7: 'Препроцессор Sass, сборщики webpack 4, Gulp 4',
							8: 'Умение работать с GitHub',
							9: 'Основы JavaScript, React',
							10: 'Основы работы с DOM. Взаимодействие JavaScript и CSS. Работа с формами',
							11: 'Таймеры, интервалы. Работа со строками и массивами. Регулярные выражение',
							12: 'События, делегирование, координаты, метрики. ООП в JavaScript',
							13: 'Cookie, LocalStorage, sessionStorage. Работа с изображениями в JavaScript',
							14: 'Работа с данными, отправка дынных, XMLHttpRequest, POST, GET, JSON, XML'
						},

						porfolio: {

							0: 'Посмотреть',
							1: 'Код проэкта',
							2: 'С применением:',
							3: 'Только:'

						},

						porfolioJs: {

							0: 'Игра',
							1: 'Крестики-нолики',
							2: 'Бесконечная карусель',
							3: 'Смена имени в сказке',
							4: 'Список дел (c редактированием)',
							5: 'Секундомер'

						},

						resumeTitle: {

							0: 'Моё резюме',
							1: 'Cаленко Павел',
							2: 'Цель',
							3: 'Образование',
							4: 'Знание языков',
							5: 'Опыт работы'

						},
						resumeMe: {

							0: `<span class="modal-item-list">Дата рождения:</span>26 апреля 1990г`,
							1: `<span class="modal-item-list">Город проживания:</span>Харьков`,
							2: `<span class="modal-item-list">Телефон:</span>(073) 095-56-52`
							
						},

						objectivs: {

							0: 'трудоустройство на вакансию Front-end/JavaScript разработчика',
							1: 'желаемый уровень зарплаты от 450$'
						},

						education: {

							0: 'Высшее',
							1: `<span class="new-line">
								<span class="modal-item-list">Курсы:</span>«Программирование Front-end ( май − июль )», «JavaScript ( август − ноябрь)»</span>`,
							2: `<i class="fad fa-circle sm-icon-font"></i>2009 − 2014<i class="fal fa-long-arrow-alt-right icon-arrow"></i><a class="modal-item-link" href="http://www.hduht.edu.ua/index.php/ru/" target="_blank">Харьковский государственный университет питания и торговли</a>
		        				<span class="new-line"><span class="modal-item-list">Факультет:</span>«Пищевые технологии и инженерия»</span>
		        				<span class="new-line"><span class="modal-item-list">Специальность:</span>«Технология хлеба, кондитерских и макаронных изделий»</span>
		        				<span class="new-line"><span class="modal-item-list">Диплом:</span>«Бакалавр»</span>
		        				<span class="new-line"><span class="modal-item-list">Форма обучения:</span>«Заочная»</span>`	
						},

						knowledgeLang: {

							0: 'Английский − средний ( чтение официальных документов, простейших инструкций, понимание сути телерепортажей, которые сопровождаются изображением )'
						},

						workExperience: {

							0: 'ТОВ «Катюша 91»',
							1: `<span class="modal-item-list">Должность:</span>«Кондитер»`

						}

					};

				let eng = {

						nav: {

							0: 'Skills',
							1: 'My portfolio',
							2: 'Contacts'	

						},

						title: {

							0: `Hell<i class="far fa-grin-wink icon-simle"></i>`,
							1: 'Skills',
							2: 'My portfolio'

						},

						aboutMe: {
							
							0: `My name is Pavel Salenko and I'm a front-end developer, I have a great interest in the IT field, I like to create websites, and I love what I do.`

						},

						skills: {
							
							0: 'The principles and features of flexbox, float, inline-block',
							1: 'Creation of an HTML-page of a site based on design layouts (PerfectPixel layout)',
							2: 'Responsive cross-browser compatibility and code validation',
							3: 'Avocode, Adobe Photoshop (at the image slicing level)',
							4: 'Twitter Bootstrap 3 and 4',
							5: 'Creating geometric shapes with CSS',
							6: 'CSS animations and object traformations, (@keyframes)',
							7: 'Sass preprocessor, pack manager webpack 4, Gulp 4',
							8: 'Ability to work with GitHub',
							9: 'JavaScript basics, React',
							10: 'Objects. Basics of DOM. JavaScript & CSS interaction. Working with forms',
							11: 'Timers and intervals. Working with strings and arrays. Regular expressions',
							12: 'Events, delegate, coordinates. OOP in JavaScript',
							13: 'Cookie, LocalStorage, sessionStorage. Working with images in JavaScript',
							14: 'Data exchange with the server via XMLHttpRequest, POST, GET, JSON, XML'
						},

						porfolio: {

							0: 'Look',
							1: 'Project code',
							2: 'Using:',
							3: 'Only:'

						},

						porfolioJs: {

							0: 'Game',
							1: 'Tick-tack-toe',
							2: 'Endless carousel',
							3: 'Fable tale change',
							4: 'To-do list (with editing)',
							5: 'Stopwatch'
							
						},

						resumeTitle: {

							0: 'My resume',
							1: 'Pavel Salenko',
							2: 'Job objective',
							3: 'Education',
							4: 'Knowledge of languages',
							5: 'Work experience'

						},

						resumeMe: {

							0: `<span class="modal-item-list">Date of birth:</span>26th april 1990`,
							1: `<span class="modal-item-list">Address:</span>Kharkov`,
							2: `<span class="modal-item-list">Phone number:</span>(073) 095-56-52`

						},

						objectivs: {

							0: 'Front-end / JavaScript developer job placement',
							1: 'desired salary level from $450'
						},

						education: {

							0: 'Higher education',
							1: `<span class="new-line">
								<span class="modal-item-list">Courses:</span>«Front-end development ( may − june )», «JavaScript ( august − november )»</span>`,
							2: `<i class="fad fa-circle sm-icon-font"></i>2009 − 2014<i class="fal fa-long-arrow-alt-right icon-arrow"></i><a class="modal-item-link" href="http://www.hduht.edu.ua/index.php/ru/" target="_blank">Kharkiv State University of Food Technology and Trade</a>
		        				<span class="new-line"><span class="modal-item-list">Department:</span>«Food technology and engineering»</span>
		        				<span class="new-line"><span class="modal-item-list">Specialty:</span>«Technology of bread, pastry and pasta»</span>
		        				<span class="new-line"><span class="modal-item-list">Diploma:</span>«Bachelor’s degree»</span>
		        				<span class="new-line"><span class="modal-item-list">Training form:</span>«Correspondence»</span>`	
						},

						knowledgeLang: {

							0: 'English - intermediate (reading official documents, simple instructions)'
						},

						workExperience: {

							0: 'LLC «Katyusha 91»',
							1: `<span class="modal-item-list">Position:</span>«Confectioner»`

						}					    

					};					
				

				let language = localStorage.getItem('language'),
					ruS = JSON.parse(localStorage.getItem('rus')),
					enG = JSON.parse(localStorage.getItem('eng'));
					
					
					if(language == null){

						localStorage.setItem('rus', JSON.stringify(rus));
						localStorage.setItem('eng', JSON.stringify(eng));
						
					};
					if(language == 'Russian'){
						
						translate(langRus, langEng, ruS);
					
					};
					if(language == 'English'){
						
						translate(langEng, langRus, enG);

					};
					

				function translate (langActive, langNoActive, lang) { 

					langActive.classList.add('lang-active');
					langNoActive.classList.remove('lang-active');
					
					navLang.forEach( (el,i) => {
						
						el.innerHTML = lang.nav[i];
						
					});

					titlsLang.forEach( (el,i) => {
						
						el.innerHTML = lang.title[i];
						
					});
						
					aboutMeLang.innerHTML = lang.aboutMe[0];

					skillLang.forEach( (el,i) => {

						el.innerHTML = lang.skills[i];
					});

					lookLang.forEach( (el,i) => {

						el.innerHTML = lang.porfolio[0];

					});

					codeLang.forEach( (el,i) => {

						el.innerHTML = lang.porfolio[1];

					});

					usingLang.forEach( (el,i) => {

						el.innerHTML = lang.porfolio[2];

					});

					onlyLang.forEach( (el,i) => {

						el.innerHTML = lang.porfolio[3];

					});

					titleNamedJs.forEach( (el,i) => {

						el.innerHTML = lang.porfolioJs[i];

					});

					resumeTitleLang.forEach( (el,i) => {

						el.innerHTML = lang.resumeTitle[i];

					});

					resumeMeLang.forEach( (el,i) => {

						el.innerHTML = lang.resumeMe[i];

					});

					objectivsLang.forEach( (el,i) => {

						el.innerHTML = lang.objectivs[i];

					});

					educationLlang.forEach( (el,i) => {

						el.innerHTML = lang.education[i];

					});

					knowledgeLang.innerHTML = lang.knowledgeLang[0];

					workExperienceLang.forEach( (el,i) => {

						el.innerHTML = lang.workExperience[i];

					});
						
					
				};

				langRus.addEventListener('click', () => {
					
					localStorage.setItem('language', 'Russian');					
					window.location.reload();   
				
				});

				langEng.addEventListener('click', () => {

					localStorage.setItem('language', 'English');
					window.location.reload();  


				});

		//Portfolio Swiper

				let swiperOne = new Swiper('.portfolio-swiper-one', {

			        slidesPerView: 3,
			        spaceBetween: 80,
			        loop: true,
			        speed: 1500,
			        initialSlide: 0,      
			        pagination: {
				        el: '.portfolio-pagination-one',        
				        clickable: true,
				        renderBullet: function (index, className) {
				          return '<span class="' + className + '">' + (index + 1) + '</span>';
				        },       
		      		},   
			     	breakpoints: {       
				        1200: {
				          slidesPerView: 2,
				          spaceBetween: 20
				        },
				        991: {
				          slidesPerView: 1,
				          spaceBetween: 20
				        }				         
			      	},
			      	navigation: {
			        	nextEl: '.button-portfolio-next-one',
			        	prevEl: '.button-portfolio-prev-one'
			      	},
			      
			    });

			    let swiperTwo = new Swiper('.portfolio-swiper-two', {

			        slidesPerView: 3,
			        spaceBetween: 80,
			        loop: true,
			        speed: 1500,
			        initialSlide: 0,      
			        pagination: {
				        el: '.portfolio-pagination-two',        
				        clickable: true,
				        renderBullet: function (index, className) {
				          return '<span class="' + className + '">' + (index + 1) + '</span>';
				        },       
		      		},   
			     	breakpoints: {       
				        1200: {
				          slidesPerView: 2,
				          spaceBetween: 20
				        },
				        991: {
				          slidesPerView: 1,
				          spaceBetween: 20
				        }				         
			      	},
			      	navigation: {
			        	nextEl: '.button-portfolio-next-two',
			        	prevEl: '.button-portfolio-prev-two'
			      	},
			      
			    });

			    let swiperThree = new Swiper('.portfolio-swiper-three', {

			        slidesPerView: 3,
			        spaceBetween: 80,
			        loop: true,
			        speed: 1500,
			        initialSlide: 0,      
			        pagination: {
				        el: '.portfolio-pagination-three',        
				        clickable: true,
				        renderBullet: function (index, className) {
				          return '<span class="' + className + '">' + (index + 1) + '</span>';
				        },       
		      		},   
			     	breakpoints: {       
				        1200: {
				          slidesPerView: 2,
				          spaceBetween: 20
				        },
				        991: {
				          slidesPerView: 1,
				          spaceBetween: 20
				        }				         
			      	},
			      	navigation: {
			        	nextEl: '.button-portfolio-next-three',
			        	prevEl: '.button-portfolio-prev-three'
			      	},
			      
			    }); 	
 	        };  	  
	});		