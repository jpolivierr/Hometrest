import { useState } from "react"
import useReduxMng from "./useReduxMng"

const useSessionMng = () =>{

    const {setUser, setToken, clearUser, activeUser} = useReduxMng()
    const [mytoken] = useState("authorizationtoken")

    const processTokens = () =>{

        const localToken = localStorage.getItem(mytoken)
        const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)authorizationtoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        if(localToken){

            setToken(localToken)

            return

        }

        if(cookieValue){

            setToken(cookieValue)

            return

        }



    }

    const setDataToStorage = (value) =>{

        const date = new Date()
        const time = date.getTime()

        localStorage.setItem(mytoken, `${value};${time}`)

        document.cookie = `${mytoken}=${value};${time};SameSite=Strict`

    }

    const deleteStorageData = () =>{

        document.cookie = `${mytoken}=;expires=${new Date(0).toUTCString()};SameSite=Strict;path=/;`

        localStorage.removeItem(mytoken)

        clearUser()

    }

    const validateSession = () =>{

        const localToken = localStorage.getItem(mytoken)
        const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)authorizationtoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    
        if(localToken){

                const date = new Date()
                const currentTime = date.getTime()
                const tokenMaxInterval = Number(localToken.split(";")[1])
                const tokenExpTime = Number(localToken.split(";")[2])

                if(typeof tokenMaxInterval === "number"){
                    // console.log(tokenMaxInterval)
                    // console.log(Math.floor((currentTime - tokenExpTime) / 1000) )
                }
                
                if(typeof tokenExpTime === "number"){
                   
                    const timeLaps = Math.floor((currentTime - tokenExpTime) / 1000)
               
                    if(timeLaps > 60){
                        deleteStorageData()
                    }

                }
            
            return

        }

    }

    const startSession = (formResponse) =>{

        if(
            formResponse.status === 200 &&
            formResponse.body &&
            formResponse.headers
            
            ){

                const token = formResponse.headers.get(mytoken)
 
           const activeUserInfo = {

                    userInfo: formResponse.body,
                    token 
                    
                    }
                    // console.log(payload)
                    setDataToStorage(token)
                    validateSession()
                    setUser(activeUserInfo)
                    

 
         }else{
            return false
         }

    }

    return{
        startSession,
        validateSession,
        processTokens
    }
}

export default useSessionMng