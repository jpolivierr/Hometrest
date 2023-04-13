import { useEffect } from "react"
import SearchForm from "../components/Forms/SearchForm"
import useRequest from "../lib/MakeRequest/MakeRequest"
import useReduxMng from "../hooks/useReduxMng"
import { getParams } from "../Util/urlParcer"
import URL from "../Config/urls"
import findPropertyValue from "../Util/nestedObject"
import { errors } from "./object"


const Listings = (props) =>{

    const {Class, id} = props

    const {makeRequest, formResponse, loading } = useRequest()

    const{searchReducer} = useReduxMng()

    useEffect( ()=>{

      // console.log(searchReducer)
          if(getParams().listing_options){

          const listingOptions = getParams().listing_options
          const listingObject = JSON.parse(listingOptions)

          console.log(findPropertyValue(errors,"time_thrown"))

          //  makeRequest("POST", URL.SEARCH, listingObject)

        }
      

    },[searchReducer])

    useEffect(()=>{

      
      if(formResponse && formResponse.status === 200){
          console.log(formResponse)
      }

    },[formResponse])

   


    return(
        <div id={id} className={Class}>
          <div className="container center-content padding-bottom-2x">
    
            <SearchForm />

          </div>
          
        </div>
        
    )
}

export default Listings