
import Login from './Pages/login';
import Signup from './Pages/signup';
import About from './Pages/about';
import Home from './Pages/home';
import Listings from './Pages/listings/listings';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TopNav from './components/Navigaion/topNav';
import { getParams, updateParam } from './Util/urlParcer';
import { useEffect } from 'react';
import useReduxMng from './hooks/useReduxMng';
import { useLocation } from 'react-router-dom';
import useRedirectMng from './hooks/useRedirectMng';
import useSessionMng from './hooks/useSessionMng';
import useRequest from './lib/MakeRequest/MakeRequest';
import URL from './Config/urls';


function App() {

  const {
         activeUserReducer,
         setSearch,
         searchReducer,
        } = useReduxMng()

  const location = useLocation()

  const {pathMng} = useRedirectMng()

  const {validateSession, processTokens, getTokens} = useSessionMng()

  const { makeRequest, formResponse } = useRequest()

  useEffect(()=>{

    // validateSession()
    // processTokens()
    

    const userIsAuthenticated = getTokens("authorizationtoken")

    if(userIsAuthenticated){

      makeRequest("GET", URL.GET_ACCOUNT )
      
    }

    if(
      formResponse.status === 200
      ){
        console.log(formResponse)
        console.log(formResponse.headers)
        console.log("Authent at the bottom")
        console.log(formResponse.headers.get("authorizationtoken"))
      }


  },[formResponse])


  useEffect(()=>{


  },[activeUserReducer])

  useEffect(()=>{

    
    pathMng(location.pathname)

    validateSession()

  },[location.pathname])



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
