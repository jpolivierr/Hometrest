import React, { useEffect } from 'react'
import useRequest from '../../lib/MakeRequest/MakeRequest'
import UserContext from '../userState/UserState'
import { useContext, useLayoutEffect } from 'react'
import URL from '../../Config/urls'

export default function UserRequest() {

  const {activeCookie, setUser, logout} = useContext(UserContext)

  const { makeRequest, response, serverError, loading, status } = useRequest()


  useLayoutEffect(()=>{

    if(!activeCookie) return

    console.log("making request")
    makeRequest("GET", URL.GET_ACCOUNT )

   },[activeCookie])

   useEffect(()=>{

    if(serverError){
      logout()
    }

   },[serverError])

  useEffect(()=>{

    if(response){
      const user = response.body
      setUser(user)
    }

  },[response])

  return {
            loading,
            status
  }
  
}
