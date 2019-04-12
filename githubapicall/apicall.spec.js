const { login } = require('./apicall');

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

test('Function call returns an array', () => {
  return login('mrtoluadesina').then(function(response) {
    expect(response).toEqual(expect.any(Array));
  });
});

test('username not found', () => {
  return login('mrtolu').catch(function(res) {
    expect(res).toBe(err.status);
  })
});

test('Function call returns an array of objects', () => {
  return login('mrtoluadesina').then(function(response) {
    expect.arrayContaining([expect.objectContaining({'login' : 'mrtoluadesina'})]);
  })
});