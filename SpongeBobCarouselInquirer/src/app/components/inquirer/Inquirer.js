import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import './Inquirer.sass';


class Inquirer extends React.Component {

  	constructor(props) {
  		super(props);
      
      this.handleInput = this.handleInput.bind(this)
      this.handleRadio = this.handleRadio.bind(this)
      this.handleCheckBox = this.handleCheckBox.bind(this)
      this.handleSelect = this.handleSelect.bind(this)
      this.resetForm = this.resetForm.bind(this)
      this.onOpenModal = this.onOpenModal.bind(this) 
      this.onCloseModal = this.onCloseModal.bind(this)
      this.checkSubmit = this.checkSubmit.bind(this)
      this.submit = this.submit.bind(this)
      this.onHold = this.onHold.bind(this)     		
        
  		this.state = this.props.stateInquirer;  	

	}

  checkSubmit = () => {   

    setTimeout( () => {

      let {

        inputAsk,       
        radioAsk1,
        radioAsk2,
        checkAsk1,
        checkAsk2,
        selectAsk

      } = this.state;  

      if (inputAsk == '' || radioAsk1 == '' ||
          radioAsk2 == '' || checkAsk1 == '' ||
          checkAsk2 == '' || selectAsk == 'Выберете правильный ответ...') {

        this.setState({ submit: false, link: `/inquirer` });                           

      } else {     
      
        this.setState({ submit: true, link: `/result` });
        console.log('ehf')        
                 
      }   

      sessionStorage.setItem('stateInquirer', JSON.stringify(this.state));

    }, 100)    
  }

  onHold = event => {

    event.preventDefault()
  }

	handleInput = event => {

    let { name, value } = event.target;        

        this.setState({ [name]: value });
  }

  handleRadio = event => {
      
    let { name, value } = event.target; 

      this.setState({ [name]: value });           
  }

  handleCheckBox = event => {
   
    let { name, checked, value } = event.target;             
       
    if (checked) {

       this.state.checkCount ++;
       this.setState({ [name]: checked })

       if (this.state.checkCount == 1) {
          
          this.setState({ checkAsk1: value })
       } 
       if (this.state.checkCount == 2) {
          
          this.setState({ checkAsk2: value })
       }

    } else {

       this.state.checkCount --;
       this.setState({ [name]: checked })
    }

    if (!checked && this.state.checkCount == 0) { 

        this.setState({ checkAsk1: '' })
    } 

    if (!checked && this.state.checkCount == 1) { 

          this.setState({ checkAsk2: '' })
    } 
    if (this.state.checkCount > 2){      

      if (this.state[name] == false){          

        this.setState({ [name]: false, checkCount: 2 }) 
                    
      } else if (this.state[name] == true) { 

        this.setState({ [name]: false })
      } 
    }                    
  }

  handleSelect = event => {

    let { name, value } = event.target;

      this.setState({ [name]: value });        
  }  

  resetForm = () => {    
  
    sessionStorage.removeItem('stateInquirer')    
    
    for (let key in this.props.stateInquirerEmpty) {

      this.setState({ [key]: this.props.stateInquirerEmpty[key] });      
    }
  }

  submit = () => { 

      this.props.getTest(this.state)
      this.resetForm()
      this.onCloseModal()           
  }    

  onOpenModal = event => {

    event.preventDefault()
    this.setState({ openModal: true });
  };
 
  onCloseModal = () => {
    
    this.setState({ openModal: false });    
  };

	render() {

    let askOne = this.props.questions[0],
        askTwo = this.props.questions[1],
        askThree = this.props.questions[2],
        askFour = this.props.questions[3],
        askFive = this.props.questions[4];

    let { openModal, link } = this.state;               	

	  return ( 
	     <div className="inquirer-container container">
          <div className="title-item">
            <h1 className="title-text">Каждый правильный ответ - 20 очков!</h1>
          </div>       
	  	    <form 
            onSubmit={this.state.submit === false ? this.onOpenModal : this.onHold}  
            onChange={this.checkSubmit}> 
            <div className="col-11 col-lg-10 ask-one-curve">
              <div className="ask-one">
                <p>{askOne.ask}</p>      
  	  	        <input 
                  className="form-control" 
                  onChange={this.handleInput} 
                  name="inputAsk"  
                  value={this.state.inputAsk} 
                  type="text"
                  autoComplete="off"
                  placeholder={askOne.placeholder}
                  pattern={askOne.pattern}
                />
              </div>  
	  	      </div>  
	  	      <div className="col-11 col-lg-9 ask-two-curve">
              <div className="ask-two">
                <p>{askTwo.ask}</p>
                <ul className="ul-label">
                  {askTwo.ansArray.map( prop => {
                    return (
                      <li key={prop.key}>
                		    <input                        
                          type="radio" 
                          id={prop.id}
                		      name={prop.name}
                          value={prop.ans}
                          onChange={this.handleRadio} 
                          checked={this.state.radioAsk1 === prop.ans}
                        />
                		    <label htmlFor={prop.id}>{prop.ans}</label>
                      </li>
                    )}  
                  )}
                </ul>                  
              </div>        		    
      		  </div>
            <div className="col-11 ask-three-curve">
              <div className="ask-three">
                <p>{askThree.ask}</p>
                <span className="ask-proviso">{askThree.proviso}</span>
                <ul className="ul-label">
                  {askThree.ansArray.map( prop => {
                    return (
                      <li key={prop.key}>
                        <input                        
                          type="checkbox" 
                          id={prop.id}
                          name={prop.name} 
                          value={prop.ans}
                          onChange={this.handleCheckBox} 
                          checked={this.state[prop.name]}
                        />
                        <label htmlFor={prop.id}>{prop.ans}</label>
                      </li>
                    )}  
                  )}
                </ul>                  
              </div>                
            </div>
            <div className="col-11 col-lg-8 ask-four-curve">
              <div className="ask-four">
                <p>{askFour.ask}</p>
                  <select 
                    className="form-control"
                    name={askFour.name} 
                    value={this.state.selectAsk}
                    onChange={this.handleSelect} 
                  >
                  {askFour.ansArray.map( prop => {
                    return (
                      <option
                        key={prop.key}
                        hidden={prop.hidden} 
                        disabled={prop.disabled}                            
                        value={prop.ans}
                        >{prop.ans}
                      </option>
                    )}  
                  )}         
                  </select>
              </div>                
            </div>
            <div className="col-11 ask-five-curve">
              <div className="ask-five">
                <p>{askFive.ask}</p>
                <ul className="ul-label">
                  {askFive.ansArray.map( prop => {
                    return (
                      <li key={prop.key}>
                        <input                        
                          type="radio" 
                          id={prop.id}
                          name={prop.name}
                          value={prop.ans}
                          onChange={this.handleRadio} 
                          checked={this.state.radioAsk2 === prop.ans}
                        />
                        <label htmlFor={prop.id}>{prop.ans}</label>
                      </li>
                    )}  
                  )}
                </ul>                  
              </div>                
            </div>
            <div className="btn-box-inquirer">              
              <Link 
                to={link} 
                role="button" 
                className="btn btn-warning" 
                onClick={this.state.submit === false ? this.onOpenModal : this.submit}>Проверить</Link>
		          <button type="button" className="btn btn-danger" onClick={this.resetForm}>Очистить поля</button>	  	        
            </div>  
	  	  </form>        
        <Modal 
            open={openModal}
            onClose={this.onCloseModal} 
            center>
            <h2>Каждый не отвеченный ответ считается
            неправильным. Вы уверены что хотите продолжить?
            <img 
                className="img-modal img-fluid" 
                src="./img/patrick-modal.png" 
                alt="SpongeBob"
               />
            </h2>
            <div className="btn-box-modal">
              <Link to= "/result" role="button" className="btn btn-danger" onClick={this.submit}>Да</Link>
              <button type="button" className="btn btn-warning" onClick={this.onCloseModal}>Нет</button>
            </div>  
        </Modal>  
	  	</div>
     

	  	)
	}
}	  

export default Inquirer;

