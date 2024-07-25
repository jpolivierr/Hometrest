function removeEmptyValues(obj, removeZeros) {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      removeEmptyValues(obj[key])
      if (Array.isArray(obj[key]) && obj[key].length === 0 || Object.keys(obj[key]).length === 0) {
        delete obj[key]
      }
    } else if ((removeZeros && obj[key] === 0) || obj[key] === '') {
      delete obj[key]
    }
  }
  return obj;
}

  export default removeEmptyValues