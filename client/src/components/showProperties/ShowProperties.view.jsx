import "./ShowProperties.style.css"
import PropertyCard from "../propertyCard/PropertyCard.component"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import CardLoading from "../../lib/loadingEffect/CardLoading/CardLoading"
import UserContext from "../../context/user/UserContext"
import { useContext } from "react"
import Carousel from "../../lib/Carousel/Carousel.component"


const ShowPropertiesView = ({value}) =>{

    const {isLoading, getSearchValue, properties, total, generatePageNumber} = value

    const carouselSettings = {
        split: 2,
      }

    return(

        <div className={`show-properties ${isLoading && "props-loading"}`}>

         {
             properties.length === 0 ?
             <CardLoading/> :
             <>
                
                <div className="show-properties-header"> 

                        {getSearchValue()}


                {/* <Carousel 
                    elementStyle = "pagination"
                  settings={carouselSettings}>
                        {generatePageNumber()}
                </Carousel> */}


                </div>

                <div className="property_list_container">
                { 
                    properties.map((property,index)=>(
                        <PropertyCard
                            singleProperty = {property}
                            imageKey = {"od-w1024_h768.jpg"}
                            key={index}
                        />
                        ))
                }
                </div>
             
             </>

         }   

        </div>
    )

}

export default ShowPropertiesView