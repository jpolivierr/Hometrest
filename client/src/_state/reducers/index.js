import activeUser from "./activeUser"
import searchReducer from "./searchReducer";
import propertiesReducer from "./propertiesReducer";
import {combineReducers} from 'redux'

const reducers = combineReducers({
    activeUser,
    searchReducer,
    propertiesReducer
})

export default reducers;