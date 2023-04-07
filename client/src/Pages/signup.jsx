import TopNav from "../components/Navigaion/topNav"
import { useEffect } from "react"
import {urlParcer} from "../Util/urlParcer"
import SignupForm from "../components/Forms/signupForm"

const Signup = (props) =>{

    const {Class, id} = props

    useEffect(()=>{
        urlParcer()
    },[])

    

    return(
        <div id={id} className={`${Class} light-bk`}>
            
            <TopNav />
            <div className="container center-content padding-bottom-2x">
                <SignupForm/>
          </div>
        </div>
    )
}

export default Signup