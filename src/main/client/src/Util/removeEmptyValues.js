export default function removeEmptyValues(obj, removeZeros = false) {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      obj[key] = removeEmptyValues(obj[key], removeZeros);
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    } else if ((removeZeros && obj[key] === 0) || obj[key] === '') {
      delete obj[key];
    }
  }
  return obj;
}