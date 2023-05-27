import { SET_PROPERTIES } from "../actions/propertiesAction"
import { deepSearch } from "../../Util/getValueByKey"
const init = []

const propertiesReducer = (state = init, action) =>{

    switch(action.type){

        case SET_PROPERTIES :
            return removePropsWithNoImage(action.payload)
        default :
            return state

    }


}

const removePropsWithNoImage = (propArray) =>{

    const photoCount= deepSearch(propArray ,["photo_count"], 0)

    return propArray.filter((property) => deepSearch(property.photo_count > 0))

     
}

export default propertiesReducer