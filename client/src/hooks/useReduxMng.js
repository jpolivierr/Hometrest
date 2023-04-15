
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import {getUserAction, updateSearch, getProperties} from "../_state/actions/"

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
           setLimit
        
        } = bindActionCreators(updateSearch, useDispatch())
    const {getPropertyList} = bindActionCreators(getProperties, useDispatch())

    return {
        activeUser,
        searchReducer,
        getUser,
        setLocation,
        setType,
        getPropertyList,
        propertiesReducer,
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