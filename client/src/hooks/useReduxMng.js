
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import {setUserAction, updateSearch, properties} from "../_state/actions/"

const useReduxMng = () =>{

    const activeUser = useSelector((state)=> {return state.activeUser})
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

    const {setUser} = bindActionCreators(setUserAction, useDispatch())
    
    return {
        activeUser,
        searchReducer,
        setUser,
        setLocation,
        setType,
        setPropertyList,
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