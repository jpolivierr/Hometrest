import "./style_Web_Filter.css"
import { filterAction } from "../../_state/Actions/actionCollection"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { useState } from "react"
import { CapitalizeFirstLetter } from "../../functions/CapitalizeFirstLetter"
import { priceOptions } from "../Lists/priceOptions"
import { NumberFormat } from "../../functions/NumberFormat"
import { Link } from "react-router-dom"

import { getZipCode } from "../../functions/DetectZip"

const WebFilter = () =>{

    const filterState = useSelector( state => state.filterReducer)

    const{ setPrices,
        setBeds,
        setBaths,
        setLocation,
        setType,
        setStatus,
        setCity,
        setZipcode
     } = bindActionCreators(filterAction, useDispatch())

     

     const [filterDropDown, setFilterDropDown] = useState({
        list_price : false,
        beds : false,
        baths : false,
        type : false,
        status : false
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

    const typeLabel = () =>{
        const propertyTypeClone = {...filterState}
        const asArray = propertyTypeClone.type
     
        if(asArray.length > 1){
            return `Property Type (${asArray.length})`
        }else if(asArray.length === 1){
            let data = asArray[0].replace("_", " ")
            if(asArray[0] === "multiFamily"){
               data = "Multi-Family"
            }
            return  CapitalizeFirstLetter(data) 
        }else{
            return `Single Family`
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

   const PriceText = () =>{
    const max = filterState.list_price.max
    const min = filterState.list_price.min

    if(max < 1 && min < 1){
        return "No minimum"
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

   const handlePriceChange = (e, key , stateProp) =>{
    const priceSelectedClone = {...filterState.list_price}
    const value = e.target.value

    if(!NumberFormat.convertToInt(value)){
     priceSelectedClone[key] = value
    }else{
         priceSelectedClone[key] = NumberFormat.convertToInt(value) 
    }
         setPrices(priceSelectedClone)    
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

   const getOption = (value) =>{
    if(!NumberFormat.abbreviateNumber(value)){
            return value
    }else{
        return NumberFormat.abbreviateNumber(value)
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

   const [activeLink, setActiveLink] = useState({
      buy: true,
      rent: false,
      sold: false,
      newCommunity: false,
      readyToBuild: false,
      offMarket: false
   })


    return(
        <section className="quick-search main-shadow">
        <form action="" className="flex-form">
            <fieldset>
                <h3>Quick Search</h3>
                 <ul className="type-list">
                    <li onClick={()=>{setActiveLink({...activeLink, buy: !activeLink.buy}); handleStatus("for_sale"); }} className={activeLink.buy ? "q-active" : ""}>Buy</li>
                    <li onClick={()=>{setActiveLink({...activeLink, rent: !activeLink.rent}); handleStatus("for_rent"); }} className={activeLink.rent ? "q-active" : ""}>Rent</li>
                    <li onClick={()=>{setActiveLink({...activeLink, sold: !activeLink.sold}); handleStatus("sold"); }} className={activeLink.sold ? "q-active" : ""}>Sold</li>
                    <li onClick={()=>{setActiveLink({...activeLink, newCommunity: !activeLink.newCommunity}); handleStatus("new_community"); }} className={activeLink.newCommunity ? "q-active" : ""}>New community</li>
                    <li onClick={()=>{setActiveLink({...activeLink, readyToBuild: !activeLink.readyToBuild}); handleStatus("ready_to_build"); }} className={activeLink.readyToBuild? "q-active" : ""}>Ready to build</li>
                    <li onClick={()=>{setActiveLink({...activeLink, offMarket: !activeLink.offMarket}); handleStatus("off_market"); }} className={activeLink.offMarket? "q-active" : ""}>Off market</li>
                 </ul>
            </fieldset>
            <fieldset className="q-location">
                <label>Location</label>
                <input 
                         type="text" 
                         name="location"
                         placeholder="Enter a City or zipcode"
                         value={filterState.location}
                         onChange={(e)=> handleInput(e)}   />
            </fieldset>
            <fieldset className="q-type" style={{position: "relative"}}>
                <label> Property type</label>
                <input readOnly 
                       onClick={(e)=>{e.preventDefault();handleDrop("type")}} 
                       type="text" name="property" 
                       placeholder={typeLabel()}
                    //    value={statusLabel()}
                       />
                <i className="fa-solid fa-caret-down"></i>
                <fieldset className={`home-type ${filterDropDown.type ? "show-prices" : "hide-prices"}`}>
                               <label>Property type</label>
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
            </fieldset>
            <fieldset className="q-price">
                <label>Price range</label>
                <input 
                       readOnly 
                       onClick={(e)=>{e.preventDefault();handleDrop("list_price")}} 
                       type="text" 
                       name="property" 
                       placeholder={PriceText()}/>
                <i className="fa-solid fa-caret-down"></i>
                <fieldset  className={`price-options ${filterDropDown.list_price ? "show-prices" : "hide-prices"}`}>
                              <label>Price</label>
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
            </fieldset>
            <fieldset className="q-beds">
                <label>Beds</label>
                <input 
                      readOnly
                      onClick={(e)=>{e.preventDefault();handleDrop("beds")}}
                      type="text" 
                      name="property"
                      placeholder={bedLabel()}
                      
                      />
                <i className="fa-solid fa-caret-down"></i>
                <fieldset className={`bed-options ${filterDropDown.beds ? "show-prices" : "hide-prices"}`}>
                            <label>Bedrooms</label>
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
            </fieldset>
            <fieldset className="q-baths">
                <label>Baths</label>
                <input 
                      readOnly
                      onClick={(e)=>{e.preventDefault();handleDrop("baths")}}
                      type="text" 
                      name="property" 
                      placeholder={bathLabel()}/>
                <i className="fa-solid fa-caret-down"></i>
                <fieldset className={`bed-options ${filterDropDown.baths ? "show-prices" : "hide-prices"}`}>
                        <label>Bathrooms</label>
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
            </fieldset>
            <Link className="q-search" to="/search">
            <button className="main-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
            </Link>
            
        </form>
    </section>
    )
}

export default WebFilter