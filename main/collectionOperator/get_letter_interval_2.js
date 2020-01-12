'use strict';
const letters = ["z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];

const decTo26 = (num) => {
  let data = [];
  while (num > 0) {
    let mod = num % 26;
    num = Math.floor(num / 26);
    if (mod === 0 && num > 0) {
      num--;
    }
    data.unshift(letters[mod]);
  }
  return data.join("");
}

const get_letter_interval_2 = (number_a, number_b) => {
  let result = [];
  let min = number_a;
  let max = number_b;
  if (number_a > number_b) {
    min = number_b;
    max = number_a;
  }
  for (let i = min; i <= max; i++) {
    let output = decTo26(i);
    result.push(output);
  }
  if (number_a > number_b) {
    result.reverse();
  }
  return result;
}

module.exports = get_letter_interval_2;

