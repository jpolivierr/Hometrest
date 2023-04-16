import { useEffect, useState } from "react"
import useForm from "../../lib/Forms/useForm"
import MainButton from "../buton/MainButton"
import useReduxMng from "../../hooks/useReduxMng"
import URL from "../../Config/urls"
import Ring from "../../lib/loadingEffect/loading/ring"
import { result } from "../../Pages/object"
import { getValueByKey, nestedObj  } from "../../Util/getValueByKey"


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

            const objtet = {
                             name : {
                                        first : "Frederic",
                                        last : "Olivier"
                                    },
                            addres : "8700 southside dr",
                            visit : [
                                        "visit",
                                       "leana",
                                        "Milla",
                                        {
                                            hour : "1am",
                                            day : {
                                                echo : [
                                                       "miami"
                                                ]
                                            }
                                        }
                                    ]
            }

    console.log(nestedObj(null,["name", "first"],""))

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
    

    const [formSetting] = useState({
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
                defaultValue : "miami",
                fieldToUpdate : updateCityorZip,
                onOutFocus : updateCityorZip
              },
              {
                type : "static-selection",
                label : "Property",
                onChangefunc : [],
                name : "property",
                defaultValue : ["Single_Family", "Multi_Family"],
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
                                        name: "Condo",
                                        el: "Condo"
                                     }
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
                defaultValue : ["for_sale", "sold"],
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
                    defaultValue : {
                        "min": 40000,
                        "max": 350000
                      },
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
                    defaultValue : {
                        "min": 4,
                        "max": 3
                      },
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
                type : "static-component",
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
    
    })

    const {getForm, formResponse, loading} = useForm(formSetting)

//    console.log(formResponse)
//   console.log(searchReducer)

    return(
        <div className="margin-top-2x">

           {/* <Form 
              setting={formSetting}
           /> */}

           {getForm()}

        </div>
        
    )
}

export default SearchForm