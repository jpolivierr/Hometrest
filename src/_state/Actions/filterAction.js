export const setPrices = (data) =>{
    return{
        type: "prices",
        payload: data
    }
}

export const setBeds = (data) =>{
    return{
        type: "beds",
        payload: data
    }
}

export const setBaths = (data) =>{
    return{
        type: "baths",
        payload: data
    }
}

export const setLocation = (data) =>{
    return{
        type: "location",
        payload: data
    }
}

export const setType = (data) =>{
    return{
        type: "homeType",
        payload: data
    }
}

export const setStatus = (data) =>{
    return{
        type: "searchType",
        payload: data
    }
}

export const setZipcode = (data) =>{
    return{
        type: "zip",
        payload: data
    }
}

export const setCity = (data) =>{
    return{
        type: "city",
        payload: data
    }
}