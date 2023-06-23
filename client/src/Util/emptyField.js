import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export const emptyField = (name, value) =>{
    try {
        if(Array.isArray(value) && value.length <=0){
            return capitalizeFirstLetter(name).replace("_"," ") + " is required"
        }
        if(!value ){
            return capitalizeFirstLetter(name).replace("_"," ") + " is required"
        }else{
            return false;
        }
    } catch (error) {
        console.log(error)
    }
}