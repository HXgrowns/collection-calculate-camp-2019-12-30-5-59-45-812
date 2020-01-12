const count_same_elements = (collection) => {
  let result = [];
  collection.forEach((value) => {
    let obj = {};
    obj.key = value.match(/[a-z]/g)[0];
    for (let j = 0, len2 = result.length; j < len2; j++) {
      if (result[j].key === obj.key) {
        result[j].count += parseInt(value.match(/[0-9]*/g)[2]) || 1;
        obj.count = result[j].count;
        break;
      }
    }
    if (!obj.count) {
      obj.count = parseInt(value.match(/[0-9]*/g)[2]) || 1;
      result.push(obj);
    }
  });
  return result;
}

module.exports = count_same_elements;
