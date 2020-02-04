import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.sass';
import Header from '../header/Header';
import Title from '../title/Title';
import Inquirer from '../inquirer/Inquirer';
import Result from '../result/Result';
import Footer from '../footer/Footer';



class App extends React.Component {

    constructor(props) {
      super(props);
      console.log(props)

    }  
    
    render() {
  	
    let questions = this.props.questions,
        answers = this.props.answers,
        result = this.props.result, 
        stateInquirer = this.props.stateInquirer,
        getTest = this.props.getTest,
        stateInquirerDefault = this.props.stateInquirerDefault,        
        anewTest = this.props.anewTest;
          

      return (         
          <div className="app-wrapper">
              <div className="content">                                     
                  <Header />                                                                                                   
                  <Switch>                   
                    <Route exact path="/" render={ () => <Title /> } />                                                         
                    <Route 
                      exact
                      path="/inquirer" 
                      render={ () =>  <Inquirer                                        
                                        questions={questions}
                                        answers={answers}
                                        result={result}                              
                                        getTest={getTest}
                                        stateInquirer={stateInquirer}
                                        stateInquirerDefault={stateInquirerDefault}
                                      /> } 
                    />
                    <Route exact path="/result" render={ () => <Result result={result} anewTest={anewTest} /> } />                                 
                  </Switch>                                                                          
              </div>                       
              <Footer />                              
          </div>    
      );
  } 
}

export default App;
