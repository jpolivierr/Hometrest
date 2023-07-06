import React from 'react'
import { useMyModal } from '../../../context/modals/modalContext'
import { useUserContext } from '../../../context/user/UserContext'
import { useNavigate } from 'react-router-dom'
import { deepSearch } from '../../../Util/getValueByKey'

export default function PropHeader({singleProperty}) {

    const {likeProperty, isLoggedIn, getUserLikes} = useUserContext()
    const propertyId = deepSearch(singleProperty,["property_id"], "")
    const navigate = useNavigate()
    const {toggleFloatingModal} = useMyModal()
    const loginModal = () => toggleFloatingModal("login")

    const handleLikes = (id) =>{

        if(!isLoggedIn) {
             loginModal()
             return
            }

        likeProperty(id)

    }

  return (
    <div className="single_prop_header">

                        <div className="single_back_btn s-h-btn" onClick={()=>navigate(-1)}>
                                    <i className="fa-solid fa-angle-left"></i>Search
                        </div>


                        <ul>
                            <li className="single_share_btn s-h-btn"><i className="fa-solid fa-share"></i> Share</li>
                            <li onClick={()=>{handleLikes(propertyId)}} className="single_like_btn s-h-btn">{!getUserLikes(propertyId) ? <i  className="fa-regular fa-heart"></i> : <i  className="fa-solid fa-heart like-prop"></i>} Favorite</li>
                            <li className="single_share_btn s-h-btn"><i className="fa-solid fa-xmark"></i> Hide</li>
                        </ul>
                        
                     </div>
  )
}
