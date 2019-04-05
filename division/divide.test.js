const divide = require('./divide');

test('Divide the first parameter of a function by the second, - both are integers', () => {
  expect(divide(15, 3)).toBe(5);
});

test('divide a positive number by a negative number', () => {
  expect(divide(10, -2)).toBe(-5);
});

test('Divide a negative number by a positive number', () => {
  expect(divide(-20, 4)).toBe(-5);
});

test('Divide a Negative number by another negative number', () => {
  expect(divide(-49, -7)).toBe(7);
});

test('Divide a number by zero', () => {
  expect(divide(25, 0)).toBe(Infinity);
});