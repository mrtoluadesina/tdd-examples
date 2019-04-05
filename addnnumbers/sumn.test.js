const sumn = require('./sumn');

test('adds 2 numbers', () => {
  expect(sumn(4,5)).toBe(9);
});