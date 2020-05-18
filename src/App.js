import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField';
import {containsText, isValidEmail} from './validations';


  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */

function App() {
  return (
    <SignupForm />
  )
}


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.updateSignUpValue = this.updateSignUpValue.bind(this);
    this.state = {
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
      };
  }
  

  updateSignUpValue(
    valueName, // string 
    newValue,  // string
    isValid,   //  bool
  ) {
    this.setState(prevState=>({
      ...prevState,
      [valueName]: {
        value: newValue,
        isValid: isValid
      }
    }));
    console.log(this.state);

  }

  containsInvalidField = () => {
    let validityOfFields = []; 
    for (const field in this.state){
      validityOfFields.push(this.state[field].isValid);
    }
    return validityOfFields.includes(false)
  }
  
  componentDidUpdate () {
    console.log('state');
    console.log(this.state);
  }

  render() {
    console.log(
      this.containsInvalidField
    );

    return (
      <div className="App">
        <InputField 
          valueName="name" 
          label="First Name"
          validator={containsText}
          changeHandler={this.updateSignUpValue}
        />
        <InputField 
          valueName="emailAddress" 
          label="Email Address"
          validator={isValidEmail}
          changeHandler={this.updateSignUpValue}
        />
        <InputField 
          valueName="password" 
          label="Password"
          validator={containsText}
          changeHandler={this.updateSignUpValue}
          type="password"
        />
        
        <button disabled={this.containsInvalidField()}> Sign Up </button>
      </div>
    );
  }
}

export default App;
