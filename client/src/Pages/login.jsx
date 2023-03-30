import TopNav from "../components/Navigaion/topNav"
import { useEffect } from "react"
import {urlParcer} from "../Util/urlParcer"
import LoginForm from "../components/Forms/loginForm"
import useRequest from "../lib/MakeRequest/MakeRequest"

const Login = (props) =>{

    const {Class, id} = props
    const {makeRequest, response} = useRequest()

    useEffect(()=>{
        // makeRequest("GET","http://localhost:8080/login")
        // console.log(response)
        urlParcer()
    },[])

    // console.log(response)

    if(response && response.status === 200){
          window.location.href = "/listings"
    }

    

    return(
        <div id={id} className={`${Class} light-bk`}>
            
            <TopNav />
            <div className="container center-content padding-bottom-2x">
                <LoginForm/>
          </div>
        </div>
    )
}

export default Login