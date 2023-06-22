
import { useContext } from "react"
import ChangePasswordForm from "../../components/Forms/ChangePasswordForm"
import MainButton from "../../components/buton/MainButton"
import LoadingEffect from "../../lib/loadingEffect/loading/loadingEffect"
import UserContext from "../../components/userContext/UserState"
import UpdateForm from "../../components/Form/update/update.view"
import "./style.css"


const Update = (props) =>{

    const {Class, id} = props

    const {activeUser, deleteAccount, loading} = useContext(UserContext)


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
                             clickEvent={deleteAccount}
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