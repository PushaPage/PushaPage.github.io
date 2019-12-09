import React from 'react';
import './Header.sass';


class Header extends React.Component {

  	constructor(props) {
  		super(props);  		

  		this.state = {
    		open: false
  		}
	}

	toggleClass = () => {       
        this.setState({ open: !this.state.open });        
    };

  	render() {

  	let nav = this.props.nav;

	  return (    
	    <header>
	      	<div className="container">	      
		    	<nav className="navbar navbar-expand-lg navbar-light">
					<a className="navbar-brand" href="#">
						<img src="./img/logo.png" className="img-fluid" alt="STE.AM" />
					</a>
				    <button className={this.state.open===true ? 'navbar-toggler open' : 'navbar-toggler'} 
                onClick={this.toggleClass} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    	<span className="navbar-toggler-icon"></span>
				    	<span className="navbar-toggler-icon"></span>
				    	<span className="navbar-toggler-icon"></span>
				    </button>
				    <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    	<ul className="navbar-nav">
				  			{nav.map( prop => <li className={prop.cls} key={prop.id}><a className={prop.clslink} href={prop.href}>{prop.title}</a></li> )}		    	
				    	</ul>			    
				  		<form className="form-inline d-flex flex-wrap flex-column align-items-start flex-sm-row">
				        	<button className="btn btn-login" type="button">Login / Signup</button>
				        	<button className="btn btn-get-list" type="button">Get Listed Today</button>
				  		</form>			
				  	</div>
				</nav>
				<h1 className="head-title">Find the <span>next event</span> you'll want <span>to attend.</span></h1>    
            </div>
	    </header>   
	  );
    }
}

export default Header;