'use strict';

const get_intersection = (collection_a, collection_b) => {
  let minArray = collection_a;
  let maxArray = collection_b;
  if (collection_a.length > collection_b.length) {
    minArray = collection_b;
    maxArray = collection_a;
  }
  var result = [];
  maxArray.forEach((maxValue) => {
    minArray.forEach((minValue) => {
      if (maxValue === minValue) {
        result.push(maxValue);
      }
    });
  });
  return result;
}

module.exports = get_intersection;
