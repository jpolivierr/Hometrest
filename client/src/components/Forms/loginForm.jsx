import Form from "../../lib/Forms/Form"
import { useEffect, useState } from "react"
import { emptyField } from "../../lib/Forms/Util/emptyField"
import useForm from "../../lib/Forms/useForm"



const LoginForm = () =>{

    const [formSetting] = useState({
        config: {
            url: "http://localhost:8080/login",
            method: "GET",
            buttonLabel: "Submit"
        },
        info : {
            title: "Login",
            Class: "avalon text-left av-shadow"
        },
        fields : [
            {
                type : "input",
                label : "Name",
                // placeHolder : "Enter city or Zip",
                name : "name",
                // onChangefunc : numValidate,
                // fieldToUpdate : setLocation,
                onSubmitFunc: [emptyField],
                required : true,
                // icon : <i className="fa-solid fa-location-dot"></i>
              },
            {
                type : "input",
                label : "Email",
                // placeHolder : "Enter city or Zip",
                name : "Email",
                // onChangefunc : numValidate,
                // fieldToUpdate : setLocation,
                onSubmitFunc: [emptyField],
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
                onSubmitFunc: [emptyField],
                required : true,
                // icon : <i className="fa-solid fa-location-dot"></i>
              },
        ]
    })

    const {getForm, formResponse} = useForm(formSetting)

    return(
        <div className="margin-top-2x">

           {/* <Form 
              setting={formSetting}
           /> */}

           {getForm()}

        </div>
        
    )
}

export default LoginForm