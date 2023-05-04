
import { useEffect, useLayoutEffect } from "react"
import {urlParcer} from "../../Util/urlParcer"
import LoginForm from "../../components/Forms/loginForm"
import useRequest from "../../lib/MakeRequest/MakeRequest"
import useReduxMng from "../../hooks/useReduxMng"
import TopNav from "../../components/Navigaion/topNav"
import NewUpdateForm from "../../components/Forms/NewUpdateForm"
import ChangePasswordForm from "../../components/Forms/ChangePasswordForm"
import MainButton from "../../components/buton/MainButton"
import LoadingEffect from "../../lib/loadingEffect/loading/loadingEffect"
import "./style.css"



const Update = (props) =>{

    const {Class, id} = props

    const {activeUserReducer} = useReduxMng()
    const{loading} = useRequest()
    const userToken = activeUserReducer.token

    useEffect(()=>{
        
        urlParcer()

    },[])

    // console.log(response)

   return(
    
        !userToken && 
        <>
            <div id={id} className={`${Class}`}>
                
                <div className="container center-content padding-bottom-2x">
                    <div style={{}} className="update-page">
                        <h2>Profile Detail</h2>
                        <NewUpdateForm />
                        <h2>Password <span className="w-msg">(Not available at this time)</span></h2>
                        <ChangePasswordForm />
                        <h2>My account</h2>
                        <div className="padding-top">
                             <MainButton 
                      label="Delete account"
                      Class=" button "
                      type="submit"
                       loadingEffect={<LoadingEffect 
                        isShowing = {loading} 
                        elementClass="av-loading"
                        type="ring"
                        />}
                  />
                        </div>
                       
                    </div>
                
            </div>
            </div>
        </>
          
    )
}

export default Update