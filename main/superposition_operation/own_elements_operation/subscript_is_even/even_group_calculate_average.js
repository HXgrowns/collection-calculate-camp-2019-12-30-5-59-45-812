'use strict';
const even_group_calculate_average = (collection) => {
  let evenArray = getEvenArray(collection);
  if (!evenArray.length) {
    return [0];
  }
  let erArray = [];
  for (let i = 0; i < 10; i++) {
    erArray[i] = [];
  }
  evenArray.forEach((value) => {
    let radix = calculate_radix(value);
    erArray[radix].push(value);
  });
  let result = [];
  erArray.forEach((value) => {
    if (value.length !== 0) {
      result.push(value.reduce(getSum, 0) / value.length);
    }
  });
  return result;
};

const getEvenArray = (collection) => {
  let evenArray = [];
  for (let i = 1, len = collection.length; i < len; i += 2) {
    if (collection[i] % 2 === 0) {
      evenArray.push(collection[i]);
    }
  }
  return evenArray;
}

const calculate_radix = (num) => {
  let count = 0;
  while (num) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

const getSum = (total, num) => {
  return total + num;
}
module.exports = even_group_calculate_average;
