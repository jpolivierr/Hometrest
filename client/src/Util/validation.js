export const isEmpty = (value, handlerWhenTrue, handlerWhenFalse) => {
    const result =
      value == null ||
      value === "" ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (Array.isArray(value) && value.length === 0);
  
    if (result) {
      if (typeof handlerWhenTrue === "function") {
        try {
            handlerWhenTrue();
        } catch (error) {
          console.error("Error calling handler function:", error);
        }
      }
      return true;
    }


    if(typeof handlerWhenFalse === "function"){
        try {
            handlerWhenFalse();
        } catch (error) {
          console.error("Error calling handler function:", error);
        }
    }
    
    return false;
  };