import "./ShowProperties.style.css"
import PropertyCard from "../propertyCard/PropertyCard.component"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import CardLoading from "../../lib/loadingEffect/CardLoading/CardLoading"
import UserContext from "../../context/user/UserContext"
import { useContext } from "react"


const ShowPropertiesView = ({value}) =>{

    const {isLoading, getSearchValue, properties} = value

    return(

        <div className={`show-properties ${isLoading && "props-loading"}`}>

         {
             properties.length === 0 ?
             <CardLoading/> :
             <>
                <div className="show-properties-header"> 
                        {getSearchValue()}
                </div>
                <div className="property_list_container">
                { 
                    properties.map((property,index)=>(
                        <PropertyCard
                            singleProperty = {property}
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