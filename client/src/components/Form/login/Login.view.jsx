
import Inputs from "../Fields/Inputs"
import MainButton from "../../buton/MainButton";
import LoadingEffect from "../../../lib/loadingEffect/loading/loadingEffect";
import useForm from "../useForm";
import URL from "../../../constants/urls";
// import loginStyles from "./Login.style.css"


const Login = () =>{

    const {submit, updateFormField, formError, loading} = useForm(URL.LOGIN)

// console.log(formState)

    return(

        <form style={{margin: "auto"}}
           className="avalon text-left av-shadow" 
           onSubmit={e => submit(e)}>

                {formError.serverError && 
                    <p className="server-error">{formError.serverError}</p>
                    }

            <h2>Login</h2>

            <Inputs 
                    label={"Email"}
                    name = {"email"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}

                    />

            <Inputs 
                    label={"Password"}
                    name = {"password"}  
                    required = {true}
                    formError = {formError}
                     updateFormField = {updateFormField}
                    />

            <MainButton 
                      label="Submit"
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

export default Login