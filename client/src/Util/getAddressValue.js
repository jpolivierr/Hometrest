const getAddressValue = (addressObj) =>{

    const city = addressObj.city || ""
    const postal_code = addressObj.postal_code || ""
    const state_code = addressObj.state_code || ""
    const state = addressObj.state || ""

    let myState

    if(state_code && state){
        myState = state_code
    }else{
        myState = state_code ? state_code : state
    }

    const str = `${city} ${myState} ${postal_code}`

    return  str.trim()

}

export default getAddressValue