import Inputs from "./Fields/Inputs";
import Options from "./Fields/Options";
import fieldTypes from "./VARS/fieldType";
import MultiSelect from "./Fields/MultiSelect";
import ListOption from "./Fields/ListOption";
import Comp from "./Fields/comp";
import { myFormFieds } from "./Config/getFields";
import { capitalizeFirstLetter } from "./Util/capitalizeFirstLetter";
import { matchPassword } from "./Util/matchPassword";
import { validateFields } from "./Config/formValidation";
import "./style/avalon.css"

import useFormSubmit from "./Request/request";
//Action
import { useEffect, useState } from "react";


const useForm = (formSettings) =>{

    const [settings] = useState(formSettings)

     const {fields,config, info, button} = settings

      const {makeRequest, formResponse} = useFormSubmit()
      const [submitStatus] = useState(false)
      const [formError, setFormError] = useState(myFormFieds(fields).errors)
      const [formFields, setFormFields] = useState(myFormFieds(fields).fields)
      const [loading, setLoading] = useState(false)

      useEffect(()=>{

         errorFromServer(formResponse)

      },[formResponse])

      
      const errorFromServer = (response) =>{
          
         if(response){

            if(response.status === 409){

               const formErrorCopy = {...formError}
               const responseBody = response.body
               console.log(responseBody)

               if(responseBody.serverError){
                  formErrorCopy.serverError = responseBody.serverError
               }

               for(const key in formErrorCopy){

                  if(responseBody[key]){
                     formErrorCopy[key] = capitalizeFirstLetter(responseBody[key]).replace("_"," ")
                  }else{
                     formErrorCopy[key] = false
                  }
  
               }
                setFormError(formErrorCopy)
            }else{
               clearFormError()
            }
         }
      }

      const clearFormError = () =>{

         const formErrorCopy = {...formError}

         for(const key in formErrorCopy){
            formErrorCopy[key] = false;
         }

         setFormError(formErrorCopy)
      }


      const updateError = (key, value) =>{

         if((key in formError)){
               
               const formErrorCopy = {...formError}

               formErrorCopy[key] = value

               setFormError(formErrorCopy)
         }

      }

      const updateFormField = (key, value) =>{

         
         if((key in formFields)){

               const formFieldCopy = {...formFields}

               formFieldCopy[key] = value

               setFormFields(formFieldCopy)
         }
      }


      const validateFields = () =>{

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

         setFormError(formErrorCopy)

         return formErrorCopy

      }

      const submit = async (e) =>{

                       e.preventDefault()
                        
                       if(validateFields().errors){
                           console.log("error found")

                       }else{
                            console.log("Submit")
                           setLoading(true)
                           
                           console.log(formFields);
                           await makeRequest(config.method, config.url, formFields)
                           // setLoading(false)
                           
                           
                       }
                               
      }

      const getFields = (field,index) =>{
         
                     switch(field.type){
                        
                        case fieldTypes.INPUT :
                              return (
                                    <Inputs 
                                       key={index}
                                       label={field.label}
                                       placeHolder={field.placeHolder}
                                       name = {field.name}
                                       onChangefunc = {field.onChangefunc}
                                       onOutFocus = {field.onOutFocus}
                                       fieldToUpdate = {field.fieldToUpdate}
                                       formStatus={submitStatus}
                                       required = {field.required}
                                       formError = {formError}
                                       setFormError = {setFormError}
                                       icon = {field.icon}
                                       updateFormField = {updateFormField}
                                       updateError = {updateError}
                                       defaultValue = {field.defaultValue}
                                    />
                              )
                        case fieldTypes.PWD :
                              return (
                                    <Inputs 
                                       type={fieldTypes.PWD}
                                       key={index}
                                       label={field.label}
                                       placeHolder={field.placeHolder}
                                       name = {field.name}
                                       onChangefunc = {field.onChangefunc}
                                       onOutFocus = {field.onOutFocus}
                                       fieldToUpdate = {field.fieldToUpdate}
                                       formStatus={submitStatus}
                                       required = {field.required}
                                       formError = {formError}
                                       setFormError = {setFormError}
                                       icon = {field.icon}
                                       updateFormField = {updateFormField}
                                       updateError = {updateError}
                                       defaultValue = {field.defaultValue}
                                    />
                              )
                        case fieldTypes.OPTIONS :
                           return (
                                 <Options 
                                    key={index}
                                    label={field.label}
                                    placeHolder={field.placeHolder}
                                    name = {field.name}
                                    onChangefunc = {field.onChangefunc}
                                    fieldToUpdate = {field.fieldToUpdate}
                                    formStatus={submitStatus}
                                    required = {field.required}
                                    formError = {formError}
                                    setFormError = {setFormError}
                                    icon = {field.icon}
                                    list = {field.list}
                                    // handleClick = {handleOptions}
                                    updateFormField = {updateFormField}
                                    updateError = {updateError}
                                    defaultValue = {field.defaultValue}
                                    listPreventExit = {field.listPreventExit}
                                 />
                           )

                        case fieldTypes.MULTISELECT :
                           return (
                              <MultiSelect 
                                 key={index}
                                 label={field.label}
                                 placeHolder={field.placeHolder}
                                 name = {field.name}
                                 onChangefunc = {field.onChangefunc}
                                 fieldToUpdate = {field.fieldToUpdate}
                                 formStatus={submitStatus}
                                 required = {field.required}
                                 formError = {formError}
                                 setFormError = {setFormError}
                                 icon = {field.icon}
                                 list = {field.list}
                                 updateFormField = {updateFormField}
                                 updateError = {updateError}
                                 defaultValue = {field.defaultValue}
                                 listPreventExit = {field.listPreventExit}
                              />
                        )

                        case fieldTypes.STATIC_SELECTION :
                           return (
                              <ListOption 
                                 key={index}
                                 label={field.label}
                                 placeHolder={field.placeHolder}
                                 name = {field.name}
                                 onChangefunc = {field.onChangefunc}
                                 fieldToUpdate = {field.fieldToUpdate}
                                 formStatus={submitStatus}
                                 required = {field.required}
                                 formError = {formError}
                                 setFormError = {setFormError}
                                 icon = {field.icon}
                                 list = {field.list}
                                 updateFormField = {updateFormField}
                                 updateError = {updateError}
                                 defaultValue = {field.defaultValue}
                                 custom = {field.custom}
                              />
                        )

                        case fieldTypes.COMP :
                           return (
                              <Comp
                                 key={index}
                                 label={field.label}
                                 placeHolder={field.placeHolder}
                                 name = {field.name}
                                 onChangefunc = {field.onChangefunc}
                                 fieldToUpdate = {field.fieldToUpdate}
                                 formStatus={submitStatus}
                                 required = {field.required}
                                 formError = {formError}
                                 setFormError = {setFormError}
                                 icon = {field.icon}
                                 list = {field.list}
                                 updateFormField = {updateFormField}
                                 updateError = {updateError}
                                 defaultValue = {field.defaultValue}
                                 listPreventExit = {field.listPreventExit}
                                 custom = {field.custom}
                              />
                        )

                        default :
                              return null
                     }
                
            
      }

      const getForm = () =>{
      

        return(

               <form className={info.Class} onSubmit={e => submit(e)}>

                  {formError.serverError && 
                    <p className="server-error">{formError.serverError}</p>
                    }
                  
                  {info.title && <h2>{info.title}</h2>}
                 
                   
                   {
                  
                    fields.map((field, index) => 
                    getFields(field, index)
      
                    )
                   }


                  {button ? button : 
                              <button className="button main-btn" type="submit">
                                    {config.buttonLabel}
                           </button>}
               
                  
              </form>
            // </FormProvider>
              
           )
      }


     return{
        getForm,
        formResponse,
        loading
     }
}

export default useForm;