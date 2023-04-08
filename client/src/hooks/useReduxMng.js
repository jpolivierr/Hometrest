
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import {getUserAction} from "../_state/actions/"

const useReduxMng = () =>{

    const activeUser = useSelector((state)=> {return state.activeUser})
    const {getUser} = bindActionCreators(getUserAction, useDispatch())

    return {
        activeUser,
        getUser
    }

}

export default useReduxMng;