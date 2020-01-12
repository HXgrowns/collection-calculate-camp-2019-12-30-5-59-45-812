'use strict';

const double_to_one = (collection) => {
  let result = collection.reduce((a, b) => {
    return a.concat(b);
  }, []);
  return result;
}

module.exports = double_to_one;
