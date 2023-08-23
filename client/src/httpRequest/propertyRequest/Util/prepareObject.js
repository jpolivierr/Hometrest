const prepareObject = (newObj, defaultCity, stateCode) =>{

    if(Object.keys(newObj).length === 0){
        newObj.city = defaultCity
        newObj.state_code = stateCode
        return newObj
    }

    if(!newObj.city && !newObj.postal_code){
        newObj.city = defaultCity
        newObj.state_code = stateCode
        return newObj
    }

    return newObj

}

export default prepareObject