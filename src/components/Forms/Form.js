import "./style_Form.css"
import { useState } from "react"
import Validator from "../../functions/Validator"
import { useFetchRequest } from "../Request/useFetchRequest"

import { URL, PATH_TYPE, COMPONENT } from "../../VAR/var"
import useDropDown from "../DropDown/useDropDown.js"

//reducer
import { useSelector } from "react-redux"

// Actions
import { modalAction } from "../../_state/Actions/actionCollection"
import { filterAction } from "../../_state/Actions/actionCollection"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { NumberFormat } from "../../functions/NumberFormat"



const Forms = ({classname, title, template, url, method}) =>{

    const filterState = useSelector( state => state.filterReducer)
    // console.log(filterState)

    const {fields} = template
    const {dropDown} = useDropDown()
    const requestState = useSelector(state => state.requestStatusReducer)
    // action functions
    const {openModal} = bindActionCreators(modalAction, useDispatch())
    const{setPrices, setBeds, setBaths} = bindActionCreators(filterAction, useDispatch())

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

    const [status, setStatus] = useState({
        rent: false,
        buy : false
    })

    const [propertyType, setPropertyType] = useState({
        house: false,
        multiFamily: false,
        condo : false,
        townHouse : false,
        land : false,
        apartment : false
    })

    const [filterDropDown, setFilterDropDown] = useState({
        prices : false,
        beds : false,
        baths : false
    })

    const [label, setLabel] = useState({
        prices : "Pricing",
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
       const priceSelectedClone = {...filterState.prices}
       const value = e.target.value

       if(!NumberFormat.convertToInt(value)){
        priceSelectedClone[key] = value
       }else{
            priceSelectedClone[key] = NumberFormat.convertToInt(value) 
       }
            setPrices(priceSelectedClone)
            setFormInputs({...formInputs, [stateProp] : priceSelectedClone})
            buttonLabel(key, value, "prices")
       
    }

    const PriceText = () =>{
        const max = filterState.prices.max
        const min = filterState.prices.min

        if(typeof max !== "number" && typeof min !== "number"){
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
    }

    const handlePropertyType = (type, stateProp) =>{
         const propertyTypeClone = {...propertyType}
         propertyTypeClone[type] = !propertyTypeClone[type]
         setPropertyType({...propertyType, ...propertyTypeClone})
         setFormInputs({...formInputs, [stateProp] : propertyTypeClone})
    }

    const handleStatus = (e, data, stateProp) =>{
        e.preventDefault()

        const statusClone = {...status}
        
        if( data === 'rent'){
            setStatus({...status, rent: !status.rent})
            statusClone.rent = !statusClone.rent
        }
        if( data === 'buy'){
            setStatus({...status, buy: !status.buy})
            statusClone.buy = !statusClone.buy
        }
        setFormInputs({...formInputs, [stateProp] : statusClone})

    }

    const toggleSelectState = (element) =>{
        setSelectState({...selectState, [element]: !selectState[element]})
    }
    

    const handleInput = (e,stateProp) =>{
        setFormInputs({...formInputs, [stateProp] : e.target.value})
    }

    const handleDropwDown = (name, stateProp) =>{
        setFormInputs({...formInputs, [stateProp] : name})
    }

    const bedLabel = () =>{
        if(!Number(filterState.beds)){
            return "Bedrooms"
        }else{
            return `+${filterState.beds} ${filterState.beds <=1 ? "Bed" : "Beds"}`
        }
    }

    const handleBeds = (e) =>{
        e.preventDefault()
        const value = e.target.innerText.replace("+","")
        const valueNum = Number(e.target.innerText.replace("+",""))
        if(!valueNum){
            setBeds(value)
        }else{
            setBeds(valueNum)
        }
    }

    const bathLabel = () =>{
        if(!Number(filterState.baths)){
            return "Bathrooms"
        }else{
            return `+${filterState.baths} ${filterState.baths <=1 ? "Bath" : "Baths"}`
        }
    }

    const handleBaths = (e) =>{
        e.preventDefault()
        const value = e.target.innerText.replace("+","")
        const valueNum = Number(e.target.innerText.replace("+",""))
        if(!valueNum){
            setBaths(value)
        }else{
            setBaths(valueNum)
        }
    }


       // ********************************************************************
    // Submit actions
    // ********************************************************************
    
    const submitForm = async (e) =>{
           
            e.preventDefault()

            await sendRequest(method,url, filterState)

            if(requestState.status === 600){
                openModal(null)
            }
            if(requestState.status === 200){
                 openModal(null)
            } 
           
    }

    const priceOptions = [
                     10000,
                     20000,
                     30000,
                     40000,
                     50000,
                     100000,
                     150000,
                     200000,
                     250000,
                     300000,
                     350000,
                     400000,
                     450000,
                     500000
                    ]

      
    
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
        case "bath-options" :
            return <div key={id} style={{position: "relative"}}>
                 <fieldset className="show-price-for-flex">
                        <button className="flex-button" onClick={(e)=>{e.preventDefault();handleDrop("baths")}}>
                            {bathLabel()}
                        </button>
                    </fieldset>
                 <fieldset key={id} className={`${props.class} ${filterDropDown.baths ? "show-prices" : "hide-prices"}`}>
                        {props.label && props.type !=="submit" && <label>{props.label}</label>}
                        <button 
                             className={filterState.baths === "Any"  ? "active-status" : ""}
                             onClick={(e)=>{handleBaths(e);
                        }}>Any</button>
                        <button 
                             className={filterState.baths === 1  ? "active-status" : ""}
                             onClick={(e)=>{handleBaths(e);
                        }}>
                            +1
                        </button>
                        <button              
                           className={filterState.baths === 2  ? "active-status" : ""}
                           onClick={(e)=>{
                            handleBaths(e);
                        }}>
                              +2
                        </button>
                        <button 
                           className={filterState.baths === 3  ? "active-status" : ""}
                           onClick={(e)=>{
                            handleBaths(e);
                        }}>
                            +3
                        </button>
                        <button 
                           className={filterState.baths === 4  ? "active-status" : ""}
                           onClick={(e)=>{
                            handleBaths(e);
                        }}>
                            +4
                        </button>
                        <button 
                           className={filterState.baths === 5  ? "active-status" : ""}
                           onClick={(e)=>{
                            handleBaths(e);
                        }}>
                            +5
                        </button>
                        <button 
                           className={filterState.baths === 6  ? "active-status" : ""}
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
                            </button>
                        </fieldset>
                     <fieldset key={id} className={`${props.class} ${filterDropDown.beds ? "show-prices" : "hide-prices"}`}>
                            {props.label && props.type !=="submit" && <label>{props.label}</label>}
                            <button 
                                 className={filterState.beds === "Any"  ? "active-status" : ""}
                                 onClick={(e)=>{handleBeds(e);
                            }}>Any</button>
                            <button 
                                 className={filterState.beds === 1  ? "active-status" : ""}
                                 onClick={(e)=>{handleBeds(e);
                            }}>
                                +1
                            </button>
                            <button              
                               className={filterState.beds === 2  ? "active-status" : ""}
                               onClick={(e)=>{
                                handleBeds(e);
                            }}>
                                  +2
                            </button>
                            <button 
                               className={filterState.beds === 3  ? "active-status" : ""}
                               onClick={(e)=>{
                                handleBeds(e);
                            }}>
                                +3
                            </button>
                            <button 
                               className={filterState.beds === 4  ? "active-status" : ""}
                               onClick={(e)=>{
                                handleBeds(e);
                            }}>
                                +4
                            </button>
                            <button 
                               className={filterState.beds === 5  ? "active-status" : ""}
                               onClick={(e)=>{
                                handleBeds(e);
                            }}>
                                +5
                            </button>
                            <button 
                               className={filterState.beds === 6  ? "active-status" : ""}
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
                            <button className="flex-button"  onClick={(e)=>{e.preventDefault();handleDrop("prices")}}>
                                {PriceText()}
                            </button>
                        </fieldset>

                        <fieldset  className={`${props.class} ${filterDropDown.prices ? "show-prices" : "hide-prices"}`}>
                              {props.label && props.type !=="submit" && <label>{props.label}</label>}
                              <div>
                                <select 
                                value={getOption(filterState.prices.min)}
                                onChange={(e)=>{
                                    handlePriceChange(e,"min",props.stateProp)
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
                                    handlePriceChange(e,"max",props.stateProp)

                                }}
                                value={getOption(filterState.prices.max)}
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
                              
                                {props.tag && props.tag}
                         </fieldset>
                </div>)
        case "location" :
                return  ( <fieldset key={id} className={props.class}>
                              {props.label && props.type !=="submit" && <label>{props.label}</label>}
                              <input type={props.type} 
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
        case "status" :
                return <fieldset key={id} className={`${props.class}`}>
                            {props.label && props.type !=="submit" && <label>{props.label}</label>}

                            <button 
                                 className={status.buy ? "active-status" : ""}
                                 onClick={(e)=>{handleStatus(e,"buy",props.stateProp);
                            }}>
                                Buy
                            </button>
                            <button 
                               className={status.rent ? "active-status" : ""}
                               onClick={(e)=>{
                                handleStatus(e,"rent",props.stateProp);
                            }}>
                                Rent
                            </button>
                       </fieldset>
        case "list" :
                return <fieldset key={id} className={`${props.class}`}>
                    {props.label && props.type !=="submit" && <label>{props.label}</label>}
                        <ul>

                           <li onClick={()=>{handlePropertyType("house",props.stateProp)}}>
                           {propertyType.house ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                House
                            </li>

                           <li onClick={()=>{handlePropertyType("multiFamily",props.stateProp)}}>
                           {propertyType.multiFamily ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                Multi-Family
                            </li>

                           <li  onClick={()=>{handlePropertyType("condo",props.stateProp)}} >
                           {propertyType.condo ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                Condo
                           </li>

                           <li  onClick={()=>{handlePropertyType("apartment",props.stateProp)}} >
                           {propertyType.apartment ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                Apartment
                           </li>

                           <li  onClick={()=>{handlePropertyType("townHouse",props.stateProp)}} >
                           {propertyType.townHouse ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                TownHouse
                           </li>

                           <li  onClick={()=>{handlePropertyType("land",props.stateProp)}} >
                           {propertyType.land ? <i className="fa-solid fa-square-check"></i> : <i className="fa-regular fa-square"></i>}
                                Land
                           </li>
                        </ul>
                      </fieldset>
                         
        case "submit" :
        return <button key={id} onClick={(e)=> submitForm(e)} 
                       className={props.class}>
                        {props.label}
                        {props.tag && props.tag}
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