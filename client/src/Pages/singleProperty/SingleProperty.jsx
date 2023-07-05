import { useEffect } from "react"
import { deepSearch } from "../../Util/getValueByKey"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import { getPhoto } from "../../components/propertyCard/util"

import { useNavigate, useLocation } from "react-router-dom"
import SinglePropertyRequest from "../../httpRequest/SinglePropertyRequest/SinglePropertyRequest"
import ModalContext from "../../context/modals/modalContext"
import { useContext } from "react"
import UserContext from "../../context/user/UserContext"
import AgentInfo from "./AgenInfo/AgentInfo"
import PropDescription from "./PropDescription/PropDescription"
import "./SingleProperty.style.css"

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
                    <div className="single_prop_header">

                        <div className="single_back_btn s-h-btn" onClick={()=>navigate(-1)}>
                                    <i className="fa-solid fa-angle-left"></i>Search
                        </div>


                        <ul>
                            <li className="single_share_btn s-h-btn"><i className="fa-solid fa-share"></i> Share</li>
                            <li onClick={()=>{handleLikes(propertyId)}} className="single_like_btn s-h-btn">{!getUserLikes(propertyId) ? <i  className="fa-regular fa-heart"></i> : <i  className="fa-solid fa-heart like-prop"></i>} Favorite</li>
                            <li className="single_share_btn s-h-btn"><i class="fa-solid fa-xmark"></i> Hide</li>
                        </ul>
                        
                     </div>
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