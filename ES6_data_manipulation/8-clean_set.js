export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  let result = '';
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      const cleanedItem = item.slice(startString.length);
      result += `${cleanedItem}-`;
    }
  }
  return result.slice(0, -1);
}
