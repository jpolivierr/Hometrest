const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, function(match) {
      return match.toUpperCase();
    });
  }

  export default capitalizeWords