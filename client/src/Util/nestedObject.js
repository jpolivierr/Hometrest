
function getValueByKey(obj, key, parent = null) {
    let foundValue = false;
    const searchObj = parent ? obj[parent] : obj;
  
    function searchForObject(currentObj) {
      for (let prop in currentObj) {
        if (prop === key) {
          foundValue = currentObj[prop];
        } else if (typeof currentObj[prop] === "object" && currentObj[prop] !== null) {
          searchForObject(currentObj[prop]);
        }
      }
    }
  
    searchForObject(searchObj);
    return foundValue;
  }
  

export default getValueByKey