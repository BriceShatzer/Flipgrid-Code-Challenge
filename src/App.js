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
          isValid: false
        }, 
        'emailAddress' : {
          label: 'Email Address',
          value: '',
          isValid: false
        },
        'password' : {
          label: 'Password',
          value: '',
          isValid: false
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
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}



export default App;
