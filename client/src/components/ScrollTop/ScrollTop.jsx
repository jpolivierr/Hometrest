import { useEffect } from "react";
import { useLocation } from 'react-router-dom'; // If you're using React Router

const ScrollTop = () =>{

    const location = useLocation();

    useEffect(() => {
          
        window.scrollTo(0, 0);

    }, [location]);



}

export default ScrollTop