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
		
 

ReactDOM.render(<App nav={nav} navfooter={navfooter} footersocial={footersocial}/>, document.getElementById('root'));



