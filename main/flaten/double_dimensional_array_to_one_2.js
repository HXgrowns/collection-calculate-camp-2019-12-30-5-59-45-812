'use strict';

const double_to_one = (collection) => {
  let oneArray = collection.reduce((a, b) => {
    return a.concat(b);
  }, []);
  let map = new Map();
  oneArray.forEach((value) => {
    map.set(value, 1);
  });
  let result = [];
  for (let key of map.keys()) {
    result.push(key);
  }
  return result;
}

module.exports = double_to_one;
