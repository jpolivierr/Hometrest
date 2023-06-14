import { useEffect } from "react"
import {urlParcer} from "../Util/urlParcer"
// import SignupForm from "../components/Forms/signupForm"
import useReduxMng from "../hooks/useReduxMng"
import NewSignUpForm from "../components/Forms/NewSignupForm"
import SignupForm from "../components/Form/signup/Signup.view"


const Signup = (props) =>{

    const {Class, id} = props

    const {activeUserReducer} = useReduxMng()

    const userToken = activeUserReducer.token

    useEffect(()=>{

        urlParcer()

    },[])



    return(
    
        // !userToken && 
        <>
            <div id={id} className={`${Class} light-bk`}>
                
                <div className="container center-content padding-bottom-2x">
                    <div style={{}}>
                    {/* <SignupForm/> */}
                    <SignupForm />
                    </div>
                
            </div>
            </div>
        </>
          
    )
    
}

export default Signup