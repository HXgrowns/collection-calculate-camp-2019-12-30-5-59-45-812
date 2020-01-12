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

const number_map_to_word = (collection) => {
  let result = [];
  for (let i of collection) {
    result.push(decTo26(i));
  }
  return result;
};

module.exports = number_map_to_word;
