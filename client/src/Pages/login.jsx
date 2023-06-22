
import { useEffect, useLayoutEffect } from "react"
import {urlParcer} from "../Util/urlParcer"
import useRequest from "../lib/MakeRequest/MakeRequest"
import useReduxMng from "../hooks/useReduxMng"
import TopNav from "../components/navBar/topNav"
import NewLoginForm from "../components/Forms/NewLoginForm"
import LoginForm from "../components/Form/login/Login.view"

const Login = (props) =>{

    const {Class, id} = props

    const {activeUserReducer} = useReduxMng()
    const userToken = activeUserReducer.token

    useEffect(()=>{
        
        urlParcer()
    },[])

    // console.log(response)

   return(
    
        !userToken && 
        <>
            <div id={id} className={`${Class} light-bk`}>
                
                <div className="container center-content padding-bottom-2x">
                    <div style={{}}>
                        <LoginForm/>
                    </div>
                
            </div>
            </div>
        </>
          
    )
}

export default Login