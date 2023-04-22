import {useEffect, useRef, useState } from "react";
import fieldView from "../Util/fieldView";
import { cleanInput } from "../Util/cleanInput";
import RangeOptions from "../../../components/priceOptions/rangeOptions";
import { NumberFormat } from "../../../Util/numberFormater";

const RangeNoDropDown = (props) =>{

    const minRef = useRef(null)
    const maxRef = useRef(null)
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

            setInputValue(formatInput(defaultValue))

            // setRange(defaultValue)

        }else{

            setInputValue("")

        }

    },[defaultValue])

    useEffect(()=>{

        if(defaultValue){

            const minElement = minRef.current
            const minValue = formatSingleInput(defaultValue.min)
            const minIndex = Array.from(minElement.options).findIndex(option => option.value === minValue);

            minElement.selectedIndex = minIndex === -1 ? 0 : minIndex

            const maxElement = maxRef.current
            const maxValue = formatSingleInput(defaultValue.max)
            const maxIndex = Array.from(maxElement.options).findIndex(option => option.value === maxValue);

            maxElement.selectedIndex = maxIndex === -1 ? 0 : maxIndex
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


    const handleMinimum = (e) =>{

        const value = e.target.value

        const minPrice = NumberFormat.convertToInt(value)

        if(isNaN(minPrice)){

            const rangeClone = {...defaultValue}

            delete rangeClone.min

            setRange(rangeClone)

            return
        }

        const rangeClone = {...defaultValue}
        rangeClone.min = minPrice

        setRange(rangeClone)
   }

   const handleMaximum = (e) =>{
    
    const value = e.target.value
        const maxPrice = NumberFormat.convertToInt(value)

        if(isNaN(maxPrice)){

            const rangeClone = {...defaultValue}

            delete rangeClone.max

            setRange(rangeClone)

            return
        }

        const rangeClone = {...defaultValue}
        rangeClone.max = maxPrice

        setRange(rangeClone)

 
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
                return symbole + NumberFormat.abbreviateNumber(range[keys]) + " " + bkLabel
            }
        }
    
        if(Object.keys(range).length === 2){
    
            const minPrice = NumberFormat.abbreviateNumber(range.min)
            const maxPrice = NumberFormat.abbreviateNumber(range.max)
    
            
            return `${symbole}${minPrice} - ${symbole}${maxPrice} ${bkLabel}`
        }
    
       }

       const formatSingleInput = (value) =>{

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

                return `${symbole}${NumberFormat.abbreviateNumber(value)} ${bkLabel}`

       }


     return(
        <fieldset className="options" ref={windowRef}>
            {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}   
           
            <div className="price-options">
            {label && <h3>{label}</h3>}
           
                <select
                ref={minRef}
                  onChange={(e)=>{handleMinimum(e)}}
                >
                    {
                    defaultValue && defaultValue.min && 
                    <>
                    <option value={formatSingleInput(defaultValue.min)}>
                        {formatSingleInput(defaultValue.min)}
                        </option>
                    </>
    
                        }
                    <option value={"No minimum"}>Min</option>
                    {options.map((price, index) =>(
                        <option 
                        key={index} 
                        value={formatSingleInput(price)}
                        >
                           {formatSingleInput(price)}
                        </option>
                    ))}
                </select>
           


          
                <select
                    ref={maxRef}
                    onChange={(e)=>{handleMaximum(e)}}
                >
                     {
                     
                     defaultValue && defaultValue.max && 
                    <option value={formatSingleInput(defaultValue.max)}>
                        {formatSingleInput(defaultValue.max)}
                        </option>


                        }
                    <option value={"No maximum"}>Max</option>
                    {options.map((price, index) =>(
                        <option 
                        key={index} 
                        value={formatSingleInput(price)}
                        >
                           {formatSingleInput(price)}
                        </option>
                    ))}
                </select>
            


       
            </div> 
            {formError[name] && <p>{formError[name]}</p>}    
         </fieldset>
     )
}

export default RangeNoDropDown;