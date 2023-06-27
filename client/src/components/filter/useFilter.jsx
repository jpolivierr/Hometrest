import { useEffect, useState, useCallback } from "react"
import useReduxMng from "../../hooks/useReduxMng"
import { deepSearch } from "../../Util/getValueByKey";
import { parseAddress2 } from "../../Util/parseAddress";
import getAddressValue from "../../Util/getAddressValue";



const useFilter = () =>{

    const {
        searchReducer,
        setSearch
       
       } = useReduxMng();

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
      
     },[searchReducer])

     useEffect(()=>{

        setSearch(formState)
    
     },[formState])




 const  updateField = useCallback((key, value) =>{
         
    console.log("ran...")
        const formFieldCopy = {...formState}

        if(key === "city_zip"){
            const address = parseAddress2(value)
            formFieldCopy.city = address.city
            formFieldCopy.state = address.state_code
            formFieldCopy.postal_code = address.postal_code
            
        }
        
        formFieldCopy[key] = value
        setFormState(formFieldCopy)

        },[formState])


const handleSubmit = useCallback((e) =>{

        e.preventDefault()
        console.log("submit..")

    },[formState]) 


    return {
            handleSubmit,
            updateField,
            formState
    }

}

export default useFilter