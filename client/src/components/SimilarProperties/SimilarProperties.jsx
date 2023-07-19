
import Slider2 from "../../lib/Slider/Slider"
import PropertyCard from "../propertyCard/PropertyCard.component"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import SimilarPropertyRequest from "../../httpRequest/SimilarPropertyRequest/SimilarPropertyRequest"
import "./SimilarProperties.style.css"


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

                    <PropertyCard
                    singleProperty = {property}
                    imageKey = {"od-w1024_h768_x2.jpg"}
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