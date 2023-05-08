import { SET_AUTHENTICATION, 
        SET_USER, 
        SET_TOKEN, 
        CLEAR_USER,
        UPDATE_LIKES } from "../actions/setUserAction"

const init = {
    userInfo : null,
    token : null
}

const activeUserReducer = (state = init, action) =>{

    

    switch(action.type){
        case SET_AUTHENTICATION :
                    return {...state, 
                            userInfo : action.payload.userInfo,
                            token: action.payload.token
                    }

        case SET_USER :
                    return {...state, 
                            userInfo : action.payload
                    }
        case SET_TOKEN :
                    return {...state, 
                            token: action.payload
                    }
        case CLEAR_USER :
                    return {...state, 
                            userInfo : null,
                            token: null
                    }
        case UPDATE_LIKES :
                    if(state.userInfo && state.userInfo.likes){
                        const stateClone = {...state}
                        stateClone.userInfo.likes = action.payload
                        return stateClone
                    }
                    return state
        default : 
                    return state

    }
}

export default activeUserReducer