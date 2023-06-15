import React, { useLayoutEffect, useState } from 'react'
import { USER_AUTH_TOKEN } from '../../Config/authToken'

export default function useCookies() {

    const [activeCookie, setActiveCookie] = useState(null)

    useLayoutEffect(()=>{
        
        getCookie(USER_AUTH_TOKEN)

    },[])

    

    const getCookie = (cookieName) =>{

        const cookies = document.cookie.split(';')
 
           for (let i = 0; i < cookies.length; i++) {
             const cookie = cookies[i].trim();
             if (cookie.startsWith(cookieName + '=')) {
                const currentCookie = cookie.substring(cookieName.length + 1)
               setActiveCookie(currentCookie)
               return currentCookie;
             }
           }
       return null;
 
     }

     const deleteCookie = (cookieName) =>{

        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setActiveCookie(null)
  
      }

  return {
            activeCookie,
            getCookie,
            deleteCookie,
  }
}
