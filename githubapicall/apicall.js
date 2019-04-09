const { fetchData } = require('./http');

function login(user) {
  if (typeof user === 'string') {
    return fetchData(user).then(function(extracts) {
      return extracts.length;
    });
  } 
  throw 'Needs a valid argument';
}

exports.login = login;