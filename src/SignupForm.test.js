import React from 'react';
import { render } from '@testing-library/react';
import { fireEvent, getNodeText } from '@testing-library/dom';
import {getElementById} from './setupTests';
import SignupForm from './SignupForm';

let component; 
const submitUserValueMock = jest.fn;

describe('Input Fields', () => {
  function checkInitialState (inputEl) {
    expect(inputEl.tagName).toEqual('INPUT');
    expect(inputEl.className).toEqual('untouched');
  }
  
  beforeEach(() => {
    component = render(<SignupForm updateAppState={submitUserValueMock} />);
  });

  test('name input field ', () => {
    const nameInput = getElementById('name', component.container);

    // 'name' -- initial state 
    expect(nameInput.type).toEqual('text');
    checkInitialState(nameInput);

    // -- onChange to valid
    fireEvent.change(nameInput, { target: { value: 'Parker' } })
    expect(nameInput.className).toEqual('valid');

    // -- onChange to invalid
    fireEvent.change(nameInput, { target: { value: '' } })
    expect(nameInput.className).toEqual('inValid');

  }),

  test('emailAddress input field ', () => {
    const emailAddressInput = getElementById('emailAddress', component.container);

    // 'emailAddress' -- initial state 
    expect(emailAddressInput.type).toEqual('text');
    checkInitialState(emailAddressInput);
    
    // -- onChange to valid
    fireEvent.change(emailAddressInput, { target: { value: 'abc@def123.com' } });
    expect(emailAddressInput.className).toEqual('valid'); 

    // -- onChange to invalid
    fireEvent.change(emailAddressInput, { target: { value: '' } });
    expect(emailAddressInput.className).toEqual('inValid');
  
    fireEvent.change(emailAddressInput, { target: { value: 'abcdef123com' } });
    expect(emailAddressInput.className).toEqual('inValid');

  }),

  test('password input field', () => {
    const passwordInput = getElementById('password', component.container);
    
    // 'password' ---  initial state
    expect(passwordInput.type).toEqual('password');
    checkInitialState(passwordInput);
    
    // -- onChange to valid
    fireEvent.change(passwordInput, { target: { value: 'aBcEf1234%$&*' } });
    expect(passwordInput.className).toEqual('valid'); 
    
    // -- onChange to invalid
    fireEvent.change(passwordInput, { target: { value: '' } });
    expect(passwordInput.className).toEqual('inValid');
  })
});

describe('Sign Up Button', () => {
  beforeEach(() => {
    component = render(<SignupForm updateAppState={submitUserValueMock} />);
  });

  test('renders default state',()=>{
    const submitButton = component.container.querySelector('button');
    expect( getNodeText(submitButton).trim() ).toEqual("Sign Up");
  });

  test('is disabled when fields are invalid',()=>{
    const submitButton = component.container.querySelector('button');
    expect(submitButton.disabled).toBeTruthy();
  }); 

  test('is enabled when fields are valid',()=>{
    const submitButton = component.container.querySelector('button');
    const nameInput = getElementById('name', component.container);
    const emailInput = getElementById('emailAddress', component.container);
    const passwordInput = getElementById('password', component.container);

    fireEvent.change(
      nameInput,
      { target: { value: 'Parker' } }
    );
    fireEvent.change(
      emailInput, 
      { target: { value: 'abc@def123.com' } }
    );
    fireEvent.change(
      passwordInput,
      { target: { value: 'aBcEf1234%$&*' } }
    );
    expect(submitButton.disabled).toBeFalsy();
  })
});