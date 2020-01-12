'use strict';

const spilt_to_zero = (number, interval) => {
  let result = [];
  result.push(number);
  while (number > 0) {
    number = parseFloat((number - interval).toFixed(1));
    result.push(number);
  }
  return result;
}

module.exports = spilt_to_zero;
