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
	             <img 
	             	className="img-title img-fluid" 
	             	src="./img/title.png" 
	             	alt="SpongeBob"
	             />
	         </div>
	         <div className="title-item col-11 col-lg-10">
	         	<h1 className="title-text">Как хорощо ты знаешь Спанч Боба?</h1>
	         </div>
	         <div className="text-center">	    	
             	<Link className="btn btn-danger btn-title" to="/inquirer" role="button">Проверить!!!</Link>
             </div>	                            
          </div>    
      );
  } 
}

export default Title;
