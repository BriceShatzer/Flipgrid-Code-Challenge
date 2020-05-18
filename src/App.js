import React from 'react';
import './App.css';
import SignupForm from './SignupForm';

export let baseUserValues = {
  'name' : {
    value: '',
    isValid: false
  }, 
  'emailAddress' : {
    value: '',
    isValid: false,
  },
  'password' : {
    value: '',
    isValid: false,
  }
}

 class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.submitUserValue = this.submitUserValue.bind(this);
    this.state = {
        userValueIsSubmitted: false,
        userValues: {
          ...baseUserValues
        }
      };
  }
  submitUserValue (
    obj // userValues
  ) {
    this.setState({
      userValues: {...obj},
      userValueIsSubmitted: true
    });
  }
  render(){
    
    return (
      <div className="App">
        {
        this.state.userValueIsSubmitted ? 
          <Confirmation 
            firstName={this.state.userValues.name.value} 
            email={this.state.userValues.emailAddress.value} 
          /> :
          <SignupForm 
            updateAppState={this.submitUserValue} 
          />
        }
      </div>
    )
  }
}


function Confirmation (props) {return (
  <React.Fragment>    
    <h3>
      Welcome,<br />
      <strong>{props.firstName}</strong>
    </h3>
    <p>
      You have been registered for this awesome service.<br/>
      Please check your email listed below for instructions. 
    </p>
    <p>{props.email}</p>
    <button> Sign In</button>
  </React.Fragment>
)}

export default App;
