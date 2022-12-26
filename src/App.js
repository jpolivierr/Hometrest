import './App.css';
import './Animation.css'
import './responsive.css'
import HomeSearch from './components/Pages/HomeSearch';
import SingleHome from './components/Pages/SingleHome';
import Modals from './components/Modal/Modals'
import { Route, Routes} from 'react-router-dom'


function App() {
   return (
            <div>
               <Routes>
                    <Route path="/" element={<HomeSearch />} />
                    <Route path="/search" element={<HomeSearch />} />
                    <Route path="property" element={<SingleHome />}/>
               </Routes>
               <Modals />
            </div>
  );
}

export default App;
