import { ACTION_TYPE } from "../actions/searchAction"

const init = {
    
    city: "",
    state_code: "",
    type: [],
    status: [],
    list_price: {min: 0, max: 0},
    baths: {min: 0, max: 0},
    beds : {min: 0, max: 0}

}

const searchReducer = (state = init, action) =>{
    switch(action.type){
        case ACTION_TYPE.SET_SEARCH :
            if(!action.payload || Object.keys(action.payload).length === 0){
                return state
            }
            return {...state, ...action.payload}
        case ACTION_TYPE.LIMIT :
            const getLimit =  JSON.parse(JSON.stringify(state))
            getLimit.limit = action.payload
            return state = getLimit

        case ACTION_TYPE.ADDRESS :

            const stateCloneAddress =  JSON.parse(JSON.stringify(state))
             stateCloneAddress.city = action.payload.city
             stateCloneAddress.state = action.payload.state
             stateCloneAddress.postal_code = action.payload.postal_code
             stateCloneAddress.state_code = action.payload.state_code
             
             !stateCloneAddress.postal_code && delete stateCloneAddress.postal_code
             !stateCloneAddress.city && delete stateCloneAddress.city
             !stateCloneAddress.state && delete stateCloneAddress.state
             !stateCloneAddress.state_code && delete stateCloneAddress.state_code

             return state = stateCloneAddress

        case ACTION_TYPE.LOCATION :
            const getLocation =  JSON.parse(JSON.stringify(state))
            getLocation.location = action.payload
            return state = getLocation
        case ACTION_TYPE.PRICES:
            const getPrices =  JSON.parse(JSON.stringify(state))
            if((action.payload && 
                Object.keys(action.payload).length === 0) ||
                !action.payload
                ){
                 delete getPrices.list_price
                 return state = getPrices
 
                }
            getPrices.list_price = action.payload
            return state = getPrices
        case ACTION_TYPE.BEDS:
            const getBeds =  JSON.parse(JSON.stringify(state))
            if((action.payload && 
                Object.keys(action.payload).length === 0) ||
                !action.payload
                ){
                 delete getBeds.beds
                 return state = getBeds
 
                }
            getBeds.beds = action.payload
            return state = getBeds 
        case ACTION_TYPE.BATHS :
            const getBaths =  JSON.parse(JSON.stringify(state))
            if((action.payload && 
                Object.keys(action.payload).length === 0) ||
                !action.payload
                ){
                 delete getBaths.baths
                 return state = getBaths
 
                }
            getBaths.baths = action.payload
            return state = getBaths 
        case ACTION_TYPE.HOMETYPE :
            const getHomeType =  JSON.parse(JSON.stringify(state))
            if(action.payload.length <= 0 && ("type" in getHomeType)){
                delete getHomeType.type
                return state = getHomeType
            }
            getHomeType.type = action.payload
            return state = getHomeType 
        case ACTION_TYPE.SEARCH_TYPE :
            const getSearchType =  JSON.parse(JSON.stringify(state))
            if(action.payload.length <= 0 && ("status" in getSearchType)){
                delete getSearchType.status
                return state = getSearchType
            }
            getSearchType.status = action.payload
            return state = getSearchType
        default :
            return state
    }
}

export default searchReducer