import { useEffect, useState } from "react"
import useForm from "../../lib/Forms/useForm"
import MainButton from "../buton/MainButton"
import useReduxMng from "../../hooks/useReduxMng"
import URL from "../../constant/urls"
import Ring from "../../lib/loadingEffect/loading/loadingEffect"
import { result } from "../../propertyDemo"
import { getValueByKey, deepSearch  } from "../../Util/getValueByKey"
import useFormCopy from "../../lib/Forms/useFormCopy"
import { emptyField } from "../../lib/Forms/Util/emptyField"


const SearchForm = () =>{

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

const formSetting = {
    config: {
        url: URL.SEARCH,
        data: true,
        method: "POST",
        buttonLabel: "Submit"
    },
    info : {
        title: "Search Form",
        Class: "avalon text-left av-shadow"
    },
    fields : [
        {
            type : "input",
            label : "Location",
            name : "city_zip",
            required : true,
            defaultValue : deepSearch(searchReducer,["city"],""),
            onSubmitFunc : [emptyField],
            // defaultKey : "city-zip",
            fieldToUpdate : updateCityorZip,
            onOutFocus : updateCityorZip
          },
          {
            type : "static-selection",
            label : "Property",
            onChangefunc : [],
            name : "property",
            // defaultValue : ["Single_Family", "Multi_Family"],
            fieldToUpdate : setType,
            icon : <i className="fa-solid fa-angle-down"></i>,
            list : {
                      info : {
                                class: "",
                                title: "Search Property",
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
                                    name: "townHomes",
                                    el: "TownHomes"
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
            type : "static-selection",
            label : "Property type",
            name : "property_type",
            fieldToUpdate : setStatus,
            // defaultValue : ["for_sale", "sold"],
            icon : <i className="fa-solid fa-angle-down"></i>,
            list : {
                      info : {
                                class: "",
                                title: "Property type"
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
            type : "static-component",
            label : "Pricing",
            name : "price",
            fieldToUpdate : setPrices,
            icon : <i className="fa-solid fa-angle-down"></i>,
            custom : {
                // defaultValue : {
                //     "min": 40000,
                //     "max": 350000
                //   },
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
            type : "static-component",
            label : "Beds",
            name : "beds",
            fieldToUpdate : setBeds,
            icon : <i className="fa-solid fa-angle-down"></i>,
            custom : {
                // defaultValue : {
                //     "min": 4,
                //     "max": 3
                //   },
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
            icon : <i className="fa-solid fa-angle-down"></i>,
            custom : {
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

}


    return(
        <div className="">

           {getForm(formSetting)}

        </div>
        
    )
}

export default SearchForm