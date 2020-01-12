'use strict';
const getEvenArray = (collection) => {
  let evenArray = [];
  for (let i = 1, len = collection.length; i < len; i += 2) {
    evenArray.push(collection[i]);
  }
  return evenArray;
}

const choose_no_repeat_element = (collection) => {
  let result = [];
  let obj = {
    attr: {}
  };
  collection.forEach((cValue) => {
    let value = obj.attr[cValue];
    if (value >= 1) {
      value++;
      result.forEach((rValue, index) => {
        if (rValue === cValue) {
          result.splice(index, 1);
        }
      });
    } else {
      value = 1;
      result.push(cValue);
    }
    obj.attr[cValue] = value;
  });
  return result;
}

const single_element = (collection) => {
  let evenArray = getEvenArray(collection);
  return choose_no_repeat_element(evenArray);
};
module.exports = single_element;
