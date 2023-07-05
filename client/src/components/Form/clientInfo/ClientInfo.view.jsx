
import Inputs from "../Fields/Inputs"
import MainButton from "../../buton/MainButton";
import LoadingEffect from "../../../lib/loadingEffect/loading/loadingEffect";
import useForm from "../useForm";
import URL from "../../../constants/urls";
import "./ClientInfo.style.css"
import { useState } from "react";


const ClientInfo= () =>{

    const {submit, updateFormField, formError, loading} = useForm(URL.SIGNUP)

    const [errorClass, setErrorClass] = useState("")

    useState(()=>{
        console.log(formError)
        if(Object.keys(formError).length > 0){
                setErrorClass("form_error")
                return
        }

        setErrorClass("")
    },[formError])

// console.log(formState)



    return(

        <form style={{margin: "auto"}}
           className={`signup_form ${Object.keys(formError).length > 0 && "form_error"}`} 
           onSubmit={e => submit(e)}>

                {formError.serverError && 
                    <p className="server-error">{formError.serverError}</p>
                    }

            <h2>Schedule a Tour</h2>
            <Inputs 
                    label={"First Name"}
                    name = {"firstName"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}

                    />

            <Inputs 
                    label={"Last Name"}
                    name = {"lastName"}  
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

export default ClientInfo