import React from 'react';
import logo from './logo.svg';
import './App.css';


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

function genericValidation () {return true}
const containsText = (str) => (
    typeof str === "string" && 
    str.length > 0
  );

const isValidEmail = (str) => (
    typeof str === "string" && 
    str.length > 0 &&
    /^\S+@\S+[\.][0-9a-z]+$/.test(str)
  );

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

class InputField extends React.Component {
  constructor(props) {
    /* 
    {
      label: string
      valueName: string
      validator: func
      changeHandler: func
    }
    */
    super(props);
    this.state = {value: '', isValid: false};
    this.formValueChange = this.formValueChange.bind(this)
    

    
  }
  formValueChange (e) {
    console.log('formValueChange');
    const isValid = this.props.validator(e.target.value);
    this.setState({
      value: e.target.value,
      isValid 
    });

    this.props.changeHandler(
      this.props.valueName,
      e.target.value,
      isValid
    )
  }


  render (){
    return (
      <React.Fragment>
        <label htmlFor={this.props.valueName}>
          {this.props.label}
        </label>
        <input 
          type={this.props.type ? this.props.type : "text"}
          id={this.props.valueName}
          value={this.state.value}
          onChange={this.formValueChange}
          className={this.state.isValid ? "valid" : "inValid"}
        />
      </React.Fragment>
    )
  }
}


export default App;
