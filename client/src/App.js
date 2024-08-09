
import Login from './Pages/login';
import Signup from './Pages/signup';
import About from './Pages/about';
import SingleProperty from './Pages/SingleProperty';
import Home from './Pages/home';
import Listings from './Pages/listings';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MainLayout from './layout/main.layout';
import SpliLayout from './layout/split.layout';
import useLoadMapScript from './components/map/useLoadMapScript';


function App() {

  useLoadMapScript()

  return (
    <>
      <div className="App">  
            <Routes>
              <Route path="/signup" element={<SpliLayout><Signup/></SpliLayout>}/>
              <Route path="/login" element={<SpliLayout><Login/></SpliLayout>}/>
              <Route path="/single_property" element={<MainLayout><SingleProperty/></MainLayout>}/>
              <Route path="/about" element={<MainLayout><About/></MainLayout>}/>
              <Route path="/listings" element={<MainLayout><Listings/></MainLayout>}/>
              <Route path="/listings/buy" element={<MainLayout><Listings/></MainLayout>}/>
              <Route path="/listings/rent" element={<MainLayout><Listings/></MainLayout>}/>
              <Route path="/" element={<MainLayout><Home /></MainLayout>}/>
            </Routes>   
      </div>
    </>
     
  );
}

export default App;
