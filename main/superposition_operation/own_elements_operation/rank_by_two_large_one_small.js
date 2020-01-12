'use strict';
const rank_by_two_large_one_small = (collection) => {
  collection.sort((a, b) => { return a - b });
  let result = [];
  for (let i = 0, len = collection.length; i < len; i += 3) {
    if (i + 3 > collection.length) {
      result = result.concat(collection.slice(i));
      break;
    }
    let smallArray = collection.slice(i, i + 3);
    smallArray.push(smallArray[0]);
    smallArray.shift();
    result = result.concat(smallArray);
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
