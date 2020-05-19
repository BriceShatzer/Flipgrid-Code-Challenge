import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/dom';
import App from './App';

let app; 
let getElementById; 
function checkInitialState (inputEl) {
  expect(inputEl.tagName).toEqual('INPUT');
  expect(inputEl.className).toEqual('untouched');
}

describe('Input Fields', () => {
  beforeEach(() => {
    app = render(<App />);
    
    getElementById = (id) => {
      return queryByAttribute('id',app.container, id);
    }    
  });

  test('name input field ', () => {
    const nameInput = getElementById('name');

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
    const emailAddressInput = getElementById('emailAddress');

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
    const passwordInput = getElementById('password');
    
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


test('tests are a thing', () => {
  expect( typeof 'string' === 'string').toEqual(true);
});


// getByLabelText(container, 'Username')
// console.log(getElementById('name').value);
  // test('alt', ()=>{
  //   const {getByLabelText} = render(<App />);
  //   const el = getByLabelText('Email Address')    
  //   console.log(el);
    // const {container, getByLabelText} = render(<App />);
    // const yo = render(App.call(this, 
    //   submitUserValue({
    //   userValueIsSubmitted: true,
    //   userValues: {  
    //     'name' : {
    //       value: 'john',
    //       isValid: true
    //     }, 
    //     'emailAddress' : {
    //       value: 'abc@123.org',
    //       isValid: true,
    //     },
    //     'password' : {
    //       value: 'abcdef',
    //       isValid: true,
    //     }
    //   }
    // }));
    // console.log(yo);

    // const input = getByLabelText('Email Address');
    // console.log(input);
    // app.setState()

//  })

  // test('All inputs exist on default render', () => {
  //   expect(getElementById('name').value).toEqual('');
  //   expect(getElementById('emailAddress').value).toEqual('');
  //   expect(getElementById('password').value).toEqual('');
  
  // })

  // const linkElement = getByText(/learn react/i);
  // const getById = queryByAttribute.bind(null, 'id');

  // function checkElementIsInput (id) {
  //   return  queryByAttribute('id',app.container, id).tagName === 'INPUT';
  // }
  //expect(app.getElementById('name')).toBeInTheDocument();

  // attribute: string,
  // container: HTMLElement,
  // id: Matcher,
  // options?: MatcherOptions,
  // queryByAttribute(app.container, 'id','name')
  // console.log(app.container);
  // let el =).tagName;
  // console.log(el);

  
  // expect(app.getElementById('emailAddress')).toBeInTheDocument();
  // expect(app.getElementById('password')).toBeInTheDocument();