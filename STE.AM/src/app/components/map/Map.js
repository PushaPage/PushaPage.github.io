import React, { useState } from 'react';
import { 
  GoogleMap, 
  withScriptjs, 
  withGoogleMap, 
  Marker,
  Circle, 
  InfoWindow 
} from 'react-google-maps';
import mapStyles from './MapStyle.js';
import './Map.sass';
import * as cordMark from './marks.json'; 

 

function Map () {  
    
   let [selectedPlace, setSelectedPlace] = useState(null);
  
 
    return (
      
        <GoogleMap                         
         
          defaultZoom={13}          
          defaultCenter={{ lat: 28.613183, lng: 77.27}}
          defaultOptions={{ styles: mapStyles}}          
        >

        <Marker                
          position={{ lat: 28.610603, lng: 77.270883}}          
          icon={{
            url: './img/marker-cntr.png'            
          }}         
        />

        <Marker
          id='aside'          
          position={{ lat: 28.610603, lng: 77.305023}}                 
          icon={{
            url: './img/marker-aside.png'            
          }}         
        />
        <Circle
          lineWidth={1}
          ref={React.createRef()} 
          center={{ lat: 28.612803, lng: 77.270883}} 
          radius={3350}
          options={{  
            fillColor: 'transparent',            
            strokeColor: '#fe2232',
            strokeWeight: 2 
          }}
        />
       
        
        {cordMark.features.map( place => (
          <Marker
            key={place.properties.ID}        
              position={{
                lat: place.geometry.coordinates[0], 
                lng: place.geometry.coordinates[1] 
            }}          
            icon={{
              url: './img/marker.svg'            
            }}
            onClick={() => {
               setSelectedPlace(place);
            }}
          />
        ))}

        {selectedPlace && (
          <InfoWindow
            position={{
                lat: selectedPlace.geometry.coordinates[0], 
                lng: selectedPlace.geometry.coordinates[1] 
            }}
            onCloseClick={() => {
               setSelectedPlace(null);
            }}  
          >
        <div className="pop-up-map">
            <img src={selectedPlace.properties.IMG} className="img-fluid" alt="STE.AM" />
            <h3 className="title-pop-up-map">{selectedPlace.properties.TITLE}</h3>
            <h4 className="title-place-pop-up-map">{selectedPlace.properties.PLACE}</h4>
            <p className="address-pop-up-map">{selectedPlace.properties.ADDRESS}</p>
        </div>
          </InfoWindow>
        )}
        </GoogleMap>      
    );
  }  

let WrappedMap =  withScriptjs(withGoogleMap(Map));  

 export default function App() {
  return (
  <section id="map">    
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDCj2yPeAadf-BzcRQaQRc3URyTWc7E1XE&language=en`}
      loadingElement={<div style={{height: '100%'}}/>}
      containerElement={<div style={{height: '100%'}}/>}
      mapElement={<div style={{height:'100%'}}/>}        
    />
    <div className="container position-relative d-flex justify-content-end aling-items-end">
      <div className="global-events">
        <span className="quantity-events">9657</span>
        <span className="title-events">Global Live Events</span>
      </div>
    </div> 
  </section>

      )
 } 




