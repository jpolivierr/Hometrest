import Form from "../../lib/Forms/Form"
import { useEffect, useState } from "react"
import { emptyField } from "../../lib/Forms/Util/emptyField"
import { emailValidation } from "../../lib/Forms/Util/emailValidation"
import useForm from "../../lib/Forms/useForm"



const Signup = () =>{

    const [formSetting] = useState({
        config: {
            url: "http://localhost:8080/secure/signup",
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
        ]
    })

    const {getForm, formResponse} = useForm(formSetting)

    // console.log(formResponse)

    return(
        <div className="margin-top-2x">

           {/* <Form 
              setting={formSetting}
           /> */}

           {getForm()}

        </div>
        
    )
}

export default Signup