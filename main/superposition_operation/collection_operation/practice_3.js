'use strict';

const getSum = (total, num) => {
  if (num % 2 !== 0) {
    return total + (num * 3 + 5);
  }
  return total;
}

const hybrid_operation_to_uneven = (collection) => {
  return collection.reduce(getSum, 0);
}

module.exports = hybrid_operation_to_uneven;

