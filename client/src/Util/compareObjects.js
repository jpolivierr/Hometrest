
const compareObjects = (object1, object2) =>{

    const object1String = JSON.stringify(object1)
    const object2String = JSON.stringify(object2)

    console.log(object1String, object2String)

    if(object1String !== object2String){
        return false
    }else{
         
        return true
    }


}

export default compareObjects