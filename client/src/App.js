
import Login from './Pages/login';
import Signup from './Pages/signup';
import Update from './Pages/update/update';
import About from './Pages/about';
import SingleProperty from './Pages/singleProperty/SingleProperty';
import Home from './Pages/home';
import Listings from './Pages/listings/listings';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TopNav from './components/navBar/topNav';
import LoadingEffect from './lib/loadingEffect/loading/loadingEffect';
import UserRequest from './httpRequest/userRequest/userRequest';


function App() {

  const {loading} = UserRequest()




  return (
    <>
        {
        loading ? <LoadingEffect 
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
    }

    </>
     
  );
}

export default App;
