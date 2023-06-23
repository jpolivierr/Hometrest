import { useEffect, useRef, useState } from "react";
import { emptyField } from "../../../Util/emptyField";


const Inputs= (props) =>{


    const inputElement = useRef();

    const {
           name, 
           formError,
           defaultValue,
           onOutFocus,
           elementClass
            } = props



    const handleInput = (e) =>{

            const value = e.target.value

            const newValue = props.onChangefunc ? props.onChangefunc(value) : value

            props.updateFormField(props.name, newValue) 

    }

    const handleBlur = (e) =>{

        const value = e.target.value

        let newValue = onOutFocus ? onOutFocus(value) : value

        props.updateFormField(props.name, newValue)
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
                     value={props.value}
                     onChange={e => handleInput(e)}
                     onBlur={(e)=>{handleBlur(e)}}
                     style={props.icon && {paddingLeft: "2.3rem"}}
                     />
                     {props.icon && props.icon}
        </div>
            {/* {formError[name] && <p>{formError[name]}</p>}          */}
         </fieldset>
     )
}

export default Inputs;