
import { useEffect, useState } from "react";
import useRequest from "../../httpRequest/MakeRequest/MakeRequest";

const FormLogin = (URL, method, formFields) =>{

       const METHOD = !method ? "POST" : method

     const [formError, setFormError] = useState({})


       const [formState, setFormState] = useState(formFields)
       

       const {makeRequest, response, fieldError, serverError, loading, status} = useRequest()

       const clearFormState = () =>{
        console.log("clearing form state")
         setFormState(formFields)
       }
       


    const updateFormField = (key, value) =>{

         
              const formFieldCopy = {...formState}

              formFieldCopy[key] = value

              setFormState(formFieldCopy)

     }

     useEffect(()=>{

        if(status === 200){
            setFormError({})
            clearFormState()
        }

     },[status])



     useEffect(()=>{

        if(serverError){
            console.log(serverError)
            setFormError({serverError: serverError.message})
       
        }

     },[serverError])



     useEffect(()=>{

        if(fieldError){
            console.log(fieldError)
            setFormError(fieldError.errors)
            return
        
        }

     },[fieldError])



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
            await makeRequest(METHOD, URL, formState)
        }
                
}

// console.log(formState)

    return{
        submit,
        status,
        updateFormField,
        formError,
        loading,
        fieldError,
        serverError,
        response,
        formState
    }

}

export default FormLogin