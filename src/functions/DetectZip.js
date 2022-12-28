export const getZipCode = (str) =>{
      // Create a regular expression to match a US zip code
  var zipCodeRegex = /\d{5}(?:[-\s]\d{4})?/;

  // Search the input string for a match against the regular expression
  var match = str.match(zipCodeRegex);

  // If a match was found, return the matched zip code
  if (match) {
    return match[0];
  } else {
    // If no match was found, return null
    return null;
  }
}

export const detectZipCode =(str)=> {
    // Create a regular expression to match a US zip code
    var zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;
  
    // Test the input string against the regular expression
    return zipCodeRegex.test(str);
  }