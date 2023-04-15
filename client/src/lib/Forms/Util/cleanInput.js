 
 export const cleanInput = (str) =>{

    if(Array.isArray(str) && str.length <= 0){
        return ""
    }
    const newStr = Array.isArray(str) && str.length > 0 ? str[0] : str
    let words = newStr.split('_');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
 }