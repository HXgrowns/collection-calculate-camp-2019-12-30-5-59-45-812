'use strict';

const choose_multiples_of_three = (collection) => {
  let result = [];
  collection.forEach((value) => {
    if (value % 3 === 0) {
      result.push(value);
    }
  });
  return result;
}

module.exports = choose_multiples_of_three;
