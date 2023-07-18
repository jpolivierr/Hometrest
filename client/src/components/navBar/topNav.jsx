import "./topNav.style.css"
import LogOutNav from "./logOutNav"
import LogInNav from "./logInNav"

import UserContext from "../../context/user/UserContext"
import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const TopNav = () =>{

    const {activeUser, logout} = useContext(UserContext)

    const location = useLocation();

    const [navStick, setNavStick] = useState("")

    useEffect(()=>{
        const path = location.pathname;
        console.log("running...", path)
                    if(path === "/listings"){
                        setNavStick("sticky")
                    }else{
                        setNavStick("")
                    }
    },[location])

    


     
    return(
        <div className={navStick}>
        {!activeUser || !activeUser.id ? <LogOutNav/> : <LogInNav/>}
        </div>
                               
     
    )
}

export default TopNav