
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import {setUserAction, updateSearch, properties, clientActivityAction} from "../_state/actions/"

const useReduxMng = () =>{

    const activeUserReducer = useSelector((state)=> {return state.activeUserReducer})
    const searchReducer = useSelector((state)=> state.searchReducer)
    const propertiesReducer = useSelector((state) => state.propertiesReducer)
    const clientActivityReducer = useSelector((state)=> state.clientActivityReducer)

    
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

    const {setAuthentication , setUser, setToken, clearUser} = bindActionCreators(setUserAction, useDispatch())

    const {setInactive, setActive} = bindActionCreators(clientActivityAction, useDispatch())

    return {
        clientActivityReducer,
        activeUserReducer,
        searchReducer,
        setAuthentication,
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
        setLimit,
        setInactive,
        setActive
    }

}

export default useReduxMng;