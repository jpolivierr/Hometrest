import { SET_PROPERTIES } from "../actions/propertiesAction"
import { deepSearch } from "../../Util/getValueByKey"
const init = {
            count: 0,
            total: 0,
            results : [],
}

const propertiesReducer = (state = init, action) =>{

    switch(action.type){

        case SET_PROPERTIES :
            return action.payload
        default :
            return state

    }
}

const removePropsWithNoImage = (propArray) =>{

    const photoCount= deepSearch(propArray ,["photo_count"], 0)

    return propArray.filter((property) => deepSearch(property.photo_count > 0))

     
}

export default propertiesReducer