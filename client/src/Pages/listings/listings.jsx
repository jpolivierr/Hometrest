import "./style.css"
import { useEffect, useState, useRef } from "react"
import useRequest from "../../services/MakeRequest/MakeRequest"
import useReduxMng from "../../hooks/useReduxMng"
import findPropertyValue from "../../Util/nestedObject"
import TopSearchFilter from "../../components/Forms/TopSearchFilter"
import ShowProperties from "../../components/showProperties/ShowProperties"
import Map from "../../components/map/Map"
import propertiesDemo from "../../Mock/propertyDemo"
import { getParams, updateParam } from "../../Util/urlParcer"
import { deepSearch } from "../../Util/getValueByKey"
import URL from "../../constants/urls"
import Filter from "../../features/filter"

const Listings = (props) =>{

    const {Class, id} = props

    const {makeRequest, reponse, loading, status } = useRequest()

    const{
      setPropertyList,
      propertiesReducer,
    } = useReduxMng()  

    const [loadingProps, setLoadingProps] = useState(false)


    useEffect(()=>{

      // console.log(reponse)

      if(reponse && status === 200){

         const homeSearch =  deepSearch(reponse,["body","data","home_search","results"],[])

          setPropertyList(homeSearch)

           if(Object.keys(reponse).length > 0){
        setLoadingProps(false)
      }
        
      }

    },[reponse])
   

    return(
        <div id={id} className={Class}>
          <Filter />
          {/* <TopSearchFilter/> */}
          <div className="search-result wide-container">

           {!propertiesReducer || propertiesReducer.length === 0 ? <div style={{background: "#eef6f9",height: "87vh"}}></div> :
               <Map 
              properties={propertiesReducer}
            />
           }
            <ShowProperties 
              isLoading = {loadingProps}
            />

          </div>
          
        </div>
        
    )
}

export default Listings