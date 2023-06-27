
import Inputs from "../../lib/Forms/Fields/Inputs"
import { useEffect, useState } from "react";
import MainButton from "../buton/MainButton";
import URL from "../../constant/urls";
import useRequest from "../../lib/MakeRequest/MakeRequest";
import errorFromServer from "./FormUtil/serverError";
import useSessionMng from "../../hooks/useSessionMng";
import LoadingEffect from "../../lib/loadingEffect/loading/loadingEffect";
import { USER_AUTH_TOKEN } from "../../constant/authToken";


const NewLoginForm = (props) =>{

    const{elementClass} = props


       const [formError, setFormError] = useState({})

       const [formState, setFormState] = useState({})

       const {makeRequest, formResponse, loading, status} = useRequest()

       

    const updateFormField = (key, value) =>{
         
              const formFieldCopy = {...formState}

              formFieldCopy[key] = value

              setFormState(formFieldCopy)

     }

     useEffect(()=>{

        console.log(formResponse)
        console.log(status)

        switch(status){
                case null :
                     break;
                case 204 :
                case 409 :
                    window.location.href = "/"
                    break
                case 401 :
                    setFormError({serverError: formResponse.message})
                    break
                case 400 :
                    setFormError(formResponse.errors)
                    break
                case 500 :
                    setFormError({serverError: "Something went wrong on our end. Please try again later."})
                    break
                default :
                    setFormError({serverError: "Something went wrong on our end. Please try again later."})

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
            
            console.log(formState);
             await makeRequest("POST", URL.LOGIN, formState)
    
            
        }
                
}

// console.log(formState)

    return(

        <form style={{margin: "auto"}}
           className={elementClass}
           onSubmit={e => submit(e)}>

                {formError.serverError && 
                    <p className="server-error">{formError.serverError}</p>
                    }

            <h2>Log in</h2>
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

export default NewLoginForm