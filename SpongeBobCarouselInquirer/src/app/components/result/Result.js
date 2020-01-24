import React from 'react';
import { Link } from 'react-router-dom';
import './Result.sass';







class Result extends React.Component {

    constructor(props) {
      super(props)      
     
      this.againTest = this.againTest.bind(this) 

    }

    againTest = () => {

      sessionStorage.removeItem('resultTable')
      this.props.anewTest()
    }  
    
    render() {  	
      
      let result = this.props.result[0];

      return (      
          <div className="result-container container">
            <div className="result-item">
              <div className="table-responsive-md position-relative">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      {result.thead.map( prop => {
                        return (
                          <th scope="col" key={prop.key}>{prop.value}</th>
                        )}  
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{result.sect1}</th>
                        {result.tbodysect1.map( prop => {
                          return (
                            <td key={prop.key}>{prop.value}</td>
                          )}  
                        )}
                    </tr>
                    <tr>
                      <th scope="row">{result.sect2}</th>
                        {result.tbodysect2.map( prop => {
                          return (
                            <td key={prop.key}>{prop.value}</td>
                          )}  
                        )}
                    </tr>
                    <tr>
                      <th scope="row">{result.sect3}</th>
                        {result.tbodysect3.map( prop => {
                          return (
                            <td key={prop.key}>{prop.value}</td>
                          )}  
                        )}
                    </tr>
                    <tr>
                      <th scope="row">{result.sect4}</th>
                        {result.tbodysect4.map( prop => {
                          return (
                            <td key={prop.key}>{prop.value}</td>
                          )}  
                        )}
                    </tr>
                    <tr>
                      <th scope="row">{result.sect5}</th>
                        {result.tbodysect5.map( prop => {
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
                src="./img/sponge-result-table.png" 
                alt="SpongeBob"
              />  
            </div>
            <div className="title-item d-flex justify-content-between col-12 col-lg-10">
             <h2 className="title-text-result">{result.resultText}</h2>
             <img 
                className="img-fluid img-result" 
                src={result.resultImg} 
                alt="SpongeBob"
              />
            </div>  
            <div className="btn-box-result">
              <Link to= "/" role="button" className="btn btn-danger" onClick={this.againTest}>Пройти тест заново</Link>
            </div>    
          </div>    
      );
  } 
}

export default Result;