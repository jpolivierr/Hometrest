
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import {getUserAction, updateSearch, properties} from "../_state/actions/"

const useReduxMng = () =>{

    const activeUser = useSelector((state)=> {return state.activeUser})
    const searchReducer = useSelector((state)=> state.searchReducer)
    const propertiesReducer = useSelector((state) => state.propertiesReducer)

    const {getUser} = bindActionCreators(getUserAction, useDispatch())
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

    return {
        activeUser,
        searchReducer,
        getUser,
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