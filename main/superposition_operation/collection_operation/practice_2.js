'use strict';
const hybrid_operation_to_uneven = (collection) => {
  let result = [];
  collection.forEach((value) => {
    if (value % 2 !== 0) {
      result.push(value * 3 + 2);
    }
  });
  return result;
}

module.exports = hybrid_operation_to_uneven;

