'use strict';
const get_integer_interval_2 = (number_a, number_b) => {
  let min = number_a;
  let max = number_b;
  let result = [];
  if (number_a > number_b) {
    min = number_b;
    max = number_a;
  }
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  if (number_a > number_b) {
    result.reverse();
  }
  return result;
}
module.exports = get_integer_interval_2;
