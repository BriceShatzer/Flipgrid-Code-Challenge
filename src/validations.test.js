import {containsText, isValidEmail} from './validations';

describe('Validation Logic', () => {
    it('containsText validation works correctly', () => {
        expect( containsText('testString') ).toEqual(true);
        expect( containsText('') ).toEqual(false);
        expect( containsText({a:1,b:2}) ).toEqual(false);
    });
    
    it('isValidEmail validation works correctly', () => {    
        expect( isValidEmail('abc@defg.hij') ).toEqual(true);
        expect( isValidEmail('testString') ).toEqual(false);
        expect( isValidEmail('') ).toEqual(false);
        expect( isValidEmail({a:1,b:2}) ).toEqual(false);
    });
})


