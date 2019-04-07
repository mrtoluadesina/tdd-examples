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