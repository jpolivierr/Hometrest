
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
import SpliLayout from './layout/split.layout';


function App() {

  return (
    <>
      <div className="App">  
            <Routes>
              <Route path="/single_property" element={<MainLayout><SingleProperty/></MainLayout>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/about" element={<MainLayout><About/></MainLayout>}/>
              <Route path="/listings" element={<MainLayout><Listings/></MainLayout>}/>
              <Route path="/listings/buy" element={<MainLayout><Listings/></MainLayout>}/>
              <Route path="/listings/rent" element={<MainLayout><Listings/></MainLayout>}/>
              <Route path="/update" element={<MainLayout><Update/></MainLayout>}/>
              <Route path="/" element={<MainLayout><Home /></MainLayout>}/>
              <Route path="/login" element={<SpliLayout><Login/></SpliLayout>}/>
            </Routes>   
      </div>
    </>
     
  );
}

export default App;
