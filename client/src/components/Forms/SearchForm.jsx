import { useEffect, useState } from "react"
import useForm from "../../lib/Forms/useForm"
import MainButton from "../buton/MainButton"
import useReduxMng from "../../hooks/useReduxMng"
import { getParams, updateParam } from "../../Util/urlParcer"
import URL from "../../Config/urls"


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

    useEffect(()=>{

        updateParam(searchReducer, true, "search")

    },[searchReducer])

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
                name : "location",
                placeHolder : "Enter a city or zipcode",
                required : true,
                // fieldToUpdate : setLocation,
                onOutFocus : updateCityorZip
              },
              {
                type : "multi-select",
                label : "Property",
                placeHolder : "Search Properties",
                onChangefunc : [],
                name : "property",
                fieldToUpdate : setType,
                icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
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
                type : "multi-select",
                label : "Property Type",
                name : "property_type",
                fieldToUpdate : setStatus,
                icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                list : {
                          info : {
                                    class: "",
                                    title: "Search Property"
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
                type : "comp",
                label : "Pricing",
                name : "price",
                placeHolder : "200.0k - 500.0k",
                fieldToUpdate : setPrices,
                icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                custom : {
                    label : "Price Options",
                    payload : [
                        10000,
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
                placeHolder : "1 - 5",
                fieldToUpdate : setBeds,
                icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                custom : {
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
                
                // defaultValue : location,
                onSubmitFunc: [],
                // listPreventExit: true
              },
              {
                type : "comp",
                label : "Baths",
                name : "baths",
                placeHolder : "1 - 5",
                fieldToUpdate : setBaths,
                icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
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
        button : <MainButton 
            label="Submit"
            Class=" button main-btn"
            type="submit"
            loadingEffect={true}
    />
    })

    const {getForm, formResponse, loading} = useForm(formSetting)

//    console.log(formResponse)
    console.log(searchReducer)

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