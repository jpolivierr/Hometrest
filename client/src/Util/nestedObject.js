
const nestedObject = (obj, ...args) =>{

    let objValue = obj
    let count = 0

    while(count < args.length ){ 

        if(!objValue[args[count]]){
            return false
        }
        
        if(count === args.length - 1){
            return objValue[args[count]]
        }

        if(!objValue[args[count]]){
            return false
        }
        
        objValue = objValue[args[count]]
        
        count ++
    }

}

export default nestedObject