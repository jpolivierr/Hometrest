export const numValidate = (key, value) =>{
 
    try {
        if(value && isNaN(Number(value))){
           return key + " is not a number"
        }else{
            return false
        }
    } catch (error) {
        console.log(error.message())
    }
}