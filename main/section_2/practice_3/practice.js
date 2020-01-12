const count_same_elements = (collection) => {
  let result = [];
  collection.forEach((value) => {
    let obj = {};
    obj.name = value.match(/[a-z]/g)[0];
    for (let j = 0, len2 = result.length; j < len2; j++) {
      if (result[j].name === obj.name) {
        result[j].summary += parseInt(value.match(/[0-9]*/g)[2]) || 1;
        obj.summary = result[j].summary;
        break;
      }
    }
    if (!obj.summary) {
      obj.summary = parseInt(value.match(/[0-9]*/g)[2]) || 1;
      result.push(obj);
    }
  });
  return result;
}

module.exports = count_same_elements;
