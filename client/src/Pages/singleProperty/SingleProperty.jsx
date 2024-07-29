import { useEffect, useState, useRef } from "react"

import { useLocation } from "react-router-dom"
import PropDescription from "./component/PropDescription/PropDescription"
import PhotoGalleryView from "./component/PhotoGallery/PhotoGallery"
import PageLoading from "../../lib/loadingEffect/PageLoading/PageLoading"
// import SimilarProperties from "../../components/SimilarProperties/SimilarProperties"
import ScheduleTour from "./component/Schedule/Scedule"
import "./SingleProperty.style.css"
import { getParams } from "../../Util/urlParcer"
import HttpRequest from "../../httpRequest/HttpRequest"
import URL from "../../constants/urls"
import { deepSearch } from "../../Util/getValueByKey"
import { useUserContext } from "../../context/user/UserContext"
import { scrolly, scrollWithClass } from "../../Util/Scrolly"
import { Link } from 'react-router-dom'


const SingleProperty = () =>{

const propertyFeatures = getParams("prop_features")
const {userAuthenticated, getUserFavoritePropertyById} = useUserContext()

const {get, del} = HttpRequest({headers: {
    'Content-Type': 'application/json'
  }})

  const [singleProperty, setSingleProperty] = useState({})
  const propertyId = deepSearch(singleProperty,["property_id"], "")
  const virtualTour = deepSearch(singleProperty,["virtual_tours", "href"],"")
  const photos = deepSearch(singleProperty,["photos"],[])
  const [activeList, setActiveList] = useState(0)
  const headerRef = useRef(null)

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
    scrollEffect.init()

    return () => {
      scrollEffect.clear()
    }

  },[])

  console.log(singleProperty)

    return(
    <div id={"23"} ref={headerRef} className="container-medium">

      <div  className="single_prop_header">
            <Link to={"/listings"}>
            <div className="single_back_btn s-h-btn">
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
                <li onClick={()=>{}} className="single_like_btn s-h-btn">
                  {
                      userAuthenticated && !getUserFavoritePropertyById(propertyId)? 
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

         {/* <SimilarProperties propFeatures={singleProperty}/> */}

         {/* {
        
        (propertyFeatures) ? 
        <SimilarProperties propFeatures={propertyFeatures}/> :
        (singleProperty.property_id) && 
        <SimilarProperties propFeatures={singleProperty}/>
    
    }             */}
    </div>

    )

}

export default SingleProperty