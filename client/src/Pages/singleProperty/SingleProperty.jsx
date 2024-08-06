import { useEffect, useState, useRef } from "react"

import PropDescription from "../../components/PropDescription/PropDescription"
import PhotoGalleryView from "../../components/PhotoGallery/PhotoGallery"
import PageLoading from "../../lib/loadingEffect/PageLoading/PageLoading"
import SimilarProperties from "../../components/SimilarProperties/SimilarProperties"
import ScheduleTour from "../../components/Schedule/Scedule"
import { getParams } from "../../Util/urlParcer"
import HttpRequest from "../../httpRequest/HttpRequest"
import URL from "../../constants/urls"
import { deepSearch } from "../../Util/getValueByKey"
import { scrolly, scrollWithClass } from "../../Util/Scrolly"
import { Link } from 'react-router-dom'
import Modal from "../../components/modal/Modal"
import Login from "../../components/Form/login/LoginForm"
import LikePropertyService from "../../service/property/LikePropertyService"

const SingleProperty = () =>{

// const propertyFeatures = getParams("prop_features")
const {isFavorite, likeProperty, userAuthenticated} = LikePropertyService()
const {get, loading} = HttpRequest({headers: {
    'Content-Type': 'application/json'
  }})

  const [singleProperty, setSingleProperty] = useState({})
  const virtualTour = deepSearch(singleProperty,["virtual_tours", "href"],"")
  const photos = deepSearch(singleProperty,["photos"],[])
  const [activeList, setActiveList] = useState(0)
  const headerRef = useRef(null)
  const [loginModal, setLoginModal] =useState (false)

  const propertyId = deepSearch(singleProperty,["property_id"])
  const beds = deepSearch(singleProperty,["description","beds"])
  const baths = deepSearch(singleProperty,["description","baths"])
  const sqft = deepSearch(singleProperty,["description","sqft"])
  const price = deepSearch(singleProperty,["list_price"])
  const street = deepSearch(singleProperty,["location","address","line"])
  const city = deepSearch(singleProperty,["location","address","city"])
  const zip = deepSearch(singleProperty,["location","address","postal_code"])
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

  useEffect(()=>{
    (async () => {
        const response = await get(URL.SINGLE_PROPERTY + "/9809809")
        if(response.status === 200 && response.body) {
            const singleProperty = deepSearch(response.body,["data","home"],{})
            setSingleProperty(singleProperty)
        }
    })()
  },[])

  useEffect(()=>{
          
    const scrollEffect = scrollWithClass(headerRef)

    if(!scrollEffect) return 
    
    scrollEffect.init()

    return () => {
      scrollEffect.clear()
    }

  },[])


  const userLikeProperty = () => {
    if(!userAuthenticated()) {
      setLoginModal(true)
      return
    }
    likeProperty(likedPropertyData)
  }

    return(

    <>
     <Modal isOpen={loginModal} setModalState={setLoginModal}>
        <Login/>
      </Modal>

    {
      loading ? 
      <PageLoading /> :
      <div id={"23"} ref={headerRef} className="container-medium">
        <div  className="single_prop_header">
          <Link to={"/listings"}>
            <div className="single_back_btn ">
                <i className="fa-solid fa-angle-left"></i>Search
            </div>
          </Link>           
          <ul className='list_options'>
            <li   
                onClick={()=>{setActiveList(-1); scrolly(-1)}}
                className={activeList === -1 ? "active_list" : ""}>
                  Photos
            </li>
            <li   
                onClick={()=>{setActiveList(0); scrolly(0)}}
                className={activeList === 0 ? "active_list" : ""}>
                  Overview
            </li>
            <li   
                onClick={()=>{setActiveList(1); scrolly(1)}}
                className={activeList === 1 ? "active_list" : ""}>
                  Details
            </li>
            <li
                  onClick={()=>{setActiveList(2); scrolly(2)}}
                  className={activeList === 2 ? "active_list" : ""}>
                  Schools
            </li>
                <li 
                  onClick={()=>{setActiveList(3); scrolly(3)}}
                  className={activeList === 3 ? "active_list" : ""}>
                  Property History
                </li>
            <li 
                onClick={()=>{setActiveList(4); scrolly(4)}}
                className={activeList === 4 ? "active_list" : ""}>
                Tax History
            </li>
          </ul>

            <ul className="share_container">
                <li className="single_share_btn s-h-btn"><i className="fa-solid fa-share"></i> <span>Share</span></li>
                <li onClick={()=>userLikeProperty()} className="single_like_btn s-h-btn">
                  {
                    !isFavorite(propertyId)? 
                    <i  className="fa-regular fa-heart"></i> :
                    <i  className="fa-solid fa-heart like-prop"></i>
                  } 
                    <span>Favorite</span></li>
                <li className="single_share_btn s-h-btn"><i className="fa-solid fa-xmark"></i> <span>Hide</span></li>
            </ul>        
        </div>

          <PhotoGalleryView photos={photos} virtualTour={virtualTour}/>

          <div className="prop_info_container">
             <PropDescription singleProperty={singleProperty} />
             <ScheduleTour />   
          </div>

          
      </div>
    }

      <SimilarProperties propFeatures={singleProperty}/>
    
    </>  
   
    )

}

export default SingleProperty