'use strict';
const map_to_three_multiples = (collections) => {
  let result = [];
  for (let i of collections) {
    result.push(i * 3);
  }
  return result;
};

module.exports = map_to_three_multiples;
