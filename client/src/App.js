
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
import propertiesDemo from "./propertyDemo"

function App() {

  const {
    getUser, 
         activeUser, 
         setSearch,
         searchReducer,
         propertiesReducer,
         setPropertyList
        } = useReduxMng()

      useEffect( ()=>{

          if(getParams("search")){

          const listingOptions = getParams("search")
          setSearch(listingOptions)


        }

    },[])

      useEffect(()=>{

        updateParam(searchReducer, true, "search")

    },[searchReducer])

  useEffect(()=>{

    getUser()
    
  },[])


  useEffect(()=>{

    setPropertyList(propertiesDemo)

  },[])

  return (
    <div className="App">
      <Router>
        <TopNav />
        <Routes>
        <Route path="/signup" element={<Signup activeUser={activeUser}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/listings" element={<Listings/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
