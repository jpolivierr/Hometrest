
import Slider2 from "../../lib/Slider/Slider"
import PropertyCard from "../propertyCard/PropertyCard.component"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import SimilarPropertyRequest from "../../httpRequest/SimilarPropertyRequest/SimilarPropertyRequest"
import "./SimilarProperties.style.css"
import Carousel from "../../lib/Carousel/Carousel.component"


const SimilarProperties = (props) =>{

    const {propId} = props

    const {similarListings} = SimilarPropertyRequest()

    const carouselSettings = {
        aspectRatio : 5 / 5,
        split: 4,
        style: "split_4"
      }

    return(
        <>
         {!similarListings.length > 0 ? 
        <SkeletonLoading 
                            elementClass={"av-loading-skeleton av-loading-skeleton-side"} 
                            />
         : 
         <div className="similar-property">
         <h2>Similar Properties</h2>
         <Carousel 
                               elementStyle={"prop_carousel"}
                              settings={carouselSettings}
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
          
          </Carousel>
              </div>              
                            }
        
        </>
       
       
       
     
    )
}

export default SimilarProperties