
import Inputs from "../Fields/Inputs"
import TextArea from "../Fields/TextArea";
import MainButton from "../../buton/MainButton";
import LoadingEffect from "../../../lib/loadingEffect/loading/loadingEffect";
import useForm from "../useForm";
import URL from "../../../constants/urls";
import { useEffect, useState } from "react";


const OfferForm = () =>{


    const [formFields, setformFields] = useState({
        fullName : "",
        mobile : "",
        email : "",
        price : "",
        message : ""
    })

    const [success, setSuccess] =useState(null)

    const {
           submit, 
           updateFormField, 
           formError,
           loading,
            formState,
            status
          } = useForm(URL.OFFER,"POST", formFields)



    useEffect(()=>{

        if(status === 200){
            setSuccess(true)
            setformFields({...formFields, 
                            fullName: "",
                            mobile: "",
                            email: "",
                            price: "",
                            message: ""
                        })
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

            <h2>Make an offer</h2>
            <Inputs 
                    label={"Full Name"}
                    name = {"fullName"}  
                    required = {true}
                    formError = {formError}
                    updateFormField = {updateFormField}
                    value={formState.fullName}

                    />

           <Inputs 
                    label={"Mobile Number"}
                    name = {"mobile"}  
                    required = {true}
                    formError = {formError}
                    updateFormField = {updateFormField}
                    value={formState.mobile}

                    />

            <Inputs 
                    label={"Email"}
                    name = {"email"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}
                     value={formState.email}

                    />

              <Inputs 
                    label={"Price amount"}
                    name = {"price"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}
                     value={formState.price}

                    />

            <TextArea 

                label={"Message"}
                name = {"message"}  
                required = {true}
                formError = {formError}
                updateFormField = {updateFormField}
                value={formState.message}
            
            />

                    {success && <div className="success_message">
                             Your information was received.
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

export default OfferForm