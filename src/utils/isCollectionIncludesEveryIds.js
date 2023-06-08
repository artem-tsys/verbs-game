export const isCollectionIncludesEveryIds = (collection, list) =>
  collection.every((elem) => list.includes(elem.id));
