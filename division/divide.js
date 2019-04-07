function divide(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'NaN';
  } else {
    return a / b;
  }
}
module.exports = divide;