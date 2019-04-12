const fetch = require('node-fetch');

function fetchData(username) {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(function (response) {
      return response;
    }).catch(function(err) {
      return err;
    });
}

// const axios = require('axios');

// function fetchData(username) {
//   return axios
//     .get(`https://api.github.com/users/${username}/repos`)
//     .then(function (response) {
//       return response.data;
//     }).catch(function(err) {
//       return false;
//     });
// }

exports.fetchData = fetchData;