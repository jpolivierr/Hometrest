
import Login from './Pages/login';
import Signup from './Pages/signup';
import Update from './Pages/update/update';
import About from './Pages/about';
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
import { AUTH_TOKENS } from './Config/authToken';


function App() {

  const {
        clientActivityReducer,
         activeUserReducer,
         setSearch,
         setAuthentication,
         setToken,
         searchReducer,
        } = useReduxMng()


        // console.log(clientActivityReducer)

     

  const location = useLocation()

  const {pathMng} = useRedirectMng()

  const { getTokens, setActivityTimer, deleteStorageData} = useSessionMng(AUTH_TOKENS)

  const { makeRequest, formResponse, loading } = useRequest()

  const [isLoading, setIsLoading] = useState(true)

  //  const {setActivityTimer} = useInactivityTimer(10, deleteStorageData);

   const userIsAuthenticated = getTokens(AUTH_TOKENS)

       useEffect(()=>{
    
      pathMng(location.pathname)
  
    },[location.pathname])

  useLayoutEffect(()=>{

    if(!userIsAuthenticated){

       setIsLoading(false)

    }

  },[])


   setActivityTimer()

  useEffect(()=>{

     console.log("Making request")


     if(userIsAuthenticated){

        makeRequest("GET", URL.GET_ACCOUNT )

     }

  },[])

  useEffect(()=>{

    if(
      formResponse.status === 200 &&
      formResponse.body && 
      formResponse.headers &&
      formResponse.headers.get(AUTH_TOKENS)
      ){
      
        const payload = {
            userInfo : formResponse.body,
            token : formResponse.headers.get(AUTH_TOKENS)
        }
        setAuthentication(payload)
        console.log(formResponse)
        setIsLoading(false)
        return
      }

      if(formResponse.status === 403){

        deleteStorageData()

      }
     
    
  },[formResponse])



  return (
            isLoading ? <LoadingEffect 
              isShowing = {loading} 
              elementClass="basic-loading"
              type="ring"/> : 
              <div className="App">
  
        <TopNav />
        <Routes>
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
