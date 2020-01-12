'use strict';

const collect_max_number = (collection) => {
  return collection.reduce(compare, collection[0]);
}

const compare = (total, num) => {
  return total > num ? total : num;
}

module.exports = collect_max_number;
