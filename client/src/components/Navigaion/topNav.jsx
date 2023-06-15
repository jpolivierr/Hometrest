import "./style.css"
import LogOutNav from "./logOutNav"
import LogInNav from "./logInNav/logInNav"
import useReduxMng from "../../hooks/useReduxMng"

import UserContext from "../userState/UserState"
import { useContext } from "react"

const TopNav = () =>{

    const {activeUserReducer} = useReduxMng()
    const user = activeUserReducer.userInfo
    const token = activeUserReducer.token
    const {activeUser, logout} = useContext(UserContext)


    return(
        <>
        {!activeUser.id ? <LogOutNav/> : <LogInNav logOut = {logout} user={activeUser}/>}
        </>
                               
     
    )
}

export default TopNav