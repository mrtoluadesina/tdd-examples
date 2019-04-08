const { fetchData } = require('./http');

function login(user) {
  if (typeof user === 'string') {
    return fetchData(user).then(function(extracts) {
      const username = extracts.login;
      return username;
    });
  } 
  throw 'Needs an argument';
}

exports.login = login;