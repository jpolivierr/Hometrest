
import { useEffect, useContext } from "react"
import useRequest from "../../lib/MakeRequest/MakeRequest"
import ChangePasswordForm from "../../components/Forms/ChangePasswordForm"
import MainButton from "../../components/buton/MainButton"
import LoadingEffect from "../../lib/loadingEffect/loading/loadingEffect"
import URL from "../../Config/urls"
import UserContext from "../../components/userState/UserState"
import UpdateForm from "../../components/Form/update/update.view"
import useSessionMng from "../../hooks/useSessionMng"
import "./style.css"


const Update = (props) =>{

    const {Class, id} = props

    const{makeRequest, formResponse, loading, status} = useRequest()

    const {activeUser, logout} = useContext(UserContext)

    const submit = () =>{
              
        makeRequest("DELETE",URL.DELETE_ACCOUNT)

    }

    useEffect(()=>{

        console.log(formResponse)

        if(status === 204){
            
            logout()
             window.location.href = "/"

        }

    },[formResponse])


   return(
    
    activeUser.id && 
        <>
            <div id={id} className={`${Class}`}>
                
                <div className="container center-content padding-bottom-2x">
                    <div style={{}} className="update-page">
                        <h2>Profile Detail</h2>
                        {/* <NewUpdateForm /> */}
                        <UpdateForm />
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