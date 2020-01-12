'use strict';
const compute_median = (collection) => {
  collection.sort((x, y) => x - y);

  if (collection.length === 0) {
    return 0;
  } else if (collection.length % 2 === 1) {
    return Math.ceil(collection[Math.floor(collection.length / 2)]);
  } else {
    var i = collection.length / 2;
    return Math.ceil((parseFloat(collection[i - 1]) + parseFloat(collection[i])) / 2);
  }
}
const calculate_median = (collection) => {
  let evenArray = [];
  collection.forEach((value) => {
    evenArray.push(value);
  });
  return compute_median(evenArray);
};
module.exports = calculate_median;
