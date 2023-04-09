import Form from "../../lib/Forms/Form"
import { useEffect, useState } from "react"
import { emptyField } from "../../lib/Forms/Util/emptyField"
import useForm from "../../lib/Forms/useForm"
import MainButton from "../buton/MainButton"



const LoginForm = () =>{

    const [formSetting] = useState({
        config: {
            url: "http://localhost:8080/secure/login",
            method: "POST",
            buttonLabel: "Submit"
        },
        info : {
            title: "Login",
            Class: "avalon text-left av-shadow"
        },
        fields : [
            {
                type : "input",
                label : "Email",
                // placeHolder : "Enter city or Zip",
                name : "email",
                // onChangefunc : numValidate,
                // fieldToUpdate : setLocation,
                // onSubmitFunc: [emptyField],
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
        ],
        button : <MainButton 
                            label="Submit"
                            Class=" button main-btn"
                            type="submit"
                        />
    })

    const {getForm, formResponse} = useForm(formSetting)

    //  console.log(formResponse)

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