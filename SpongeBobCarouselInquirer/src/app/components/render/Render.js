import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { getTest, stateInquirer, stateInquirerEmpty, anewTest } from '../store/Store';
import App from '../app/App.js';



export let rerenderEntireTree = (store) => {		

ReactDOM.render(

	<Router>		
		<App 
			store={store}  
			stateInquirer={stateInquirer}
			stateInquirerEmpty={stateInquirerEmpty}
			getTest={getTest}
			anewTest={anewTest}
		/>		
	</Router>,

	document.getElementById('root')
	);

}

