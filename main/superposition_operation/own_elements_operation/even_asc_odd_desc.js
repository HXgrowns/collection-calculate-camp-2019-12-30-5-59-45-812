'use strict';
const even_asc_odd_desc = (collection) => {
  let evenArray = [];
  let oddArray = [];
  collection.forEach((value) => {
    if (value % 2 === 0) {
      evenArray.push(value);
    } else {
      oddArray.push(value);
    }
  });
  evenArray.sort((a, b) => { return a - b });
  oddArray.sort((a, b) => { return b - a });
  return evenArray.concat(oddArray);
};
module.exports = even_asc_odd_desc;
