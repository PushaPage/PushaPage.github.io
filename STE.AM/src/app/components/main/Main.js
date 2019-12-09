import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LazyLoad from 'react-lazyload';
import SearchInput, {createFilter} from 'react-search-input';
import './Main.sass';




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

let keys_filters = ['date', 'title', 'place', 'address', 'text', 'male', 'female']

class Main extends React.Component {
    constructor(props) {
    super(props)
    this.state = {

          tabIndex: 0,          
          hotvisible: 6,
          trandingvisible: 6,
          addvisible: 3,
          searchTerm: '' 
        }; 
   
    this.searchUpdated = this.searchUpdated.bind(this) 

    this.loadMoreHot = () =>{
      this.setState((prev) => {
         return {hotvisible: prev.hotvisible + this.state.addvisible};
      });
    }

    this.loadMoreTranding = () =>{
      this.setState((prev) => {
         return {trandingvisible: prev.trandingvisible + this.state.addvisible};
      });
    }
 
    this.loadMoreHot = this.loadMoreHot.bind(this)

    this.loadMoreTranding = this.loadMoreTranding.bind(this)



    this.windowSize = () => {

      if(window.innerWidth > 991){

        this.setState({
          hotvisible: 6,
          trandingvisible: 6,
          addvisible: 3
        })       
      }
      if(window.innerWidth < 991) {

        this.setState({
          hotvisible: 4,
          trandingvisible: 4,
          addvisible: 2
        })
      }
      if(window.innerWidth < 767) {

        this.setState({
          hotvisible: 2,
          trandingvisible: 2,
          addvisible: 1
        })      
      }
    }
    
    window.addEventListener('load', this.windowSize)
    window.addEventListener('resize', this.windowSize)   

  }
  render() {
    
    let hotEvents =  hotevents.filter(createFilter(this.state.searchTerm, keys_filters))
    let trandingEvents =  trandingevents.filter(createFilter(this.state.searchTerm, keys_filters))
     
   
    return (   
      <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <section id="main">
          <div className="tabs-list">
            <div className="container d-flex flex-wrap">       
              <TabList>
                <Tab>Hot Events</Tab>
                <Tab>Trending Events</Tab>
              </TabList>
              <SearchInput className="search-input col-10 col-sm-10 col-md-6 col-lg-4 col-xl-5" type="text" placeholder="Act Big! Ultimate Music Festival" onChange={this.searchUpdated} />
              <div className="search-input-location">              
                <input className="search-location" type="search" placeholder="Your location" />                
                <button type="button" className="btn-location" />
                <span className="icon-keyboard" />
              </div>   
            </div>   
          </div>          
          <TabPanel>
            <ul className="container events d-flex flex-wrap">
                {hotEvents.slice(0, this.state.hotvisible).map( event => {
                  return (
                    <li className="event-wrap col-12 col-sm-8 col-md-6 col-lg-4" key={event.id}>
                      <div className="event-box">
                        <div className="event-item">
                          <LazyLoad height={200}>
                            <img  className="img-fluid" src={event.img} alt="STE.AM" />
                          </LazyLoad>  
                          <div className="event-info">
                              <a className="event-social" href={event.sochrf}/>
                              <span className="event-date">{event.date}</span>
                              <span className="event-like-icon" />
                          </div>
                        </div>
                        <h3 className="event-title">{event.title}</h3>
                        <h4 className="event-address">{event.place}
                        <span>{event.address}</span></h4>
                        <p className="event-info-text">{event.text}</p>
                        <div className="event-visit">
                            <div className="visit-male">
                                <span className="male-icon" />
                                <span className="male-quantity">{event.male}<span className="percent">%</span>
                                    <span className="name-gender">Male</span>
                                </span>
                            </div>
                            <div className="visit-female">
                                <span className="female-icon" />
                                <span className="female-quantity">{event.female}<span className="percent">%</span>
                                    <span className="name-gender">Female</span>
                                </span>
                            </div>
                        </div> 
                      </div>
                    </li>
                  )
                })}                      
              </ul>
              <div className="container load-more">
                {this.state.hotvisible < hotEvents.length &&
                  <button onClick={this.loadMoreHot} className="btn-load-more" type="button">Load more</button>
                }  
              </div>                      
            </TabPanel>
            <TabPanel>
              <ul className="container events d-flex flex-wrap">
                {trandingEvents.slice(0, this.state.trandingvisible).map( event => {
                  return (
                    <li className="event-wrap col-12 col-sm-8 col-md-6 col-lg-4" key={event.id}>
                      <div className="event-box">
                        <div className="event-item">
                          <LazyLoad height={200}>
                            <img  className="img-fluid" src={event.img} alt="STE.AM" />
                          </LazyLoad>  
                          <div className="event-info">
                              <a  className="event-social" href={event.sochrf}/>
                              <span className="event-date">{event.date}</span>
                              <span className="event-like-icon" />
                          </div>
                        </div>
                        <h3 className="event-title">{event.title}</h3>
                        <h4 className="event-address">{event.place}
                        <span>{event.address}</span></h4>
                        <p className="event-info-text">{event.text}</p>
                        <div className="event-visit">
                            <div className="visit-male">
                                <span className="male-icon" />
                                <span className="male-quantity">{event.male}<span className="percent">%</span>
                                    <span className="name-gender">Male</span>
                                </span>
                            </div>
                            <div className="visit-female">
                                <span className="female-icon" />
                                <span className="female-quantity">{event.female}<span className="percent">%</span>
                                    <span className="name-gender">Female</span>
                                </span>
                            </div>
                        </div> 
                      </div>
                    </li>
                  )
                })}                      
              </ul>
              <div className="container load-more">
                {this.state.trandingvisible < trandingEvents.length &&
                  <button onClick={this.loadMoreTranding} className="btn-load-more" type="button">Load more</button>
                }  
              </div>                          
            </TabPanel>          
        </section>
      </Tabs>  
    );
  }
   searchUpdated (term) {
    this.setState({searchTerm: term})
  }  
}

export default Main;
