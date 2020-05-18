import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField';
import {containsText, isValidEmail} from './validations';

let baseUserValues = {
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
          <div> heeeey </div> :
          <SignupForm updateAppState={this.submitUserValue} />
        }
      </div>
    )
  }
}

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.updateSignUpValue = this.updateSignUpValue.bind(this);
    this.state = {
      ...baseUserValues
        // 'name' : {
        //   value: '',
        //   isValid: false
        // }, 
        // 'emailAddress' : {
        //   value: '',
        //   isValid: false,
        // },
        // 'password' : {
        //   value: '',
        //   isValid: false,
        // }
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
    /// do untouched 
    console.log(
      this.containsInvalidField
    );

    return (
      <React.Fragment>
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
        
        <button disabled={this.containsInvalidField()} onClick={
          this.containsInvalidField() ? undefined : ()=>this.props.updateAppState(this.state, true)
        }> Sign Up </button>
      </React.Fragment>
    );
  }
}

export default App;
