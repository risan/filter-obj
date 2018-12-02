/**
 * Filter the object.
 *
 * @param {Object} obj
 * @param {Array|Function} predicate
 * @return {Object}
 */
const filterObj = (obj, predicate = Boolean) => {
  const filtered = {};
  const keys = Object.keys(obj);
  const isPredicateArray = Array.isArray(predicate);

  if (!isPredicateArray && typeof predicate !== "function") {
    throw new Error("[predicate] argument must be an array or function.");
  }

  keys.forEach(key => {
    const value = obj[key];

    const shouldAddKey = isPredicateArray
      ? predicate.includes(key)
      : predicate(value, key, obj);

    if (shouldAddKey) {
      filtered[key] = value;
    }
  });

  return filtered;
};

module.exports = filterObj;
