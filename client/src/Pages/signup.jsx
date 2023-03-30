import TopNav from "../components/Navigaion/topNav"
import { useEffect } from "react"
import {urlParcer} from "../Util/urlParcer"
import SignupForm from "../components/Forms/signupForm"
import useRequest from "../lib/MakeRequest/MakeRequest"

const Signup = (props) =>{

    const {Class, id} = props
    const {makeRequest, response} = useRequest()

    useEffect(()=>{
        // makeRequest("GET","http://localhost:8080/login")
        // console.log(response)
        urlParcer()
    },[])

    // console.log(response)
    

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