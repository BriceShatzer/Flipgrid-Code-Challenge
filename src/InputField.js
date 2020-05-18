
import React from 'react';

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
  
export default InputField