import { useState, useEffect, useRef } from "react"
import useReduxMng from "./useReduxMng"

const useSessionMng = (mytoken) =>{

    const {setToken, clearUser, activeUser} = useReduxMng()

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

    const getTokens = () =>{

        const localToken = localStorage.getItem(mytoken)

        if(!localToken){

            return null

        }

        if(localToken){
            const tokenArr = localToken.split("_")
            return tokenArr[0] + "_" + tokenArr[1]

        }

        const regexPattern = `(?:(?:^|.*;\s*)${mytoken}\s*\=\s*([^;]*).*$)|^.*$`
        const regexValue = new RegExp(regexPattern)
        const cookieValue = document.cookie.replace(regexValue, "$1");

        if(cookieValue){

            const tokenArr = cookieValue.split("_")

            return tokenArr[0] + "_" +  tokenArr[1]
            
        }

        return null

    }

   const getServerInactiveTime = () =>{
    
        const token = getTokens()

        console.log(token)

        if(token){
            console.log(Number(token.split("_")[1]))

          return Number(token.split("_")[1])

        }

        return 0
    
   }

    const setDataToStorage = (value) =>{

        const date = new Date()
        const time = date.getTime()
        
        console.log(value)

        localStorage.setItem(mytoken, `${value}_${time}`)

        document.cookie = `${mytoken}=${value}_${time};SameSite=strict`

    }

    const deleteStorageData = () =>{

        

        if(getTokens(mytoken)){
            document.cookie = `${mytoken}=;expires=${new Date(0).toUTCString()};SameSite=strict;path=/;`

        localStorage.removeItem(mytoken)

        clearUser()
            console.log("----------------------->> Reloading page...")
             window.location.href = "/"

        
        }

        

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


        if(cookieValue){

                const date = new Date()
                const currentTime = date.getTime()
                const tokenMaxInterval = Number(cookieValue.split("_")[1])
                const tokenExpTime = Number(cookieValue.split("_")[2])
                
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

    //********************************************************************************************************* */
    // USER ACTIVITY MANAGEMENT
    //********************************************************************************************************* */

    const [activityTimer, startActivityTimer] = useState(false)

    const [timerId] = useState(null);

    const [pageVisibility, setPageVisibility] = useState({
        inactive : null,
        active : null
    })

    const timerIdRef = useRef(null);

    const visibilityManagement = () => {

        if (typeof document.hidden !== "undefined") {
    
          document.addEventListener("visibilitychange", function () {
    
            if (document.hidden) {
    
              setPageVisibility(prevState => {
    
                return {...prevState, inactive: Date.now()};
    
              });
    
            } else {
    
              setPageVisibility(prevState => {
    
                return {...prevState, active: Date.now()};
    
              });
    
            }
          });
        }
      }

      useEffect(() => {

        const date = new Date();
    
        setPageVisibility({
    
          inactive: null,
    
          active: date.getTime()
    
        });
    
      }, []);


      const getClientInactiveTime = () => {

        if (pageVisibility.active && pageVisibility.inactive) {
    
          const inactiveTime = Math.round((pageVisibility.inactive - pageVisibility.active) / 1000);
    
          return Math.abs(inactiveTime);
    
        }
    
        return null;
      };

      const startTimer = () => {

        return setTimeout(() => {
    
    
          timerIdRef.current = null
    
          startActivityTimer(false)
    
          deleteStorageData();
    
    
        }, getServerInactiveTime() * 1000);
    
      };


      const setActivityTimer = () =>{

        if(!activityTimer){
    
          startActivityTimer(true)
    
        }
    
      }


      useEffect(()=>{

        console.log(pageVisibility)
    
        const userInactiveTime = getClientInactiveTime()
    
        if(userInactiveTime >= getServerInactiveTime()){
    
          deleteStorageData()
    
        }
    
      },[pageVisibility])



      const resetTimer = () => {

        if (timerIdRef.current) {
    
          clearTimeout(timerIdRef.current);
    
          timerIdRef.current = null
    
        }
    
            console.log("::::setting timer::::")
    
            timerIdRef.current = startTimer()
    
      };


      useEffect(() => {

        const handleActivity = () => {
    
          resetTimer();
    
        };
    
        if(activityTimer && getServerInactiveTime() > 0){
    
              document.addEventListener("mousemove", handleActivity);
    
              document.addEventListener("keydown", handleActivity);

              handleActivity()
    
              visibilityManagement()
    
        }
    
        return () => {
    
          document.removeEventListener("mousemove", handleActivity);
    
          document.removeEventListener("keydown", handleActivity);
    
          clearTimeout(timerId);
    
        };
    
      }, [activityTimer]);





    return{
        startSession,
        validateSession,
        processTokens,
        getTokens,
        deleteStorageData,
        setActivityTimer
    }
}

export default useSessionMng