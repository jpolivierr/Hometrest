
import { useEffect } from "react"
import {urlParcer} from "../../Util/urlParcer"
import useRequest from "../../lib/MakeRequest/MakeRequest"
import useReduxMng from "../../hooks/useReduxMng"
import NewUpdateForm from "../../components/Forms/NewUpdateForm"
import ChangePasswordForm from "../../components/Forms/ChangePasswordForm"
import MainButton from "../../components/buton/MainButton"
import LoadingEffect from "../../lib/loadingEffect/loading/loadingEffect"
import useSessionMng from "../../hooks/useSessionMng"
import URL from "../../Config/urls"
import "./style.css"
import { AUTH_TOKENS } from "../../Config/authToken"


const Update = (props) =>{

    const {Class, id} = props

    const {activeUserReducer} = useReduxMng()
    const{makeRequest, formResponse, loading} = useRequest()
    const {deleteStorageData} = useSessionMng(AUTH_TOKENS)
    const userToken = activeUserReducer.token

    useEffect(()=>{
        
        urlParcer()

    },[])

    const submit = (e) =>{

        makeRequest("GET",URL.DELETE_ACCOUNT)

    }

    useEffect(()=>{

        console.log(formResponse)

        if(formResponse.status === 200){

            deleteStorageData()

            window.location.href = "/"

        }

    },[formResponse])


   return(
    
        userToken && 
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
                             clickEvent={submit}
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