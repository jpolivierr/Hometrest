import { createContext, useEffect, useState } from "react";
import useSession from "../../features/sessionManagement/useSession";
import useRequest from "../../services/MakeRequest/MakeRequest";
import URL from "../../constants/urls";
import capitalizeWords from "../../Util/capitalizedWords";

const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const {makeRequest, response, loading, serverError} = useRequest()
    const {deleteCookie, getCookie, activeCookie} = useSession()
    

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
        user.firstName = capitalizeWords(user.firstName)
        user.lastName = capitalizeWords(user.lastName)
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
        <UserContext.Provider value={{activeCookie, getCookie, activeUser, loading, setUser, clearUser, logout, deleteAccount}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext