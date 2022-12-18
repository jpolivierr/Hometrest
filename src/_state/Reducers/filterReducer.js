const init = {
    location : "",
    status: {
          rent : false,
          buy : false
    },
    propertyType : {
        apartment : false,
        condo : false,
        house : false,
        land : false,
        multiFamily : false,
        townHouse : false
    },
    prices: {
        min : null,
        max : null
    }
}

const filterReducer = (state = init, action) =>{
    switch(action.type){
        case "prices" :
            const stateClone =  JSON.parse(JSON.stringify(state))
            stateClone.prices = action.payload
            return state = stateClone
        default :
            return state
    }
}

export default filterReducer