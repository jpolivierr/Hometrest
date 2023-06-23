import { useEffect, useState } from "react"
import useReduxMng from "../../hooks/useReduxMng"
import { deepSearch } from "../../Util/getValueByKey";
import { parseAddress2 } from "../../Util/parseAddress";
import getAddressValue from "../../Util/getAddressValue";



const useFilter = () =>{

    const {
        searchReducer,
        setType,
        setLocation,
        setCity,
        setZipcode,
        setStatus,
        setPrices,
        setBeds,
        setBaths,
        setAddress
       
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
        console.log(searchReducer)    
        const address = getAddressValue(searchReducer)
    
        setFormState({...formState, city_zip: address})
     },[searchReducer])

     useEffect(()=>{

        console.log(formState)
        // console.log(parseAddress2(formState.city_zip))
     },[formState])

    const updateFormField = (key, value) =>{
         
        const formFieldCopy = {...formState}

        if(key = "city_zip"){
            const address = parseAddress2(value)
            console.log(address)
            formFieldCopy.city = address.city
            formFieldCopy.state = address.state_code
            formFieldCopy.postal_code = address.postal_code
            
        }
        
        formFieldCopy[key] = value
        setFormState(formFieldCopy)

        }

    const handleSubmit = (e) =>{

        e.preventDefault()
        console.log("submit..")

    }


    return {
            handleSubmit,
            updateFormField,
            formState
    }

}

export default useFilter