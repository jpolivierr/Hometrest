
import Login from './Pages/login';
import Signup from './Pages/signup';
import Update from './Pages/update/update';
import About from './Pages/about';
import SingleProperty from './Pages/singleProperty/SingleProperty';
import Home from './Pages/home/home';
import Listings from './Pages/listings/listings';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoadingEffect from './lib/loadingEffect/loading/loadingEffect';
import UserRequest from './httpRequest/userRequest/userRequest';
import MainLayout from './layout/main.layout';


function App() {

  const {loading} = UserRequest()

  return (
    <>
        {
        loading ? <LoadingEffect isShowing = {loading} elementClass="basic-loading" type="ring"/> : 
      <div className="App">
        <MainLayout>
          <Routes>
          <Route path="/single_property" element={<SingleProperty/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/listings" element={<Listings/>}/>
          <Route path="/listings/buy" element={<Listings/>}/>
          <Route path="/listings/rent" element={<Listings/>}/>
          <Route path="/update" element={<Update/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
       </MainLayout>
      </div>
    }

    </>
     
  );
}

export default App;
