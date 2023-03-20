import {useEffect, useRef, useState } from "react";

const MultiSelect = (props) =>{

    const [inputValue, setInputValue] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [optionState, setOptionState] = useState(false)
    const [userView, setUserView] = useState("")
    const windowRef = useRef(null);

    const {required, 
           setFormError, 
           formError, 
           formStatus,
           fieldToUpdate,
           list,
           defaultValue,
           name,
           updateFormField
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

    const handleClick = ( value, funcArray) =>{

      if(Array.isArray(funcArray) && funcArray.length > 0){

           let newValue 

           let inputHolder = [...inputValue]
           
           if(!inputHolder.includes(value)){

                 inputHolder.push(value)

           }else{
            
             const index = inputHolder.indexOf(value)
             inputHolder.splice(index, 1)

           }

           console.log(inputHolder)
            funcArray.forEach((func)=>{

                newValue = func(inputHolder)

            })

            setUserView(newValue)
            setInputValue(inputHolder)
            fieldToUpdate && fieldToUpdate(inputHolder)
            updateFormField && updateFormField(name,inputHolder)

            listToggleWindow()

        }else{

            handleInput(value)

            listToggleWindow()
        }
        
    }

    const handleInput = (value) =>{

        const holder = [...inputValue]

        if(!holder.includes(value)){
            holder.push(value)
        }

        setUserView(holder)
        setInputValue(holder)
        fieldToUpdate && fieldToUpdate(holder)
        updateFormField && updateFormField(name,holder)

    }

    const listToggleWindow = () =>{
        return
}

    const toggleWindow = () =>{

        setOptionState(!optionState)

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
                     value={userView}
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
                            style={{display: "flex"}}
                                 key={index}
                                 className={li.Class}
                                 listid={li.name}
                                 onClick={(e)=>{
                                    handleClick(li.name,li.handleClick)
                                }}
                               >
                                {
                                    !inputValue.includes(li.name) ? <i className="fa-regular fa-square"></i> : <i className="fa-solid fa-square-check"></i>
                                }
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

export default MultiSelect;