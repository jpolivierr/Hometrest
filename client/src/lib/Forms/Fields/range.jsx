import {useEffect, useRef, useState } from "react";
import fieldView from "../Util/fieldView";
import { cleanInput } from "../Util/cleanInput";
import RangeOptions from "../../../components/priceOptions/rangeOptions";
import { NumberFormat } from "../../../Util/numberFormater";

const Range = (props) =>{

    const [inputValue, setInputValue] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [optionState, setOptionState] = useState(false)
    const [userView, setUserView] = useState("")
    const [compState, setCompState] = useState(null)
    const [range, setRange] = useState({})
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
           label,
           options
            } = props


    useEffect(()=>{

        if(defaultValue && Object.keys(defaultValue).length > 0){
            console.log(defaultValue)
            setInputValue(formatInput(defaultValue))
            // setRange(defaultValue)

        }

    },[defaultValue])

    useEffect(()=>{
            setInputValue(formatInput(range))
            fieldToUpdate && fieldToUpdate(range)
            updateFormField && updateFormField(name,range)
    },[range])

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
    


    const handleMinimum = (e) =>{

        const value = e.target.value

        const minPrice = NumberFormat.convertToInt(value)

        if(isNaN(minPrice)){

            const rangeClone = {...range}

            delete rangeClone.min

            setRange(rangeClone)

            return
        }

        setRange({...range, min : minPrice })
   }

   const handleMaximum = (e) =>{
    
    const value = e.target.value
        const maxPrice = NumberFormat.convertToInt(value)

        if(isNaN(maxPrice)){
            const rangeClone = {...range}
            delete rangeClone.max
            setRange(rangeClone)
            return
        }

        setRange({...range, max : maxPrice })
        // setInputValue({...range, max : maxPrice })
}

    const formatInput = (range) =>{

            let symbole
            let bkLabel
            switch(name){
                case "list_price" :
                    symbole = "$"
                    bkLabel = ""
                    break
                case "beds" :
                    symbole = ""
                    bkLabel = "Bed"
                    break
                case "baths" :
                    symbole = ""
                    bkLabel = "Bath"
                    break
                default : 
                    symbole = ""
                    bkLabel = ""

            }
      

        if(Object.keys(range).length === 0){
            return ""
        }
    
        if(Object.keys(range).length === 1){
            for(let keys in range){
                return NumberFormat.abbreviateNumber(range[keys]) + " " + bkLabel
            }
        }
    
        if(Object.keys(range).length === 2){
    
            const minPrice = NumberFormat.abbreviateNumber(range.min)
            const maxPrice = NumberFormat.abbreviateNumber(range.max)
    
            
            return `${symbole}${minPrice} - ${symbole}${maxPrice} ${bkLabel}`
        }
    
       }
    
    const showStyle = optionState ? "show" : "hide"
    let symbole = name === "list_price" && "$" 

     return(
        <fieldset className="options" ref={windowRef}>
        {props.label && <h3>{props.label}</h3>}
        <div className="input-container" 
                 onClick={()=>{toggleWindow()}}>
                      <div className="select-option"
                     onClick={()=>{toggleWindow()}}
                    >
                        {inputValue}
                        {props.icon && props.icon}
                    </div>
            
        </div>
            {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}   
            <div className={`options-window ${showStyle}`  }>
            <div className="price-options">
            {label && <h3>{label}</h3>}
           
                <select
                  onChange={(e)=>{handleMinimum(e)}}
                >
                    {defaultValue && defaultValue.min && 
                    <option value={symbole + NumberFormat.abbreviateNumber(defaultValue.min)}>
                        {symbole + NumberFormat.abbreviateNumber(defaultValue.min)}
                        </option>
                        }
                    <option value={"No minimum"}>No minimum</option>
                    {options.map((price, index) =>(
                        <option 
                        key={index} 
                        value={symbole + NumberFormat.abbreviateNumber(price)}
                        >
                           {symbole + NumberFormat.abbreviateNumber(price)}
                        </option>
                    ))}
                </select>
           


          
                <select
                    onChange={(e)=>{handleMaximum(e)}}
                >
                     {defaultValue && defaultValue.max && 
                    <option value={symbole + NumberFormat.abbreviateNumber(defaultValue.max)}>
                        {symbole + NumberFormat.abbreviateNumber(defaultValue.max)}
                        </option>
                        }
                    <option value={"No maximum"}>No maximum</option>
                    {options.map((price, index) =>(
                        <option 
                        key={index} 
                        value={symbole + NumberFormat.abbreviateNumber(price)}
                        >
                           {symbole + NumberFormat.abbreviateNumber(price)}
                        </option>
                    ))}
                </select>
            </div>


       
            </div> 
            {formError[name] && <p>{formError[name]}</p>}    
         </fieldset>
     )
}

export default Range;