
import Inputs from "../../lib/Forms/Fields/Inputs"
import MultiSelect from "../../lib/Forms/Fields/MultiSelect";
import useReduxMng from "../../hooks/useReduxMng";
import Range from "../../lib/Forms/Fields/range";
import RangeNoDropDown from "../../lib/Forms/Fields/rangeNoDropDown";
import ListOption from "../../lib/Forms/Fields/ListOption";
import { useEffect, useState } from "react";
import { deepSearch } from "../../Util/getValueByKey";
import { getParams } from "../../Util/urlParcer";
import useModal from "../../lib/Modal/useModal";

const SearchFilter = () =>{

   const {
           isShowing,
           toggle,
           motion 
         
      } = useModal();

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
       const type = deepSearch(searchReducer,["type"])
       const status = deepSearch(searchReducer,["status"])
       const price = deepSearch(searchReducer,["list_price"])
       const beds = deepSearch(searchReducer,["beds"])
       const baths = deepSearch(searchReducer,["baths"])

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

    const getSearchValue = () =>{

      const city = searchReducer.city || ""
      const postal_code = searchReducer.postal_code || ""
      const state_code = searchReducer.state_code || ""
      const state = searchReducer.state || ""

      let myState

      if(state_code && state){
          myState = state_code
      }else{
          myState = state_code ? state_code : state
      }

      const str = `${city} ${myState} ${postal_code}`

      return  str.trim()
  
  }

    const salePriceOptions = [ 
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

   const rentPriceOptions = [ 
      700,
      1000,
      1100,
      1250,
      1350,
      1450,
      1550,
      1650,
      1700,
      1800,
      1900,
      2000,
      3000
   ]

   const getPriceArray = () =>{

      if(status && status.includes("for_rent")){
         return rentPriceOptions
      }

      return salePriceOptions

  }


    const updateFormField = (key, value) =>{
         

              const formFieldCopy = {...formState}

              formFieldCopy[key] = value

              setFormState(formFieldCopy)

        
     }

    return(
    <>
        <div style={{margin: "auto"}}className="search-filter">
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
                    defaultValue = {getSearchValue()}
                    />

            <ListOption 
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


<ListOption 
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

        <RangeNoDropDown
             defaultValue = {price}
             formError = {formError}
             setFormError = {setFormError}
             fieldToUpdate = {setPrices}
             icon={<i className="fa-solid fa-angle-down"></i>}
             name={"list_price"}
             label={"Price options"}
             options = {getPriceArray()}
        />  

        <RangeNoDropDown
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

        <RangeNoDropDown
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
        
        </div>
                </>
    )

}

export default SearchFilter