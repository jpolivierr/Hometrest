
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

function App() {

  const {
         setSearch,
         searchReducer,
        } = useReduxMng()

  const location = useLocation()

  const {pathMng} = useRedirectMng()

  useEffect(()=>{

    pathMng(location.pathname)

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
