
import Inputs from "../../lib/Forms/Fields/Inputs"
import MultiSelect from "../../lib/Forms/Fields/MultiSelect";
import useReduxMng from "../../hooks/useReduxMng";
import Range from "../../lib/Forms/Fields/range";
import RangeNoDropDown from "../../lib/Forms/Fields/rangeNoDropDown";
import ListOption from "../../lib/Forms/Fields/ListOption";
import { useEffect, useState } from "react";
import { deepSearch } from "../../Util/getValueByKey";
import { getParams } from "../../Util/urlParcer";
import useModal from "../../lib/Modal/useModal";
import MainButton from "../buton/MainButton";
import { matchPassword } from "../../lib/Forms/Util/matchPassword";
import URL from "../../Config/urls";
import useRequest from "../../lib/MakeRequest/MakeRequest";
import { capitalizeFirstLetter } from "../propertyCard/util";
import errorFromServer from "./FormUtil/serverError";
import useSessionMng from "../../hooks/useSessionMng";
import LoadingEffect from "../../lib/loadingEffect/loading/loadingEffect";


const NewUpdateForm = () =>{


       const [formError, setFormError] = useState({})

       

       const {makeRequest, formResponse, loading} = useRequest()

       const {setUser, activeUserReducer} = useReduxMng()

       const fName = deepSearch(activeUserReducer,["userInfo","first_name"],"john")
        const lName = deepSearch(activeUserReducer,["userInfo","last_name"],"Smith")
        const email = deepSearch(activeUserReducer,["userInfo","email"],"demo@gmail.com")

       const [formState, setFormState] = useState({
            first_name: fName,
            last_name: lName,
            email : email
       })

    const updateFormField = (key, value) =>{
         
              const formFieldCopy = {...formState}

              formFieldCopy[key] = value

              setFormState(formFieldCopy)

     }

     useEffect(()=>{

        const serverError = errorFromServer(formResponse, formError)

        if(serverError){

            setFormError(serverError)

        }else{

            setFormError({})

        }

     },[formResponse])

     useEffect(()=>{

  
        if(
            formResponse.status === 200 &&
            formResponse.body &&
            formResponse.headers
            ){

  
                setUser(formResponse.body)
          
        }else{
  
          console.log("Incorrect response..")
  
        }

        console.log(formResponse)
  
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

             console.log("Submit")
            
            console.log(formState);
            await makeRequest("POST", URL.UPDATE_ACCOUNT, formState)
            
        }
                
}


    return(

        <form style={{margin: "auto"}}
           className="avalon text-left padding-top-bottom-2x padding-top-2x" 
           onSubmit={e => submit(e)}>

                {formError.serverError && 
                    <p className="server-error">{formError.serverError}</p>
                    }

            <Inputs 
                    label={"First Name"}
                    name = {"first_name"}
                    required = {true}
                    formError = {formError}
                    updateFormField = {updateFormField}
                    defaultValue ={formState.first_name}

                    />

            <Inputs 
                    label={"Last Name"}
                    name = {"last_name"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}
                     defaultValue ={formState.last_name}

                    />

            <Inputs 
                    label={"Email"}
                    name = {"email"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}
                     defaultValue ={formState.email}
                    />

            <MainButton 
                      label="Save changes"
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

export default NewUpdateForm