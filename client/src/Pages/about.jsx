
import {urlParcer} from "../Util/urlParcer"
import { useEffect } from "react"
import SimilarProperties from "../components/SimilarProperties/SimilarProperties"

const About = (props) =>{

    const {Class, id} = props

    useEffect(()=>{
        urlParcer()
    },[])

    const paramObj = {name: "sara",address: "miami"}

    return(
        <div id={id} className={Class}>
          <div className="container">

          {<SimilarProperties />}
            {/* <TopSearchFilter /> */}
            {/* <TopSearchForm /> */}
            
          </div>
        </div>
    )
}

export default About