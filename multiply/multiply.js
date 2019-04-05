function multiply() {
  var times = 1;
  for (var i = 0; i < arguments.length; i++) {
    times *= arguments[i];
  }
  return times;
}
module.exports = multiply;