'use strict';

const getSum = (total, num) => {
  if (num % 2 === 0) {
    return total + num;
  }
  return total;
}

const amount_even = (collection) => {
  return collection.reduce(getSum, 0);
}

module.exports = amount_even;
