const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add -1 to 3 to equal 2', () => {
  expect(add(-1, 3)).toBe(2);
});