
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
import PropertyCardView from "./PropertyCard.view"

import { useNavigate } from "react-router-dom"
import "./PropertyCard.style.css"

const PropertyCard = (props) =>{

    useEffect(()=>{
        console.log("propertyCard render..")
    },[])

    const {singleProperty, value, functions} = props 
    const{likeProperty} = functions
    const {userLikes} = value
    const navigate = useNavigate()

    const propertyId = deepSearch(singleProperty,["property_id"])
    const listingId = deepSearch(singleProperty,["listing_id"])
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

    const [like] = useState(false)


    const getUserLikes = (id) =>{

        return userLikes.includes(id)

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
 
        <PropertyCardView 
            functions={{getUserLikes, handlePropClick,getPhoto,getStatusStyle,cleanInput,formatNumber,likeProperty,handleForRent}} 

             propertyDetails={{propertyId,status,type,beds,baths,sqft,price,street,city,zip,stateCode,photo,like}} 

             value={{userLikes}}
        
        />

    )
}

export default PropertyCard