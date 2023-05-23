import { SET_PROPERTIES } from "../actions/propertiesAction"

const init = []

const propertiesReducer = (state = init, action) =>{

    switch(action.type){

        case SET_PROPERTIES :
            return [...action.payload]
        default :
            return state

    }


}

export default propertiesReducer