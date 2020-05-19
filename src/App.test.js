import React from 'react';
import { render } from '@testing-library/react';
import { fireEvent, getByText, getNodeText } from '@testing-library/dom';
import {getElementById} from './setupTests';
import App from './App';

let component;
const testName = 'Parker';
const testEmailAddress = 'abc@def123.com';
const testPassword = 'aBcEf1234%$&*';

describe('App views', () => {
  test('default view',()=>{
    component = render(<App />);

    const buttons = component.container.querySelectorAll('button');
    expect( buttons.length).toEqual( 1 );

    const inputFields = component.container.querySelectorAll('input');
    expect( inputFields.length).toEqual( 3 );

  });
  
  test('Confirmation view displayed after submission',()=>{
    component = render(<App />);
    const nameInput = getElementById('name', component.container);
    const emailInput = getElementById('emailAddress', component.container);
    const passwordInput = getElementById('password', component.container);
    
    fireEvent.change(
      nameInput,
      { target: { value: testName} }
    );
    fireEvent.change(
      emailInput, 
      { target: { value: testEmailAddress } }
    );
    fireEvent.change(
      passwordInput,
      { target: { value: testPassword} }
    );
    fireEvent.click(
      component.container.querySelector('button')
    )
    
    expect(
      getNodeText(component.container.querySelector('h1 strong'))
    ).toEqual(`${testName}!`);

    expect(getByText(component.container, testEmailAddress))
      .toMatchInlineSnapshot(`
        <p>
          ${testEmailAddress}
        </p>
      `);

    expect(getByText(component.container, 'Sign In'))
      .toMatchInlineSnapshot(`
        <button>
          Sign In
        </button>
      `);
  });
});
