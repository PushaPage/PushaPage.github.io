import React from 'react';
import './App.sass';
import Header from '../header/Header';
import Map from '../map/Map';
import Main from '../main/Main';
import Footer from '../footer/Footer';



class App extends React.Component {

  render() {

    let nav = this.props.nav;
    let hotevents = this.props.hotevents;
    let trandingevents = this.props.trandingevents;
  	let navfooter = this.props.navfooter;
  	let footersocial = this.props.footersocial;
  	
    return (
      <div className="App">
        <Header nav={nav} />
        <Map />
        <Main hotevents={hotevents} trandingevents={trandingevents} />
        <Footer navfooter={navfooter} footersocial={footersocial} />    
      </div>
    );
  }  
}

export default App;
