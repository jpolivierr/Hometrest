
import { useEffect } from "react"
import {urlParcer} from "../Util/urlParcer"
import LoginForm from "../components/Forms/loginForm"
import useRequest from "../lib/MakeRequest/MakeRequest"

const Login = (props) =>{

    const {Class, id} = props

    useEffect(()=>{
        // makeRequest("GET","http://localhost:8080/login")
        // console.log(response)
        urlParcer()
    },[])

    // console.log(response)

    return(
        <div id={id} className={`${Class} light-bk`}>
            
            <div className="container center-content padding-bottom-2x">
                <div style={{}}>

  
                     <LoginForm/>
                </div>
               
          </div>
        </div>
    )
}

export default Login