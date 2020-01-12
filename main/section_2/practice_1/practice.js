const count_same_elements = (collection) => {
  let result = [];
  collection.forEach((value1) => {
    let = obj = {};
    obj.key = value1;
    for (let j = 0, len = result.length; j < len; j++) {
      if (result[j].key === obj.key) {
        result[j].count++;
        obj.count = result[j].count;
        break;
      }
    }
    if (!obj.count) {
      obj.count = 1;
      result.push(obj);
    }
  });
  return result;
}

module.exports = count_same_elements;
