
import {urlParcer, updateParam} from "../Util/urlParcer"
import { useEffect } from "react"
import TopSearchForm from "../components/Forms/TopSearchForm"
const About = (props) =>{

    const {Class, id} = props

    useEffect(()=>{
        urlParcer()
    },[])

    const paramObj = {name: "sara",address: "miami"}

    return(
        <div id={id} className={Class}>
          <div className="">
            <TopSearchForm />
          </div>
        </div>
    )
}

export default About