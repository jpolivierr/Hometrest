
export const formatInput = (arr) =>{

    if(Array.isArray(arr)){

        if(arr.length > 1){

            return `Amenities(${arr.length})`

        }else if(arr.length === 1){

            return arr[0]

        }else{

            return arr
            
        }

    }
}