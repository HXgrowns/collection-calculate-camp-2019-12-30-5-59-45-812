'use strict';

const get_union = (collection_a, collection_b) => {
  let result = collection_a;
  collection_a.forEach((aValue) => {
    collection_b.forEach((bValue, index) => {
      if (aValue === bValue) {
        collection_b.splice(index, 1);
      }
    });
  });
  result = result.concat(collection_b);
  return result;
}

module.exports = get_union;

