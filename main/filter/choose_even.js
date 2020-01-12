'use strict';

const choose_even = (collection) => {
  let result = [];
  collection.forEach((value) => {
    if (value % 2 === 0) {
      result.push(value);
    }
  });
  return result;
}

module.exports = choose_even;
