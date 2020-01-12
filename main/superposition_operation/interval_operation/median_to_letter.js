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

const compute_median = (collection) => {
  collection.sort((x, y) => x - y);
  if (collection.length === 0) {
    return 0;
  } else if (collection.length % 2 === 1) {
    return Math.ceil(collection[Math.floor(collection.length / 2)]);
  } else {
    var i = collection.length / 2;
    return Math.ceil((parseFloat(collection[i - 1]) + parseFloat(collection[i])) / 2);
  }
}

const median_to_letter = (collection) => {
  let median = compute_median(collection);
  return decTo26(median);
}

module.exports = median_to_letter;
