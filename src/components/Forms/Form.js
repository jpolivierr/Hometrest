import "./style_Form.css"
import { useState } from "react"
import Validator from "../../functions/Validator"
import { useFetchRequest } from "../Request/useFetchRequest"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import useDropDown from "../DropDown/useDropDown.js"

// Actions
import { modalAction } from "../../_state/Actions/actionCollection"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { NumberFormat } from "../../functions/NumberFormat"
import { URL, PATH_TYPE, COMPONENT } from "../../VAR/var"

const Forms = ({classname, title, template, url, method}) =>{

    const {fields} = template
    const {dropDown} = useDropDown()
    const requestState = useSelector(state => state.requestStatusReducer)

    const {openModal} = bindActionCreators(modalAction, useDispatch())
    const navigate = useNavigate()

    const validator = new Validator()

     const [errors, setErrors] = useState({})

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

    const [priceSelected, setPriceSelected] = useState({
        min: "No minimum",
        max : "No maximum"
    })

    const [filterDropDown, setFilterDropDown] = useState({
        prices : false,
        beds : false
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
       const priceSelectedClone = {...priceSelected}
       const value = e.target.value
       priceSelectedClone[key] = NumberFormat.convertToInt(value) 
       setPriceSelected({...priceSelected, ...priceSelectedClone})
       console.log(priceSelectedClone)
       setFormInputs({...formInputs, [stateProp] : priceSelectedClone})
       buttonLabel(key, value, "prices")
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


       // ********************************************************************
    // Submit actions
    // ********************************************************************
    
    const submitForm = async (e) =>{
           
            e.preventDefault()
        
            let dataCopy = JSON.parse(JSON.stringify(formInputs))

            await sendRequest(method,url, dataCopy )

            if(requestState.status === 600){
                openModal(null)
            }
            if(requestState.status === 200){
                 openModal(null)
            } 
           
    }

    const prices = [
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
      
    


    // ********************************************************************
    // set field type
    // ********************************************************************
   const fieldSet = (props, id) =>{

    switch(props.type){
        case "bed-options" :
                return <div key={id} style={{position: "relative"}}>
                     <fieldset className="show-price-for-flex">
                            <button className="flex-button" onClick={(e)=>{e.preventDefault();handleDrop("beds")}}>
                                {label.beds}
                            </button>
                        </fieldset>
                     <fieldset key={id} className={`${props.class} ${filterDropDown.beds ? "show-prices" : "hide-prices"}`}>
                            {props.label && props.type !=="submit" && <label>{props.label}</label>}

                            <button 
                                 className={status.buy ? "active-status" : ""}
                                 onClick={(e)=>{handleStatus(e,"buy",props.stateProp);
                            }}>
                                +1
                            </button>
                            <button 
                               className={status.rent ? "active-status" : ""}
                               onClick={(e)=>{
                                handleStatus(e,"rent",props.stateProp);
                            }}>
                                  +2
                            </button>
                            <button 
                               className={status.rent ? "active-status" : ""}
                               onClick={(e)=>{
                                handleStatus(e,"rent",props.stateProp);
                            }}>
                                +3
                            </button>
                            <button 
                               className={status.rent ? "active-status" : ""}
                               onClick={(e)=>{
                                handleStatus(e,"rent",props.stateProp);
                            }}>
                                +4
                            </button>
                            <button 
                               className={status.rent ? "active-status" : ""}
                               onClick={(e)=>{
                                handleStatus(e,"rent",props.stateProp);
                            }}>
                                +5
                            </button>
                            <button 
                               className={status.rent ? "active-status" : ""}
                               onClick={(e)=>{
                                handleStatus(e,"rent",props.stateProp);
                            }}>
                                +6
                            </button>
                       </fieldset>
                </div>
                       
        case "price-options" :
                return  ( <div key={id} style={{position: "relative"}}>
                        <fieldset className="show-price-for-flex">
                            <button className="flex-button"  onClick={(e)=>{e.preventDefault();handleDrop("prices")}}>
                                {label.prices}
                            </button>
                        </fieldset>
                        <fieldset  className={`${props.class} ${filterDropDown.prices ? "show-prices" : "hide-prices"}`}>
                              {props.label && props.type !=="submit" && <label>{props.label}</label>}
                              <div>
                                <select onChange={(e)=>{
                                    handlePriceChange(e,"min",props.stateProp)
                                }}>
                                <option>No Minimum</option>
                                {prices.map((price, index) => (
                                    <option key={index}>${NumberFormat.abbreviateNumber(price) }</option>
                                ))}                            
                              </select >
                              <i className="fa-solid fa-chevron-down"></i>
                              </div>
                              
                              <div>
                              <select onChange={(e)=>{
                                    handlePriceChange(e,"max",props.stateProp)
                                }}>
                                <option>No Maximum</option>
                                {prices.map((price, index) => (
                                    <option key={index}>${NumberFormat.abbreviateNumber(price) }</option>
                                ))}
                              </select>
                              <i className="fa-solid fa-chevron-down"></i>
                              </div>
                              
                                {props.tag && props.tag}
                         </fieldset>
                </div>)
        case "text" :
                return  ( <fieldset key={id} className={props.class}>
                              {props.label && props.type !=="submit" && <label>{props.label}</label>}
                              <input type={props.type} 
                                name={props.name}
                                value={formInputs[props.stateProp]}
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