const init = {
    location : "",
    postal_code : "33167",
    status: [],
    type : [],
    list_price: {
        min : 0,
        max : 0
    },
    beds: {
        min : null
    },
    baths: {
        min : null
    },
}

const filterReducer = (state = init, action) =>{
    switch(action.type){
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