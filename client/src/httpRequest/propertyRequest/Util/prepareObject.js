const prepareObject = (newObj, defaultCity) =>{

    if(Object.keys(newObj).length === 0){
        newObj.city = defaultCity
        return newObj
    }

    if(!newObj.city && !newObj.postal_code){
        newObj.city = defaultCity
        return newObj
    }

    return newObj

}

export default prepareObject