'use strict';

const compute_average = (collection) => {
  let sum = collection.reduce(getSum, 0);
  return sum / collection.length;
}

const getSum = (total, num) => {
  return total + num;
}

module.exports = compute_average;

