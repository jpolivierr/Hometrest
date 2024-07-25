import { createContext, useEffect, useState, useCallback, useContext } from "react";
import useSession from "../../features/sessionManagement/useSession";
import useRequest from "../../httpRequest/MakeRequest/MakeRequest";
import URL from "../../constants/urls";
import capitalizeWords from "../../Util/capitalizedWords";
import deepCopy from "../../Util/deepCopy";

const UserContext = createContext();

export const UserProvider = ({children}) => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const {makeRequest, response, loading, serverError} = useRequest()
    // const {deleteCookie, getCookie, activeCookie} = useSession()
    const [user, setUser] = useState({
        name: "Frederic"
    })

    const favoritePropertyCount = () =>{
        const count = user.likedProperties.length

        if(count > 9){
            return "+" + 9
        }

        return count
    }

    const logout = () =>{
 
        setUser(null)
    }

    const deleteAccount = () =>{
  
        setUser(null)
    }

    const getUserFavoritePropertyById = (id) => {
        const userLikes = user.likedProperties
        const likes = userLikes.find(like => like.propertyId === id)
        return likes
    }

    const getUserFavoriteProperties = (id) => {
        return user.likedProperties
    }

    const getUser = () => {
        return deepCopy(user)
    }

    const userContextValue = {
        getUser,
        favoritePropertyCount,
        logout,
        deleteAccount,
        getUserFavoritePropertyById,
        getUserFavoriteProperties
    }


    return(
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    )

}

export const useUserContext = () => useContext(UserContext)

// export default UserContext