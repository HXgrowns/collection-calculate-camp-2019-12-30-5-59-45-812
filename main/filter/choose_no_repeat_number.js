'use strict';

const choose_no_repeat_number = (collection) => {
  let map = new Map();
  collection.forEach((value) => {
    map.set(value, 1);
  });
  let result = [];
  for (var key of map.keys()) {
    result.push(key);
  }
  return result;
}
module.exports = choose_no_repeat_number;
