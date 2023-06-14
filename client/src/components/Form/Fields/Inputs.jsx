import { useEffect, useRef, useState } from "react";
import { emptyField } from "../Util/emptyField";

const Inputs= (props) =>{

    const [inputValue, setInputValue] = useState("")
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


            
    useEffect(()=>{
        if(defaultValue){

                setInputValue(defaultValue)
    
              }else{

                setInputValue("")

              }
    },[defaultValue])

    const handleInput = (e) =>{

            const value = e.target.value

            setErrorMessage("")

            props.updateFormField(props.name, value) 

            props.onChangefunc && setErrorMessage(props.onChangefunc(value)) 

            setInputValue(value)

            props.fieldToUpdatee && props.fieldToUpdate(value) 

    }

    const handleBlur = (e) =>{

        const value = e.target.value

        onOutFocus && onOutFocus(value)
    }
    
     return(
        <fieldset className={elementClass}>
        {props.label && <label>{props.label}</label>}
        <div className="input-container">
             <input 
                     type={name.includes("password") ? "password" : ""}
                     ref={inputElement}
                     placeholder={props.placeHolder} 
                     name={props.name}
                     value={inputValue}
                     onChange={e => handleInput(e)}
                     onBlur={(e)=>{handleBlur(e)}}
                     style={props.icon && {paddingLeft: "2.3rem"}}
                     />
                     {props.icon && props.icon}
        </div>
            {formError[name] && <p>{formError[name]}</p>}         
         </fieldset>
     )
}

export default Inputs;