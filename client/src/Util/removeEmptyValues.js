function removeEmptyValues(obj) {

 for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      removeEmptyValues(obj[key]);

      if (Array.isArray(obj[key]) && obj[key].length === 0) {
        delete obj[key];
      } else if (typeof obj[key] === 'object' && Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    } else if (obj[key] === '' || obj[key] === 0) {
      delete obj[key];
    }
  }
  
  return obj; // Return the modified object
  }

  export default removeEmptyValues