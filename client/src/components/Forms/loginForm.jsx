
import { useEffect, useState } from "react"
import useForm from "../../lib/Forms/useForm"
import MainButton from "../buton/MainButton"

import URL from "../../constants/urls"

import useReduxMng from "../../hooks/useReduxMng"
import useSessionMng from "../../hooks/useSessionMng"
import { USER_AUTH_TOKEN } from "../../constants/authToken"




const LoginForm = () =>{

   const {setUser, activeUser, searchReducer} = useReduxMng()
   const {startSession} = useSessionMng(USER_AUTH_TOKEN)


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
                name : "email",
                required : true,

              },
              {
                type : "password",
                label : "Password",
                name : "password",
                required : true,
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

export default LoginForm