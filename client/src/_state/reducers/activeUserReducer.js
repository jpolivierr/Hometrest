import { SET_USER, SET_TOKEN, CLEAR_USER } from "../actions/setUserAction"

const init = {
    userInfo : null,
    token : null
}

const activeUserReducer = (state = init, action) =>{

    

    switch(action.type){

        case SET_USER :
                    return {...state, 
                            userInfo : action.payload.userInfo,
                            token: action.payload.token
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
        default : 
                    return state

    }
}

export default activeUserReducer