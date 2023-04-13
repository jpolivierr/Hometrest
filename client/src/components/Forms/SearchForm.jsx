import { useEffect, useState } from "react"
import useForm from "../../lib/Forms/useForm"
import MainButton from "../buton/MainButton"
import useReduxMng from "../../hooks/useReduxMng"
import { getParams, updateParam } from "../../Util/urlParcer"
import URL from "../../Config/urls"


const SearchForm = () =>{

    const {searchReducer, setType} = useReduxMng();

    useEffect(()=>{

        updateParam(searchReducer, true, "search")

    },[searchReducer])
    

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
                required : true,
              },
              {
                type : "multi-select",
                label : "Property",
                placeHolder : "Search Properties",
                name : "property",
                fieldToUpdate : setType,
                icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                list : {
                          info : {
                                    class: "",
                                    title: "Search Property"
                          },
                          lists : [
                                     {
                                        Class: "",
                                        name: "Single-Family",
                                        el: "Single Family"
                                     },
                                     {
                                        Class: "",
                                        name: "Multi-Family",
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
        ],
        button : <MainButton 
            label="Submit"
            Class=" button main-btn"
            type="submit"
            loadingEffect={true}
    />
    })

    const {getForm, formResponse, loading} = useForm(formSetting)

    //   console.log(formResponse)

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