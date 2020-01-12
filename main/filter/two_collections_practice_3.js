'use strict';

const choose_divisible_integer = (collection_a, collection_b) => {
  let minArray = collection_a;
  let maxArray = collection_b;
  if (collection_a.length > collection_b.length) {
    minArray = collection_b;
    maxArray = collection_a;
  }
  let result = [];
  maxArray.forEach((maxValue) => {
    minArray.forEach((minValue) => {
      if (!(maxValue % minValue)) {
        result.push(maxValue);
      }
    });
  });
  return result;
}

module.exports = choose_divisible_integer;
