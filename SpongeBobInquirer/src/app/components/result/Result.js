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
            <div className="result-item">
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