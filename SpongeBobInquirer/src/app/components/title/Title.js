import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './Title.sass';







class Title extends React.Component {

    constructor(props) {
      super(props);

    }     
    
    render() {

      return (      
          <div className="title-container container">                         
            <div className="text-center">
              <picture>
                <source srcSet="./img/title-md.png" media="(max-width: 768px)" />
                <img 
                  className="img-title img-fluid" 
                  src="./img/title.png" 
                  alt="SpongeBob"
                />
              </picture>	            
	          </div>
            <ScrollAnimation animateIn="zoomInUp" animateOnce={true}>   
  	          <div className="title-item col-11 col-lg-10">
  	         	 <h1 className="title-text">Как хорошо ты знаешь Спанч Боба?</h1>
  	          </div>
            </ScrollAnimation>	         
            <div className="btn-box-title">
              <ScrollAnimation animateIn="rubberBand">                     
             	  <Link className="btn btn-bg btn-dang btn-title position-relative mr-0" to="/inquirer" role="button">Проверить!!!</Link>
              </ScrollAnimation>
              <div className="jelly-fish-animate-near-btn">              
                <div className="jelly-fish"></div>                
              </div>
            </div>         
            <div className="jelly-fish-animate">
              <div className="jelly-fish"></div>
            </div>                                        
          </div>    
      );
  } 
}

export default Title;
