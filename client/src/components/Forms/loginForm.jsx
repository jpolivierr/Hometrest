import Form from "../../lib/Forms/Form"
import { useState } from "react"
import { emptyField } from "../../lib/Forms/Util/emptyField"



const LoginForm = () =>{

    const [formSetting] = useState({
        config: {
            url: "https://jsonplaceholder.typicode.com/posts",
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
                type : "input",
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

    return(
        <div className="margin-top-2x">
           <Form 
              setting={formSetting}
           />
        </div>
        
    )
}

export default LoginForm