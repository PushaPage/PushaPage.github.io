import React from 'react';
import './Footer.sass';



class Footer extends React.Component {
  constructor(props) {
  		super(props);  		

  		
	}	
  render() {

  	let navfooter = this.props.navfooter;
  	let footersocial = this.props.footersocial;

    return (
      <footer>
      	<div className="container">
      		<ul className="footer-nav d-flex flex-column flex-sm-row">
      			{navfooter.map( prop => <li className={prop.cls} key={prop.id}><a className={prop.clslink} href={prop.href}>{prop.title}</a></li> )}	
      		</ul>
      		<div className="footer-line-decor" />
      		<div className="d-flex flex-column-reverse flex-md-row justify-content-md-between">
      			<div className="footer-copyright align-self-end align-self-md-start">&copy; 2013 <span>steam</span>. All Rights Reserved. Design by <span>woof</span>.</div>
      			<ul className="footer-contacts ">
      				{footersocial.map( prop => <li className={prop.cls} key={prop.id}><a className={prop.clslink} href={prop.href}></a></li> )}
      				{footersocial.map( prop => <li className={prop.cls2} key={prop.id}></li> )}	
      			</ul>
      		</div>
      	</div>
      </footer>
    );
  }  
}

export default Footer;