import { SET_USER } from "../actions/setUserAction"

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
        default : 
                    return state

    }
}

export default activeUserReducer