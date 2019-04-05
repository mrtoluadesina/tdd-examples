const divide = require('./divide');

test('Divide the first parameter of a function by the second, - both are integers', () => {
  expect(divide(15, 3)).toBe(5);
});

test('divide a positive number by a negative number', () => {
  expect(divide(10, -2)).toBe(-5);
});