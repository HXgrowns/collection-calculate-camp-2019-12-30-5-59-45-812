'use strict';

const choose_no_common_elements = (collection_a, collection_b) => {
  let minArray = collection_a;
  let maxArray = collection_b;
  if (collection_a.length > collection_b.length) {
    minArray = collection_b;
    maxArray = collection_a;
  }
  let result = [];
  maxArray.forEach((maxValue) => {
    let config = false;
    minArray.forEach((minValue, index) => {
      if (maxValue === minValue) {
        minArray.splice(index, 1);
        config = true;
      }
    });
    if (!config) {
      result.push(maxValue);
    }
  });
  return result;
}

module.exports = choose_no_common_elements;
