import React from 'react';
import { Link } from 'react-router-dom';
import './Result.sass';







class Result extends React.Component {

    constructor(props) {
      super(props)    
      
      console.log(this.props)
    }

    againTest = () => {     

      sessionStorage.removeItem('resultTable')
      
    }  
    
    render() {  	
      
      let result = this.props.result;

      let {

          thead,
          tbodysect1,
          tbodysect2,
          tbodysect3,
          tbodysect4,
          tbodysect5
          
      } = this.props.result;

      return (      
          <div className="result-container container">            
            <div className="result-item col-11 col-sm-12">            
              <div className="table-responsive-md position-relative">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      {thead.map( prop => {
                        return (
                          <th scope="col" key={prop.key}>{prop.value}</th>
                        )}  
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{result.sect1}</th>
                        {tbodysect1.map( prop => {
                          return (
                            <td key={prop.key}>{prop.value}</td>
                          )}  
                        )}
                    </tr>
                    <tr>
                      <th scope="row">{result.sect2}</th>
                        {tbodysect2.map( prop => {
                          return (
                            <td key={prop.key}>{prop.value}</td>
                          )}  
                        )}
                    </tr>
                    <tr>
                      <th scope="row">{result.sect3}</th>
                        {tbodysect3.map( prop => {
                          return (
                            <td key={prop.key}>{prop.value}</td>
                          )}  
                        )}
                    </tr>
                    <tr>
                      <th scope="row">{result.sect4}</th>
                        {tbodysect4.map( prop => {
                          return (
                            <td key={prop.key}>{prop.value}</td>
                          )}  
                        )}
                    </tr>
                    <tr>
                      <th scope="row">{result.sect5}</th>
                        {tbodysect5.map( prop => {
                          return (
                            <td key={prop.key}>{prop.value}</td>
                          )}  
                        )}
                    </tr>    
                    <tr>                    
                      <td colSpan="3">{result.countText}</td>
                      <td>{result.total}</td>
                    </tr>
                  </tbody>
                </table>               
              </div>
              <img 
                className="img-result-table"
                src={result.tableImg}  
                alt="SpongeBob"
              />  
            </div>         
            <div className="title-item d-flex justify-content-between col-11 col-sm-12 col-lg-10">
             <h2 className="title-text-result">{result.resultText}</h2>           
             <img 
                className="img-fluid img-result" 
                src={result.resultImg} 
                alt="SpongeBob"
              />             
            </div>            
            <div className="btn-box-result">             
              <Link to= "/" role="button" className="btn btn-dang btn-dang-result" onClick={this.againTest}>Пройти тест заново</Link>              
            </div>    
          </div>    
      );
  } 
}

export default Result;