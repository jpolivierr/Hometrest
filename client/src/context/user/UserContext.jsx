import { createContext, useEffect, useState, useCallback, useContext } from "react";
import useSession from "../../features/sessionManagement/useSession";
import useRequest from "../../httpRequest/MakeRequest/MakeRequest";
import URL from "../../constants/urls";
import capitalizeWords from "../../Util/capitalizedWords";

const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const {makeRequest, response, loading, serverError} = useRequest()
    const {deleteCookie, getCookie, activeCookie} = useSession()
    

    const init = {
        id: "",
        firstName : "",
        lastName : "",
        email : "",
        likedProperties : [],
    }
    
const [activeUser, setActiveUser] = useState(init)

    useEffect(()=>{

        if(serverError){
            console.log(serverError)
        }

        if(response){
            console.log(response)
        }

    },[response, serverError])

     

     useEffect(()=>{

            console.log(activeUser)

     },[activeUser])

    const setUser = (user) =>{
        user.firstName = capitalizeWords(user.firstName)
        user.lastName = capitalizeWords(user.lastName)
        setActiveUser(user)
        setIsLoggedIn(true)
    }

    const clearUser = () =>{
        setActiveUser(init)
        deleteCookie()
        setIsLoggedIn(false)
    }

    const logout = () =>{
        setIsLoggedIn(false)
        makeRequest("GET",URL.LOGOUT)
    }

    const deleteAccount = () =>{
        makeRequest("DELETE",URL.DELETE_ACCOUNT)
    }

    const getUserLikes = useCallback((id) =>{
        const userLikes = activeUser.likedProperties
        const likes = userLikes.find(like => like.propertyId === id)
        return likes

    },[activeUser.likedProperties])

    const likeProperty = useCallback((id) =>{

        const likePropsClone = [...activeUser.likedProperties]
        const propsId= likePropsClone.find(propId => propId.propertyId === id)

        if(propsId){

          const updatedateLikes = likePropsClone.filter( likesId => likesId.propertyId !== id)

          setActiveUser({...activeUser, likedProperties: updatedateLikes})

          makeRequest("DELETE", URL.LIKE_PROPS, propsId)

          return

        }
        
        likePropsClone.push({propertyId: id})

        setActiveUser({...activeUser, likedProperties: likePropsClone})

        makeRequest("POST", URL.LIKE_PROPS, {propertyId: id})


    },[activeUser.likedProperties])

    const userContextValue = {

        isLoggedIn,
        activeCookie, 
        likeProperty, 
        getCookie, 
        activeUser, 
        loading, 
        setUser,
        clearUser,
        logout,
        deleteAccount,
        getUserLikes

    }


    return(
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    )

}

export const useUserContext = () => useContext(UserContext)

export default UserContext