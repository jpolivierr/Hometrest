import {useEffect, useRef, useState } from "react";
import { cleanInput } from "../../../Util/cleanInput";
import Buttons from "../../../lib/Buttons/button"
import fieldView from "../../../Util/fieldView";
import capitalizeWords from "../../../Util/capitalizedWords";

const MultiSelect = (props) =>{

    const [optionState, setOptionState] = useState(false)
    const windowRef = useRef(null);

    const {
           name,
           updateField,
           elementClass,
           value,
           optionsTitle,
           options,
           dropDown
            } = props


    useEffect(()=>{
    
        const addEvent = (e) =>{

            if(windowRef.current && !windowRef.current.contains(e.target)){

                setOptionState(false)

            }

        }
        document.addEventListener("click",addEvent, true)

    },[])

    const handleClick = (e) =>{
 
            const element = e.target
            const id = element.id
                
            let valueClone = [...value]
            
            if(valueClone.includes(id)){

                valueClone = value.filter(name => name !== id)

            }else{

                 valueClone.push(id)
                 valueClone = valueClone

            }

            updateField(name, valueClone)

        
    }



    const toggleWindow = () =>{

        setOptionState(!optionState)

    }


    const showStyle = optionState ? "show" : "hide"

     return(
        <fieldset className={`${elementClass} options`} ref={windowRef}>

         {/* label */}
        {props.label && <label>{props.label}</label>}


        { 
           !dropDown && 
                    <ul>
                            {optionsTitle && <h3>{optionsTitle}</h3>}

                            {
                            options.map((li,index) => (
                                <li
                                    key={index}
                                    id={li.id}
                                    onClick={handleClick}
                                >
                                    {
                                        !value.includes(li.id) ? 
                                         <i className="fa-regular fa-square"></i> : 
                                         <i className="fa-solid fa-square-check"></i>
                                    }
                                    { 
                                        li.name
                                    }
                                </li>
                            ))
                            }
                </ul>
        
        }
                     
        { dropDown && 
        <>
                    {/************************************************ */}
                    {/* INPUT VALUE  */}
                    <div className={`select-option ${value.length > 0 && "has-value"}`}
                        onClick={()=>{toggleWindow()}} >
                        {value.length === 0 && props.label }
                        {capitalizeWords(fieldView(props.label, value)) }
                        {props.icon && props.icon}
                    </div>

                    {/************************************************ */}
                    {/* DROP DOWN  */}
                    {/************************************************ */}
                    
                        <div className={`option-window-container ${showStyle}`}>
                                        <div onClick={()=>{toggleWindow()}} className={`select-bk`}></div>
                                        <div className={`options-window ${showStyle}`  }>
                                    
                                        {/* {props.comp} */}
                                            <ul>

                                                {optionsTitle && <h3>{optionsTitle}</h3>}

                                                {
                                                options.map((li,index) => (
                                                    <li
                                                        key={index}
                                                        id={li.id}
                                                        onClick={handleClick}
                                                    >
                                                        {
                                                            !value.includes(li.id) ? <i className="fa-regular fa-square"></i> : <i className="fa-solid fa-square-check"></i>
                                                        }
                                                        {
                                                            
                                                            li.name
                                                        }
                                                    </li>
                                                ))
                                                }
                                            </ul>

                                            <div className="option-window-button-container">
                                                <Buttons 
                                                    label="Done"
                                                    Class="button main-btn"
                                                    clickEvent={(e)=>{ e.preventDefault();toggleWindow()}}
                                                />
                                            </div>
                                            
                                    </div>

                                </div>
                            </>
            
        }
           
           
         </fieldset>
     )
}

export default MultiSelect;