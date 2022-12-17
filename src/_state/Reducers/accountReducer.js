const init = {
    isLoading: true,
    response: {},
    status: null
}

const accountReducer = (state=init, action) =>{
    switch(action.type){
        case "loading":
            return state = {...state, 
                            isLoading: true}
        case "loaded":
            return state = {...state, 
                            isLoading: false, 
                            response: action.payload,
                            status: !action.payload ? 500 : action.payload.status 
                        }
        case "load":
            return state = action.payload
        default :
            return state
    }
    
}

export default accountReducer