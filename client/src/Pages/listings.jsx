import { useEffect } from "react"
import SearchForm from "../components/Forms/SearchForm"
import useRequest from "../lib/MakeRequest/MakeRequest"
import useReduxMng from "../hooks/useReduxMng"
import { getParams } from "../Util/urlParcer"
import URL from "../Config/urls"
import findPropertyValue from "../Util/nestedObject"


const Listings = (props) =>{

    const {Class, id} = props

    const {makeRequest, formResponse, loading } = useRequest()

    const{searchReducer, getPropertyList, propertiesReducer} = useReduxMng()

    useEffect( ()=>{

      // console.log(searchReducer)
          if(getParams().search){

          const listingOptions = getParams().search
          const listingObject = JSON.parse(listingOptions)

            // makeRequest("POST", URL.SEARCH, listingObject)

        }
      

    },[searchReducer])

    useEffect(()=>{

      if(formResponse && formResponse.status === 200){
          
         const homeSearch = findPropertyValue(formResponse,"home_search")

         if(homeSearch.total && homeSearch.total > 0){

            getPropertyList(homeSearch)

         }

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