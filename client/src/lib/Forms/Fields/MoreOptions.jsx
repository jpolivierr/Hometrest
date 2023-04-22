import {useEffect, useRef, useState } from "react";

const MoreOptions = (props) =>{

    const [inputValue, setInputValue] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [optionState, setOptionState] = useState(false)
    const [userView, setUserView] = useState("")
    const windowRef = useRef(null);

    const { 
           formError, 
           name,
           children
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
        <fieldset className="options" ref={windowRef}>
        {props.label && <label>{props.label}</label>}
    
                    <div className={`select-option ${inputValue.length > 0 && "has-value"}`}
                     onClick={()=>{toggleWindow()}}
                    >
                        More 
                       <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                     
          
            <div style={{right: 0, left: "auto"}}className={`options-window ${showStyle} more-options`  }>
                   
               {children}
            </div>     
         </fieldset>
     )
}

export default MoreOptions;