function minus(a, b) {
  if (arguments.length === 0) {
    return 'There is no argument in the function';
  } else if (isNaN(a) || isNaN(b)) {
    return 'NaN';
  } else {
    return a - b;
  }
}
module.exports = minus;