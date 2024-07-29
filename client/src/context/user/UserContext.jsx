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
    },[user])

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
        if(!user) return null
        const userLikes = user.likedProperties
        return userLikes.find(like => like.propertyId === id)
    }

    const getUserFavoriteProperties = () => {
        if(!user) return
        return user.likedProperties
    }

    const getPropertyCount = () => {
        if(!user) return
        return user.likedProperties.length
    }

    const getUser = () => {
        return deepCopy(user)
    }

    const userAuthenticated = () => {
        return user && isAuthenticated;
    }

    const updateProperty = (likedPropertyData) => {
        if (!user) return
        setUser((prevUser) => {
            const propertyExists = prevUser.likedProperties.find(p => p.propertyId === likedPropertyData.propertyId)
            let updatedLikedProperties;
            if (propertyExists) {
                updatedLikedProperties = prevUser.likedProperties.filter(p => p.propertyId !== likedPropertyData.propertyId)
            } else {
                updatedLikedProperties = [...prevUser.likedProperties, likedPropertyData]
            }
            return {
                ...prevUser,
                likedProperties: updatedLikedProperties
            };
        });
    };
    

    const userContextValue = {
        updateProperty,
        getPropertyCount,
        userAuthenticated,
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