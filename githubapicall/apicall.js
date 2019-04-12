const { fetchData } = require('./http');

function login(user) {
  if (typeof user === 'string') {
    return fetchData(user).then(function(extracts) {
      return extracts;
    });
  } 
  throw 'Needs a valid argument';
}

exports.login = login;