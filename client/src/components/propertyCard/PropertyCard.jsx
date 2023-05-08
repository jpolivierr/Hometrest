
import { deepSearch } from "../../Util/getValueByKey"
import { getStatusStyle, cleanInput, formatNumber, getPhoto } from "./util"
import { useEffect, useRef, useState } from "react"
import useRequest from "../../lib/MakeRequest/MakeRequest"
import URL from "../../Config/urls"
import useReduxMng from "../../hooks/useReduxMng"
import { likesDemo } from "../../userDemo"
import "./style.css"

const PropertyCard = (props) =>{

    const {singleProperty, toggleModal} = props 

    // console.log(key)
  
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

     const {makeRequest, formResponse } =  useRequest()

     const {activeUserReducer, updateLikes} = useReduxMng()


    useEffect(()=>{

        //  console.log(activeUserReducer)
         console.log(formResponse)

    },[formResponse])



     const shortAddress = (address) => {

        const max = 39

        if(address.length >= max){

            const formatAddress = address.substr(0, max - 3) + "..."

            return formatAddress;
        }
        return address
    }

   

     const [like, setLike] = useState(false)

     useEffect(()=>{

        console.log(property_ids)

        if(property_ids.includes(propertyId)){

            setLike(!like)

        }
  
      },[])


     const [userLikes, setUserLikes] = useState([])

     const [prevUserLikes, setPrevUserLikes] = useState([])

 
    //    console.log(prevUserLikes)

    //    console.log(userLikes)

    console.log(activeUserReducer)
 
    const property_ids = deepSearch(activeUserReducer,["userInfo","likes"],[])

    console.log(property_ids)

    const likeProperty = (id) =>{ 

        if(property_ids.includes(id)){

            setLike(false)

            const updatedPropertyIds = property_ids.filter(propId => propId != id)

            setUserLikes(updatedPropertyIds)

            updateLikes(updatedPropertyIds)

            makeRequest("POST", URL.UNLIKE_PROPS, {propertyId : id})

            return

        }

        setLike(true)

        updateLikes(property_ids)

        makeRequest("POST", URL.LIKE_PROPS, {propertyId : id})

        // toggleModal() 
        

    }

    return(
 
        <div data-property_id = {propertyId} className="property-card av-shadow">
            <figure style={{background : `url(${getPhoto(photo)}) no-repeat center center/cover`}}>
                {/* <img src={getPhoto(photo)} /> */}
                <div className={getStatusStyle("for_sale")}>
                {cleanInput(status)}
            </div>
            </figure>

            <div className="prop-info">
                    <div className="prop-price">${formatNumber(price)}</div>
                    {!like ? <i onClick={()=>likeProperty(propertyId)} className="fa-regular fa-heart"></i> : <i onClick={()=>likeProperty(propertyId)} className="fa-solid fa-heart like-prop"></i>}
                    <div className="prop-beds">{beds} <span>Beds</span></div>
                    <div className="prop-baths">{baths} <span>Baths</span></div>
                    <div className="prop-sqft">{sqft} <span>Sqft</span></div>
                    <div className="prop-address">
                        {shortAddress(`${street}, ${city}, ${stateCode} ${zip}`)}
                    </div>
            </div>
            

        </div>
    )
}

export default PropertyCard