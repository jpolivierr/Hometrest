

import React from 'react'
import useFilter from '../useFilter'
import Inputs from '../Fields/Inputs'
import MultiSelect from '../Fields/MultiSelect'
import Range from '../Fields/range'
import MoreOptions from '../Fields/MoreOptions'
import {propertyTypeList} from "../lists/propertyType"
import { statusList } from '../lists/statusList'
import "./propertyFilter.style.css"
import { salePriceOptions, rentPriceOptions } from '../lists/priceRange'
import { numberList } from '../lists/numberList'
import PropertyFilterMoreOption from '../propertyFilterMoreOption/propertyFilterMoreOption.view'



export default function PropertyFilter() {

  


    const {handleSubmit, updateField, formState} = useFilter()

    // console.log(formState)
const priceRangeOption = formState.status.includes("for_rent") ? rentPriceOptions : salePriceOptions

  return (
    <form className="avalon property_filter stick" 
         onSubmit={handleSubmit}>

        <div className="location-input-style">
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
                  <i className="iicon fa-solid fa-magnifying-glass"></i>
            </div>


        <MultiSelect 
                dropDown = {true}
                elementClass={"home_type"}
                label={"Home Type"}
                name = {"type"}
                optionsTitle = {"Property Type"}                     
                icon = {<i className="fa-solid fa-angle-down"></i>}
                updateField = {updateField}
                value={formState.type}
                options={propertyTypeList}
            />

         <MultiSelect 
                    dropDown = {true}
                    elementClass={"home_status"}
                    label={"Property status"}
                    name = {"status"}
                    optionsTitle = {"Property status"}                     
                    icon = {<i className="fa-solid fa-angle-down"></i>}
                    updateField = {updateField}
                    value={formState.status}
                    options={statusList}
                />

        <Range 
                    elementClass={"home_price"}
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
                    elementClass={"home_beds"}
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

            <Range 
                    elementClass={"home_beds"}
                    label={"Baths"}
                    name = {"baths"}
                    optionsTitle = {"Baths"}                     
                    icon = {<i className="fa-solid fa-angle-down"></i>}
                    updateField = {updateField}
                    value={formState.baths}
                    minOption = {numberList}
                    maxOption = {numberList}
                    optionSuffix = {"bath"}
                />

          <MoreOptions
              optionsTitle = {"More"}
              icon = {<i className="fa-solid fa-angle-down"></i>}
           >
            <PropertyFilterMoreOption/>
          </MoreOptions>      


    </form>
  )
}
