const { login } = require('./apicall');

jest.mock('./apicall');

test('Function is defined', () => {
  return login("mrtoluadesina").then(function(response) {
    expect(response).toBeDefined();
  });
});

test('Function is declared without argument', () => {
  expect(function() {
    return login();
  }).toThrow('Needs a valid argument');
  expect(function() {
    return login(true);
  }).toThrow('Needs a valid argument');
  expect(function() {
    return login({});
  }).toThrow('Needs a valid argument');
});