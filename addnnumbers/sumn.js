function sumn() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments.length === 0 || isNaN(arguments[i])) {
      return 'NaN';
    } else {
      sum += arguments[i];
    }
  }
  return sum;
}
module.exports = sumn;