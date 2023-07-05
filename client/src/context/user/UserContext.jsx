import { createContext, useEffect, useState, useCallback } from "react";
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

    const likeProperty = useCallback((id) =>{

        const likePropsClone = [...activeUser.likedProperties]

        if(activeUser.likedProperties.includes(id)){

          const updatedateLikes = likePropsClone.filter( likesId => likesId !== id)

          setActiveUser({...activeUser, likedProperties: updatedateLikes})

        //   makeRequest("POST", URL.UNLIKE_PROPS, {propertyId : id})

          return

        }
        
        likePropsClone.push(id)

        setActiveUser({...activeUser, likedProperties: likePropsClone})

        // makeRequest("POST", URL.LIKE_PROPS, {propertyId : id})


    },[activeUser.likedProperties])


    return(
        <UserContext.Provider value={{isLoggedIn, activeCookie, likeProperty, getCookie, activeUser, loading, setUser, clearUser, logout, deleteAccount}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext