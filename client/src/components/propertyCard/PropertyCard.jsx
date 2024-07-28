
import { deepSearch } from "../../Util/getValueByKey"
import { getStatusStyle, getTypeStyle, cleanInput, formatNumber, getPhoto } from "./util"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PropertyCard = ({singleProperty, likeProperty, isFavorite}) =>{

    const navigate = useNavigate()

    const propertyId = deepSearch(singleProperty,["property_id"])
    const status = deepSearch(singleProperty,["status"])
    const type = deepSearch(singleProperty,["description","type"])
    const beds = deepSearch(singleProperty,["description","beds"])
    const baths = deepSearch(singleProperty,["description","baths"])
    const sqft = deepSearch(singleProperty,["description","sqft"])
    const price = deepSearch(singleProperty,["list_price"])
    const street = deepSearch(singleProperty,["location","address","line"])
    const city = deepSearch(singleProperty,["location","address","city"])
    const zip = deepSearch(singleProperty,["location","address","postal_code"])
    const state = deepSearch(singleProperty,["location","address","state"])
    const stateCode = deepSearch(singleProperty,["location","address","state_code"])
    const photo = deepSearch(singleProperty,["primary_photo","href"])

    const likedPropertyData = {
        propertyId,
        price,
        beds,
        baths,
        sqft,
        street,
        city,
        stateCode,
        zip
    }
    
    const handlePropClick = (e, propertyId) =>{

        const targetClassName = e.target.className

        if(targetClassName.includes("fa-heart")){
            return
        }

        navigate(`/single_property?prop_id=${propertyId}`)
    }

  const handleForRent = (status) =>{
    if(status === "for_rent") return (<span>/month</span>)
  }
    return(
        <div 
            onClick={(e)=> handlePropClick(e,propertyId)} data-property_id = {propertyId} className="property-card av-shadow">
            <figure style={{background : `url(${getPhoto(photo)}) no-repeat center center/cover`}}>

                <div className="status-component">
                        <div className={getStatusStyle(status)}>
                            {cleanInput(status)}
                        </div>
                        <div className={getTypeStyle(type)}>
                            {cleanInput(type)}
                        </div>
                </div>
                
            </figure>

            <div className="prop-info">
                    <div className="prop-price">${formatNumber(price)}{handleForRent(status)}</div>
                    {
                        !isFavorite(propertyId) ? 
                        <i onClick={()=>{likeProperty(likedPropertyData)}} className="fa-regular fa-heart"></i> : 
                        <i onClick={()=>{likeProperty(likedPropertyData)}} className="fa-solid fa-heart like-prop"></i>
                    }
                    <div className="prop-beds"><i className="fa-solid fa-bed"></i> {beds} <span>Beds</span></div>
                    <div className="prop-baths"><i className="fa-solid fa-bath"></i>{baths} <span>Baths</span></div>
                    <div className="prop-sqft"><i className="fa-brands fa-unity"></i>{formatNumber(sqft)} <span>Sqft</span></div>
                    <div className="prop-address">
                        {`${street}, ${city}, ${stateCode} ${zip}`}
                    </div>
            </div>
        </div>

    )
}

export default PropertyCard