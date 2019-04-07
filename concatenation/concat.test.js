const concat = require('./concat');

test('Concatenating to strings', () => {
  expect(concat('Decagon', ' Institute')).toBe('Decagon Institute');
});

test('Concatenating a number in string format with a string', () => {
  expect(concat('L', '5')).toBe('L5');
});

test('Conatenating a number and a special character', () => {
  expect(concat('Betazoo', '#')).toBe('Betazoo#');
});

test('Declaring the function with no argument', () => {
  expect(concat()).toBe(NaN);
});

test('Declaring function with NaN as argument', () => {
  expect(concat(NaN)).toBe(NaN);
});