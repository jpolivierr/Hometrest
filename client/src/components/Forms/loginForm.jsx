import Form from "../../lib/Forms/Form"
import { useEffect, useState } from "react"
import { emptyField } from "../../lib/Forms/Util/emptyField"
import useForm from "../../lib/Forms/useForm"
import MainButton from "../buton/MainButton"
import Ring from "../../lib/loadingEffect/loading/ring"
import getCookie from "../../Util/getCookie"
import URL from "../../Config/urls"




const LoginForm = () =>{


    const [formSetting] = useState({
        config: {
            url: URL.LOGIN,
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
        loadingEffect={true}
    />
    })

    const {getForm, formResponse, loading} = useForm(formSetting)

      console.log(formResponse)

      if(formResponse && formResponse.status === 200){
        console.log("getting -> cookie")
        const sessionId = getCookie("SESSIONID")
        console.log(sessionId)
      }

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