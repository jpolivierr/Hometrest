import MainButton from "../buton/MainButton"
import useReduxMng from "../../hooks/useReduxMng"
import URL from "../../Config/urls"
import Ring from "../../lib/loadingEffect/loading/loadingEffect"
import {  deepSearch  } from "../../Util/getValueByKey"
import useFormCopy from "../../lib/Forms/useFormCopy"
import { emptyField } from "../../lib/Forms/Util/emptyField"
import { useEffect, useState } from "react"


const TopSearchForm = () =>{

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


      const city = deepSearch(searchReducer,["city"],"")

      const type = deepSearch(searchReducer,["type"],"")
      const status = deepSearch(searchReducer,["status"],"")
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


    

    const {getForm, formResponse, loading} = useFormCopy()

//    console.log(formResponse)
//   console.log(searchReducer)

const [formSetting, setFormSetting ] = useState({})

useEffect(()=>{

    setFormSetting({
        config: {
            url: URL.SEARCH,
            data: true,
            method: "POST",
            buttonLabel: "Submit"
        },
        info : {
            title: "Search Form",
            Class: "avalon text-left av-shadow top-form-search"
        },
        fields : [
            {
                type : "input",
                label : "Location",
                name : "city_zip",
                placeHolder : "Enter a city or zipcode",
                required : true,
                defaultValue : city,
                onSubmitFunc : [emptyField],
                defaultKey : "city-zip",
                fieldToUpdate : updateCityorZip,
                onOutFocus : updateCityorZip,
                icon: <i className="fa-solid fa-location-dot"></i>
              },
              {
                type : "multi-select",
                label : "Property type",
                onChangefunc : [],
                name : "Home_type",
                defaultValue : type,
                fieldToUpdate : setType,
                icon : <i className="fa-solid fa-angle-down"></i>,
                list : {
                          info : {
                                    class: "",
                                    title: "Property type",
                                    listEvent : ()=>{console.log("clicked..")}
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
                },
                // defaultValue : location,
                onSubmitFunc: [],
                // listPreventExit: true
              },
              {
                type : "multi-select",
                label : "Property status",
                name : "property_status",
                fieldToUpdate : setStatus,
                defaultValue : status,
                icon : <i className="fa-solid fa-angle-down"></i>,
                list : {
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
                },
                // defaultValue : location,
                onSubmitFunc: [],
                // listPreventExit: true
              },
              {
                type : "comp",
                label : "Pricing",
                name : "price",
                fieldToUpdate : setPrices,
                defaultValue : price,
                icon : <i className="fa-solid fa-angle-down"></i>,
                custom : {
                    defaultValue : price,
                    label : "Price options",
                    payload : [
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
                    ], 
    
                },
                
                // defaultValue : location,
                onSubmitFunc: [],
                // listPreventExit: true
              },
              {
                type : "comp",
                label : "Beds",
                name : "beds",
                fieldToUpdate : setBeds,
                icon : <i className="fa-solid fa-angle-down"></i>,
                custom : {
                    defaultValue : beds,
                    label : "Bed option",
                    payload : [
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
                    ], 
    
                },
                // listPreventExit: true
              },
              {
                type : "comp",
                label : "Baths",
                name : "baths",
                fieldToUpdate : setBaths,
                // defaultValue : baths,
                icon : <i className="fa-solid fa-angle-down"></i>,
                custom : {
                    defaultValue : baths,
                    label : "Bath option",
                    payload : [
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
                    ], 
    
                },
                
                // defaultValue : location,
                onSubmitFunc: [],
                // listPreventExit: true
              },
              
        ],
        button : {
                component :<MainButton 
                        label="Submit"
                        Class=" button main-btn"
                        type="submit"
                        />,
                 loadingEffect : <Ring isShowing={true}/>
                }
    
    })

},[searchReducer])


    return(
        <div className="">

           {getForm(formSetting)}

        </div>
        
    )
}

export default TopSearchForm