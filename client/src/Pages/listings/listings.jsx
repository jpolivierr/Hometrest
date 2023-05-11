import "./style.css"
import { useEffect } from "react"
import useRequest from "../../lib/MakeRequest/MakeRequest"
import useReduxMng from "../../hooks/useReduxMng"
import findPropertyValue from "../../Util/nestedObject"
import TopSearchFilter from "../../components/Forms/TopSearchFilter"
import ShowProperties from "../../components/showProperties/ShowProperties"
import Map from "../../components/map/Map"
import propertiesDemo from "../../propertyDemo"
import { getParams, updateParam } from "../../Util/urlParcer"


const Listings = (props) =>{

    const {Class, id} = props

    const {makeRequest, formResponse, loading } = useRequest()

    const{
      getPropertyList,
      setPropertyList,
      setSearch,
      searchReducer
    } = useReduxMng()  

  
    useEffect( ()=>{
  
            if(getParams("search")){
  
            const listingOptions = getParams("search")

            console.log("Get filter from search bar -----> ",listingOptions)
  
            setSearch(listingOptions)
  
          }
  
      },[])


  
        useEffect(()=>{

          console.log("SearchReducer ------>", searchReducer)
           updateParam(searchReducer, true, "search")

           if(!searchReducer.limit){

              searchReducer.limit = 50

              console.log("Make request  ------>", searchReducer)

           }
  
      },[searchReducer])





          useEffect(()=>{

            // console.log("set property result ----->", propertiesDemo)
            setPropertyList(propertiesDemo)
        
          },[])


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
          <div className="search-result wide-container">
    
            <TopSearchFilter/>
            <Map />
            <ShowProperties 
              isLoading = {false}
            />

          </div>
          
        </div>
        
    )
}

export default Listings