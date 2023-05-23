import "./style.css"
import useReduxMng from "../../hooks/useReduxMng"
import PropertyCard from "../propertyCard/PropertyCard"
import useMyModal from "../../lib/Modal/useMyModal"
import NewLoginForm from "../Forms/NewLoginForm"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import { useEffect } from "react"


const ShowProperties = (props) =>{

    const {isLoading} = props

    const {propertiesReducer,searchReducer} = useReduxMng()

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

    console.log(propertiesReducer)
    console.log(propertiesReducer.length)
    console.log(isLoading)
    console.log(searchReducer)

    const getSearchValue = () =>{

        if(searchReducer.city && !isLoading) return searchReducer.city
        if(searchReducer.postal_code && !isLoading) return searchReducer.postal_code
    
    }

    const renderLoading = () =>{

        if(isLoading && propertiesReducer.length === 0){
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

        {getSearchValue() && <div className="show-properties-header"> 
                <h2>{`${propertiesReducer.length} results found for "${getSearchValue()}"`}</h2>
            </div>}
            {
            Array.isArray(propertiesReducer) &&
            propertiesReducer.length > 0 ? propertiesReducer.map((property,index)=>(
        
            <PropertyCard
               singleProperty = {property}
               key={index}
            />
       
   )) : renderLoading()}
            {renderModal()}
        </div>
    )

}

export default ShowProperties