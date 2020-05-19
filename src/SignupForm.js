
import React from 'react';
import InputField from './InputField';
import baseUserValues from './baseUserValues';
import {containsText, isValidEmail} from './validations';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
    constructor(props) {
      super(props);
      this.updateSignUpValue = this.updateSignUpValue.bind(this);
      this.state = {...baseUserValues};
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
  
    containsInvalidField = () => {
      let validityOfFields = []; 
      for (const field in this.state){
        validityOfFields.push(this.state[field].isValid);
      }
      return validityOfFields.includes(false)
    }
  
    render() {
      return (
        <React.Fragment>
        <h1>
            Let's <br/>
            <strong>Sign Up</strong>
        </h1>
        <p>
            Use the form below to sign up for this super awesome service. You're only a few steps away!
        </p>
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

SignupForm.propTypes = {
    updateAppState: PropTypes.func.isRequired
}

export default SignupForm
  
