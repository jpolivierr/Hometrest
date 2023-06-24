import { useEffect, useState, useCallback, useRef } from "react"
import useReduxMng from "../../hooks/useReduxMng"
import { deepSearch } from "../../Util/getValueByKey";
import { parseAddress2 } from "../../Util/parseAddress";
import topFilter from "./propertyFilter.view";
import getAddressValue from "../../Util/getAddressValue";


export const TOPFILTER = "TOPFILTER"

const properTyFiler = (props) =>{

    const {view} = props

    const {
        searchReducer,
        setSearch
       
       } = useReduxMng();

    const [formState, setFormState] = useState({
        city_zip : "miami",
        city: "",
        state_code: "",
        type: [],
        status: [],
        list_price: {min: 0, max: 0},
        baths: {min: 0, max: 0},
        beds : {min: 0, max: 0}
     })

     const prevData = useRef({});

     

     useEffect(()=>{
        //   console.log(searchReducer)    

    
        // setFormState({...formState, city_zip: address})
     },[searchReducer])

     useEffect(()=>{
  
            // setSearch(formState)
        
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

        },[])


const handleSubmit = useCallback((e) =>{

        e.preventDefault()
        console.log("submit..")

    },[]) 


    const getView = () =>{

            switch(view){
                
                case TOPFILTER :
                    return <topFilter />

            }

    }


    return {
            handleSubmit,
            updateField,
            formState
       }

}

export default properTyFiler