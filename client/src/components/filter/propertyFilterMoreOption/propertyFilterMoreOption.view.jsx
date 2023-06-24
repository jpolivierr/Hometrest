

import React from 'react'
import useFilter from '../useFilter'
import Inputs from '../Fields/Inputs'
import MultiSelect from '../Fields/MultiSelect'
import Range from '../Fields/range'
import MoreOptions from '../Fields/MoreOptions'
import {propertyTypeList} from "../lists/propertyType"
import { statusList } from '../lists/statusList'
import { salePriceOptions, rentPriceOptions } from '../lists/priceRange'
import { numberList } from '../lists/numberList'
import "./propertyFilterMoreOption.style.css"



export default function PropertyFilterMoreOption() {

  


    const { updateField, formState} = useFilter()

    // console.log(formState)
const priceRangeOption = formState.status.includes("for_rent") ? rentPriceOptions : salePriceOptions

  return (
    <div style={{margin: "auto"}}className="search-filter">

               <Inputs 
                              elementClass={"location-field"}
                              label={"Location"}
                              placeHolder={"Enter city, state or zip"}
                              name = {"city_zip"} 
                              value = {formState.city_zip}               
                              required = {true}
                              icon = {<i className="fa-solid fa-location-dot"></i>}
                              updateField = {updateField}
                              />
      


          <MultiSelect  
                  elementClass={"type-field"}
                  name = {"type"}
                  optionsTitle = {"Property Type"}                     
                  icon = {<i className="fa-solid fa-angle-down"></i>}
                  updateField = {updateField}
                  value={formState.type}
                  options={propertyTypeList}
              />

         <MultiSelect 
                    elementClass={"type-field"}
                    name = {"status"}
                    optionsTitle = {"Property status"}                     
                    icon = {<i className="fa-solid fa-angle-down"></i>}
                    updateField = {updateField}
                    value={formState.status}
                    options={statusList}
                />

        <Range 
                    elementClass={"type-field"}
                    label={"Price"}
                    name = {"list_price"}
                    optionsTitle = {"Price Range"}                     
                    icon = {<i className="fa-solid fa-angle-down"></i>}
                    updateField = {updateField}
                    value={formState.list_price}
                    dollarSign = {true}
                    minOption = {priceRangeOption}
                    maxOption = {priceRangeOption}
                />

           <Range 
                    elementClass={"type-field"}
                    label={"Beds"}
                    name = {"beds"}
                    optionsTitle = {"Beds"}                     
                    icon = {<i className="fa-solid fa-angle-down"></i>}
                    updateField = {updateField}
                    value={formState.beds}
                    minOption = {numberList}
                    maxOption = {numberList}
                    optionSuffix = {"bed"}
                />

          <MoreOptions
              optionsTitle = {"More"}
              icon = {<i className="fa-solid fa-angle-down"></i>}
           >
            
          </MoreOptions>      


    </div>
  )
}
