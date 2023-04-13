import Inputs from "./Fields/Inputs";
import Options from "./Fields/Options";
import fieldTypes from "./VARS/fieldType";
import MultiSelect from "./Fields/MultiSelect";
import ListOption from "./Fields/ListOption";
import { myFormFieds } from "./Config/getFields";
import { validateFields } from "./Config/formValidation";
import "./style/avalon.css"

//Action
import { useState } from "react";


const Form = (props) =>{

     const {fields,config, info} = props.setting
      
      const [submitStatus, setSubmitStatus] = useState(false)
      const [formError, setFormError] = useState(myFormFieds(fields).errors)
      const [formFields, setFormFields] = useState(myFormFieds(fields).fields)

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
         
         console.log(formFields)
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

         })

         setFormError(formErrorCopy)

         return formErrorCopy

      }
      const submit = (e) =>{

                       e.preventDefault()
                        
                       if(validateFields().errors){

                           console.log("error found")

                       }else{

                           console.log("Submit")
                           
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

                        case fieldTypes.LIST_OPTION :
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
                              />
                        )

                        default :
                              return null
                     }
                
            
      }


     return(
      // <FormProvider data={{num: 5}}>
         <form className={info.Class} onSubmit={e => submit(e)}>
            {info.title && <h2>{info.title}</h2>}
           
             
             {
            
              fields.map((field, index) => 
              getFields(field, index)

              )
             }

         
            <button type="submit">
                     {config.buttonLabel}
            </button>
        </form>
      // </FormProvider>
        
     )
}

export default Form;