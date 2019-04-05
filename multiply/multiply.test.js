const multiply = require('./multiply');

test('Multiply 2 numbers', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('Multiply 5 numbers', () => {
  expect(multiply(3, 5, 2, 7, 6)).toBe(1260);
});

test('Multiply a positive and a negative number', () => {
  expect(multiply(2, -5)).toBe(-10);
});

test('Multiplying strings to return NaN', () => {
  expect(multiply('decagon', 'institute')).toBe('NaN');
});

test('Multiplying a string and a number', () => {
  expect(multiply('austine', 12)).toBe('NaN');
});