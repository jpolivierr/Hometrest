
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import {setUserAction, updateSearch, properties} from "../_state/actions/"

const useReduxMng = () =>{

    const activeUserReducer = useSelector((state)=> {return state.activeUserReducer})
    const searchReducer = useSelector((state)=> state.searchReducer)
    const propertiesReducer = useSelector((state) => state.propertiesReducer)

    
    const {
           setLocation,
           setType,
           setPrices,
           setBeds,
           setBaths,
           setStatus,
           setZipcode,
           setCity,
           setLimit,
           setSearch
        
        } = bindActionCreators(updateSearch, useDispatch())

    const {setPropertyList} = bindActionCreators(properties, useDispatch())

    const {setUser, setToken, clearUser} = bindActionCreators(setUserAction, useDispatch())

    return {
        activeUserReducer,
        searchReducer,
        setUser,
        setToken,
        setLocation,
        setType,
        setPropertyList,
        clearUser,
        propertiesReducer,
        setSearch,
        setPrices,
        setBeds,
        setBaths,
        setStatus,
        setZipcode,
        setCity,
        setLimit
    }

}

export default useReduxMng;