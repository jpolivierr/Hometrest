const capitalizeWords = (str) => {
    
  if(typeof str !== "string") return

    return str.replace(/\b\w/g, function(match) {
      return match.toUpperCase();
    });
  }

  export default capitalizeWords