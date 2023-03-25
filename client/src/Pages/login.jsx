import TopNav from "../components/Navigaion/topNav"
import { useEffect } from "react"
import {urlParcer} from "../Util/urlParcer"
import LoginForm from "../components/Forms/loginForm"

const Login = (props) =>{

    const {Class, id} = props

    useEffect(()=>{
        urlParcer()
    },[])

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