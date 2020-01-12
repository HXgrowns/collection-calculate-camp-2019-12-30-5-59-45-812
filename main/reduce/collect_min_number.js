'use strict';

const collect_min_number = (collection) => {
  return collection.reduce(compare, collection[0]);
}

const compare = (total, num) => {
  return total < num ? total : num;
}

module.exports = collect_min_number;

