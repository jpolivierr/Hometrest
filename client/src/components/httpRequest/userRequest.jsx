import React, { useEffect } from 'react'
import useRequest from '../../lib/MakeRequest/MakeRequest'
import UserContext from '../userState/UserState'
import { useContext, useLayoutEffect } from 'react'
import URL from '../../Config/urls'

export default function UserRequest() {

  const {activeCookie, setUser, logout} = useContext(UserContext)

  const { makeRequest, formResponse, loading, status } = useRequest()

  // const fetchUser = () =>{

  //      makeRequest("GET", URL.GET_ACCOUNT )

  // }

  useLayoutEffect(()=>{

    if(!activeCookie) return

    console.log("making request")
    makeRequest("GET", URL.GET_ACCOUNT )

   },[activeCookie])

  useEffect(()=>{

    console.log("formResponse",formResponse)
    console.log("status", status)

    if(status === 403){
      logout()
      return
    }

    if(status === 200){
      const user = formResponse.body
      setUser(user)
    }

  },[formResponse])

  return {
            loading,
            status
  }
}
