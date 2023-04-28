import Inputs from "./Fields/Inputs";
import Options from "./Fields/Options";
import MultiSelect from "./Fields/MultiSelect";
import ListOption from "./Fields/ListOption";
import Comp from "./Fields/comp";
import StaticComp from "./Fields/staticComp";
import { getFormFields } from "./Config/getFormFields";
import { capitalizeFirstLetter } from "./Util/capitalizeFirstLetter";
import { matchPassword } from "./Util/matchPassword";
// import { validateFields } from "./Config/formValidation";
import "./style/avalon.css"
import useReduxMng from "../../hooks/useReduxMng";
import useFormSubmit from "./Request/request";
import useRequest from "../MakeRequest/MakeRequest";
//Action
import { useEffect, useState } from "react";
 import { validateFields } from "./Config/validateFields";


const useFormCopy = () =>{

   const fieldTypes = {
      INPUT: "input",
      OPTIONS: "options",
      MULTISELECT: "multi-select",
      STATIC_SELECTION: "static-selection",
      STATIC_COMPONENT : "static-component",
      PWD :"password",
      COMP : "comp"
  }
     const {searchReducer} = useReduxMng()
     const {makeRequest, formResponse} = useRequest()
     const [formError, setFormError] = useState({})
     const [loading, setLoading] = useState(false)
      
      const [formState, setFormState] = useState({})
      const [_fields, setFields] = useState({})
      const [_config, setConfig] = useState({})



      useEffect(()=>{
         // setFormState(getFields(fields).fields)
      },[])
      

      useEffect(()=>{

         errorFromServer(formResponse, formError)

      },[formResponse])

      
      const errorFromServer = (response, formError) =>{
          
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


      const updateFormField = (key, value) =>{

         
         if((key in formState)){

               const formFieldCopy = {...formState}

               formFieldCopy[key] = value

               setFormState(formFieldCopy)
         }
      }

      const submit = async (e) =>{

                       
                       e.preventDefault()

                       const errorResult = validateFields(formState, _fields)

                        setFormError({})
                       if(errorResult.errors){
                           console.log("error found")
                           setFormError(errorResult)

                       }else{
                            console.log("Submit")
                           setLoading(true)
                           
                           
                           const data = _config.data ? searchReducer : formState
                           console.log(data);
                           await makeRequest(_config.method, _config.url, data)
                           setLoading(false)
                           
                           
                       }
                               
      }

      const getForm = (settings) =>{

         if(!settings || Object.keys(settings).length === 0){

            return 

         }else{
         
            const {
               fields,
               info,
               config,
               button
            
            } = settings

       if(Object.keys(formState).length === 0){
       
         setFormState(getFormFields(fields).fields)
         setFields(fields)
         setConfig(config)
       }

     return(

            <form className={info.Class} onSubmit={e => submit(e)}>

               {formError.serverError && 
                 <p className="server-error">{formError.serverError}</p>
                 }
               
               {info.title && <h2>{info.title}</h2>}
              
                
                {
               
                 fields.map((fields, index) => 
                 getFields(fields, index)
   
                 )
                }


               {button.component ? 
               <div className="button-container">
                  {loading && button.loadingEffect && button.loadingEffect}
                  {button.component}
               </div>
                   : 
                           <button className="button main-btn" type="submit">
                                 {config.buttonLabel}
                        </button>}
            
               
           </form>
         // </FormProvider>
           
        )

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
                                       
                                       required = {field.required}
                                       formError = {formError}
                                       setFormError = {setFormError}
                                       icon = {field.icon}
                                       updateFormField = {updateFormField}
      
                                       defaultValue = {field.defaultValue}
                                       defaultKey = {field.defaultKey}
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
                                       
                                       required = {field.required}
                                       formError = {formError}
                                       setFormError = {setFormError}
                                       icon = {field.icon}
                                       updateFormField = {updateFormField}
      
                                       defaultValue = {field.defaultValue}
                                       defaultKey = {field.defaultKey}
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
                                    
                                    required = {field.required}
                                    formError = {formError}
                                    setFormError = {setFormError}
                                    icon = {field.icon}
                                    list = {field.list}
                                    // handleClick = {handleOptions}
                                    updateFormField = {updateFormField}
   
                                    defaultValue = {field.defaultValue}
                                    defaultKey = {field.defaultKey}
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
                                 required = {field.required}
                                 formError = {formError}
                                 setFormError = {setFormError}
                                 icon = {field.icon}
                                 list = {field.list}
                                 updateFormField = {updateFormField}
                                 defaultValue = {field.defaultValue}
                                 defaultKey = {field.defaultKey}
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
                                 
                                 required = {field.required}
                                 formError = {formError}
                                 setFormError = {setFormError}
                                 icon = {field.icon}
                                 list = {field.list}
                                 updateFormField = {updateFormField}

                                 defaultValue = {field.defaultValue}
                                 defaultKey = {field.defaultKey}
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
                                 
                                 required = {field.required}
                                 formError = {formError}
                                 setFormError = {setFormError}
                                 icon = {field.icon}
                                 list = {field.list}
                                 updateFormField = {updateFormField}

                                 defaultValue = {field.defaultValue}
                                 defaultKey = {field.defaultKey}
                                 listPreventExit = {field.listPreventExit}
                                 custom = {field.custom}
                              />
                        )

                        case fieldTypes.STATIC_COMPONENT :
                           return (
                              <StaticComp
                                 key={index}
                                 label={field.label}
                                 placeHolder={field.placeHolder}
                                 name = {field.name}
                                 onChangefunc = {field.onChangefunc}
                                 fieldToUpdate = {field.fieldToUpdate}
                                 
                                 required = {field.required}
                                 formError = {formError}
                                 setFormError = {setFormError}
                                 icon = {field.icon}
                                 list = {field.list}
                                 updateFormField = {updateFormField}

                                 defaultValue = {field.defaultValue}
                                 defaultKey = {field.defaultKey}
                                 listPreventExit = {field.listPreventExit}
                                 custom = {field.custom}
                              />
                        )

                        default :
                              return null
                     }
                
            
      }


     return{
        getForm,
        formResponse,
        loading
     }
}

export default useFormCopy;