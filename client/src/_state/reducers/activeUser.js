import { SET_USER } from "../actions/setUserAction"

const init = {
    userInfo : null,
    authorizationToken : null
}

const activeUser = (state = init, action) =>{

    

    switch(action.type){

        case SET_USER :
                    return {...state, 
                            userInfo : action.payload.userInfo,
                            authorizationToken : action.payload.token
                    }
        default : 
                    return state

    }
}

export default activeUser