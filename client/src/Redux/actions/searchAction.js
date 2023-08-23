
export const ACTION_TYPE = {
        PRICES : "prices",
        BEDS : "beds",
        BATHS : "baths",
        LOCATION : "location",
        HOMETYPE : "homeType",
        SEARCH_TYPE : "searchType",
        ZIP : "zip",
        CITY : "city",
        LIMIT : "limit",
        SET_SEARCH : "set_search",
        ADDRESS : "set_address",
        INPUT_VALUE : "set_input_value"
}


export const setSearch = (data) =>{
    return{
        type: ACTION_TYPE.SET_SEARCH,
        payload : data
    }
}

export const setPrices = (data) =>{
    return{
        type: ACTION_TYPE.PRICES,
        payload: data
    }
}

export const setBeds = (data) =>{
    return{
        type: ACTION_TYPE.BEDS,
        payload: data
    }
}

export const setBaths = (data) =>{
    return{
        type: ACTION_TYPE.BATHS,
        payload: data
    }
}

export const setLocation = (data) =>{
    return{
        type: ACTION_TYPE.LOCATION,
        payload: data
    }
}

export const setInputValue = (data) =>{
    return{
        type: ACTION_TYPE.INPUT_VALUE,
        payload: data
    }
}

export const setType = (data) =>{
    return{
        type: ACTION_TYPE.HOMETYPE,
        payload: data
    }
}

export const setStatus = (data) =>{
    return{
        type: ACTION_TYPE.SEARCH_TYPE,
        payload: data
    }
}

export const setZipcode = (data) =>{

    return{
        type: ACTION_TYPE.ZIP,
        payload: data
    }
}

export const setCity = (data) =>{
    return{
        type: ACTION_TYPE.CITY,
        payload: data
    }
}

export const setAddress = (data) =>{
    return{
        type: ACTION_TYPE.ADDRESS,
        payload: data
    }
}

export const setLimit = (data) =>{
    return{
        type: ACTION_TYPE.LIMIT,
        payload: data
    }
}