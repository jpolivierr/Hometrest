
import { deepSearch } from "../../Util/getValueByKey"
import { getStatusStyle, getTypeStyle, cleanInput, formatNumber, getPhoto } from "./util"
import { useEffect, useRef, useState } from "react"
import useRequest from "../../httpRequest/MakeRequest/MakeRequest"
import URL from "../../constants/urls"
import useReduxMng from "../../hooks/useReduxMng"
// import { likesDemo } from "../../Mock/userDemo"
import shortenText from "../../Util/shortenText"
import useMyModal from "../../lib/Modal/useMyModal"
import NewLoginForm from "../Forms/NewLoginForm"

import { useNavigate } from "react-router-dom"
import "./style.css"

const PropertyCardView = ({functions, propertyDetails, value}) =>{

    const {getUserLikes, handleForRent,handlePropClick,getPhoto,getStatusStyle,cleanInput,formatNumber,likeProperty,toggleFloatingModal} = functions
    const {propertyId,status,type, beds,baths,sqft,price,street,city,zip,stateCode,photo,like} = propertyDetails

    return(
 
        <>
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
                    !getUserLikes(propertyId) ? 
                      <i onClick={()=>{toggleFloatingModal();likeProperty(propertyId)}} className="fa-regular fa-heart"></i> : 
                      <i onClick={()=>{toggleFloatingModal();likeProperty(propertyId)}} className="fa-solid fa-heart like-prop"></i>
                      }
                    <div className="prop-beds"><i className="fa-solid fa-bed"></i> {beds} <span>Beds</span></div>
                    <div className="prop-baths"><i className="fa-solid fa-bath"></i>{baths} <span>Baths</span></div>
                    <div className="prop-sqft"><i className="fa-brands fa-unity"></i>{formatNumber(sqft)} <span>Sqft</span></div>
                    <div className="prop-address">
                        {`${street}, ${city}, ${stateCode} ${zip}`}
                    </div>
            </div>
            
            
        </div>

        </>

    )
}

export default PropertyCardView