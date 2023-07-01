
import Inputs from "../../lib/Forms/Fields/Inputs"
import MultiSelect from "../../lib/Forms/Fields/MultiSelect";
import useReduxMng from "../../hooks/useReduxMng";
import Range from "../../lib/Forms/Fields/range";
import RangeNoDropDown from "../../lib/Forms/Fields/rangeNoDropDown";
import ListOption from "../../lib/Forms/Fields/ListOption";
import { useEffect, useState } from "react";
import { deepSearch } from "../../Util/getValueByKey";
import { getParams } from "../../Util/urlParcer";
import useModal from "../../lib/Modal/useModal";
import MainButton from "../buton/MainButton";
import { matchPassword } from "../../lib/Forms/Util/matchPassword";
import URL from "../../constants/urls";
import useRequest from "../../httpRequest/MakeRequest/MakeRequest";
import { capitalizeFirstLetter } from "../propertyCard/util";
import errorFromServer from "./FormUtil/serverError";
import useSessionMng from "../../hooks/useSessionMng";
import LoadingEffect from "../../lib/loadingEffect/loading/loadingEffect";
import { USER_AUTH_TOKEN } from "../../constants/authToken";


const ChangePasswordForm = () =>{


       const [formError, setFormError] = useState({})

       const [formState, setFormState] = useState({})

    const updateFormField = (key, value) =>{
         
              const formFieldCopy = {...formState}

              formFieldCopy[key] = value

              setFormState(formFieldCopy)

     }


     const submit = async (e) =>{

         e.preventDefault()
         
                
}



    return(

        <form style={{margin: "auto"}}
           className="avalon text-left padding-top-bottom-2x padding-top-2x" 
           onSubmit={e => submit(e)}>

                {formError.serverError && 
                    <p className="server-error">{formError.serverError}</p>
                    }

            <Inputs 
                    label={"Old password"}
                    name = {"password"}
                    required = {true}
                    formError = {formError}
                    updateFormField = {updateFormField}

                    />

            <Inputs 
                    label={"New password"}
                    name = {"password2"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}

                    />

            <Inputs 
                    label={"Re-enter password"}
                    name = {"password3"}  
                    required = {true}
                    formError = {formError}
                    updateFormField = {updateFormField}
                    />

            <MainButton 
                      label="Change password"
                      Class=" button main-btn"
                      type="submit"
                       loadingEffect={<LoadingEffect 
                        // isShowing = {loading} 
                        elementClass="av-loading"
                        type="ring"
                        />}
                  />
                    
        
        </form>

    )

}

export default ChangePasswordForm