import Form from "../../lib/Forms/Form"
import { useEffect, useState } from "react"
import { emptyField } from "../../lib/Forms/Util/emptyField"
import { emailValidation } from "../../lib/Forms/Util/emailValidation"
import useForm from "../../lib/Forms/useForm"
import MainButton from "../buton/MainButton"
import Ring from "../../lib/loadingEffect/loading/loadingEffect"
import URL from "../../constant/urls"
import useSessionMng from "../../hooks/useSessionMng"
import { USER_AUTH_TOKEN } from "../../constant/authToken"



const Signup = () =>{

  const [isLoading] = useState(true)
  const {startSession} = useSessionMng(USER_AUTH_TOKEN)

    const [formSetting] = useState({
        config: {
            url: URL.SIGNUP,
            method: "POST",
            buttonLabel: "Submit"
        },
        info : {
            title: "Signup",
            Class: "avalon text-left av-shadow"
        },
        fields : [
            {
                type : "input",
                label : "First Name",
                // placeHolder : "Enter city or Zip",
                name : "first_name",
                // onChangefunc : numValidate,
                // fieldToUpdate : setLocation,
                // onSubmitFunc: [emptyField],
                required : true,
                //  icon : <i className="fa-solid fa-location-dot"></i>
              },
              {
                type : "input",
                label : "Last Name",
                // placeHolder : "Enter city or Zip",
                name : "last_name",
                // onChangefunc : numValidate,
                // fieldToUpdate : setLocation,
                // onSubmitFunc: [emptyField],
                required : true,
                //  icon : <i className="fa-solid fa-location-dot"></i>
              },
            {
                type : "input",
                label : "Email",
                // placeHolder : "Enter city or Zip",
                name : "email",
                // onChangefunc : numValidate,
                // fieldToUpdate : setLocation,
                // onSubmitFunc: [emptyField,emailValidation],
                required : true,
                // icon : <i className="fa-solid fa-location-dot"></i>
              },
              {
                type : "password",
                label : "Password",
                // placeHolder : "Enter city or Zip",
                name : "password",
                // onChangefunc : numValidate,
                // fieldToUpdate : setLocation,
                // onSubmitFunc: [emptyField],
                required : true,
                // icon : <i className="fa-solid fa-location-dot"></i>
              },
              {
                type : "password",
                label : "Re-enter Password",
                // placeHolder : "Enter city or Zip",
                name : "password2",
                // match: "password",
                // onChangefunc : numValidate,
                // fieldToUpdate : setLocation,
                // onSubmitFunc: [emptyField],
                required : true,
                // icon : <i className="fa-solid fa-location-dot"></i>
              },
        ],
        button : <MainButton 
                      label="Submitsss"
                      Class=" button main-btn"
                      type="submit"
                       loadingEffect={<Ring 
                        isShowing = {true} 
                        elementClass="av-loading"
                        />}
                  />
    })

    const {getForm, formResponse, loading} = useForm(formSetting)

    useEffect(()=>{

      
      const session = startSession(formResponse)

      if(session){

          window.location.pathname = "/"
        
      }else{

        console.log("Incorrect response..")

      }

    },[formResponse])

    return(
        <div className="margin-top-2x">

           {getForm()}

        </div>
        
    )
}

export default Signup