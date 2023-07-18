
import { deepSearch } from "../../Util/getValueByKey"
import { getStatusStyle, cleanInput, formatNumber, getPhoto } from "./util"
import { useMyModal } from "../../context/modals/modalContext"
import PropertyCardView from "./PropertyCard.view"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../../context/user/UserContext"
import { updateImageLink } from "../../Util/updateImageLink"
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


    const {activeUser, likeProperty, isLoggedIn, getUserLikes} = useUserContext()

    const {toggleFloatingModal} = useMyModal()
    const loginModal = () => toggleFloatingModal("login")

    const userLikes = activeUser.likedProperties

    const handleLikes = (id) =>{

        if(!isLoggedIn) {
            loginModal()
             return
            }

        likeProperty(id)

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
            functions={{handleLikes, getUserLikes,updateImageLink, handlePropClick,getPhoto,getStatusStyle,cleanInput,formatNumber,likeProperty,handleForRent,toggleFloatingModal}} 

             propertyDetails={{propertyId,status,type,beds,baths,sqft,price,street,city,zip,stateCode,photo}} 

             value={{userLikes}}
        
        />

    )
}

export default PropertyCard