const prepareObject = (newObj) =>{

    if(Object.keys(newObj).length === 0){
        newObj.city = "jacksonville"
        return newObj
    }

    if(!newObj.city && !newObj.postal_code){
        newObj.city = "jacksonville"
        return newObj
    }

    return newObj

}

export default prepareObject