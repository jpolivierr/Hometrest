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
        case PATH_TYPE.ACCOUNT:
            return { 
                     ...state, 
                     status: action.payload.status, 
                     header: action.payload.header,
                     message: action.payload.message,
                     csMessage: action.payload.csMessage,
                     data: action.payload.data
                    }
        case PATH_TYPE.RECURRING:
            const newRecurring = action.payload.data.formList
            const stateClone =  JSON.parse(JSON.stringify(state))
            stateClone.data.recurringBill = newRecurring
            return state = stateClone
        case PATH_TYPE.TRANSACTION:
            const newTransaction = action.payload.data.formList
            const newTransactionClone =  JSON.parse(JSON.stringify(state))
            newTransactionClone.data.transaction = newTransaction
            return state = newTransactionClone 
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