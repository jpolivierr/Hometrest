 import { capitalizeFirstLetter } from "./capitalizeFirstLetter"

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