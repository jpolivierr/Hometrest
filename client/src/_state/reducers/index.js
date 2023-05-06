import activeUserReducer from "./activeUserReducer"
import searchReducer from "./searchReducer";
import propertiesReducer from "./propertiesReducer";
import clientActivityReducer from "./clientActivityReducer";
import {combineReducers} from 'redux'

const reducers = combineReducers({
    activeUserReducer,
    searchReducer,
    propertiesReducer,
    clientActivityReducer
})

export default reducers;