import {useEffect, useRef, useState } from "react";
import fieldView from "../Util/fieldView";
import { cleanInput } from "../Util/cleanInput";
import RangeOptions from "../../../components/priceOptions/rangeOptions";
import { NumberFormat } from "../../../Util/numberFormater";

const Comp = (props) =>{

    const [inputValue, setInputValue] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [optionState, setOptionState] = useState(false)
    const [userView, setUserView] = useState("")
    const [compState, setCompState] = useState(null)
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
           onChangefunc, 
           custom,
            } = props


    useEffect(()=>{
        if(custom.defaultValue && Object.keys(custom.defaultValue).length > 0){
            setInputValue(formatInput(custom.defaultValue))
        }
    },[])
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

    useEffect(()=>{
        updateFormField && updateFormField(name,inputValue)
        fieldToUpdate && fieldToUpdate(compState)
    },[inputValue, compState])

    const handleClick = ( value, funcArray) =>{

      if(Array.isArray(funcArray) && funcArray.length > 0){

           let newValue 

           let inputValueClone = [...inputValue]

           let newFieldView


            funcArray.forEach((customFunction)=>{

                newValue = customFunction(inputValueClone)

            })

            newFieldView = fieldView(name,inputValueClone)
            setUserView(newFieldView)
            setInputValue(inputValueClone)
            fieldToUpdate && fieldToUpdate(inputValueClone)
            updateFormField && updateFormField(name,inputValueClone)

            listToggleWindow()

        }else{
          
            handleOnChange(value)

            listToggleWindow()
        }
        
    }

    const handleOnChange = (value) =>{

        let inputValueClone = [...inputValue]

        if(!inputValueClone.includes(value)){

            inputValueClone.push(value)

        }else{

            inputValueClone = inputValueClone.filter((input) => input != value)

        }


        const newFieldView = fieldView(name,inputValueClone)
        // console.log(newFieldView)
        setUserView(!newFieldView ? cleanInput(inputValueClone) : cleanInput(newFieldView) )
        setInputValue(inputValueClone)
        fieldToUpdate && fieldToUpdate(inputValueClone)
        updateFormField && updateFormField(name,inputValueClone)

    }

    // console.log(va)

    const listToggleWindow = () =>{
        return
}

    const toggleWindow = () =>{

        setOptionState(!optionState)

    }
    

    const handleBlur = () =>{
      
    }

    const getValueFromChildComponent = (value) =>{
        console.log("getting value..")
        console.log(value)
        setInputValue(value)
    }

    const getCompState = (value) =>{
        setCompState(value)
    }

    const formatInput = (range) =>{
      

        if(Object.keys(range).length === 0){
            return ""
        }
    
        if(Object.keys(range).length === 1){
            for(let keys in range){
                return NumberFormat.abbreviateNumber(range[keys])
            }
        }
    
        if(Object.keys(range).length === 2){
    
            const minPrice = NumberFormat.abbreviateNumber(range.min)
            const maxPrice = NumberFormat.abbreviateNumber(range.max)
    
            
            return `${minPrice} - ${maxPrice}`
        }
    
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
                     onChange={e => handleOnChange(e)}
                     />
                     {props.icon && props.icon}
        </div>
            {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}   
            <div className={`options-window ${showStyle}`  }>
                    <RangeOptions 
                            getValue={getValueFromChildComponent}
                            options={custom ? 
                                     custom.payload :
                                    []
                                    }
                            label={custom && custom.label}
                            compState={getCompState}
                            defaultValue={custom.defaultValue}
                            />
            </div> 
            {formError[name] && <p>{formError[name]}</p>}    
         </fieldset>
     )
}

export default Comp;