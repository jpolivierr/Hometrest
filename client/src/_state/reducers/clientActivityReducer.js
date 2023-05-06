import {  SET_INACTIVE, SET_ACTIVE  } from "../actions/clientActivityAction"

const init = {
    activeTime : null,
    inactiveTime : null
}

const clientActivityReducer = (state = init, action) =>{

    switch(action.type){
        case SET_INACTIVE:
                    return {...state, 
                        inactiveTime : action.payload,
                    }

        case SET_ACTIVE :
                    return {...state, 
                        activeTime : action.payload
                    }
        default : 
                    return state

    }
}

export default clientActivityReducer