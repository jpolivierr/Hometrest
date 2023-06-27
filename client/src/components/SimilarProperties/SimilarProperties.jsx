
import { useEffect, useState } from "react"
import Slider2 from "../../lib/Slider/Slider2"
import PropertyCard2 from "../propertyCard/PropertyCard2"
import useReduxMng from "../../hooks/useReduxMng"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import useRequest from "../../services/MakeRequest/MakeRequest"
import propertiesDemo from "../../Mock/propertyDemo"
import Carousel from "../../lib/Slider/Carousel"
import URL from "../../constants/urls"
import { deepSearch } from "../../Util/getValueByKey"

const SimilarProperties = (props) =>{

    const {propId} = props


   const {makeRequest, formResponse, loading } = useRequest()

   const [similarListings, setSimilarListings] = useState(null)

   const isLoading = false

   useEffect(()=>{

    if(propId){
           makeRequest("GET", URL.SIMILAR_PROPS + "?prop_id=" + propId)
    }
    

   },[])

   useEffect(()=>{

   console.log(formResponse)
    if(formResponse.status && formResponse.status === 200){

        const property = deepSearch(formResponse.body,["data","home","related_homes","results"],[])

        setSimilarListings(property)

    }

   },[formResponse])

    return(
       <>
         <h2>Similar Properties</h2>
        {similarListings ? <Slider2 
                              gap={10}
                                  >   
            {
            
                    Array.isArray(similarListings) &&
                    similarListings.length > 0 && similarListings.map((property,index)=>(

                    <PropertyCard2
                    singleProperty = {property}
                    key={index}
                />

                ))
                }
          
          </Slider2> : <SkeletonLoading 
                            elementClass={"av-loading-skeleton av-loading-skeleton-side"} />}
       </>
       
     
    )
}

export default SimilarProperties