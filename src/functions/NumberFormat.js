

class Format{

    checkIfNum(num){
        if(!num){
            return true
        }else{
              const exp = /^[0-9]+\.?[0-9]*$/
                if(!num.match(exp)){
                    return false
                }else{
                    return true
                }
        }
        
    }

    double(num){

        if(!this.checkIfNum(num)){
           console.log("not a number")
        }else{
            const floatNum = parseFloat(num)
         const floatDeci = floatNum.toFixed(2)
          console.log(Number(floatDeci))
        }
         
    }

    abbreviateNumber(num) {
        if (num >= 1000 && num < 1000000) {
          return (num / 1000).toFixed(1) + "k";
        } else if (num >= 1000000 && num < 1000000000) {
          return (num / 1000000).toFixed(1) + "m";
        } else if (num >= 1000000000) {
          return (num / 1000000000).toFixed(1) + "b";
        } else {
          return num;
        }
      }

      convertToInt(str) {
        // Remove the dollar sign and the "k" abbreviation
        str = str.replace("$", "").replace("k", "");
      
        // Convert the string to a number and multiply it by 1000
        return parseFloat(str) * 1000;
      }

       formatNumberWithCommas(number) {
        let numberString = number.toString();
        let formattedString = "";
      
        for (let i = 0; i < numberString.length; i++) {
          let char = numberString[i];
          formattedString += char;
          if (numberString.length - i > 3 && (numberString.length - i) % 3 === 1) {
            formattedString += ",";
          }
        }
      
        return formattedString;
      }
      
      


}

export const NumberFormat = new Format()