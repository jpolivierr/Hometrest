import { PATH_TYPE } from "../../VAR/var"

const init = {
                isLoading : true,
                status: null,
                header: "",
                csMessage: "",
                message: "",
                data : {}
            }

const requestStatusReducer = (state = init, action) =>{
    switch(action.type){
        case "send":
            return { 
                     ...state, 
                     status: action.payload.status, 
                     header: action.payload.header,
                     message: action.payload.message,
                     csMessage: action.payload.csMessage,
                     data: action.payload.data
                    }
        case "isLoading":
            return { 
                     ...state, 
                      isLoading: action.payload
                    }
        default :
            return state
    }
    
    }
    
    export default requestStatusReducer 