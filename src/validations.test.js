
// test('renders learn react link', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });


import {containsText, isValidEmail} from './validations';

it('containsText validation works correctly', () => {
    expect( containsText('testString').toEqual(true) );
    expect( containsText('').toEqual(false) );
    expect( containsText({a:1,b:2}).toEqual(false) );
});

it('isValidEmail validation works correctly', () => {
    expect( containsText('abc@defg.hij').toEqual(true) );
    expect( containsText('testString').toEqual(false) );
    expect( containsText('').toEqual(false) );
    expect( containsText({a:1,b:2}).toEqual(false) );
})

