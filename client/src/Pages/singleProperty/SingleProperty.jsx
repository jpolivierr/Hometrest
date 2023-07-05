import { useEffect, useState } from "react"
import { getParams } from "../../Util/urlParcer"
import useRequest from "../../httpRequest/MakeRequest/MakeRequest"
import URL from "../../constants/urls"
import { singleDemo } from "../../Mock/singleDemo"
import { deepSearch } from "../../Util/getValueByKey"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import { getPhoto } from "../../components/propertyCard/util"
import useMyModal from "../../lib/Modal/useMyModal"
import { cleanInput } from "../../lib/Forms/Util/cleanInput"
import {shortenParagraph, expandElement} from "../../Util/shortenParagraph"
import useReduxMng from "../../hooks/useReduxMng"
import NewLoginForm from "../../components/Forms/NewLoginForm"
import SimilarProperties from "../../components/SimilarProperties/SimilarProperties"
import ScheduleTour from "./Scedule"
import { formatNumber } from "../../components/propertyCard/util"
import jonathan from "../../assets/images/JONATHAN.jpg"
import map from "../../assets/images/map.jpg"
import { useNavigate, useLocation } from "react-router-dom"
import SinglePropertyRequest from "../../httpRequest/SinglePropertyRequest/SinglePropertyRequest"
import ModalContext from "../../context/modals/modalContext"
import { useContext } from "react"
import UserContext from "../../context/user/UserContext"
import AgentInfo from "./AgentInfo"
import PropDescription from "./PropDescription"
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery"
import "./style.css"

const SingleProperty = () =>{

const { pathname, search } = useLocation();

const {toggleFloatingModal, setPayLoad} = useContext(ModalContext)

const {activeUser, likeProperty, isLoggedIn} = useContext(UserContext)
const {singleProperty, loading} = SinglePropertyRequest()
const mPayload = {count: singleProperty.photo_count, photos: singleProperty.photos}
const PhotoGallery = () => toggleFloatingModal("gallery", mPayload)
const loginModal = () => toggleFloatingModal("login")


    useEffect(() => {
            
            window.scrollTo(0, 0);

        }, [pathname, search]);

    const navigate = useNavigate()

    

    // useEffect(()=>{

    //        if(singleProperty){
    //         setPayLoad({count: singleProperty.photo_count, photos: singleProperty.photos})
    //     }
    // },[singleProperty])


    const propertyId = deepSearch(singleProperty,["property_id"], "")
    const photos = deepSearch(singleProperty,["photos"],[])

    const userLikes = activeUser.likedProperties

    const getUserLikes = (id) =>{

        return userLikes.includes(id)

    }

    const handleLikes = (id) =>{

        if(!isLoggedIn) {
             loginModal()
             return
            }

        likeProperty(id)

    }

    return(
        <div className="container-medium" style={{maxWidth: "1200px"}}>
          {
              (!singleProperty || !singleProperty.property_id || loading) ?
              <SkeletonLoading 
              elementClass={"av-loading-skeleton loading-page"}
              type="page" /> :
                <div>
                    <ul className="single_prop_header">
                        <li  onClick={()=>navigate(-1)} className="single_back_btn s-h-btn"><i className="fa-solid fa-angle-left"></i>Search</li>
                    
                        <li className="single_share_btn s-h-btn"><i className="fa-solid fa-share"></i> Share</li>
                        <li onClick={()=>{handleLikes(propertyId)}} className="single_like_btn s-h-btn">{!getUserLikes(propertyId) ? <i  className="fa-regular fa-heart"></i> : <i  className="fa-solid fa-heart like-prop"></i>} Favorite</li>

                     </ul>
                    <div onClick={PhotoGallery} className="prop_photos">
                        {photos.length >= 3 && 
                            photos.map((photo, index)=>(
                               index <= 2 &&
                                <figure key={index} style={{background: `url("${getPhoto(photo.href) }") no-repeat center center/cover`}} ></figure>
                            ))
                        }
                        
                    </div>
                    <div className="prop_info_container">

                    <PropDescription singleProperty={singleProperty} />

                    <AgentInfo />
                    
                    </div>
                   
                </div>
                
            
            }
            {/* <div className="similar-property">
                <SimilarProperties propId={getParams("prop_id")}/>
            </div> */}
            
        </div>
    )

}

export default SingleProperty