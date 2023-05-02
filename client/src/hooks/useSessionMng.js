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

    const getTokens = (key) =>{

        const localToken = localStorage.getItem(key)

        if(!localToken){

            return null

        }

        if(localToken){
            const tokenArr = localToken.split("_")
            return tokenArr[0] + "_" + tokenArr[1]

        }

        const regexPattern = `(?:(?:^|.*;\s*)${key}\s*\=\s*([^;]*).*$)|^.*$`
        const regexValue = new RegExp(regexPattern)
        const cookieValue = document.cookie.replace(regexValue, "$1");

        if(cookieValue){
            const tokenArr = cookieValue.split("_")
            return tokenArr[0] + "_" +  tokenArr[1]
            
        }

        return null

    }

    const setDataToStorage = (value) =>{

        const date = new Date()
        const time = date.getTime()
        
        console.log(value)

        localStorage.setItem(mytoken, `${value}_${time}`)

        document.cookie = `${mytoken}=${value}_${time};SameSite=strict`

    }

    const deleteStorageData = () =>{

        document.cookie = `${mytoken}=;expires=${new Date(0).toUTCString()};SameSite=strict;path=/;`

        localStorage.removeItem(mytoken)

        clearUser()

    }

    const validateSession = () =>{

        const localToken = localStorage.getItem(mytoken)
        const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)authorizationtoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    
        if(localToken){

                const date = new Date()
                const currentTime = date.getTime()
                const tokenMaxInterval = Number(localToken.split("_")[1])
                const tokenExpTime = Number(localToken.split("_")[2])
                
                if(typeof tokenExpTime === "number"){
                   
                    const timeLaps = Math.floor((currentTime - tokenExpTime) / 1000)
               
                    if(timeLaps > 60){
                        deleteStorageData()
                    }

                }
            
            return

        }


        if(localToken){

                const date = new Date()
                const currentTime = date.getTime()
                const tokenMaxInterval = Number(localToken.split("_")[1])
                const tokenExpTime = Number(localToken.split("_")[2])
                
                if(typeof tokenExpTime === "number"){
                   
                    const timeLaps = Math.floor((currentTime - tokenExpTime) / 1000)
                   console.log(timeLaps)
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
            formResponse.headers &&
            formResponse.headers.get(mytoken)
            ){

            const token = formResponse.headers.get(mytoken)
 
           const activeUserInfo = {

                    userInfo: formResponse.body,
                    token 
                    
                    }
                    // console.log(payload)
                    setDataToStorage(token)
                    
                    return true
 
         }else{
            return false
         }

    }

    return{
        startSession,
        validateSession,
        processTokens,
        getTokens
    }
}

export default useSessionMng