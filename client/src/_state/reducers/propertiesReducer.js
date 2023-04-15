import { GET_PROPERTIES } from "../actions/getProperties"

const init = {}

const propertiesReducer = (state = init, action) =>{

    switch(action.type){

        case GET_PROPERTIES :
            return action.payload
        default :
            return state


    }


}

export default propertiesReducer