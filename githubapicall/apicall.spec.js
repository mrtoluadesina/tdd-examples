const { login } = require('./apicall');

jest.mock('./apicall');

test('Function is defined', () => {
  return login("mrtoluadesina").then(function(response) {
    expect(response).toBeDefined();
  });
});

test('Function is declared without argument', () => {
  // return login().then(function(response) {
  //   expect(response).toThrow('Needs an argument');
  // });
  expect(function() {
    return login();
  }).toThrow('Needs argument');
});