
import Inputs from "../Fields/Inputs"
import MainButton from "../../buton/MainButton";
import LoadingEffect from "../../../lib/loadingEffect/loading/loadingEffect";
import useForm from "../useForm";
import URL from "../../../constants/urls";
import { useContext } from "react";
import UserContext from "../../userContext/UserState";


const Update = () =>{

    const {submit, updateFormField, formError, loading} = useForm(URL.SIGNUP,"PUT")

    const {activeUser} = useContext(UserContext)

    const {firstName, lastName, email} = activeUser


    return(

        <form style={{margin: "auto"}}
           className="avalon text-left padding-top-bottom-2x padding-top-2x" 
           onSubmit={e => submit(e)}>

                {formError.serverError && 
                    <p className="server-error">{formError.serverError}</p>
                    }

            <Inputs 
                    label={"First Name"}
                    name = {"firstName"}  
                    required = {true}
                    formError = {formError}
                    updateFormField = {updateFormField}
                    defaultValue = {firstName}

                    />

            <Inputs 
                    label={"Last Name"}
                    name = {"lastName"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}
                     defaultValue = {lastName}

                    />

            <Inputs 
                    label={"Email"}
                    name = {"email"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}
                     defaultValue = {email}

                    />


            <MainButton 
                      label="Update"
                      Class=" button main-btn"
                      type="submit"
                       loadingEffect={<LoadingEffect 
                        isShowing = {loading} 
                        elementClass="av-loading"
                        type="ring"
                        />}
                  />
                    
        
        </form>

    )

}

export default Update