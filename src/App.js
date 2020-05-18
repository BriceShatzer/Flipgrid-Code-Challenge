import React from 'react';
import logo from './logo.svg';
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


export default App;
