import activeUser from "./activeUser"
import searchReducer from "./searchReducer";
import {combineReducers} from 'redux'

const reducers = combineReducers({
    activeUser,
    searchReducer
})

export default reducers;