
const fieldView = (label, arr) =>{

    let result
     
    if(Array.isArray(arr)){
        
        const lenght = arr.length;
        if(lenght > 1){
           result = `${label} (${lenght})`
        }else{
            result = ""
        }
    }

    return result

}

export default fieldView