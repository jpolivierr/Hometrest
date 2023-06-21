
import { useEffect, useState } from "react";
import useRequest from "../../lib/MakeRequest/MakeRequest";

const FormLogin = (URL, method) =>{

       const METHOD = !method ? "POST" : method

     const [formError, setFormError] = useState({})

       const [formState, setFormState] = useState({})
       

       const {makeRequest, response, fieldError, serverError, loading} = useRequest()
       

    const updateFormField = (key, value) =>{
         
              const formFieldCopy = {...formState}

              formFieldCopy[key] = value

              setFormState(formFieldCopy)

     }

     useEffect(()=>{

        console.log(serverError)
        if(serverError){
            setFormError({serverError: serverError.message})
        }
        
     },[serverError])


     useEffect(()=>{

        console.log(fieldError)
        if(fieldError){
            setFormError(fieldError.errors)
        }
        
     },[fieldError])


     useEffect(()=>{

        console.log(response)

     },[response])



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
        updateFormField,
        formError,
        loading
    }

}

export default FormLogin