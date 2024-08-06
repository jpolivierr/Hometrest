import URL from "../../../constants/urls";
// import loginStyles from "./Login.style.css"
import HttpRequest from "../../../httpRequest/HttpRequest";
import { useState, useEffect } from "react";
import { isEmpty } from "../../../Util/validation";
import { useUserContext } from "../../../context/user/UserContext";


const Login = () =>{

// console.log(formState)

    const {authenticate} = useUserContext()
    const httpRequest = HttpRequest()
    const {post, loading} = httpRequest
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: null,
        password: null
    })
    const [formError, setFormError] = useState(null)
    const [shouldSubmit, setShouldSubmit] = useState(false);

    useEffect(() => {
        if (shouldSubmit && !hasErrors()) {
            (async () => {
                const formData = new FormData();
                formData.append('email', data.email);
                formData.append('password', data.password);
                const response = await post(URL.LOGIN, formData, true);
                console.log(response)
                if (response.status === 200 && response.body) {
                    authenticate(response)
                    const currentPath = window.location.pathname;
                    if(currentPath.startsWith("/login")){
                        window.location.href="/listings"
                    }else{
                        window.location.reload();
                    }
                    clearFields();
                } else if (response.status === 401 && response.body) {
                    console.log("is 401")
                    setFormError(response.body.message);
                    clearFields();
                }
            })();
            setShouldSubmit(false);
        }
    }, [errors]);

    const submit = async (e) =>{
        e.preventDefault()
        clearErrors()
        validateForm()
        setShouldSubmit(true);
    }

    const clearErrors = () => {
        setErrors((prevErrors) => ({...prevErrors, email: null, password: null}))
        setFormError(null)
    }

    const setEmail = (e) =>{
        const value = e.target.value
        setData((prevData) => ({
            ...prevData,
            email: value
        }))
    }

    const setPassword = (e) =>{
        const value = e.target.value
        setData((prevData) => ({
            ...prevData,
            password: value
        }))
    }

    const emailValidation = () => {
        return isEmpty(
                data.email, 
                () => setErrors((prevErrors) => ({...prevErrors, email: "Email is required"})),
                () => setErrors((prevErrors) => ({...prevErrors, email: null}))
              )
    }

    const passwordValidation = () => {
        return isEmpty(
                data.password, 
                () => setErrors((prevErrors) =>({...prevErrors, password: "Password is required"})),
                () => setErrors((prevErrors) => ({...prevErrors, password: null}))
              )
    }

    const validateForm = () => {
        emailValidation()
        passwordValidation()
    }

    const clearFields = () => {
         setData((prevData) => ({...prevData, email: "", password: ""}))
    }

    const hasErrors = () => {
        return Object.values(errors).some((error) => error !== null);;
    }

    return(

        <form className="main-form login-form center" onSubmit={e => submit(e)} >

            {
                formError && 
                <p className="server-error">
                    {formError}
                </p>
            }

            <h3>Login</h3>
            <p className="form-descr">Don't have and account yet? <a className="signup-link">Sign up</a></p>

            <fieldset className={errors.email ? "field_error" : ""}>
                <p>Email Address</p>
                <input 
                    onChange={setEmail}
                    onBlur={emailValidation}
                    value={data.email} 
                    name="email" 
                    type="text" 
                    placeholder="you@example.com" 
                    />
                {errors.email && <p className="error-message">{errors.email}</p>}
            </fieldset>

            <fieldset className={errors.password ? "field_error" : ""}>
            <p>Password</p>
                <input 
                    onChange={setPassword}
                    onBlur={passwordValidation}
                    value={data.password} 
                    name="password" 
                    type="password" 
                    placeholder="Enter your password" />
                {errors.password && <p className="error-message">{errors.password}</p>}
            </fieldset>

            <div className="form-option">
                <div className="remember-me">
                    <input type="checkbox" />
                    <p>Remember me</p>
                </div>

                <a className="signup-link forgot-password" >Forgot Password?</a>
            </div>

            <button className="main-btn">Login</button>           
        
        </form>

    )

}

export default Login