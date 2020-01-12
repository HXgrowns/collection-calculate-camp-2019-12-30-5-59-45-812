'use strict';
const rank_desc = (collection) => {
  collection.forEach((value, index) => {
    for (let j = 0, len = collection.length - index - 1; j < len; j++) {
      if (collection[j] > collection[j + 1]) {
        let temp = collection[j + 1];
        collection[j + 1] = collection[j];
        collection[j] = temp;
      }
    }
  });
  return collection;
};

module.exports = rank_desc;
