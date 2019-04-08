const apicall = require('./apicall');

test('username is available on github', () => {
  expect(apicall(mrtoluadesina)).tobe(true);
});