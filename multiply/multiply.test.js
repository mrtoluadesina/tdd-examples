const multiply = require('./multiply');

test('Multiply 2 numbers', () => {
  expect(multiply(2, 4)).toBe(8);
});