import "./style.css"
import useReduxMng from "../../hooks/useReduxMng"
import PropertyCard from "../propertyCard/PropertyCard"
import useMyModal from "../../lib/Modal/useMyModal"
import NewLoginForm from "../Forms/NewLoginForm"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import { useEffect } from "react"


const ShowProperties = (props) =>{

    const {isLoading} = props

    const {propertiesReducer} = useReduxMng()

    const {toggle, renderModal, addChildElement, isShowing} = useMyModal({
        type: "floating",
        windowAnimation : {
                    start: "float",
                    end: "close-float"
        },
        time: 0,
    })
    

    useEffect(()=>{
        addChildElement(
                        <NewLoginForm 
                              elementClass="avalon text-left padding-top-bottom padding-bottom-2x"
                        />
                    )
        
    },[isShowing])


    return(
        <div className={`show-properties ${isLoading && "props-loading"}`}>
            {
            
            Array.isArray(propertiesReducer) &&
            propertiesReducer.length > 0 ? propertiesReducer.map((property,index)=>(
        
            <PropertyCard
               singleProperty = {property}
               key={index}
            />
       
   )) : <SkeletonLoading

          />}
            {renderModal()}
        </div>
    )

}

export default ShowProperties