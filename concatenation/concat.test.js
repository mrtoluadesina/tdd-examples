const concat = require('./concat');

test('Concatenating to strings', () => {
  expect(concat('Decagon', ' Institute')).toBe('Decagon Institute');
});