import {useEffect, useRef, useState } from "react";
import Buttons from "../../../lib/Buttons/button"

const MoreOptions = (props) =>{

    const [inputValue, setInputValue] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [optionState, setOptionState] = useState(false)
    const [userView, setUserView] = useState("")
    const windowRef = useRef(null);

    const { 
           formError, 
           name,
           children,
           elementClass,
           optionsTitle, 
           icon
            } = props





    useEffect(()=>{
    
        const addEvent = (e) =>{

            if(windowRef.current && !windowRef.current.contains(e.target)){

                setOptionState(false)

            }

        }
        document.addEventListener("click",addEvent, true)

    },[])


    const toggleWindow = () =>{

        setOptionState(!optionState)

    }
    

    const showStyle = optionState ? "show" : "hide"

     return(
        <fieldset className={`${elementClass} options`} ref={windowRef}>
        {props.label && <label>{props.label}</label>}
    
                    <div className={`select-option ${inputValue.length > 0 && "has-value"}`}
                     onClick={()=>{toggleWindow()}}
                    >
                       {optionsTitle} 
                       {icon}
                    </div>
                     
                    <div className={`option-window-container ${showStyle}`}>
                    <div onClick={()=>{toggleWindow()}} className={`select-bk`}></div>
                        <div className={`options-window ${showStyle} more-options`  }>
                                <h3>More options</h3>
                            {children}
                            <div className="option-window-button-container">
                        <Buttons 
                            label="Done"
                            Class="button main-btn"
                            clickEvent={(e)=>{ e.preventDefault();toggleWindow()}}
                        />
                    </div>
                    </div>  
                    </div>
               
         </fieldset>
     )
}

export default MoreOptions;