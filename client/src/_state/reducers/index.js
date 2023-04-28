import activeUserReducer from "./activeUserReducer"
import searchReducer from "./searchReducer";
import propertiesReducer from "./propertiesReducer";
import {combineReducers} from 'redux'

const reducers = combineReducers({
    activeUserReducer,
    searchReducer,
    propertiesReducer
})

export default reducers;