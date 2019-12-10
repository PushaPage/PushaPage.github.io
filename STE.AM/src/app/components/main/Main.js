import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LazyLoad from 'react-lazyload';
import SearchInput, {createFilter} from 'react-search-input';
import './Main.sass';




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

    let keys_filters = ['date', 'title', 'place', 'address', 'text', 'male', 'female']
    let hotEvents = this.props.hotevents.filter(createFilter(this.state.searchTerm, keys_filters))
    let trandingEvents = this.props.trandingevents.filter(createFilter(this.state.searchTerm, keys_filters))
     
   
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
