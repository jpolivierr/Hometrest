import "./style.css"
import LogOutNav from "./logOutNav"
import LogInNav from "./logInNav/logInNav"
import useReduxMng from "../../hooks/useReduxMng"

const TopNav = () =>{

    const {activeUserReducer} = useReduxMng()
    const user = activeUserReducer.userInfo
    const token = activeUserReducer.token


    return(
        <>
        {!user && !token ? <LogOutNav/> : <LogInNav/>}
           {/* <LogInNav /> */}
        </>
                               
     
    )
}

export default TopNav