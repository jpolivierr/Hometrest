import "./style.css"
import useReduxMng from "../../hooks/useReduxMng"
import PropertyCard from "../propertyCard/PropertyCard"
import useMyModal from "../../lib/Modal/useMyModal"
import { useEffect } from "react"


const ShowProperties = () =>{

    const {propertiesReducer} = useReduxMng()

    const {toggle, renderModal, addChildElement, isShowing} = useMyModal({
        type: "slide",
        windowAnimation : {
                    start: "slide-left",
                    end: "close-slide-left"
        },
        animation: "slide-left_close-slide-left",
        time: 100,
    })

    useEffect(()=>{
        addChildElement(<div className="user-settings">
            
                      </div>
                    )
        
    },[isShowing])



    return(
        <div className="show-properties">
            {
            
            Array.isArray(propertiesReducer) &&
            propertiesReducer.length > 0 && propertiesReducer.map((property,index)=>(
                    
            <PropertyCard
               singleProperty = {property}
               key={index}
               toggleModal={toggle}
            />
       
   ))}
            {renderModal()}
        </div>
    )

}

export default ShowProperties