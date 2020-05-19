import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/dom';
import {getElementById} from './setupTests';
import SignupForm from './SignupForm';

let component; 
// let getElementById = (id, container) => {
//   return queryByAttribute('id', container, id);
// }

describe('Input Fields', () => {
  function checkInitialState (inputEl) {
    expect(inputEl.tagName).toEqual('INPUT');
    expect(inputEl.className).toEqual('untouched');
  }
  
  beforeEach(() => {
    component = render(<SignupForm />);
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
  test('is disabled when fields are invalid',()=>{
    component = render(<SignupForm />);
    const submitButton = component.container.querySelector('button');
    expect(submitButton.disabled).toBeTruthy();
  })
  test('is enabled when fields are valid',()=>{
    component = render(<SignupForm />);
    const nameInput = getElementById('name', component.container);
    const emailInput = getElementById('emailAddress', component.container);
    const passwordInput = getElementById('password', component.container);
    const submitButton = component.container.querySelector('button');

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