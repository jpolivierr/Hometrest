import accountReducer from "./accountReducer";
import modalReducer from "./modalReducer";
import serverMessageReducer from "./serverMessageReducer";
import resetReducer from "./resetReducer";
import requestStatusReducer from "./requestStatusReducer";
import filterReducer from "./filterReducer";


import {combineReducers} from 'redux'

const reducers = combineReducers({
    accountReducer,
    modalReducer,
    serverMessageReducer,
    resetReducer,
    requestStatusReducer,
    filterReducer
})

export default reducers
