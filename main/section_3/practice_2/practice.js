const create_updated_collection = (collection_a, object_b) => {
  collection_a.forEach((value) => {
    for (let j = 0, len2 = object_b.value.length; j < len2; j++) {
      if (value.key === object_b.value[j]) {
        value.count -= Math.floor(value.count / 3);
        break;
      }
    }
  });
  return collection_a;
}

module.exports = create_updated_collection;
