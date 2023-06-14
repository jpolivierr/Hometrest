import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) =>{

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

    return(
        <UserContext.Provider value={{activeUser, setUser, clearUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext