import { useEffect } from "react"
import {urlParcer} from "../Util/urlParcer"
import SignupForm from "../components/Forms/signupForm"

const Signup = (props) =>{

    const {Class, id} = props

    useEffect(()=>{
        urlParcer()
    },[])

    useEffect(()=>{
 
    },[])

    

    return(
        <div id={id} className={`${Class} light-bk`}>
            
            <div className="container center-content padding-bottom-2x">
                <SignupForm/>
          </div>
        </div>
    )
}

export default Signup