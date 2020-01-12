'use strict';

const collect_all_even = (collection) => {
  let result = [];
  collection.forEach((value) => {
    if (value % 2 === 0 && value !== 0) {
      result.push(value);
    }
  });
  return result;
}
module.exports = collect_all_even;
