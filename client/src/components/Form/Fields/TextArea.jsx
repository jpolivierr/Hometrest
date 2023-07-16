import { useEffect, useRef, useState } from "react";
import { emptyField } from "../Util/emptyField";

const TextArea= (props) =>{

  const {value} = props
    const [errorMessage, setErrorMessage] = useState("")
    const inputElement = useRef();

    const {name, 
           required, 
           setFormError,
           formError,
           formStatus,
           defaultValue,
           defaultKey,
           type,
           onOutFocus,
           elementClass
            } = props


    const handleInput = (e) =>{

            const value = e.target.value

            setErrorMessage("")

            props.updateFormField(props.name, value) 

            props.onChangefunc && setErrorMessage(props.onChangefunc(value)) 

            props.fieldToUpdate && props.fieldToUpdate(value) 

    }

    const handleBlur = (e) =>{

        const value = e.target.value

        onOutFocus && onOutFocus(value)
    }
    
     return(
        <fieldset className={`elementClass ${formError[name] && "field_error"}`} >
        {props.label && <label>{props.label}</label>}
        <div className="input-container">
             <textarea 
                     type={name.includes("password") ? "password" : ""}
                     ref={inputElement}
                     placeholder={props.placeHolder} 
                     name={props.name}
                     value={value}
                     onChange={e => handleInput(e)}
                     onBlur={(e)=>{handleBlur(e)}}
                     style={props.icon && {paddingLeft: "2.3rem"}}
                     ></textarea>
                     {props.icon && props.icon}
        </div>
            {formError[name] && <p>{formError[name]}</p>}         
         </fieldset>
     )
}

export default TextArea;