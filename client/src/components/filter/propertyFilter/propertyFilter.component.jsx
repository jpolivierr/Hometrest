import { useEffect, useState, useCallback, useLayoutEffect } from "react"
import useReduxMng from "../../../hooks/useReduxMng"
import { deepSearch } from "../../../Util/getValueByKey";
import { parseAddress2 } from "../../../Util/parseAddress";
import getAddressValue from "../../../Util/getAddressValue";
import PropertyFilter from "./propertyFilter.view";
import UrlQueryHandler from "../../urlQueryHandler/UrlQueryHandler";
import { updateParam } from "../../../Util/urlParcer";



const Filter = () =>{

    const [initialRender, setInitialRender] = useState(true)

    const {getUrlSearchQuery, newQueryObject} = UrlQueryHandler()

    const {searchReducer, setSearch} = useReduxMng();

    const [formState, setFormState] = useState({
        city_zip : "",
        city: "",
        state_code: "",
        type: [],
        status: [],
        list_price: {min: 0, max: 0},
        baths: {min: 0, max: 0},
        beds : {min: 0, max: 0}
     })

     useEffect(()=>{

        const initSearchQuery = getUrlSearchQuery(searchReducer)

        if(!initSearchQuery) return
        
        setSearch(initSearchQuery)
        setFormState(initSearchQuery)
    
     },[])
     

     useEffect(()=>{

        //  console.log(getUrlSearchQuery(searchReducer))
        // if(!initialRender){

            console.log(searchReducer)

            const newObj = newQueryObject(searchReducer)

            console.log(newObj)

            updateParam(newObj, true, "search")
        // }

        
      
     },[searchReducer])


     useEffect(()=>{

        setSearch(formState)
    
     },[formState])




 const  updateField = useCallback((key, value) =>{
         
        const formFieldCopy = {...formState}

        if(key === "city_zip"){
            const address = parseAddress2(value)
            formFieldCopy.city = address.city
            formFieldCopy.state = address.state_code
            formFieldCopy.postal_code = address.postal_code
            
        }
        
        formFieldCopy[key] = value
        setFormState(formFieldCopy)

         const newObj = newQueryObject(searchReducer)

            console.log(newObj)

            updateParam(newObj, true, "search")

        },[formState])


    const handleSubmit = useCallback((e) =>{

            e.preventDefault()

        },[]) 


    return (

        <PropertyFilter value = {{handleSubmit, updateField, formState}}/>

    )


}

export default Filter