
import React from 'react';
import { render, queryByAttribute, } from '@testing-library/react';
import { fireEvent, getByText } from '@testing-library/dom';
import {getNodeText} from '@testing-library/dom';
import InputField from './InputField';
import {getElementById} from './setupTests';

let component; 
const testString = 'TestString';
const testId = 'name';
const testChangeHandler = jest.fn();

describe('Renders correctly', ()=>{
    beforeEach(() => {
        component = render(
            <InputField 
                valueName={testId}
                label={testString}
                validator={(str)=>true}  
                changeHandler={testChangeHandler}
            />);
      });

    test('label prop', ()=>{
        expect(
            getNodeText(component.container.querySelector('label'))
        ).toEqual(testString)
    });

    test('valueName prop', ()=>{
        expect( component.container.querySelector('input').id ).toEqual(testId);
    });
    
    test('validator prop', ()=>{
        fireEvent.change(
            getElementById(testId, component.container),
            { target: { value: testString } }
          );
        expect( component.container.querySelector('input').className ).toEqual('valid');
    });

    test('changeHandler prop', ()=>{        
        fireEvent.change(
            getElementById(testId, component.container),
            { target: { value: testString } }
          );
        expect( testChangeHandler).toHaveBeenLastCalledWith(testId,testString,true);        
    });
});
