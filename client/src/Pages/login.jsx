
import { useEffect, useLayoutEffect } from "react"
import {urlParcer} from "../Util/urlParcer"
import LoginForm from "../components/Forms/loginForm"
import useRequest from "../lib/MakeRequest/MakeRequest"
import useReduxMng from "../hooks/useReduxMng"
import TopNav from "../components/Navigaion/topNav"
import NewLoginForm from "../components/Forms/NewLoginForm"

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
                        <NewLoginForm 
                           elementClass="avalon text-left av-shadow"
                        />
                    </div>
                
            </div>
            </div>
        </>
          
    )
}

export default Login