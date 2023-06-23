

import React from 'react'
import useFilter from '../useFilter'
import Inputs from '../Fields/Inputs'
import updateCityorZip from '../../../Util/updateCityorZip'


export default function PropertyFilter() {


    const {handleSubmit, updateFormField, formState} = useFilter()

    // console.log(formState)

  return (
    <form className="avalon text-left av-shadow top-form-search stick" 
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
                              updateFormField = {updateFormField}
                            //   onChangefunc = {uppercase}
                              //   onOutFocus = {updateCityorZip}
                               //   fieldToUpdate = {updateCityorZip} 
                              //   formError = {formError}
                            //   setFormError = {setFormError}
                                // defaultValue = {formState.city}
                              />
                              <i className="iicon fa-solid fa-magnifying-glass"></i>
            </div>


    </form>
  )
}
