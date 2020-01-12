'use strict';

const calculate_elements_sum = (collection, element) => {
  let index = "没找到";
  for (let i = 0, len = collection.length; i < len; i++) {
    if (collection[i] === element) {
      index = i;
    }
  }
  return index;
}

module.exports = calculate_elements_sum;
