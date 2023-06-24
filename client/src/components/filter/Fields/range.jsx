import {useEffect, useRef, useState } from "react";
import { cleanInput } from "../../../Util/cleanInput";
import Buttons from "../../../lib/Buttons/button"
import fieldView from "../../../Util/fieldView";
import capitalizeWords from "../../../Util/capitalizedWords";
import { formatNumber, abbreviateNumber } from "../../../Util/formatNumber";

const Range = (props) =>{

    const [optionState, setOptionState] = useState(false)
    const windowRef = useRef(null);

    const {
           name,
           label,
           updateField,
           elementClass,
           value,
           optionsTitle,
           dollarSign,
           minOption,
           maxOption,
           optionSuffix,
           dropDown
            } = props

      const symbole = dollarSign ? "$" : ""      


    useEffect(()=>{
    
        const addEvent = (e) =>{

            if(windowRef.current && !windowRef.current.contains(e.target)){

                setOptionState(false)

            }

        }
        document.addEventListener("click",addEvent, true)

    },[])

    const getSuffix = (count) =>{
        
        const s = count > 1 ? "s" : ""

        return optionSuffix ? capitalizeWords(optionSuffix) + s : ""

    }

   
    const handleMinPrice = (e) =>{

        const result = Number(e.target.value)
        const valueClone = {...value}
        valueClone.min = result
        updateField(name, valueClone)
          
    }

    const handleMaxPrice = (e) =>{

        const result = Number(e.target.value)
        const valueClone = {...value}
        valueClone.max = result
        updateField(name, valueClone)
          
    }

    const showPriceRangeSelected = () =>{

        if(value.min > 0 && value.max > 0){
            return `${symbole}${abbreviateNumber(value.min)} - ${symbole}${abbreviateNumber(value.max)} ${getSuffix(value.max)}`
        }

        if(value.min > 0){
            return `${symbole}${abbreviateNumber(value.min)} ${getSuffix(value.min)}`
        }

        if(value.max > 0){
            return `${symbole}${abbreviateNumber(value.max)} ${getSuffix(value.max)}`
        }

        return label

    }


    const toggleWindow = () =>{

        setOptionState(!optionState)

    }
    

    const showStyle = optionState ? "show" : "hide"

     return(
        <fieldset className={`${elementClass} options`} ref={windowRef}>

         {/* label */}
        {props.label && <label>{props.label}</label>}
    
          {/* Input value
        <div className={`select-option ${value.min > 0 || value.max > 0 ? "has-value" : ""}`}
            onClick={()=>{toggleWindow()}}
        >
            {value.length === 0 && props.label }
             {capitalizeWords(showPriceRangeSelected()) }
            {props.icon && props.icon}
        </div> */}

       {
          !dropDown && 
          <>
          {optionsTitle && <h3>{optionsTitle}</h3>}
            <ul className="option-range">
                        <li>
                                <h3>Minimum</h3>
                                <select onChange={handleMinPrice}>
                                {
                                        minOption.map((option, index) => (
                                            <option 
                                            key={index}
                                            value={option}
                                            >
                                            {option === 0 ? "Any" : symbole + abbreviateNumber(option) + " " + getSuffix(option)}  
                                            
                                    </option>
                                        ))
                                }
                                </select>
                                
                        </li>

                        <li>
                                <h3>Maximum</h3>
                                <select onChange={handleMaxPrice}>

                                    {
                                        maxOption.map((option, index) => (
                                            <option 
                                            key={index}
                                            value={option}>
                                            {option === 0 ? "Any" : symbole + abbreviateNumber(option) + " " + getSuffix(option)} 
                                    </option>
                                        ))
                                    }
                                </select>
                        </li>
                        </ul>
          </>
                   
       
       } 

        
                     
        {dropDown && 
            <>

            {/************************************************ */}
            {/* INPUT VALUE  */}
            {/************************************************ */}
                <div className={`select-option ${value.min > 0 || value.max > 0 ? "has-value" : ""}`}
                        onClick={()=>{toggleWindow()}}
                    >
                        {value.length === 0 && props.label }
                        {capitalizeWords(showPriceRangeSelected()) }
                        {props.icon && props.icon}
                </div>


            {/************************************************ */}
            {/* DROP DOWN  */}
            {/************************************************ */}
            <div className={`option-window-container ${showStyle}`}>
                        <div onClick={()=>{toggleWindow()}} className={`select-bk`}></div>
                        
                        <div className={`options-window ${showStyle}`  }>

                        {optionsTitle && <h3>{optionsTitle}</h3>}
                        {/* {props.comp} */}
                            <ul className="option-range">
                            <li>
                                    <h3>Minimum</h3>
                                    <select onChange={handleMinPrice}>
                                    {
                                            minOption.map((option, index) => (
                                                <option 
                                                key={index}
                                                value={option}
                                                >
                                                {option === 0 ? "Any" : symbole + abbreviateNumber(option) + " " + getSuffix(option)}  
                                                
                                        </option>
                                            ))
                                    }
                                    </select>
                                    
                            </li>

                            <li>
                                    <h3>Maximum</h3>
                                    <select onChange={handleMaxPrice}>

                                        {
                                            maxOption.map((option, index) => (
                                                <option 
                                                key={index}
                                                value={option}>
                                                {option === 0 ? "Any" : symbole + abbreviateNumber(option) + " " + getSuffix(option)} 
                                        </option>
                                            ))
                                        }
                                    </select>
                            </li>
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

export default Range;