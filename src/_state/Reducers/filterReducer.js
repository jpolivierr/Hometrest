const init = {
    limit: 100,
    location : "",
    city : "",
    postal_code : "33167",
    status: [],
    type : [],
    list_price: {
        min : 0,
        max : 0
    },
    beds: {
        min : 0
    },
    baths: {
        min : 0
    },
}

const filterReducer = (state = init, action) =>{
    switch(action.type){
        case "limit" :
            const getLimit =  JSON.parse(JSON.stringify(state))
            getLimit.limit = action.payload
            return state = getLimit
        case "city" :
            const getCity =  JSON.parse(JSON.stringify(state))
            getCity.city = action.payload
            return state = getCity
        case "zip" :
            const getZip =  JSON.parse(JSON.stringify(state))
            getZip.postal_code = action.payload
            return state = getZip
        case "location" :
            const getLocation =  JSON.parse(JSON.stringify(state))
            getLocation.location = action.payload
            return state = getLocation
        case "prices" :
            const getPrices =  JSON.parse(JSON.stringify(state))
            getPrices.list_price = action.payload
            return state = getPrices
        case "beds" :
            const getBeds =  JSON.parse(JSON.stringify(state))
            getBeds.beds = action.payload
            return state = getBeds 
        case "baths" :
            const getBaths =  JSON.parse(JSON.stringify(state))
            getBaths.baths = action.payload
            return state = getBaths 
        case "homeType" :
            const getHomeType =  JSON.parse(JSON.stringify(state))
            getHomeType.type = action.payload
            return state = getHomeType 
        case "searchType" :
            const getSearchType =  JSON.parse(JSON.stringify(state))
            getSearchType.status = action.payload
            return state = getSearchType
        default :
            return state
    }
}

export default filterReducer