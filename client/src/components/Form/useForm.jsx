
import { useEffect, useState } from "react";
import useRequest from "../../lib/MakeRequest/MakeRequest";

const FormLogin = (URL, method) =>{

       const METHOD = !method ? "POST" : method

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
                case 201 :
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
            await makeRequest(METHOD, URL, formState)
            
        }
                
}

// console.log(formState)

    return{
        submit,
        updateFormField,
        formError,
        loading
    }

}

export default FormLogin