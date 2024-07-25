// import React, { useEffect } from 'react'
// import useRequest from '../MakeRequest/MakeRequest'
// import UserContext from '../../context/user/UserContext'
// import { useContext, useLayoutEffect } from 'react'
// import URL from '../../constants/urls'

// export default function UserRequest() {

//   const {activeCookie, setUser, logout, clearUser} = useContext(UserContext)

//   const { makeRequest, response, serverError, loading, status } = useRequest()


//   useLayoutEffect(()=>{

//     if(!activeCookie) return

//     console.log("making request")
//     makeRequest("GET", URL.GET_ACCOUNT )

//    },[activeCookie])



//    useEffect(()=>{ 

//     if(serverError){
//       console.log("clear cookies...")
//       clearUser()
//       return
//     }

//     if(status === 403 || status === 409){
//       console.log("clear cookies...")
//       clearUser()
//     }

//      if(response){
//       const user = response.body
//       setUser(user)
//     }

//    },[serverError, response])


//   return {
//             loading,
//             status
//   }
  
// }
