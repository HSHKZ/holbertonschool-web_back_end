export default function hasValuesFromArray(set, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (!set.has(array[i])) {
      return false;
    }
  }
  return true;
}
