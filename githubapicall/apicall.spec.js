const { login } = require('./apicall');

jest.mock('./apicall');

test('username is available on github', () => {
  return login("mrtoluadesina").then(function(response) {
    expect(response).toBeDefined();
  })
});