'use strict';

const getEvenArray = (collection) => {
  let evenArray = [];
  for (let i = 0, len = collection.length; i < len; i += 2) {
    evenArray.push(collection[i]);
  }
  return evenArray;
}

const is_exist_element = (collection, element) => {
  let evenArray = getEvenArray(collection);
  for (let i = 0, len = evenArray.length; i < len; i++) {
    if (evenArray[i] === element) {
      return true;
    }
  }
  return false;
};
module.exports = is_exist_element;
