
import Inputs from "../../lib/Forms/Fields/Inputs"
import MultiSelect from "../../lib/Forms/Fields/MultiSelect";
import useReduxMng from "../../hooks/useReduxMng";
import Range from "../../lib/Forms/Fields/range";
import { useEffect, useState } from "react";
import { deepSearch } from "../../Util/getValueByKey";
import { getParams } from "../../Util/urlParcer";
const TopSearchFilter = () =>{

    const {
        searchReducer,
        setType,
        setLocation,
        setCity,
        setZipcode,
        setStatus,
        setPrices,
        setBeds,
        setBaths
       
       } = useReduxMng();

       const [formError, setFormError] = useState({})
       const [formState, setFormState] = useState({
          city_zip : "",
          Home_type : "",
          list_price : "",
          beds : "",
          baths : ""
       })
     


       
       const city = deepSearch(searchReducer,["city"],"")
       const type = deepSearch(searchReducer,["type"],["Single_Family", "Multi_Family", "townhomes", "condos", "apartment"])
       const status = deepSearch(searchReducer,["status"],[
        "for_sale",
        "for_rent",
        "sold",
        "ready_to_build"
      ])
       const price = deepSearch(searchReducer,["list_price"],{min: 200000,max:600000})
       const beds = deepSearch(searchReducer,["beds"],{min: 1,max:4})
      const baths = deepSearch(searchReducer,["baths"],{min: 1,max:3})

      console.log(searchReducer)
      console.log(status )

    const updateCityorZip = (value) =>{

        const zipPattern = /^\d{5}(?:[-\s]\d{4})?$/
        const cityPattern = /^[a-zA-Z\s'\-,.]+$/

        if(zipPattern.test(value)){
            setCity("")
            setZipcode(value)
        }else if(cityPattern.test(value)){
            setZipcode("")
            setCity(value)
        }else{
            setZipcode("")
            setCity("")

        }

    }

    console.log(formState)

    const updateFormField = (key, value) =>{
         

              const formFieldCopy = {...formState}

              formFieldCopy[key] = value

              setFormState(formFieldCopy)

        
     }



    return(
        <form className="avalon text-left av-shadow top-form-search">
            <h2>Search Form</h2>
            <Inputs 
                    label={"Location"}
                    placeHolder={"Enter city or zip"}
                    name = {"city_zip"}
                //  onChangefunc = {field.onChangefunc}
                    onOutFocus = {updateCityorZip}
                    fieldToUpdate = {updateCityorZip}   
                    required = {true}
                    formError = {formError}
                    setFormError = {setFormError}
                    icon = {<i className="fa-solid fa-location-dot"></i>}
                    updateFormField = {updateFormField}
                    defaultValue = {city}
                    />

            <MultiSelect 
                    label={"Home type"}
                    placeHolder={"Home type"}
                    name = {"Home_type"}
                    // onChangefunc = {[]}
                    fieldToUpdate = {setType}                          
                    // required = {field.required}
                    formError = {formError}
                    setFormError = {setFormError}
                    icon = {<i className="fa-solid fa-angle-down"></i>}
                    updateFormField = {updateFormField}
                    defaultValue = {type}
                    list = {{
                        info : {
                                  class: "",
                                  title: "Property type",
                                //   listEvent : ()=>{console.log("clicked..")}
                        },
                        lists : [
                                   {
                                      Class: "",
                                      name: "Single_Family",
                                      el: "Single Family",
                                   },
                                   {
                                      Class: "",
                                      name: "Multi_Family",
                                      el: "Multi-Family"
                                   },
                                   {
                                      Class: "",
                                      name: "townhomes",
                                      el: "Townhomes"
                                   },
                                   {
                                      Class: "",
                                      name: "condos",
                                      el: "Condo"
                                   },
                                   {
                                      Class: "",
                                      name: "apartment",
                                      el: "Apartment"
                                   },
                                   {
                                      Class: "",
                                      name: "duplex_triplex",
                                      el: "Duplex/Triplex"
                                   },
                                   {
                                      Class: "",
                                      name: "farm",
                                      el: "Farm"
                                   },
                                   {
                                      Class: "",
                                      name: "land",
                                      el: "Land"
                                   },
                                   {
                                      Class: "",
                                      name: "mobile",
                                      el: "Mobile"
                                   },
  
                        ]
              }}
                    // listPreventExit = {field.listPreventExit}
                />


<MultiSelect 
                    label={"Property status"}
                    placeHolder={"Home type"}
                    name = {"property_status"}
                    // onChangefunc = {[]}
                    fieldToUpdate = {setStatus}                          
                    // required = {field.required}
                    formError = {formError}
                    setFormError = {setFormError}
                    icon = {<i className="fa-solid fa-angle-down"></i>}
                    updateFormField = {updateFormField}
                    defaultValue = {status}
                    list = {{
                        info : {
                                  class: "",
                                  title: "Status"
                        },
                        lists : [
                                   {
                                      Class: "",
                                      name: "for_sale",
                                      el: "For Sale"
                                   },
                                   {
                                      Class: "",
                                      name: "for_rent",
                                      el: "Rent"
                                   },
                                   {
                                      Class: "",
                                      name: "sold",
                                      el: "Sold"
                                   },
                                   {
                                      Class: "",
                                      name: "ready_to_build",
                                      el: "Ready to Build"
                                   },
                                   {
                                      Class: "",
                                      name: "off_market",
                                      el: "Off Market"
                                   },
                                   {
                                      Class: "",
                                      name: "new_community",
                                      el: "New Community"
                                   }
                        ]
              }}
                    // listPreventExit = {field.listPreventExit}
                />

        <Range
             defaultValue = {price}
             formError = {formError}
             setFormError = {setFormError}
             fieldToUpdate = {setPrices}
             icon={<i className="fa-solid fa-angle-down"></i>}
             name={"list_price"}
             label={"Price options"}
             options = {[
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
            ]}
        />  

        <Range
             defaultValue = {beds}
             formError = {formError}
             setFormError = {setFormError}
             fieldToUpdate = {setBeds}
             icon={<i className="fa-solid fa-angle-down"></i>}
             name={"beds"}
             label={"Beds"}
             options = {[
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10
            ]}
        /> 

        <Range
             defaultValue = {baths}
             formError = {formError}
             setFormError = {setFormError}
             fieldToUpdate = {setBaths}
             icon={<i className="fa-solid fa-angle-down"></i>}
             name={"baths"}
             label={"Baths"}
             options = {[
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10
            ]}
        />     
            
        </form>
    )

}

export default TopSearchFilter