function sum(a, b) {
  if (arguments.length === 0) {
    return 'You have not entered any paramter';
  } else if (isNaN(a) || isNaN(b)) {
    return 'NaN';
  } else {
    return a + b;
  }
}
module.exports = sum;