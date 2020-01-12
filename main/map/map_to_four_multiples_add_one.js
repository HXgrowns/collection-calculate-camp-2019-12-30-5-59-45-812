'use strict';
const map_to_four_multiples_add_one = (collection) => {
  let result = [];
  for (let i of collection) {
    result.push(i * 4 + 1);
  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
