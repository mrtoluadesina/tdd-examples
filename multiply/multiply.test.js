const multiply = require('./multiply');

test('Multiply 2 numbers', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('Multiply 5 numbers', () => {
  expect(multiply(3, 5, 2, 7, 6)).toBe(1260);
});