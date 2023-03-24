import TopNav from "../components/Navigaion/topNav"
import { useEffect } from "react"
import {urlParcer} from "../Util/urlParcer"

const Login = (props) =>{

    const {Class, id} = props

    useEffect(()=>{
        urlParcer()
    },[])

    return(
        <div id={id} className={Class}>
            <TopNav />
            <div className="container">
                <h1>Login</h1>
          </div>
        </div>
    )
}

export default Login