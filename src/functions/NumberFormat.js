

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


}

export const NumberFormat = new Format()