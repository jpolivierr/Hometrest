import { useEffect } from "react"

import {urlParcer} from "../Util/urlParcer"

const Home = (props) =>{

    const {Class, id} = props

    useEffect(()=>{
        urlParcer()
    },[])

    return(
        <div id={id} className={Class}>
          <div className="container">
            <h1>Home</h1>
          </div>
          
        </div>
        
    )
}

export default Home