import "./style.css"
import LogOutNav from "./logOutNav"
import LogInNav from "./logInNav"

import UserContext from "../userContext/UserState"
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