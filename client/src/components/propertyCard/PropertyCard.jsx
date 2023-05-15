
import { deepSearch } from "../../Util/getValueByKey"
import { getStatusStyle, cleanInput, formatNumber, getPhoto } from "./util"
import { useEffect, useRef, useState } from "react"
import useRequest from "../../lib/MakeRequest/MakeRequest"
import URL from "../../Config/urls"
import useReduxMng from "../../hooks/useReduxMng"
import { likesDemo } from "../../userDemo"
import shortenText from "../../Util/shortenText"
import useMyModal from "../../lib/Modal/useMyModal"
import NewLoginForm from "../Forms/NewLoginForm"
import { withRouter } from 'react-router-dom';
import "./style.css"

const PropertyCard = (props) =>{

    const {singleProperty, history} = props 

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

     const {toggle, renderModal, addChildElement, isShowing} = useMyModal({
        type: "floating",
        windowAnimation : {
                    start: "float",
                    end: "close-float"
        },
        time: 0,
    })



    const [like, setLike] = useState(false)

    useEffect(()=>{
        addChildElement(
                        <NewLoginForm 
                              elementClass="avalon text-left padding-top-bottom padding-bottom-2x"
                        />
                    )
        
    },[isShowing])

    useEffect(()=>{

        //  console.log(activeUserReducer)
        if(formResponse.status){
            console.log(formResponse)
        }
         

    },[formResponse])


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

    const handleClick = (e) =>{

        const targetClassName = e.target.className

        if(targetClassName.includes("fa-heart")){
            return
        }

        console.log("handle click")
        history.push('/new-route');

    }


    return(
 
        <div onClick={handleClick} data-property_id = {propertyId} className="property-card av-shadow">
            <figure style={{background : `url(${photo}) no-repeat center center/cover`}}>
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
                        {`${street}, ${city}, ${stateCode} ${zip}`}
                    </div>
            </div>
            
            {renderModal()}
        </div>
    )
}

export default PropertyCard