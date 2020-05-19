test('test', ()=>{
    expect('yo').toEqual('yo');
})

import React from 'react';
import { render, queryByAttribute, } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { fireEvent, getByText } from '@testing-library/dom';
import {getNodeText} from '@testing-library/dom';
import InputField from './InputField';
import {getElementById} from './setupTests';

let inputField; 
// let getElementById = (id, container) => {
//   return queryByAttribute('id', container, id);
// }

const testString = 'TestString';
const testId = 'testId';
const testChangeHandler = jest.fn();

describe('Renders correctly', ()=>{
    beforeEach(() => {
        inputField = render(
            <InputField 
                valueName={testId}
                label={testString}
                validator={(str)=>true}  
                changeHandler={testChangeHandler}
            />);
      });

    test('label prop', ()=>{
        // inputField = render(<InputField valueName={testId} label={testString} />);
        expect(
            getNodeText(inputField.container.querySelector('label'))
        ).toEqual(testString)
        // expect(getElementById(testId, inputField.container)).toMatchInlineSnapshot(``)
    });

    test('valueName prop', ()=>{
        //inputField = render(<InputField valueName={testId} label={testString} />);
        expect( inputField.container.querySelector('input').id ).toEqual(testId);
    });
    
    test('validator prop', ()=>{
        fireEvent.change(
            getElementById(testId, inputField.container),
            { target: { value: testString } }
          );
        expect( inputField.container.querySelector('input').className ).toEqual('valid');
    });

    test('changeHandler prop', ()=>{
        
        fireEvent.change(
            getElementById(testId, inputField.container),
            { target: { value: testString } }
          );
        expect( testChangeHandler).toHaveBeenLastCalledWith(testId,testString,true);        
    });
});



/*
// ===
describe('App views', () => {
  test('Confirmation view displayed after ',()=>{
    inputField = render(<InputField />);
    // const nameInput = getElementById('name', app.container);
    // const emailInput = getElementById('emailAddress', app.container);
    // const passwordInput = getElementById('password', app.container);
    
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
      getByText(app.container, 'Sign Up')
    )
    
    expect(getByText(app.container, testName))
      .toMatchInlineSnapshot(`
        <strong>
          ${testName}
        </strong>
      `);

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
*/