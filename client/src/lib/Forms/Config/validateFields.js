import { matchPassword } from "../Util/matchPassword"
import { getFormFields } from "./getFormFields"

export const validateFields = (formFields, fields) =>{

     const formError =  getFormFields(fields).errors  
         
    const formErrorCopy = {...formError}

    formErrorCopy.errors = false

    fields.forEach((field)=>{

           const fieldData = formFields[field.name]
          
            if(field.onSubmitFunc && field.name){
                 
                const func = field.onSubmitFunc
                
                for(let i = 0; i < func.length; i++){
                  
                   const call = func[i]
                  
                   const funcResult = call(field.name, fieldData)

                   if(funcResult){
                
                      formErrorCopy[field.name] = funcResult
                      formErrorCopy.errors = true
                      break

                   }else{
                      formErrorCopy[field.name] = false
                   }

                }
            }

            //match condition
            if(field.match && (field.match in formFields)){

                const pwd1 = formFields[field.match]
                const pwd2 = formFields[field.name]
                
                if(matchPassword(pwd1,pwd2)){
                   formErrorCopy[field.name] = matchPassword(pwd1,pwd2)
                   formErrorCopy.errors = true
                }else{
                   formErrorCopy[field.name] = false
                }
                
            }

    })

    return formErrorCopy

 }
