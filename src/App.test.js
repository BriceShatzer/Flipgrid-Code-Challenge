import React from 'react';
import { render, queryByAttribute, } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { fireEvent, getByText, getNodeText } from '@testing-library/dom';
import {getElementById} from './setupTests';
import App from './App';

let app; 
// let getElementById = (id, container) => {
//   return queryByAttribute('id', container, id);
// }

const testName = 'Parker';
const testEmailAddress = 'abc@def123.com';
const testPassword = 'aBcEf1234%$&*';

describe('App views', () => {
  test('Confirmation view displayed after ',()=>{
    app = render(<App />);
    const nameInput = getElementById('name', app.container);
    const emailInput = getElementById('emailAddress', app.container);
    const passwordInput = getElementById('password', app.container);
    
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
      app.container.querySelector('button')
    )
    
    expect(
      getNodeText(app.container.querySelector('h1 strong'))
    ).toEqual(`${testName}!`);

    expect(getByText(app.container, testEmailAddress))
      .toMatchInlineSnapshot(`
        <p>
          ${testEmailAddress}
        </p>
      `);

    expect(getByText(app.container, 'Sign In'))
      .toMatchInlineSnapshot(`
        <button>
          Sign In
        </button>
      `);
  })
});
