import "./style.css"
import useReduxMng from "../../hooks/useReduxMng"
import PropertyCard from "../propertyCard/PropertyCard"


const ShowProperties = () =>{

    const {propertiesReducer} = useReduxMng()



    const renderProperties = () =>{

        if(Array.isArray(propertiesReducer) &&
          propertiesReducer.length > 0
        ){
            
            return(
                propertiesReducer.map((property,index)=>(
                    
                         <PropertyCard
                            singleProperty = {property}
                            key={index}
                         />
                    
                ))
            )
        }
    }

    return(
        <div className="show-properties">
            {renderProperties()}
        </div>
    )

}

export default ShowProperties