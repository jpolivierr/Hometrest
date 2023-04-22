
export const getPhoto = (str) =>{

    const index = str.lastIndexOf(".jpg");

    console.log(index)
    console.log(str.slice(0,index - 1) + "0_h360.jpg")
        console.log(str)
        // return str;

        return str.slice(0,index - 1) + "od-w480_h360.jpg"
        
    // return url.replace(/(.)\.jpg$/, "$10_h360.jpg")

}

export const getStatusStyle = (status) =>{

    switch(status){
        case "for_sale" :
            return "status-style status-for-sale"
        case "for_rent" :
            return "status-style status-for-rent"
        case "sold" :
            return "status-style status-sold"
        case "ready_to_build" :
            return "status-style status-ready-to-build"
        case "off_market" :
            return "status-style status-off-market"
        case "new_community" :
        return "status-style status-new-community"

    }

    return `${cleanInput(status)}`
}

export const cleanInput = (str) =>{
  
    if(!str){
      return ""
     }
  
      if(Array.isArray(str) && str.length <= 0){
          return ""
      }
  
      if(Array.isArray(str) && str.length === 1){
        const value = str[0]      
        return capitalizeFirstLetter(value.replaceAll("_"," "))
       }
  
      const newStr = Array.isArray(str) && str.length > 0 ? str[0] : str
  
      let words = newStr.split('_');
  
    for (let i = 0; i < words.length; i++) {
  
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  
    }
    return words.join(' ');
   }



export const capitalizeFirstLetter = (value) =>{

    if(typeof value === "string" && value){

        const uppcased = value[0].toUpperCase() + value.slice(1,value.length)
        const dash = uppcased.replaceAll("-"," ")

        return dash

    }

}

export const formatNumber = (num, round = false) => {
    if (typeof num !== "number") {
        return num;
      }
      const parts = num.toFixed(round ? 2 : 0).toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
  }