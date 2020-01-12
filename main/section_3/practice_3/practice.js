const create_updated_collection = (collection_a, object_b) => {
  let result = [];
  collection_a.forEach((value) => {
    let obj = {};
    obj.key = value;
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
  result.forEach((rValue) => {
    for (let j = 0; j < object_b.value.length; j++) {
      if (rValue.key === object_b.value[j]) {
        rValue.count -= Math.floor(rValue.count / 3);
        break;
      }
    }
  });
  return result;
}

module.exports = create_updated_collection;
