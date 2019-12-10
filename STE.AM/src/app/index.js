import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.js';


let nav = [

		{id: 0, title: 'Home', cls: 'nav-item active', clslink: 'nav-link active', href:'#'},
		{id: 1, title: 'Get Started', cls: 'nav-item', clslink: 'nav-link', href:'#'},
		{id: 2, title: 'How it works', cls: 'nav-item', clslink: 'nav-link', href:'#'},
		{id: 3, title: 'Pricing', cls: 'nav-item', clslink: 'nav-link', href:'#'},
		{id: 4, title: 'Support', cls: 'nav-item', clslink: 'nav-link', href:'#'}
	]

	let hotevents = [
        {
          id:'0', 
          img: './img/event-place-1.jpg', 
          sochrf: 'https://en-gb.facebook.com/', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Act Big! Ultimate Music Festival',
          place: 'Pattichion Municipal Amphitheater',
          address: 'Nikolaou G. Dimitriou Street , Larnaca, 6031, Cyprus',
          text: 'An evening of bowling by geeks for geeks. Nothing more, nothing less (adorn bowling shirts — funny shoes provided) Follow @TeamLebowski or #Geek- Bowling on Twitter for up to the minute news...',
          male: 13,
          female: 87
        },
        {
          id:'1', 
          img: './img/event-place-2.jpg', 
          sochrf: '#', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Summer Art Club - Week 1/3',
          place: 'Fun Factory Wildeshausen',
          address: 'Am Umspannwerk 7, Wildeshausen, 27793, Germany',
          text: 'Join us for creative holiday activities - this week with Ashley & Letty! Let your 8-13 year olds to join to help burn some of that pent-up creative energy on our fun artist led workshops. You can book all three days, or just one at a time...',
          male: 25,
          female: 75
        },
        {
          id:'2', 
          img: './img/event-place-3.jpg', 
          sochrf: 'https://en-gb.facebook.com/', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Bocca Foodbar @ Vama Veche',
          place: 'Pattichion Municipal Amphitheater',
          address: 'Nikolaou G. Dimitriou Street , Larnaca, 6031, Cyprus',
          text: 'ERLEBT 3 TAGE LANG STRANDFEELING & PAR- TYSPAß PUR! BEACH PARTY OPENING WIR ERÖFFNEN DIE PARTYSAISON! Seid Ihr bereit für die heißeste Beachparty des Jahres ... ',
          male: 62,
          female: 38
        },
        {
          id:'3', 
          img: './img/event-place-4.jpg', 
          sochrf: '#', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Faringdon Community Sports College - Summer - Week 2',
          place: 'University of Netherlands Antilles',
          address: 'Sta Maria Willeamstad, Curaçao, AN5999, Netherlands',
          text: 'Practical Self-Service BI with PowerPivot for Excel SQL Server MVP and Business Intelligence Architect Bill Pearson leads this full-day, hands-on introduction to using PowerPivot for...',
          male: 55,
          female: 45
        },
        {
          id:'4', 
          img: './img/event-place-5.jpg', 
          sochrf: 'https://en-gb.facebook.com/', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Training EN - OpenERP 7.0 Functional Training',
          place: 'Boulevard Barcelona',
          address: 'La Rambla 27, Barcelona, 08002, Spain',
          text: `THE BOILER ROOM is coming to BCN The Boiler Room, un nuevo concepto de fiesta que aterriza en Barcelona, una noche fresca y muy energética con una programación de Dj's de ...`,
          male: 31,
          female: 69
        },
        {
          id:'5', 
          img: './img/event-place-6.jpg', 
          sochrf: '#', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Band Workshop with Artists in Residence Super Tenants',
          place: 'Culture Club Revelin',
          address: 'Sv. Dominika 3, Dubrovnik, 20 000, Croatia',
          text: `Culture Club Revelin predstavio je novi ljetni pro- gram ''DREAMGIRLS IN REVELIN'' U bogatom cjelovečernjem programu moći ćete uživati u vrućim plesnim točkama zgodnih...`,
          male: 57,
          female: 43
        },
        {
          id:'6', 
          img: './img/event-place-1.jpg', 
          sochrf: 'https://en-gb.facebook.com/', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Act Big! Ultimate Music Festival',
          place: 'Pattichion Municipal Amphitheater',
          address: 'Nikolaou G. Dimitriou Street , Larnaca, 6031, Cyprus',
          text: 'An evening of bowling by geeks for geeks. Nothing more, nothing less (adorn bowling shirts — funny shoes provided) Follow @TeamLebowski or #Geek- Bowling on Twitter for up to the minute news...',
          male: 13,
          female: 87
        },
        {
          id:'7', 
          img: './img/event-place-2.jpg', 
          sochrf: '#', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Summer Art Club - Week 1/3',
          place: 'Fun Factory Wildeshausen',
          address: 'Am Umspannwerk 7, Wildeshausen, 27793, Germany',
          text: 'Join us for creative holiday activities - this week with Ashley & Letty! Let your 8-13 year olds to join to help burn some of that pent-up creative energy on our fun artist led workshops. You can book all three days, or just one at a time...',
          male: 25,
          female: 75
        },
        {
          id:'8', 
          img: './img/event-place-3.jpg', 
          sochrf: 'https://en-gb.facebook.com/', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Bocca Foodbar @ Vama Veche',
          place: 'Pattichion Municipal Amphitheater',
          address: 'Nikolaou G. Dimitriou Street , Larnaca, 6031, Cyprus',
          text: 'ERLEBT 3 TAGE LANG STRANDFEELING & PAR- TYSPAß PUR! BEACH PARTY OPENING WIR ERÖFFNEN DIE PARTYSAISON! Seid Ihr bereit für die heißeste Beachparty des Jahres ... ',
          male: 62,
          female: 38
        },
        {
          id:'9', 
          img: './img/event-place-4.jpg', 
          sochrf: '#', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Faringdon Community Sports College - Summer - Week 2',
          place: 'University of Netherlands Antilles',
          address: 'Sta Maria Willeamstad, Curaçao, AN5999, Netherlands',
          text: 'Practical Self-Service BI with PowerPivot for Excel SQL Server MVP and Business Intelligence Architect Bill Pearson leads this full-day, hands-on introduction to using PowerPivot for...',
          male: 55,
          female: 45
        },
        {
          id:'10', 
          img: './img/event-place-5.jpg', 
          sochrf: 'https://en-gb.facebook.com/', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Training EN - OpenERP 7.0 Functional Training',
          place: 'Boulevard Barcelona',
          address: 'La Rambla 27, Barcelona, 08002, Spain',
          text: `THE BOILER ROOM is coming to BCN The Boiler Room, un nuevo concepto de fiesta que aterriza en Barcelona, una noche fresca y muy energética con una programación de Dj's de ...`,
          male: 31,
          female: 69
        },
        {
          id:'11', 
          img: './img/event-place-6.jpg', 
          sochrf: '#', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Band Workshop with Artists in Residence Super Tenants',
          place: 'Culture Club Revelin',
          address: 'Sv. Dominika 3, Dubrovnik, 20 000, Croatia',
          text: `Culture Club Revelin predstavio je novi ljetni pro- gram ''DREAMGIRLS IN REVELIN'' U bogatom cjelovečernjem programu moći ćete uživati u vrućim plesnim točkama zgodnih...`,
          male: 57,
          female: 43
        }
    ]

let trandingevents = [
        {
          id:'0', 
          img: './img/event-place-4.jpg', 
          sochrf: '#', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Faringdon Community Sports College - Summer - Week 2',
          place: 'University of Netherlands Antilles',
          address: 'Sta Maria Willeamstad, Curaçao, AN5999, Netherlands',
          text: 'Practical Self-Service BI with PowerPivot for Excel SQL Server MVP and Business Intelligence Architect Bill Pearson leads this full-day, hands-on introduction to using PowerPivot for...',
          male: 55,
          female: 45
        },
        {
          id:'1', 
          img: './img/event-place-5.jpg', 
          sochrf: 'https://en-gb.facebook.com/', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Training EN - OpenERP 7.0 Functional Training',
          place: 'Boulevard Barcelona',
          address: 'La Rambla 27, Barcelona, 08002, Spain',
          text: `THE BOILER ROOM is coming to BCN The Boiler Room, un nuevo concepto de fiesta que aterriza en Barcelona, una noche fresca y muy energética con una programación de Dj's de ...`,
          male: 31,
          female: 69
        },
        {
          id:'2', 
          img: './img/event-place-6.jpg', 
          sochrf: '#', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Band Workshop with Artists in Residence Super Tenants',
          place: 'Culture Club Revelin',
          address: 'Sv. Dominika 3, Dubrovnik, 20 000, Croatia',
          text: `Culture Club Revelin predstavio je novi ljetni pro- gram ''DREAMGIRLS IN REVELIN'' U bogatom cjelovečernjem programu moći ćete uživati u vrućim plesnim točkama zgodnih...`,
          male: 57,
          female: 43
        },
        {
          id:'3', 
          img: './img/event-place-1.jpg', 
          sochrf: 'https://en-gb.facebook.com/', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Act Big! Ultimate Music Festival',
          place: 'Pattichion Municipal Amphitheater',
          address: 'Nikolaou G. Dimitriou Street , Larnaca, 6031, Cyprus',
          text: 'An evening of bowling by geeks for geeks. Nothing more, nothing less (adorn bowling shirts — funny shoes provided) Follow @TeamLebowski or #Geek- Bowling on Twitter for up to the minute news...',
          male: 13,
          female: 87
        },
        {
          id:'4', 
          img: './img/event-place-2.jpg', 
          sochrf: '#', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Summer Art Club - Week 1/3',
          place: 'Fun Factory Wildeshausen',
          address: 'Am Umspannwerk 7, Wildeshausen, 27793, Germany',
          text: 'Join us for creative holiday activities - this week with Ashley & Letty! Let your 8-13 year olds to join to help burn some of that pent-up creative energy on our fun artist led workshops. You can book all three days, or just one at a time...',
          male: 25,
          female: 75
        },
        {
          id:'5', 
          img: './img/event-place-3.jpg', 
          sochrf: 'https://en-gb.facebook.com/', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Bocca Foodbar @ Vama Veche',
          place: 'Pattichion Municipal Amphitheater',
          address: 'Nikolaou G. Dimitriou Street , Larnaca, 6031, Cyprus',
          text: 'ERLEBT 3 TAGE LANG STRANDFEELING & PAR- TYSPAß PUR! BEACH PARTY OPENING WIR ERÖFFNEN DIE PARTYSAISON! Seid Ihr bereit für die heißeste Beachparty des Jahres ... ',
          male: 62,
          female: 38
        },
        {
          id:'6', 
          img: './img/event-place-4.jpg', 
          sochrf: '#', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Faringdon Community Sports College - Summer - Week 2',
          place: 'University of Netherlands Antilles',
          address: 'Sta Maria Willeamstad, Curaçao, AN5999, Netherlands',
          text: 'Practical Self-Service BI with PowerPivot for Excel SQL Server MVP and Business Intelligence Architect Bill Pearson leads this full-day, hands-on introduction to using PowerPivot for...',
          male: 55,
          female: 45
        },
        {
          id:'7', 
          img: './img/event-place-5.jpg', 
          sochrf: 'https://en-gb.facebook.com/', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Training EN - OpenERP 7.0 Functional Training',
          place: 'Boulevard Barcelona',
          address: 'La Rambla 27, Barcelona, 08002, Spain',
          text: `THE BOILER ROOM is coming to BCN The Boiler Room, un nuevo concepto de fiesta que aterriza en Barcelona, una noche fresca y muy energética con una programación de Dj's de ...`,
          male: 31,
          female: 69
        },
        {
          id:'8', 
          img: './img/event-place-6.jpg', 
          sochrf: '#', 
          date: 'Aug 17, 2013  02:00pm - 08:00pm IST',
          title: 'Band Workshop with Artists in Residence Super Tenants',
          place: 'Culture Club Revelin',
          address: 'Sv. Dominika 3, Dubrovnik, 20 000, Croatia',
          text: `Culture Club Revelin predstavio je novi ljetni pro- gram ''DREAMGIRLS IN REVELIN'' U bogatom cjelovečernjem programu moći ćete uživati u vrućim plesnim točkama zgodnih...`,
          male: 57,
          female: 43
        }     
    ]

let navfooter = [

		{id: 0, title: 'Home', cls: 'footer-nav-item active', clslink: 'footer-nav-link active', href:'#'},
		{id: 1, title: 'About eco', cls: 'footer-nav-item', clslink: 'footer-nav-link', href:'#'},
		{id: 2, title: 'How it works', cls: 'footer-nav-item d-none d-lg-block', clslink: 'footer-nav-link', href:'#'},
		{id: 3, title: 'Industries', cls: 'footer-nav-item', clslink: 'footer-nav-link', href:'#'},
		{id: 4, title: 'Features', cls: 'footer-nav-item', clslink: 'footer-nav-link', href:'#'},
		{id: 5, title: 'Pricing', cls: 'footer-nav-item d-none d-lg-block', clslink: 'footer-nav-link', href:'#'},
		{id: 6, title: `Faq's`, cls: 'footer-nav-item', clslink: 'footer-nav-link', href:'#'},
		{id: 7, title: 'Privacy policy', cls: 'footer-nav-item', clslink: 'footer-nav-link', href:'#'},
		{id: 8, title: 'Blog', cls: 'footer-nav-item', clslink: 'footer-nav-link', href:'#'},
		{id: 9, title: 'Terms of service', cls: 'footer-nav-item', clslink: 'footer-nav-link', href:'#'}
		
	]

let footersocial = [

		{id: 0, cls: 'soc-item soc-facebook', cls2: 'soc-item soc-play', href: '#' },
		{id: 1, cls: 'soc-item soc-twitter', cls2: 'soc-item soc-circle', href: '#' },
		{id: 2, cls: 'soc-item soc-insta', cls2: 'soc-item soc-wi-fi', href: '#' }		
	]		  
		
 

ReactDOM.render(<App nav={nav} hotevents={hotevents} trandingevents={trandingevents} navfooter={navfooter} footersocial={footersocial}/>, document.getElementById('root'));




