import {useEffect, useRef, useState } from "react";

const Options = (props) =>{

    const [inputValue, setInputValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [optionState, setOptionState] = useState(false)
    const windowRef = useRef(null);

    const {required, 
           setFormError, 
           formError, 
           formStatus,
           fieldToUpdate,
           list,
           defaultValue,
           name,
           updateFormField,
           listPreventExit
            } = props


    useEffect(()=>{

      if(defaultValue){

        setInputValue(defaultValue)

      }

    },[defaultValue])

    useEffect(()=>{
    
        const addEvent = (e) =>{

            if(windowRef.current && !windowRef.current.contains(e.target)){

                setOptionState(false)

            }

        }
        document.addEventListener("click",addEvent, true)

    },[])

    const handleClick = ( name, funcArray) =>{

      if(Array.isArray(funcArray) && funcArray.length > 0){

           let newValue 

            funcArray.forEach((func)=>{

                newValue = func(name)

            })

            handleInput(newValue)

            listToggleWindow()

        }else{

            handleInput(name)

            listToggleWindow()
        }
        
    }

    const listToggleWindow = () =>{
        
        if(listPreventExit){

            return

        }else{
           console.log("ran..")
            setOptionState(!optionState)

        }
    }

    const toggleWindow = () =>{

        setOptionState(!optionState)

    }

    const handleInput = (value) =>{

        setInputValue(value)
        fieldToUpdate && fieldToUpdate(value)
        updateFormField && updateFormField(name,value)

    }
    

    const handleBlur = () =>{
      
    }

   
    
    const showStyle = optionState ? "show" : "hide"

     return(
        <fieldset className="options" ref={windowRef}>
        {props.label && <label>{props.label}</label>}
        <div className="input-container" 
                 onClick={()=>{toggleWindow()}}>
             <input 
                     placeholder={props.placeHolder} 
                     name={props.name}
                     value={inputValue}
                     onBlur={()=>{handleBlur()}}
                     style={props.icon && {paddingRight: "2.3rem"}}
                     readOnly={true}
                     />
                     {props.icon && props.icon}
        </div>
            {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}   
            <div className={`options-window ${showStyle}`  }>
                   {/* {props.comp} */}
                    <ul className={list.info.Class}>
                        {list.info.title && <h3>{list.info.title}</h3>}

                        {
                          list.lists.map((li,index) => (
                            <li
                                 key={index}
                                 className={li.Class}
                                 listid={li.name}
                                 onClick={(e)=>{
                                    handleClick(li.name,li.handleClick)
                                }}
                               >
                                {
                                    li.el && li.el
                                }
                            </li>
                          ))
                        }
                    </ul>
            </div> 
            {formError[name] && <p>{formError[name]}</p>}    
         </fieldset>
     )
}

export default Options;