const minus = require('./minus');

test('Substract a number from the other, 4 - 2 should equal to 2', () => {
  expect(minus(4, 2)).toBe(2);
});