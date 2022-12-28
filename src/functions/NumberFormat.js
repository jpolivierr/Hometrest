

class Format{

    checkIfNum(num){
      try {
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
      } catch (error) {
        console.log(error)
        return 0
      }
      
        
    }

    double(num){

       try {
              if(!this.checkIfNum(num)){
                console.log("not a number")
              }else{
                  const floatNum = parseFloat(num)
              const floatDeci = floatNum.toFixed(2)
              }
       } catch (error) {
           console.log(error)
           return 0
       }
        
         
    }

    abbreviateNumber(num) {
      try {
         if (num >= 1000 && num < 1000000) {
          return (num / 1000).toFixed(1) + "k";
        } else if (num >= 1000000 && num < 1000000000) {
          return (num / 1000000).toFixed(1) + "m";
        } else if (num >= 1000000000) {
          return (num / 1000000000).toFixed(1) + "b";
        } else {
          return num;
        }
      } catch (error) {
         console.log(error)
         return 0
      }
       
      }

      convertToInt(str) {

        try {
          // Remove the dollar sign and the "k" abbreviation
        str = str.replace("$", "").replace("k", "");
      
        // Convert the string to a number and multiply it by 1000
        return parseFloat(str) * 1000;
        } catch (error) {
           console.log(error)
           return 0;
        }
        
      }

       formatNumberWithCommas(number) {

        try {
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
        } catch (error) {
          console.log(error)
          return 0
        }
        
        
      }
      
      


}

export const NumberFormat = new Format()