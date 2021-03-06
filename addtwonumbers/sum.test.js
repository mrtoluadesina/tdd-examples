const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add -1 to 3 to equal 2', () => {
  expect(sum(-1, 3)).toBe(2);
});

test('add a string and a Number to equal NaN', () => {
  expect(sum('tolu', 3)).toBe('NaN');
});

test('adds two strings to equal NaN', () => {
  expect(sum('decagon', 'institute')).toBe('NaN');
});

test('add two negative numbers -4 and -9 to equal -13', () => {
  expect(sum(-4, -9)).toBe(-13);
});

test('enter undefined values to output - enter parameters', () => {
  expect(sum()).toBe('You have not entered any paramter')
});

test('adds numbers in string \'23\' to \'3\' to equal 26', () => {
  expect(sum('23', '3')).toBe(26);
});

test('Insert NaN as the only argument to equal NaN', () => {
  expect(sum(NaN)).toBe('NaN');
});

test('Adding special characters like ! and ( to equal NaN', () => {
  expect(sum('!', '*')).toBe('NaN');
});

test('Adding 2 Decimal numbers - 0.1 and 0.2 to be close to 0.3', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

test('Adding 2 values 0.915 and 0.11 to equal 1.025', () => {
  expect(sum(0.915, 0.11)).toBeCloseTo(1.025);
});