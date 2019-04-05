const sumn = require('./sumn');

test('adds 2 numbers', () => {
  expect(sumn(4, 5)).toBe(9);
});

test('adds 3 numbers', () => {
  expect(sumn(2, 5, 7)).toBe(14);
});

test('add numbers and string', () => {
  expect(sumn(2, 5, 'decagon')).toBe('NaN')
});

test('adding decimal numbers', () => {
  expect(sumn(0.1, 0.2)).toBeCloseTo(0.3);
})