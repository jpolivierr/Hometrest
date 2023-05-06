
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
import URL from "../../Config/urls";
import useRequest from "../../lib/MakeRequest/MakeRequest";
import { capitalizeFirstLetter } from "../propertyCard/util";
import errorFromServer from "./FormUtil/serverError";
import useSessionMng from "../../hooks/useSessionMng";
import LoadingEffect from "../../lib/loadingEffect/loading/loadingEffect";
import { AUTH_TOKENS } from "../../Config/authToken";


const NewSignUpForm = () =>{


       const [formError, setFormError] = useState({})

       const [formState, setFormState] = useState({})

       const {makeRequest, formResponse, loading} = useRequest()

       const {startSession} = useSessionMng(AUTH_TOKENS)
       

    const updateFormField = (key, value) =>{
         
              const formFieldCopy = {...formState}

              formFieldCopy[key] = value

              setFormState(formFieldCopy)

     }

     useEffect(()=>{

        const serverError = errorFromServer(formResponse, formError)

        if(serverError){

            setFormError(serverError)

        }else{

            setFormError({})

        }

     },[formResponse])

     useEffect(()=>{

      
        const session = startSession(formResponse)
  
        if(session){
  
            window.location.pathname = "/"
          
        }else{
  
          console.log("Incorrect response..")
  
        }
  
      },[formResponse])


    const validateFields = () =>{

        const formErrorCopy = {...formError}

        formErrorCopy.errors = false

        setFormError(formErrorCopy)

        return formErrorCopy

     }

     const submit = async (e) =>{

        e.preventDefault()
         
        if(validateFields().errors){

            console.log("error found")

        }else{

             console.log("Submit")
            
            const data = formState
            console.log(data);
            await makeRequest("POST", URL.SIGNUP, data)
            
        }
                
}

// console.log(formState)

    return(

        <form style={{margin: "auto"}}
           className="avalon text-left av-shadow" 
           onSubmit={e => submit(e)}>

                {formError.serverError && 
                    <p className="server-error">{formError.serverError}</p>
                    }

            <h2>Search Form</h2>
            <Inputs 
                    label={"First Name"}
                    // placeHolder={"Enter city or zip"}
                    name = {"first_name"}
                //  onChangefunc = {field.onChangefunc}
                    //  onOutFocus = {updateCityorZip}
                    // fieldToUpdate = {updateCityorZip}   
                    required = {true}
                    formError = {formError}
                    //  setFormError = {setFormError}
                     updateFormField = {updateFormField}

                    />

            <Inputs 
                    label={"Last Name"}
                    name = {"last_name"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}

                    />

            <Inputs 
                    label={"Email"}
                    name = {"email"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}

                    />

            <Inputs 
                    label={"Password"}
                    name = {"password"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}
                    />

            <Inputs 
                    label={"Re-enter Password"}
                    name = {"password2"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}
                    />

            <MainButton 
                      label="Submit"
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

export default NewSignUpForm