import React from 'react';
import { Link } from 'react-router-dom';
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
	          <div className="title-item col-11 col-lg-10">
	         	 <h1 className="title-text">Как хорошо ты знаешь Спанч Боба?</h1>
	          </div>	         
            <div className="btn-box-title">	    	
             	<Link className="btn btn-danger btn-title m-0" to="/inquirer" role="button">Проверить!!!</Link>
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
