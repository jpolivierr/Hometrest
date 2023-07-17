
import { useEffect, useState } from "react"
import Slider2 from "../../lib/Slider/Slider2"
import PropertyCard2 from "../propertyCard/PropertyCard2"
import useReduxMng from "../../hooks/useReduxMng"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import useRequest from "../../httpRequest/MakeRequest/MakeRequest"
import propertiesDemo from "../../Mock/propertyDemo"
import Carousel from "../../lib/Slider/Carousel"
import URL from "../../constants/urls"
import { deepSearch } from "../../Util/getValueByKey"
import SimilarPropertyRequest from "../../httpRequest/SimilarPropertyRequest/SimilarPropertyRequest"


const SimilarProperties = (props) =>{

    const {propId} = props

    const {similarListings} = SimilarPropertyRequest()



    return(
        <>
         {!similarListings.length > 0 ? 
        <SkeletonLoading 
                            elementClass={"av-loading-skeleton av-loading-skeleton-side"} 
                            />
         : 
         <div className="similar-property">
         <h2>Similar Properties</h2>
         <Slider2 
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
          
          </Slider2>
              </div>              
                            }
        
        </>
       
       
       
     
    )
}

export default SimilarProperties