import "./style.css"
import { useEffect } from "react"
import SearchForm from "../../components/Forms/SearchForm"
import useRequest from "../../lib/MakeRequest/MakeRequest"
import useReduxMng from "../../hooks/useReduxMng"
import findPropertyValue from "../../Util/nestedObject"
import TopSearchFilter from "../../components/Forms/TopSearchFilter"
import ShowProperties from "../../components/showProperties/ShowProperties"
import Map from "../../components/map/Map"


const Listings = (props) =>{

    const {Class, id} = props

    const {makeRequest, formResponse, loading } = useRequest()

    const{searchReducer,
          getPropertyList,
          setSearch,
          propertiesReducer} = useReduxMng()




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
            <ShowProperties />

          </div>
          
        </div>
        
    )
}

export default Listings