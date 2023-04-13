import { ACTION_TYPE } from "../actions/searchAction"

const init = {
    limit: 100,
    location : "",
    city : "",
    postal_code : "20634",
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

const searchReducer = (state = init, action) =>{
    switch(action.type){
        case ACTION_TYPE.LIMIT :
            const getLimit =  JSON.parse(JSON.stringify(state))
            getLimit.limit = action.payload
            return state = getLimit
        case ACTION_TYPE.CITY :
            const getCity =  JSON.parse(JSON.stringify(state))
            getCity.city = action.payload
            return state = getCity
        case ACTION_TYPE.ZIP :
            const getZip =  JSON.parse(JSON.stringify(state))
            getZip.postal_code = action.payload
            return state = getZip
        case ACTION_TYPE.LOCATION :
            const getLocation =  JSON.parse(JSON.stringify(state))
            getLocation.location = action.payload
            return state = getLocation
        case ACTION_TYPE.PRICES:
            const getPrices =  JSON.parse(JSON.stringify(state))
            getPrices.list_price = action.payload
            return state = getPrices
        case ACTION_TYPE.BEDS:
            const getBeds =  JSON.parse(JSON.stringify(state))
            getBeds.beds = action.payload
            return state = getBeds 
        case ACTION_TYPE.BATHS :
            const getBaths =  JSON.parse(JSON.stringify(state))
            getBaths.baths = action.payload
            return state = getBaths 
        case ACTION_TYPE.HOMETYPE :
            const getHomeType =  JSON.parse(JSON.stringify(state))
            getHomeType.type = action.payload
            return state = getHomeType 
        case ACTION_TYPE.SEARCH_TYPE :
            const getSearchType =  JSON.parse(JSON.stringify(state))
            getSearchType.status = action.payload
            return state = getSearchType
        default :
            return state
    }
}

export default searchReducer