
import Login from './Pages/login';
import Signup from './Pages/signup';
import Update from './Pages/update/update';
import About from './Pages/about';
import SingleProperty from './Pages/singleProperty/SingleProperty';
import Home from './Pages/home';
import Listings from './Pages/listings/listings';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TopNav from './components/Navigaion/topNav';
import { useEffect, useLayoutEffect, useState } from 'react';
import useReduxMng from './hooks/useReduxMng';
import { useLocation } from 'react-router-dom';
import useRedirectMng from './hooks/useRedirectMng';
import useSessionMng from './hooks/useSessionMng';
import useRequest from './lib/MakeRequest/MakeRequest';
import URL from './Config/urls';
import LoadingEffect from './lib/loadingEffect/loading/loadingEffect';
import { USER_AUTH_TOKEN } from './Config/authToken';

import UserContext from './components/userState/UserState';
import { useContext } from 'react';



function App() {

  const {activeUser, setUser, clearUser} = useContext(UserContext)

  console.log(activeUser)

  const {
        clientActivityReducer,
         activeUserReducer,
         setSearch,
         setAuthentication,
         setToken,
         searchReducer,
        } = useReduxMng()


        // console.log(clientActivityReducer)

  const { makeRequest, formResponse, loading, status } = useRequest()

  // const location = useLocation()

  // const {pathMng} = useRedirectMng()

  const { getCookie, deleteCookie, setActivityTimer, deleteStorageData} = useSessionMng(USER_AUTH_TOKEN)

   const [isLoading, setIsLoading] = useState(false)

   useEffect(()=>{

    if(!getCookie(USER_AUTH_TOKEN)) return

    makeRequest("GET", URL.GET_ACCOUNT )

   },[])

   useEffect(()=>{

    console.log(formResponse)
    console.log(status)

    if(status == 403){
      clearUser()
      deleteCookie(USER_AUTH_TOKEN)
      return
    }

    if(status == 200){
      const user = formResponse.body
      setUser(user)
      console.log(getCookie(USER_AUTH_TOKEN))
    }


 },[formResponse])

  //  const {setActivityTimer} = useInactivityTimer(10, deleteStorageData);

  //  const userIsAuthenticated = getTokens(USER_AUTH_TOKEN)

  //      useEffect(()=>{
    
  //     pathMng(location.pathname)
  
  //   },[location.pathname])

  // useLayoutEffect(()=>{

  //   if(!userIsAuthenticated){

  //      setIsLoading(false)

  //   }

  // },[])


  //  setActivityTimer()

  

  useEffect(()=>{

        // makeRequest("GET", URL.GET_ACCOUNT )

  },[])



  return (
            isLoading ? <LoadingEffect 
              isShowing = {loading} 
              elementClass="basic-loading"
              type="ring"/> : 
              <div className="App">
  
        <TopNav />
        <Routes>
        <Route path="/single_property" element={<SingleProperty/>}/>
        <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/listings" element={<Listings/>}/>
          <Route path="/update" element={<Update/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>

    </div>
  );
}

export default App;
