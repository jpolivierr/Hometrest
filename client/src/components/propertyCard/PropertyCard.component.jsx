
import { deepSearch } from "../../Util/getValueByKey"
import { getStatusStyle, getTypeStyle, cleanInput, formatNumber, getPhoto } from "./util"
import { useEffect, useRef, useState } from "react"
import useRequest from "../../services/MakeRequest/MakeRequest"
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

    const {singleProperty} = props 
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

     const {makeRequest } =  useRequest()

     const {activeUserReducer, updateLikes} = useReduxMng()

     const [toggle] = useState(null)

    const [like, setLike] = useState(false)

     useEffect(()=>{

        const property_ids = deepSearch(activeUserReducer,["userInfo","likes"],[])

        if(property_ids.includes(propertyId)){

            setLike(!like)

        }
  
      },[])

      


    const likeProperty = (id) =>{

        const property_ids = deepSearch(activeUserReducer,["userInfo","likes"],[])

        if(!activeUserReducer.token){

            toggle()

            return

        }

        if(property_ids.includes(id)){

            setLike(false)

            const updatedPropertyIds = property_ids.filter(propId => propId != id)

            updateLikes(updatedPropertyIds)

            makeRequest("POST", URL.UNLIKE_PROPS, {propertyId : id})

            return

        }

        setLike(true)

        property_ids.push(id)

        updateLikes(property_ids)

        makeRequest("POST", URL.LIKE_PROPS, {propertyId : id})

    
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
 
        <PropertyCardView functions={{handlePropClick,getPhoto,getStatusStyle,cleanInput,formatNumber,likeProperty,handleForRent}} propertyDetails={{propertyId,status,type,beds,baths,sqft,price,street,city,zip,stateCode,photo,like}} />

    )
}

export default PropertyCard