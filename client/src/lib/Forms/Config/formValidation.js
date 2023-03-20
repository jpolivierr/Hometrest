export const validateFields = (formFields,formError,fields,setFormError) =>{
         
    const formErrorCopy = {...formError}

    fields.forEach((field)=>{

           const fieldData = formFields[field.name]
          
            if(field.onSubmitFunc && field.name){
                 
                const func = field.onSubmitFunc
                
                for(let i = 0; i < func.length; i++){
                  
                   const call = func[i]
                  
                   const funcResult = call(field.name, fieldData)

                   if(funcResult){
                
                      formErrorCopy[field.name] = funcResult
                      break

                   }else{
                      formErrorCopy[field.name] = false

                   }

                }
            }

    })

    console.log(formErrorCopy)
    setFormError(formErrorCopy)

 }