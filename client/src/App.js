
import Login from './Pages/login';
import Home from './Pages/home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<Login/>}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
