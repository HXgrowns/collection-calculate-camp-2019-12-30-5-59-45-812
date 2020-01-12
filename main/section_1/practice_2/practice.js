const collect_same_elements = (collection_a, collection_b) => {
  collection_b = collection_b.reduce((a, b) => {
    return a.concat(b);
  }, []);
  let minArray = collection_a;
  let maxArray = collection_b;
  if (collection_a.length > collection_b.length) {
    minArray = collection_b;
    maxArray = collection_a;
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
