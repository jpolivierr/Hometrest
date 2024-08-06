import URL from "../../../constants/urls";
import HttpRequest from "../../../httpRequest/HttpRequest";
import { useState, useEffect } from "react";
import { isEmpty } from "../../../Util/validation";
import { useUserContext } from "../../../context/user/UserContext";
import { Link } from "react-router-dom";


const SignupForm = () =>{

    const {authenticate} = useUserContext()
    const httpRequest = HttpRequest()
    const {post, loading} = httpRequest
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: null,
        password: null
    })
    const [formError, setFormError] = useState(null)
    const [shouldSubmit, setShouldSubmit] = useState(false);

    useEffect(() => {
        if (shouldSubmit && !hasErrors()) {
            (async () => {
                const formData = new FormData();
                formData.append('first_name', data.firstName);
                formData.append('last_name', data.lastName);
                formData.append('email', data.email);
                formData.append('password', data.password);
                const response = await post(URL.SIGNUP, formData, true);
                if (response.status === 200 && response.body) {
                    authenticate(response)
                    const currentPath = window.location.pathname;
                    if(currentPath.startsWith("/signup")){
                        window.location.href="/login"
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
        setErrors((prevErrors) => ({...prevErrors, 
                                       firstName: null,
                                       lastName: null,
                                       email: null, 
                                       password: null}))
        setFormError(null)
    }

    const setFirstName = (e) =>{
        const value = e.target.value
        setData((prevData) => ({
            ...prevData,
            firstName: value
        }))
    }

    const setLastName = (e) =>{
        const value = e.target.value
        setData((prevData) => ({
            ...prevData,
            lastName: value
        }))
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

    const firstNameValidation = () => {
        return isEmpty(
                data.firstName, 
                () => setErrors((prevErrors) => ({...prevErrors, firstName: "First name is required"})),
                () => setErrors((prevErrors) => ({...prevErrors, firstName: null}))
              )
    }

    const lastNameValidation = () => {
        return isEmpty(
                data.lastName, 
                () => setErrors((prevErrors) => ({...prevErrors, lastName: "Last name is required"})),
                () => setErrors((prevErrors) => ({...prevErrors, lastName: null}))
              )
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
        firstNameValidation()
        lastNameValidation()
        emailValidation()
        passwordValidation()
    }

    const clearFields = () => {
         setData((prevData) => ({...prevData, firstName: "", lastName: "", email: "", password: ""}))
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

            <h3>Sign up</h3>
            <p className="form-descr">Already have an account?  
                <Link to="/login">
                    <span className="signup-link"> Login</span>
                </Link>
            </p>

            <fieldset className={errors.firstName ? "field_error" : ""}>
                <p>First Name</p>
                <input 
                    onChange={setFirstName}
                    onBlur={firstNameValidation}
                    value={data.firstName} 
                    name="first_name" 
                    type="text" 
                    placeholder="John" 
                    />
                {errors.firstName && <p className="error-message">{errors.firstName}</p>}
            </fieldset>

            <fieldset className={errors.lastName ? "field_error" : ""}>
                <p>Last Name</p>
                <input 
                    onChange={setLastName}
                    onBlur={lastNameValidation}
                    value={data.lastName} 
                    name="last_name" 
                    type="text" 
                    placeholder="Wick" 
                    />
                {errors.lastName && <p className="error-message">{errors.lastName}</p>}
            </fieldset>

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

            <fieldset className={errors.password ? "field_error" : ""}>
            <p>Confirm Password</p>
                <input 
                    onChange={setPassword}
                    onBlur={passwordValidation}
                    value={data.password} 
                    name="password" 
                    type="password" 
                    placeholder="Confirm your password" />
                {errors.password && <p className="error-message">{errors.password}</p>}
            </fieldset>

            <button className="main-btn">Sign up</button>           
        
        </form>

    )

}

export default SignupForm