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
          label: 'First Name',
          value: '',
          isValid: false,
          validator: ()=>{return true}
        }, 
        'emailAddress' : {
          label: 'Email Address',
          value: '',
          isValid: false,
          validator: ()=>{return true}
        },
        'password' : {
          label: 'Password',
          value: '',
          isValid: false,
          validator: ()=>{return true}
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


  render() {
    const state = this.state;
    let arrOfInputFields = [];

    for (const field in state) {
      arrOfInputFields.push(
        <InputField 
          valueName={field}
          label={state[field].label}
          validator={state[field].validator}
          changeHandler={this.updateSignUpValue}
          key={field}
        />
      )
    }

    return (
      <div className="App">
        {arrOfInputFields}
        <button disabled={false}> Sign Up </button>
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
    this.state = {value: ''};
    this.formValueChange = this.formValueChange.bind(this)
    

    
  }
  formValueChange (e) {
    console.log('formValueChange');
    this.setState({value: e.target.value});
    this.props.changeHandler(
      this.props.valueName,
      e.target.value,
      this.props.validator(e.target.value)
    )
  }
  render (){
    console.log(this.props);
    
    return (
    <React.Fragment>
      <label htmlFor={this.props.valueName}>
        {this.props.label}
      </label>
      <input 
        type="text"
        id={this.props.valueName}
        value={this.state.value}
        onChange={this.formValueChange}
      />
    </React.Fragment>
    )
  }
}


export default App;
