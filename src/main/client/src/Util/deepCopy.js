 const deepCopy = (obj) => {
    try {
      if (typeof obj !== 'object' || obj === null) {
        return null;
      }
      return JSON.parse(JSON.stringify(obj));
    } catch (error) {
      console.error('Error deep copying object:', error);
      return null;
    }
  };

  export default deepCopy;