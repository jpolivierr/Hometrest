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
           defaultValue
            } = props


            
    useEffect(()=>{
        if(defaultValue){
                setInputValue(defaultValue)
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

    const handleBlur = () =>{
      
    }
    

     return(
        <fieldset>
        {props.label && <label>{props.label}</label>}
        <div className="input-container">
             <input 
                     ref={inputElement}
                     placeholder={props.placeHolder} 
                     name={props.name}
                     value={inputValue}
                     onChange={e => handleInput(e)}
                     onBlur={()=>{handleBlur()}}
                     style={props.icon && {paddingLeft: "2.3rem"}}
                     />
                     {props.icon && props.icon}
        </div>
            {formError[name] && <p>{formError[name]}</p>}         
         </fieldset>
     )
}

export default Inputs;