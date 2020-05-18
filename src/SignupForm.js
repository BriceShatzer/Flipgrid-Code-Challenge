
import React from 'react';
import InputField from './InputField';
import {baseUserValues} from './App';
import {containsText, isValidEmail} from './validations';

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

export default SignupForm
  
