const { fetchData } = require('./http');

function login(user) {
  return fetchData(user).then(function(extracts) {
    const username = extracts.login;
    return username;
  });
}

exports.login = login;