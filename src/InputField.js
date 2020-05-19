
import React from 'react';
import PropTypes from 'prop-types';
import baseUserValues from './baseUserValues.js';

class InputField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', isValid: false, untouched: true};
      this.formValueChange = this.formValueChange.bind(this);
    }

    formValueChange (e) {
      const isValid = this.props.validator(e.target.value);
      this.setState({
        value: e.target.value,
        touched: true,
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
            className={
                this.state.touched ? 
                    this.state.isValid ? "valid" : "inValid"
                : "untouched"
            }
          />
        </React.Fragment>
      )
    }
}

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    valueName: PropTypes.oneOf([...Object.keys(baseUserValues)]).isRequired,
    validator: PropTypes.func.isRequired,
    changeHandler: PropTypes.func.isRequired
}

export default InputField