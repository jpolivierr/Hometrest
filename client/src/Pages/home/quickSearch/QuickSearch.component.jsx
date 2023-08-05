import { useState, useCallback, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { parseAddress2 } from "../../../Util/parseAddress"
import { propertyTypeList } from "../../../features/filter/lists/propertyType"
import "./QuickSearch.style.css"
import { Actions } from "../../../Redux"
import { cleanInput } from "../../../Util/cleanInput"
import { salePriceOptions } from "../../../features/filter/lists/priceRange"
import { formatNumber } from "../../../Util/formatNumber"


const QuickSearch = () =>{

   const [searchUrl, setSearchUrl] =  useState("listings/")
   const {setSearch} = Actions()

   const [typeDrowdown, setTypeDropdown] = useState(false)
   const [rangeDrowdown, setRangeDropdown] = useState(true)
   const [typeValue, setTypeValue] = useState("")
   const [minPriceValue, setMinPriceValue] = useState("")
   const [minDropdown , setMinDropdown] = useState(false)
   const [maxPriceValue, setMaxPriceValue] = useState("")
   const [maxDropdown , setMaxDropdown] = useState(false)

   const typeWindowRef = useRef(null);
   const rangeWindowRef = useRef(null);

   const [formState, setFormState] = useState({
    city_zip : "",
    city: "",
    state_code: "",
    type: [],
    status: [],
    list_price: {min: 0, max: 0},
    baths: {min: 0, max: 0},
    beds : {min: 0, max: 0}
 })

 useEffect(()=>{
    
    const addTypeEvent = (e) =>{

        if(typeWindowRef.current && !typeWindowRef.current.contains(e.target)){

            setTypeDropdown(false)

        }

    }

    const addRangeEvent = (e) =>{

        if(rangeWindowRef.current && !rangeWindowRef.current.contains(e.target)){

            setRangeDropdown(false)

        }

    }

    document.addEventListener("click",addTypeEvent, true)
    document.addEventListener("click",addRangeEvent, true)

},[])

 useEffect(()=>{

    setSearch(formState)
    setSearchUrl("/listings/?search=" + JSON.stringify(formState))

 },[formState])

 const  updateField = useCallback((key, value) =>{
         
    const formFieldCopy = {...formState}
    const types = formFieldCopy.type

    if(key === "city_zip"){
        const address = parseAddress2(value)
        formFieldCopy.city = address.city
        formFieldCopy.state = address.state
        formFieldCopy.state_code = address.state_code
        formFieldCopy.postal_code = address.postal_code
        formFieldCopy[key] = value
        setFormState(formFieldCopy)
    }

    if(key === "type"){

            if(types.includes(value)){
                formFieldCopy.type =  types.filter((type) => type !== value)
            }else{
                formFieldCopy.type.push(value)
            }
            setTypeValue(handleTypeValue(formFieldCopy.type))
            setFormState(formFieldCopy)
        }

    },[formState])



    const handleInput = (e) =>{

        const value = e.target.value

        updateField("city_zip", value) 
    }



    const handleTypeValue = (array) =>{

            if(Array.isArray(array) && array.length === 1){

                return cleanInput(array[0])

            }

            if(Array.isArray(array) && array.length > 1){

                return `Property Type (${array.length})`

            }

            return ""

    }

const selectedType = (value) =>{
 
    if(formState.type.includes(value)) return true

    return false

}

const toggleTypeDropDown = () => {
   setTypeDropdown(!typeDrowdown)
} 

const toggleRangeDropDown = () => {
    setRangeDropdown(!rangeDrowdown)
 }

 const setPrice = (type,value) =>{

    const formFieldCopy = {...formState}

    if(type === "min") {
       
        formFieldCopy.list_price.min = value
        setMinPriceValue("$" + formatNumber(value) )
        setFormState(formFieldCopy)


    } 

    if(type === "max") {
        formFieldCopy.list_price.max = value
        setMaxPriceValue("$" + formatNumber(value) )
        setFormState(formFieldCopy)
     } 

 }

 const toggleMinDropdown = () =>{
    setMinDropdown(!minDropdown)
 }

 const toggleMaxDropdown = () =>{
    setMaxDropdown(!maxDropdown)
 }


 console.log(formState)


    return(
        <div className="quick-search">
        <ul>
          <li>
            <h3>Location</h3>
            <input 
                 onChange={e => handleInput(e)}
                 type="text" 
                 placeholder="Enter city or zip" />
          </li>
          <li>

            <h3>Type</h3>
            <div ref={typeWindowRef} className="input-container"> 
              <input  
                   onClick={toggleTypeDropDown} 
                   style={{cursor: "pointer"}} 
                   readOnly 
                   type="text" 
                   placeholder="Single Family" 
                   value={typeValue}
                   
                   />
              <i onClick={toggleTypeDropDown}  className="fa-solid fa-angle-down"></i>

              {
                typeDrowdown && 
                        <div className="q-dropdown">

                        <h3>Property Type</h3>
                        <ul>
                            {propertyTypeList.map((list, index) =>(
                                <li 
                                    onClick={(e) => {updateField("type", list.id)}}
                                    key={index} 
                                    id={list.id}>
                                    {selectedType(list.id) ?  
                                    <i className="fa-solid fa-square-check"></i> :
                                    <i className="fa-regular fa-square"></i>}
                                    {list.name}
                                    </li>
                            ))}
                        </ul>
                        <div className="btn-container">
                            <button onClick={toggleTypeDropDown} className="main-btn">
                                Done
                            </button>
                        </div>

                        
                    </div>
                }
             
            </div>
            
          </li>
          <li>
            <h3>Price Range</h3>
            <div ref={rangeWindowRef} className="input-container">
              <input 
                  onClick={toggleRangeDropDown} 
                  style={{cursor: "pointer"}} 
                  type="text" 
                  placeholder="$200,000 - $300,000" 
                  />

              <i 
                 onClick={toggleRangeDropDown} 
                 className="fa-solid fa-angle-down"></i>
              {
                rangeDrowdown && 
                        <div className="q-dropdown">

                        <h3>Price range</h3>

                        <div className="range-option">

                            <div className="r-option">    
                                <h3>Min</h3>
                                <div className="input-container">
                                    <input 
                                        readOnly 
                                        type="text"
                                        value={minPriceValue}
                                        onClick={toggleMinDropdown}
                                        />
                                   <i onClick={toggleMinDropdown} 
                                      className="fa-solid fa-angle-down"></i>

                                    {
                                        minDropdown &&
                                        <div className="q-dropdown price-list">
                                      <ul className="">
                                        {salePriceOptions.map((price,index) => (
                                            <li 
                                               onClick={()=>{setPrice("min",price);toggleMinDropdown()}}
                                               key={index} id={price}>
                                                ${formatNumber(price) }
                                            </li>
                                        ))}
                                      </ul>
                                   </div>
                                    }

                                   
                                </div>
                            </div> 

                            <div className="r-option">    
                                <h3>Max</h3>
                                <div className="input-container">
                                    <input 
                                        readOnly 
                                        type="text"
                                        value={maxPriceValue}
                                        onClick={toggleMaxDropdown}
                                        />
                                   <i onClick={toggleMaxDropdown} 
                                      className="fa-solid fa-angle-down"></i>

                                    {
                                        maxDropdown &&
                                        <div className="q-dropdown price-list">
                                      <ul className="">
                                        {salePriceOptions.map((price,index) => (
                                            <li 
                                               onClick={()=>{setPrice("max",price);toggleMaxDropdown()}}
                                               key={index} id={price}>
                                                ${formatNumber(price) }
                                            </li>
                                        ))}
                                      </ul>
                                   </div>
                                    }

                                   
                                </div>
                            </div> 

                        </div>
                      
                        <div className="btn-container">
                            <button onClick={toggleRangeDropDown} className="main-btn">
                                Done
                            </button>
                        </div>

                        
                    </div>
                }
            </div> 
          </li>
        
        </ul>
           
           <Link to={searchUrl}>
               <button className="main-btn">Search</button>
           </Link>
            
      </div>
    )

}

export default QuickSearch