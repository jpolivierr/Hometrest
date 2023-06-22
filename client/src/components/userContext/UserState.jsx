import { createContext, useEffect, useState } from "react";
import useSession from "../sessionManagement/useSession";
import useRequest from "../../lib/MakeRequest/MakeRequest";
import URL from "../../Config/urls";

const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const {makeRequest, response, loading, serverError} = useRequest()
    const {deleteCookie, activeCookie} = useSession()
    

    const init = {
        id: null,
        firstName : null,
        lastName : null,
        email : null,
        likedProperties : null,
    }

    useEffect(()=>{

        if(serverError){
            console.log(serverError)
        }

        if(response){
            console.log(response)
        }
         

    },[response, serverError])

    

    const [activeUser, setActiveUser] = useState(init)

    const setUser = (user) =>{
        setActiveUser(user)
    }

    const clearUser = () =>{
        setActiveUser(init)
        deleteCookie()
    }

    const logout = () =>{

        makeRequest("GET",URL.LOGOUT)
    }

    const deleteAccount = () =>{
        makeRequest("DELETE",URL.DELETE_ACCOUNT)
    }

    return(
        <UserContext.Provider value={{activeCookie, activeUser, loading, setUser, clearUser, logout, deleteAccount}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext