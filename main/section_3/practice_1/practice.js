const create_updated_collection = (collection_a, object_b) => {
  collection_a.forEach((aValue) => {
    for (let j = 0, len2 = object_b.value.length; j < len2; j++) {
      if (aValue.key === object_b.value[j]) {
        aValue.count--;
        break;
      }
    }
  });
  return collection_a;
}

module.exports = create_updated_collection;
