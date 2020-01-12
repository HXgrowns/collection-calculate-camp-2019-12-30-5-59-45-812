'use strict';
const map_to_even = (collection) => {
  let result = [];
  for (let i of collection) {
    result.push(i * 2);
  }
  return result;
}

module.exports = map_to_even;
