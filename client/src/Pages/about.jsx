import TopNav from "../components/Navigaion/topNav"
import {urlParcer, updateParam} from "../Util/urlParcer"
import { useEffect } from "react"
const About = (props) =>{

    const {Class, id} = props

    useEffect(()=>{
        urlParcer()
    },[])

    const paramObj = {name: "sara"}

    return(
        <div id={id} className={Class}>
          <TopNav />
          <div className="container">
            <h1>About</h1>

            <button onClick={(e)=>{updateParam(paramObj)}}>
                update param
            </button>
          </div>
        </div>
    )
}

export default About