
import Inputs from "../Fields/Inputs"
import MainButton from "../../buton/MainButton";
import LoadingEffect from "../../../lib/loadingEffect/loading/loadingEffect";
import useForm from "../useForm";
import URL from "../../../constants/urls";
import { useEffect, useState } from "react";


const ScheduleTourForm = () =>{

    const [formFields, setformFields] = useState({
        firstName : "",
        lastName : "",
        email : ""
    })

    const [success, setSuccess] =useState(null)

    const {
           submit, 
           updateFormField, 
           formError,
           loading,
            formState,
            status
          } = useForm(URL.SCHEDULE_TOUR,"POST", formFields)


    useEffect(()=>{

        if(status === 200){
            setSuccess(true)
            setformFields({...formFields, firstName: "", lastName: "", email: ""})
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }


    },[status])


    return(

        <form style={{margin: "auto"}}
           className={`signup_form`} 
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
                    value={formState.firstName}

                    />

            <Inputs 
                    label={"Last Name"}
                    name = {"lastName"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}
                     value={formState.lastName}

                    />

            <Inputs 
                    label={"Email"}
                    name = {"email"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}
                     value={formState.email}

                    />

                    {success && <div className="success_message">
                             Thank You, I will reach out to confirm the appointment
                        </div>}


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

export default ScheduleTourForm