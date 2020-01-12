const collect_same_elements = (collection_a, object_b) => {
  let arrayA = [];
  collection_a.forEach((value) => {
    arrayA.push(value.key);
  });
  let collection_b = object_b.value;
  let minArray = arrayA;
  let maxArray = collection_b;
  if (arrayA.length > collection_b.length) {
    minArray = collection_b;
    maxArray = arrayA;
  }
  let result = [];
  maxArray.forEach((maxValue) => {
    minArray.forEach((minValue, index) => {
      if (maxValue === minValue) {
        result.push(maxValue);
        minArray.splice(index, 1);
      }
    });
  });
  return result;
}

module.exports = collect_same_elements;
