export const convertKey = (value) =>{

    let newString = ""

    for(let i = 0; i < value.length; i++){
       
        if( value[i] == value[i].toUpperCase() ){
        
           newString += "-" + value[i].toLowerCase()

        }else{
           newString += value[i]
        }
    }

    return newString

}