import "./style.css"
import LogOutNav from "./logOutNav"
import LogInNav from "./logInNav/logInNav"

import UserContext from "../userState/UserState"
import { useContext } from "react"

const TopNav = () =>{

    const {activeUser, logout} = useContext(UserContext)

     
    return(
        <>
        {!activeUser || !activeUser.id ? <LogOutNav/> : <LogInNav/>}
        </>
                               
     
    )
}

export default TopNav