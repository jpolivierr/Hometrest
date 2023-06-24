

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



export default function PropertyFilterMoreOption({value}) {

      

  const { updateField, formState} = value
    // const { updateField, formState} = useFilter()

     console.log(formState)
const priceRangeOption = formState.status.includes("for_rent") ? rentPriceOptions : salePriceOptions

  return (
    <div style={{margin: "auto"}}className="search-filter">

               <Inputs 
                      elementClass={"location-field"}         
                      placeHolder={"Enter city, state or zip"}
                      // label={"Location"}
                      name = {"city_zip"} 
                      value = {formState.city_zip}               
                      required = {true}
                      icon = {<i className="fa-solid fa-location-dot"></i>}
                      updateField = {updateField}
                      />

          <MultiSelect  
                  elementClass={"multy_choice_columns"}
                  name = {"type"}
                  optionsTitle = {"Property Type"}                     
                  updateField = {updateField}
                  value={formState.type}
                  options={propertyTypeList}
              />

         <MultiSelect 
                    elementClass={"multy_choice_columns"}
                    name = {"status"}
                    optionsTitle = {"Property status"}                     
                    updateField = {updateField}
                    value={formState.status}
                    options={statusList}
                />

            <Range 
                    elementClass={"type-field"}
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
                    name = {"beds"}
                    optionsTitle = {"Beds"}                     
                    icon = {<i className="fa-solid fa-angle-down"></i>}
                    updateField = {updateField}
                    value={formState.beds}
                    minOption = {numberList}
                    maxOption = {numberList}
                    optionSuffix = {"bed"}
                /> 


    </div>
  )
}
