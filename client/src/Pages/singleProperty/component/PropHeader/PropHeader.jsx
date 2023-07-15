import React, { useEffect, useRef, useState } from 'react'
import { useMyModal } from '../../../../context/modals/modalContext'
import { useUserContext } from '../../../../context/user/UserContext'
import { useNavigate } from 'react-router-dom'
import { deepSearch } from '../../../../Util/getValueByKey'
import "./PropHeader.style.css"

export default function PropHeader({singleProperty}) {

    const {likeProperty, isLoggedIn, getUserLikes} = useUserContext()
    const propertyId = deepSearch(singleProperty,["property_id"], "")
    const navigate = useNavigate()
    const {toggleFloatingModal} = useMyModal()
    const loginModal = () => toggleFloatingModal("login")
    const [activeList, setActiveList] = useState(0)
    const headerRef = useRef(null)

    useEffect(()=>{
      const headerElement = headerRef.current
      const rect = headerElement.getBoundingClientRect()
      const distanceFromTop = rect.top + window.scrollY


      window.addEventListener('scroll', function() {
        const distanceScrolled = window.scrollY || document.documentElement.scrollTop;
        // console.log(distanceScrolled);
        // console.log("header top position", distanceFromTop)
        if(distanceFromTop <= distanceScrolled){
          console.log("add class")
          headerElement.classList.add("stick_top")
        }else{
          console.log("remove class")
          headerElement.classList.remove("stick_top")
        }
      });

    },[])

    const handleLikes = (id) =>{

        if(!isLoggedIn) {
             loginModal()
             return
            }

        likeProperty(id)

    }

  return (
    <div ref={headerRef}>
      <div  className="single_prop_header container-medium">
                        <div className="single_back_btn s-h-btn" onClick={()=>navigate(-1)}>
                                    <i className="fa-solid fa-angle-left"></i>Search
                        </div>

                        <ul className='list_options'>
                          <li 
                            onClick={()=>setActiveList(0)}
                            className={activeList === 0 ? "active_list" : ""}>
                              Details
                              </li>
                          <li 
                             onClick={()=>setActiveList(1)}
                             className={activeList === 1 ? "active_list" : ""}>
                              Schools
                              </li>
                          <li 
                             onClick={()=>setActiveList(2)}
                             className={activeList === 2 ? "active_list" : ""}>
                              Property History
                              </li>
                          <li 
                             onClick={()=>setActiveList(3)}
                             className={activeList === 3 ? "active_list" : ""}>
                              Tax History</li>
                        </ul>


                        <ul>
                            <li className="single_share_btn s-h-btn"><i className="fa-solid fa-share"></i> Share</li>
                            <li onClick={()=>{handleLikes(propertyId)}} className="single_like_btn s-h-btn">{!getUserLikes(propertyId) ? <i  className="fa-regular fa-heart"></i> : <i  className="fa-solid fa-heart like-prop"></i>} Favorite</li>
                            <li className="single_share_btn s-h-btn"><i className="fa-solid fa-xmark"></i> Hide</li>
                        </ul>
                        
                     </div>
    </div>
    
  )
}
