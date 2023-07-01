import "./style.css"
import PropertyCard from "../propertyCard/PropertyCard.component"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"


const ShowPropertiesView = ({value}) =>{

    const {isLoading, getSearchValue, properties} = value


    const renderPropertyCard = () =>{

        

        if(properties.length === 0) return

        console.log("property card..")

        return(
            properties.map((property,index)=>(
        
                        <PropertyCard
                            singleProperty = {property}
                            key={index}
                        />
       
                ))
        )

    }

    const renderLoading = () =>{

        if(isLoading || properties.length === 0){
            return(
                <SkeletonLoading
              type="cards"
              elementClass="av-loading-skeleton"
          />
            )
        }

    }


    return(
        <div className={`show-properties ${isLoading && "props-loading"}`}>

        <div className="show-properties-header"> 
             {getSearchValue()}
        </div>

        { renderPropertyCard()}
        </div>
    )

}

export default ShowPropertiesView