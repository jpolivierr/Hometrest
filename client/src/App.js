
import Login from './Pages/login';
import Signup from './Pages/signup';
import About from './Pages/about';
import Home from './Pages/home';
import Listings from './Pages/listings/listings';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TopNav from './components/Navigaion/topNav';
import { getParams, updateParam } from './Util/urlParcer';
import { useEffect, useLayoutEffect, useState } from 'react';
import useReduxMng from './hooks/useReduxMng';
import { useLocation } from 'react-router-dom';
import useRedirectMng from './hooks/useRedirectMng';
import useSessionMng from './hooks/useSessionMng';
import useRequest from './lib/MakeRequest/MakeRequest';
import URL from './Config/urls';
import LoadingEffect from './lib/loadingEffect/loading/loadingEffect';


function App() {

  const {
         activeUserReducer,
         setSearch,
         setUser,
         setToken,
         searchReducer,
        } = useReduxMng()

  const location = useLocation()

  const {pathMng} = useRedirectMng()

  const {validateSession, processTokens, getTokens} = useSessionMng()

  const { makeRequest, formResponse, loading } = useRequest()

  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(()=>{

    const userIsAuthenticated = getTokens("authorizationtoken")

    if(!userIsAuthenticated){

       setIsLoading(false)

    }

  },[])

  useEffect(()=>{

     console.log("Making request")
     const userIsAuthenticated = getTokens("authorizationtoken")
     console.log("token: ", userIsAuthenticated)

     if(userIsAuthenticated){

       makeRequest("GET", URL.GET_ACCOUNT )

     }

  },[])

  useEffect(()=>{

    console.log("App Form response: ", formResponse)

    if(
      formResponse.status === 200 &&
      formResponse.body && 
      formResponse.headers &&
      formResponse.headers.get("authorizationtoken")
      ){
      
        const payload = {
            userInfo : formResponse.body,
            token : formResponse.headers.get("authorizationtoken")
        }
        setUser(payload)
        console.log(formResponse)
        setIsLoading(false)
      }
    
  },[formResponse])


  useEffect(()=>{


  },[activeUserReducer])

  useEffect(()=>{

    
    pathMng(location.pathname)

    validateSession()

  },[location.pathname])

console.log(activeUserReducer)

  useEffect( ()=>{

          if(getParams("search")){

          const listingOptions = getParams("search")

          setSearch(listingOptions)

        }

    },[])

      useEffect(()=>{

        updateParam(searchReducer, true, "search")

    },[searchReducer])


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
          <Route path="/" element={<Home />}/>
        </Routes>

    </div>
  );
}

export default App;
