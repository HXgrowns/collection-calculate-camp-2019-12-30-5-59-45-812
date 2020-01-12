'use strict';

const find_first_even = (collection) => {
  let even = "没找到";
  for (let i = 0, len = collection.length; i < len; i++) {
    if (collection[i] % 2 === 0) {
      even = collection[i];
      return even;
    }
  }
  return even;
}

module.exports = find_first_even;

