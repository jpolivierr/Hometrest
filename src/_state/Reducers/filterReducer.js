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
        min : "No minimum",
        max : "No maximum"
    },
    beds: "Bedrooms",
    baths: "Bathrooms",
}

const filterReducer = (state = init, action) =>{
    switch(action.type){
        case "location" :
            const getLocation =  JSON.parse(JSON.stringify(state))
            getLocation.location = action.payload
            return state = getLocation
        case "beds" :
        case "prices" :
            const getPrices =  JSON.parse(JSON.stringify(state))
            getPrices.prices = action.payload
            return state = getPrices
        case "beds" :
            const getBeds =  JSON.parse(JSON.stringify(state))
            getBeds.beds = action.payload
            return state = getBeds 
        case "baths" :
        const getBaths =  JSON.parse(JSON.stringify(state))
        getBaths.baths = action.payload
        return state = getBaths 
        default :
            return state
    }
}

export default filterReducer