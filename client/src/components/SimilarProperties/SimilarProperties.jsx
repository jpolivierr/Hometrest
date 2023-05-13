
import { useEffect, useState } from "react"
import Slider from "../../lib/Slider/Slider"
import PropertyCard from "../propertyCard/PropertyCard"
import useReduxMng from "../../hooks/useReduxMng"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import useRequest from "../../lib/MakeRequest/MakeRequest"
import propertiesDemo from "../../propertyDemo"
import Carousel from "../../lib/Slider/Carousel"
import URL from "../../Config/urls"
import { deepSearch } from "../../Util/getValueByKey"

const SimilarProperties = (props) =>{

    const {propId} = props

   const {propertiesReducer, setPropertyList} = useReduxMng()

   const {makeRequest, formResponse, loading } = useRequest()

   const [similarListings, setSimilarListings] = useState(null)

   const isLoading = false

   useEffect(()=>{

    //   makeRequest("GET", URL.SIMILAR_PROPS + "?prop_id=" + propId)

   },[])

   useEffect(()=>{

    setSimilarListings(propertiesDemo)

    if(formResponse.status && formResponse.status === 200){

        const property = deepSearch(formResponse.body,["data","home","related_homes","results"],[])

        setSimilarListings(property)

    }

   },[formResponse])

    return(

        similarListings ? <Slider 
                              gap={10}
                                  >   
            {
            
                    Array.isArray(similarListings) &&
                    similarListings.length > 0 && similarListings.map((property,index)=>(

                    <PropertyCard
                    singleProperty = {property}
                    key={index}
                />

                ))
                }
          
          </Slider> : <SkeletonLoading 
                            elementClass={"av-loading-skeleton av-loading-skeleton-side"} />
     
    )
}

export default SimilarProperties