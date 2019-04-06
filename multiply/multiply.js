function multiply() {
  var times = 1;
  for (var i = 0; i < arguments.length; i++) {
    if (isNaN(arguments[i])) {
      return 'NaN';
    } else {
      times *= arguments[i];
    }
  }
  return times;
}
module.exports = multiply;