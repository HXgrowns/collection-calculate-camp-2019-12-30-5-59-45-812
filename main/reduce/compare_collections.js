'use strict';

const compare_collections = (collection_a, collection_b) => {
  if (collection_a.length !== collection_b.length) {
    return false;
  }
  let flag;
  collection_a.forEach((value, index) => {
    if (value === collection_b[index]) {
      flag = true;
    } else {
      flag = false;
      return flag;
    }
  });
  return flag;
}

module.exports = compare_collections;


