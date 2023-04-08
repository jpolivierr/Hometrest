
import Login from './Pages/login';
import Signup from './Pages/signup';
import About from './Pages/about';
import Home from './Pages/home';
import Listings from './Pages/listings';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TopNav from './components/Navigaion/topNav';

import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import {getUserAction} from "./_state/actions"
import { useEffect } from 'react';
import useReduxMng from './hooks/useReduxMng';

function App() {

  const {getUser, activeUser} = useReduxMng()

  useEffect(()=>{
    getUser()
    console.log("render..")
  },[])

  console.log(activeUser)

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
