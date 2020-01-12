'use strict';

const getSum = (total, num) => {
  if (num % 2 !== 0) {
    return total + num;
  }
  return total;
}

const average_uneven = (collection) => {
  let count = 0;
  collection.forEach((value, index) => {
    if (index % 2 !== 0) {
      count++;
    }
  });
  return collection.reduce(getSum, 0) / count;
}

module.exports = average_uneven;
