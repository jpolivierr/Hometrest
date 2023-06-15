import { createContext, useState } from "react";
import useSession from "../sessionManagement/useSession";

const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const {deleteCookie, activeCookie} = useSession()

    const init = {
        id: null,
        firstName : null,
        lastName : null,
        email : null,
        likedProperties : null,
    }

    

    const [activeUser, setActiveUser] = useState(init)

    const setUser = (user) =>{
        setActiveUser(user)
    }

    const clearUser = () =>{
        setActiveUser(init)
    }

    const logout = () =>{

        deleteCookie()
        clearUser()

    }

    return(
        <UserContext.Provider value={{activeCookie, activeUser, setUser, clearUser, logout}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext