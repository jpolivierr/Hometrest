import "./style_Form.css"
import { useEffect, useState, useRef } from "react"
import Validator from "../../functions/Validator"
import { useFetchRequest } from "../Request/useFetchRequest"

import { URL, PATH_TYPE, COMPONENT } from "../../VAR/var"
import useDropDown from "../DropDown/useDropDown.js"
import { CapitalizeFirstLetter } from "../../functions/CapitalizeFirstLetter"

import { getZipCode, detectZipCode } from "../../functions/DetectZip"
import { priceOptions } from "../Lists/priceOptions"

//reducer
import { useSelector } from "react-redux"

// Actions
import { modalAction } from "../../_state/Actions/actionCollection"
import { filterAction } from "../../_state/Actions/actionCollection"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { NumberFormat } from "../../functions/NumberFormat"



const Forms = ({classname, title, template}) =>{

    const filterState = useSelector( state => state.filterReducer)
    const responseData = useSelector(state => state.requestStatusReducer)
    const inputRef = useRef("")


    // console.log(filterState)

    const {fields} = template
    const {dropDown} = useDropDown()
    const requestState = useSelector(state => state.requestStatusReducer)
    // action functions
    const {openModal} = bindActionCreators(modalAction, useDispatch())
    const{ setPrices,
           setBeds,
           setBaths,
           setLocation,
           setType,
           setStatus,
           setCity,
           setZipcode
        } = bindActionCreators(filterAction, useDispatch())

     const { sendRequest} = useFetchRequest()


    // Generate a dynamic state
    const generateState = () =>{
            const formSate = {}
            fields.forEach( field => {
                if(field.type !== "submit"){
                    formSate[field.stateProp] = field.value
                }
                
            })
            return formSate
        }
    const [ formInputs, setFormInputs] = useState(generateState())

    const [selectState, setSelectState] = useState({
        category: false,
        frequency: false,
        date: false
    })

    const [filterDropDown, setFilterDropDown] = useState({
        list_price : false,
        beds : false,
        baths : false,
        type : false,
        status : false
    })

    const [label, setLabel] = useState({
        list_price : "Pricing",
        beds : "Bedrooms"
    })

    const handleDrop = (element) =>{
        const filterDropDownClone = {...filterDropDown}
        for(const key in filterDropDownClone){
            if(key !== element){
                filterDropDownClone[key] = false
            }else{
                filterDropDownClone[key] = !filterDropDownClone[key]
            }
        }
        setFilterDropDown({...filterDropDown, ...filterDropDownClone})
    }

    const buttonLabel = (type, value, key) =>{
        let labelClone = {...label}
            labelClone[key] = value
            setLabel({...label, ...labelClone})

    }

    const handlePriceChange = (e, key , stateProp) =>{
       const priceSelectedClone = {...filterState.list_price}
       const value = e.target.value

       if(!NumberFormat.convertToInt(value)){
        priceSelectedClone[key] = value
       }else{
            priceSelectedClone[key] = NumberFormat.convertToInt(value) 
       }
            setPrices(priceSelectedClone)
            setFormInputs({...formInputs, [stateProp] : priceSelectedClone})
            buttonLabel(key, value, "list_price")
       
    }

    const PriceText = () =>{
        const max = filterState.list_price.max
        const min = filterState.list_price.min

        if(max < 1 && min < 1){
            return "Pricing"
        }

        if(typeof max !== "number" && typeof min === "number"){
            return NumberFormat.abbreviateNumber(min)
        }

        if(typeof min !== "number" && typeof max === "number"){
            return NumberFormat.abbreviateNumber(max)
        }

        if(typeof min === "number" && typeof max === "number"){
            return `${NumberFormat.abbreviateNumber(min)} - ${NumberFormat.abbreviateNumber(max)}`
        }

        return "Pricing"
    }

    const toggleSelectState = (element) =>{
        setSelectState({...selectState, [element]: !selectState[element]})
    }
    

    const handleInput = (e) =>{
        const value = e.target.value

        if(!getZipCode(value)){
            setZipcode("")
            setCity(value.trim())
        }else{
            setZipcode(getZipCode(value))
        }
        setLocation(value)
    }

    const handleDropwDown = (name, stateProp) =>{
        setFormInputs({...formInputs, [stateProp] : name})
    }

    const bedLabel = () =>{
        if(!filterState.beds.min){
            return "Bedrooms"
        }else{
            return `+${filterState.beds.min} ${filterState.beds.min <=1 ? "Bed" : "Beds"}`
        }
    }

    const handleBeds = (e) =>{
        e.preventDefault()
        const valueNum = Number(e.target.innerText.replace("+",""))
        if(!valueNum){
            setBeds({min : null})
        }else{
            setBeds({min: valueNum})
        }
    }

    const bathLabel = () =>{
        if(!filterState.baths.min){
            return "Bathrooms"
        }else{
            return `+${filterState.baths.min} ${filterState.baths.min <=1 ? "Bath" : "Baths"}`
        }
    }

    const handleBaths = (e) =>{
        e.preventDefault()
        const valueNum = Number(e.target.innerText.replace("+",""))
        if(!valueNum){
            setBaths({min: null})
        }else{
            setBaths({min : valueNum})
        }
    }

    const typeLabel = () =>{
            const propertyTypeClone = {...filterState}
            const asArray = propertyTypeClone.type
         
            if(asArray.length > 1){
                return `Home Type (${asArray.length})`
            }else if(asArray.length === 1){
                let data = asArray[0].replace("_", " ")
                if(asArray[0] === "multiFamily"){
                   data = "Multi-Family"
                }
                return  CapitalizeFirstLetter(data) 
            }else{
                return `Home Type`
            }
            
    }

    const handleType = (type) =>{
        const propertyTypeClone = {...filterState}
        const statusClone =  propertyTypeClone.type
         if(statusClone.includes(type)){
            const newStatus = statusClone.filter((el) => el !== type)
            setType(newStatus)
         }else{
            statusClone.push(type)
            setType(statusClone)
         }
        
   }

   const statusLabel = () =>{
    const propertyTypeClone = {...filterState}
            const asArray = propertyTypeClone.status
         
            if(asArray.length > 1){
                return `Search Type (${asArray.length})`
            }else if(asArray.length === 1){
                let data = asArray[0].split("_")[1]
                if(data === "sale"){
                   data = "Buy"
                }
                return  CapitalizeFirstLetter(data) 
            }else{
                return `Search Type`
            }
}

const handleStatus = (type) =>{
    const propertyTypeClone = {...filterState}
    const typeClone =  propertyTypeClone.status
     if(typeClone.includes(type)){
        const newType = typeClone.filter((el) => el !== type)
        setStatus(newType)
     }else{
        typeClone.push(type)
        setStatus(typeClone)
     }
    

}


       // ********************************************************************
    // Submit actions
    // ********************************************************************
    
    const submitForm = async (e) =>{
           e.preventDefault()
           const url = URL.GET_PROPERTIES
           openModal(null)
            await sendRequest("POST",url, filterState)

            if(requestState.status === 600){
                openModal(null)
            }
            if(requestState.status === 200){
                 openModal(null)
            } 

            
           
    }

      
    
    const getOption = (value) =>{
        if(!NumberFormat.abbreviateNumber(value)){
                return value
        }else{
            return NumberFormat.abbreviateNumber(value)
        }
       
    }

    // ********************************************************************
    // set field type
    // ********************************************************************
   const fieldSet = (props, id) =>{

    switch(props.type){
        case "search-type" :
                return <div key={id} style={{position: "relative"}}>

                                    <fieldset className="show-price-for-flex">
                                        <button className="flex-button" onClick={(e)=>{e.preventDefault();handleDrop("status")}}>
                                            {statusLabel()}
                                           {props.tag && props.tag} 
                                        </button>
                                        
                                    </fieldset>

                                <fieldset key={id} className={`${props.class} ${filterDropDown.status ? "show-prices" : "hide-prices"}`}>
                                {props.label && props.type !=="submit" && <label>{props.label}</label>}
                                    <ul>

                                    <li onClick={()=>{handleStatus("for_rent")}}>
                                    {filterState.status.includes("for_rent") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                            Rent
                                        </li>

                                    <li onClick={()=>{handleStatus("for_sale")}}>
                                    {filterState.status.includes("for_sale") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                            Buy
                                        </li>

                                    <li onClick={()=>{handleStatus("sold")}}>
                                    {filterState.status.includes("sold") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                            Sold
                                        </li>

                                        <li onClick={()=>{handleStatus("new_community")}}>
                                    {filterState.status.includes("new_community") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                            New community
                                        </li>

                                        <li onClick={()=>{handleStatus("ready_to_build")}}>
                                    {filterState.status.includes("ready_to_build") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                            Ready to build
                                        </li>

                                        <li onClick={()=>{handleStatus("off_market")}}>
                                    {filterState.status.includes("off_market") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                            Off market
                                        </li>


                                    </ul>
                                </fieldset>
                        </div> 

        case "home-type" :
                return <div key={id} style={{position: "relative"}}>

                                    <fieldset className="show-price-for-flex">
                                        <button className="flex-button" onClick={(e)=>{e.preventDefault();handleDrop("type")}}>
                                            {typeLabel()}
                                            {props.tag && props.tag} 
                                        </button>
                                    </fieldset>

                                <fieldset key={id} className={`${props.class} ${filterDropDown.type ? "show-prices" : "hide-prices"}`}>
                                {props.label && props.type !=="submit" && <label>{props.label}</label>}
                                    <ul>

                                    <li onClick={()=>{handleType("single_family")}}>
                                    {filterState.type.includes("single_family") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                         Single Family
                                        </li>

                                    <li onClick={()=>{handleType("multi_family")}}>
                                    {filterState.type.includes("multi_family") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                            Multi-Family
                                        </li>

                                    <li  onClick={()=>{handleType("condos")}} >
                                    {filterState.type.includes("condos") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                            Condo
                                    </li>

                                    <li  onClick={()=>{handleType("apartment")}} >
                                    {filterState.type.includes("apartment") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                            Apartment
                                    </li>

                                    <li  onClick={()=>{handleType("townhomes")}} >
                                    {filterState.type.includes("townhomes") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                            Townhomes
                                    </li>

                                    <li  onClick={()=>{handleType("land")}} >
                                    {filterState.type.includes("land") ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                            Land
                                    </li>
                                    </ul>
                                </fieldset>
                        </div> 
                   
        case "bath-options" :
            return <div key={id} style={{position: "relative"}}>
                 <fieldset className="show-price-for-flex">
                        <button className="flex-button" onClick={(e)=>{e.preventDefault();handleDrop("baths")}}>
                            {bathLabel()}
                            {props.tag && props.tag} 
                        </button>
                    </fieldset>
                 <fieldset key={id} className={`${props.class} ${filterDropDown.baths ? "show-prices" : "hide-prices"}`}>
                        {props.label && props.type !=="submit" && <label>{props.label}</label>}
                        <button 
                             className={!filterState.baths.min ? "active-status" : ""}
                             onClick={(e)=>{handleBaths(e);
                        }}>Any</button>
                        <button 
                             className={filterState.baths.min === 1  ? "active-status" : ""}
                             onClick={(e)=>{handleBaths(e);
                        }}>
                            +1
                        </button>
                        <button              
                           className={filterState.baths.min === 2  ? "active-status" : ""}
                           onClick={(e)=>{
                            handleBaths(e);
                        }}>
                              +2
                        </button>
                        <button 
                           className={filterState.baths.min === 3  ? "active-status" : ""}
                           onClick={(e)=>{
                            handleBaths(e);
                        }}>
                            +3
                        </button>
                        <button 
                           className={filterState.baths.min === 4  ? "active-status" : ""}
                           onClick={(e)=>{
                            handleBaths(e);
                        }}>
                            +4
                        </button>
                        <button 
                           className={filterState.baths.min === 5  ? "active-status" : ""}
                           onClick={(e)=>{
                            handleBaths(e);
                        }}>
                            +5
                        </button>
                        <button 
                           className={filterState.baths.min === 6  ? "active-status" : ""}
                           onClick={(e)=>{
                            handleBaths(e);
                        }}>
                            +6
                        </button>
                   </fieldset>
            </div>
        case "bed-options" :
                return <div key={id} style={{position: "relative"}}>
                     <fieldset className="show-price-for-flex">
                            <button className="flex-button" onClick={(e)=>{e.preventDefault();handleDrop("beds")}}>
                                {bedLabel()}
                                {props.tag && props.tag} 
                            </button>
                        </fieldset>
                     <fieldset key={id} className={`${props.class} ${filterDropDown.beds ? "show-prices" : "hide-prices"}`}>
                            {props.label && props.type !=="submit" && <label>{props.label}</label>}
                            <button 
                                 className={!filterState.beds.min ? "active-status" : ""}
                                 onClick={(e)=>{handleBeds(e);
                            }}>Any</button>
                            <button 
                                 className={filterState.beds.min === 1  ? "active-status" : ""}
                                 onClick={(e)=>{handleBeds(e);
                            }}>
                                +1
                            </button>
                            <button              
                               className={filterState.beds.min === 2  ? "active-status" : ""}
                               onClick={(e)=>{
                                handleBeds(e);
                            }}>
                                  +2
                            </button>
                            <button 
                               className={filterState.beds.min === 3  ? "active-status" : ""}
                               onClick={(e)=>{
                                handleBeds(e);
                            }}>
                                +3
                            </button>
                            <button 
                               className={filterState.beds.min === 4  ? "active-status" : ""}
                               onClick={(e)=>{
                                handleBeds(e);
                            }}>
                                +4
                            </button>
                            <button 
                               className={filterState.beds.min === 5  ? "active-status" : ""}
                               onClick={(e)=>{
                                handleBeds(e);
                            }}>
                                +5
                            </button>
                            <button 
                               className={filterState.beds.min === 6  ? "active-status" : ""}
                               onClick={(e)=>{
                                handleBeds(e);
                            }}>
                                +6
                            </button>
                       </fieldset>
                </div>
                       
        case "price-options" :
                return  ( <div key={id} style={{position: "relative"}}>
                        <fieldset className="show-price-for-flex">
                            <button className="flex-button"  onClick={(e)=>{e.preventDefault();handleDrop("list_price")}}>
                                {PriceText()}
                                {props.tag && props.tag} 
                            </button>
                        </fieldset>

                        <fieldset  className={`${props.class} ${filterDropDown.list_price ? "show-prices" : "hide-prices"}`}>
                              {props.label && props.type !=="submit" && <label>{props.label}</label>}
                              <div>
                                <select 
                                value={getOption(filterState.list_price.min)}
                                onChange={(e)=>{
                                    handlePriceChange(e,"min","list_price")
                                }}>
                                <option>No minimum</option>
                                {priceOptions.map((price, index) => (
                                <option 
                                     key={index} 
                                     value={NumberFormat.abbreviateNumber(price)}
                                    // selected={getOption(price, filterState.prices.min)}
                                     >
                                        ${NumberFormat.abbreviateNumber(price)}
                                </option>
                                ))}                            
                              </select >
                              <i className="fa-solid fa-chevron-down"></i>
                              </div>
                              
                              <div>
                              <select onChange={(e)=>{
                                    handlePriceChange(e,"max","list_price")

                                }}
                                value={getOption(filterState.list_price.max)}
                                >
                                <option>No Maximum</option>
                                {priceOptions.map((price, index) => (
                                    <option 
                                           key={index}
                                           value={NumberFormat.abbreviateNumber(price)}
                                    >
                                        ${NumberFormat.abbreviateNumber(price)}
                                    </option>
                                ))}
                              </select>
                              <i className="fa-solid fa-chevron-down"></i>
                              </div>
                              
                         </fieldset>
                </div>)
        case "location" :
                return  ( <fieldset key={id} className={props.class}>
                              {props.label && props.type !=="submit" && <label>{props.label}</label>}
                              <input ref={inputRef} type={props.type} 
                                name={props.name}
                                value={filterState.location}
                                onChange={(e)=> handleInput(e, props.stateProp)}
                                placeholder={props.placeholder}
                                />
                                {props.tag && props.tag}
                         </fieldset>)
                         
        case "select" :
                return <fieldset key={id} className={`select-field dr-style ${props.class}`}>
                            {props.label && props.type !=="submit" && <label>{props.label}</label>}
                            <input type={props.type} 
                                name={props.name}
                                value={formInputs[props.stateProp]}
                                readOnly={true}
                                onChange={handleDropwDown}
                                onClick={()=> toggleSelectState(props.name)}
                                />
                                {selectState[props.name] && dropDown(handleDropwDown,props.stateProp,props.name,toggleSelectState)}
                                <i className="fa-solid fa-chevron-down"></i>
                       </fieldset>
                         
        case "submit" :
        return <button key={id} onClick={(e)=> submitForm(e)} 
                       className={props.class}>
                        {props.tag && props.tag}
                        {props.label}
                </button>
                          
        default :
            return null        
    }
   }

   // ********************************************************************
    // Render form
    // ********************************************************************

    return(
        <form className={classname}>
            <h2>{title}</h2>

                {fields.map((field, index)=>(

                        fieldSet( field, index)
                    
               ))}

        </form>
    )
}

export default Forms