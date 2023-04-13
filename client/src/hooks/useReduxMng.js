
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import {getUserAction, updateSearch} from "../_state/actions/"

const useReduxMng = () =>{

    const activeUser = useSelector((state)=> {return state.activeUser})
    const searchReducer = useSelector((state)=> state.searchReducer)

    const {getUser} = bindActionCreators(getUserAction, useDispatch())
    const {setLocation,setType} = bindActionCreators(updateSearch, useDispatch())

    return {
        activeUser,
        searchReducer,
        getUser,
        setLocation,
        setType
    }

}

export default useReduxMng;