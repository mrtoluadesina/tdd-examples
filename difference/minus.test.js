const minus = require('./minus');

test('Substract a number from the other, 4 - 2 should equal to 2', () => {
  expect(minus(4, 2)).toBe(2);
});

test('subtracting one string and a number, 10 - david', () => {
  expect(minus(10, 'david')).toBe('NaN');
});

test('Declaring the function without any parameter', () => {
  expect(minus()).toBe('There is no argument in the function');
});

test('subtracting negative numbers from each other', () => {
  expect(minus(-5, -6)).toBe(1);
});

test('Subtracting strings from each other', () => {
  expect(minus('decagon', 'insitute')).toBe('NaN');
});

test('Subtracting Special Characters', () => {
  expect(minus('!', '*')).toBe('NaN');
});