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

test('adding strings to equal NaN', () => {
  expect(sumn('decagon', 'institute')).toBe('NaN');
});

test('adding decimal numbers', () => {
  expect(sumn(0.1, 0.2)).toBeCloseTo(0.3);
});

test('adding negative numbers', () => {
  expect(sumn(-1, -3, -5)).toBe(-9);
});

test('adding negative numbers to positive numbers', () => {
  expect(sumn(-6, 10, -8, 4)).toBe(0);
});

test('adding special characters', () => {
  expect(sumn('!', '*', '-')).toBe('NaN');
});

test('when the function is called without a parameter', () => {
  expect(sumn()).toBe(0);
});