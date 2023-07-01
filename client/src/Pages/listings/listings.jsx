import "./style.css"
import { useEffect, useState, useRef } from "react"
import useRequest from "../../services/MakeRequest/MakeRequest"
import findPropertyValue from "../../Util/nestedObject"
import TopSearchFilter from "../../components/Forms/TopSearchFilter"
import ShowProperties from "../../components/showProperties/ShowProperties.component"
import Map from "../../components/map/Map"
import propertiesDemo from "../../Mock/propertyDemo"
import { getParams, updateParam } from "../../Util/urlParcer"
import { deepSearch } from "../../Util/getValueByKey"
import URL from "../../constants/urls"
import Filter from "../../features/filter"
import { Reducers, Actions } from "../../Redux"

const Listings = (props) =>{

    const {Class, id} = props

    const {propertiesReducer,searchReducer} = Reducers() 

    useEffect(()=>{
      console.log(propertiesReducer)
    },[propertiesReducer])

    const [loadingProps] = useState(false)
   

    console.log(propertiesReducer)
    return(
        <div id={id} className={Class}>
          <Filter />
          {/* <TopSearchFilter/> */}
          <div className="search-result wide-container">

          {/* <Map properties={propertiesReducer.results} /> */}
          
            <ShowProperties 
              isLoading = {loadingProps}
              properties={propertiesReducer.results}
              count ={propertiesReducer.count}
              total = {propertiesReducer.total}
              searchReducer={searchReducer}
            />

          </div>
          
        </div>
        
    )
}

export default Listings