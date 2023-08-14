import { useEffect } from "react";

const ScrollTop = () =>{

    useEffect(() => {
          
        window.scrollTo(0, 0);

    }, []);



}

export default ScrollTop