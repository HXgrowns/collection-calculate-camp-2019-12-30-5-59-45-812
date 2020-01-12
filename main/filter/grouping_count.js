'use strict';

const grouping_count = (collection) => {
  let obj = {
    attr: {}
  };
  collection.forEach((value) => {
    let objValue = obj.attr[value];
    if (objValue >= 1) {
      objValue++;
    } else {
      objValue = 1;
    }
    obj.attr[value] = objValue;
  });
  return obj.attr;
}

module.exports = grouping_count;
