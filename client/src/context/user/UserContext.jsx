import { createContext, useEffect, useState, useCallback, useContext, useLayoutEffect } from "react";
import useSession from "../../features/sessionManagement/useSession";
import useRequest from "../../httpRequest/MakeRequest/MakeRequest";
import URL from "../../constants/urls";
import capitalizeWords from "../../Util/capitalizedWords";
import deepCopy from "../../Util/deepCopy";
import HttpRequest from "../../httpRequest/HttpRequest";

const UserContext = createContext();

export const UserProvider = ({children}) => {

    const httpRequest = HttpRequest()
    const {get} = httpRequest
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useLayoutEffect(() => {
        (async () => {
            if(isAuthenticated) return
            const response = await get(URL.GET_USER)
            if(response.status === 200){
                setIsAuthenticated(true)
                setUser(response.body)
            }else{
                setIsAuthenticated(false)
                setUser(null)
            }
        })()
    },[])

    const authenticate = (user) => {
        setIsAuthenticated(true)
    }

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
        isAuthenticated,
        authenticate,
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