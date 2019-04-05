function multiply() {
  var times = 1, entered = false;
  for (var i = 0; i < arguments.length; i++) {
    if (isNaN(arguments[i])) {
      return 'NaN';
    } else {
      times *= arguments[i];
      entered = true;
    }
  }
  if (entered = true) {
    return times;
  } else {
    return 'You have not entered any value';
  } 
}
module.exports = multiply;