export const nestedObj  = (obj, ...args) =>{

    let objValue = obj
    let count = 0

    while(count < args.length ){

        const key = args[count]
        let newValue = objValue[key]
        

        if(Array.isArray(newValue) && newValue.length > 0){

            if(newValue.includes(args[count + 1])){
                return args[count + 1]
            }
          
            const found = newValue.find(value => value[args[count + 1]])

            if(found){
              
                newValue = found
                
            }

        }

        // if key does not exist in current object
        // exit loop
        if(!newValue){
            return false
        }
        
        if(count === args.length - 1){
            return newValue
        }
        
        objValue = newValue
        
        count ++
    }

}

const deepSearch = (value, ...args) =>{


    if(typeof value === 'object' && value !== null && !Array.isArray(value)){

    }
}

export const getValueByKey = (nestedObj, ...args) =>{
    return args.reduce((obj, key) =>
    (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}
