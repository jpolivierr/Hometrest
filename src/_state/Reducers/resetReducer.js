const init = {status: true}

const resetReducer = (state = init, action) =>{
    switch(action.type){
        case "reset":
            return { 
                     ...state, 
                     status: !state.status, 
                    }
        default :
            return state
    }
    
    }
    
    export default resetReducer 