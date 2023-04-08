import { useEffect } from "react"
import {urlParcer} from "../Util/urlParcer"
import SignupForm from "../components/Forms/signupForm"

const Signup = (props) =>{

    const {Class, id, activeUser} = props

    useEffect(()=>{
        urlParcer()
    },[])

    useEffect(()=>{
        console.log("render sign up ...")
        console.log(activeUser)
    },[activeUser])

    

    return(
        <div id={id} className={`${Class} light-bk`}>
            
            <div className="container center-content padding-bottom-2x">
                <SignupForm/>
          </div>
        </div>
    )
}

export default Signup