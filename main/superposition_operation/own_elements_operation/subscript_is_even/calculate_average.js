'use strict';
const calculate_average = (collection) => {
  let count = 0;
  let sum = 0;
  collection.forEach((value) => {
    sum += value;
    count++;
  });
  return Math.round(sum / count);
};
module.exports = calculate_average;
