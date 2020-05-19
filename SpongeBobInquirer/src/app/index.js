import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { questions, answers, result, getTest, stateInquirer, stateInquirerDefault, subscribe } from './components/store/Store';
import App from './components/app/App.js';
import './components/sass-utils/fonts.css';
import 'animate.css/animate.min.css';

		




let rerenderEntireTree = (result) => {		

ReactDOM.render(

	<Router>	    	
		<App
			questions={questions}
			answers={answers}
			result={result} 			
			stateInquirer={stateInquirer}
			stateInquirerDefault={stateInquirerDefault}
			getTest={getTest}						
		/>				
	</Router>,

	document.getElementById('root')
	);

}

rerenderEntireTree(result)

subscribe(rerenderEntireTree)