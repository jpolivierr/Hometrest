import { useEffect, useState } from "react"
import { getParams } from "../../Util/urlParcer"
import useRequest from "../../lib/MakeRequest/MakeRequest"
import URL from "../../Config/urls"
import { singleDemo } from "../../singleDemo"
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
import jonathan from "../../media/images/JONATHAN.jpg"
import map from "../../media/images/map.jpg"
import { useNavigate, useLocation } from "react-router-dom"
import "./style.css"

const SingleProperty = () =>{

    const navigate = useNavigate()

    const {makeRequest, formResponse, loading} = useRequest()

       const {toggle, renderModal, addChildElement, isShowing} = useMyModal({
        type: "floating",
        windowAnimation : {
                    start: "float",
                    end: "close-float"
        },
        time: 0,
    })

    const { pathname, search } = useLocation();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        
        window.scrollTo(0, 0);

    }, [pathname, search]);

    const {activeUserReducer, updateLikes} = useReduxMng()

    const photoModal = useMyModal({
        type: "floating",
        elementClass: "w-90",
        windowAnimation : {
                    start: "float",
                    end: "close-float"
        },
        time: 0,
    })

    useEffect(()=>{
        photoModal.addChildElement(
                <div className="photo-gallery">
                    <h2>Photo count: {photos.length}</h2>
                     {photos.length > 0 && 
                        photos.map((photo, index)=>(
                            <img key={index} src={`${getPhoto(photo.href)}`} />
                        ))
                     }
                </div>
        )
    },[photoModal.isShowing])

    const [singleProperty, setSingleProperty] = useState(null)

    useEffect(()=>{

        const paramId = getParams("prop_id")

        if(paramId){

            console.log("make request")
            setIsLoading(true)
            makeRequest("GET",URL.SINGLE_PROPERTY + "?prop_id=" + paramId)

        }

    },[pathname, search])

    useEffect(()=>{

         
        if(formResponse.status && formResponse.status === 200){

            const property = deepSearch(formResponse.body,["data","home"],{})

            setSingleProperty(property)

        }

        if(Object.keys(formResponse).length > 0){
            setIsLoading(false)
        }

    },[formResponse])

    useEffect(()=>{

        const property_ids = deepSearch(activeUserReducer,["userInfo","likes"],[])

        if(property_ids.includes(propertyId)){

            setLike(!like)

        }
  
      },[])

      const [like, setLike] = useState(false)

    useEffect(()=>{
        addChildElement(
                        <NewLoginForm 
                              elementClass="avalon text-left padding-top-bottom padding-bottom-2x"
                        />
                    )
        
    },[isShowing])

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


    const propertyId = deepSearch(singleProperty,["property_id"], "")
    const price = deepSearch(singleProperty,["list_price"], "")
    const address = deepSearch(singleProperty,["location","address","line"],"")
    const state = deepSearch(singleProperty,["location","address","state_code"],"")
    const zip = deepSearch(singleProperty,["location","address","postal_code"],"")
    const photos = deepSearch(singleProperty,["photos"],[])
    const description = deepSearch(singleProperty,["description", "text"], "")
    const baths = deepSearch(singleProperty,["description", "baths"], "")
    const beds = deepSearch(singleProperty,["description", "beds"], "")
    const garage = deepSearch(singleProperty,["description", "garage"], "")
    const lotSize = deepSearch(singleProperty,["description", "lot_sqft"], "")
    const type = deepSearch(singleProperty,["description", "type"], "")
    const sqft = deepSearch(singleProperty,["description", "sqft"], "")
    const yearBuilt = deepSearch(singleProperty,["description", "year_built"], "")
    const details = deepSearch(singleProperty,["details"], [])
    const status = deepSearch(singleProperty,["status"],"")
    const monthlyEstimate = deepSearch(singleProperty,["mortgage","estimate","monthly_payment"],"")

    return(
        <div className="container-medium" style={{maxWidth: "1000px"}}>
          {
              (!singleProperty || !singleProperty.property_id || isLoading) ?
              <SkeletonLoading 
              elementClass={"av-loading-skeleton loading-page"}
              type="page" /> :
                <div>
                    <ul className="single_prop_header">
                        <li  onClick={()=>navigate(-1)} className="single_back_btn s-h-btn"><i className="fa-solid fa-angle-left"></i>Search</li>
                    
                        <li className="single_share_btn s-h-btn"><i className="fa-solid fa-share"></i> Share</li>
                        <li onClick={()=>likeProperty(propertyId)} className="single_like_btn s-h-btn">{!like ? <i onClick={()=>likeProperty(propertyId)} className="fa-regular fa-heart"></i> : <i onClick={()=>likeProperty(propertyId)} className="fa-solid fa-heart like-prop"></i>} Favorite</li>

                     </ul>
                    <div onClick={photoModal.toggle} className="prop_photos">
                        {photos.length >= 3 && 
                            photos.map((photo, index)=>(
                               index <= 2 &&
                                <figure key={index} style={{background: `url("${getPhoto(photo.href) }") no-repeat center center/cover`}} ></figure>
                            ))
                        }
                        
                    </div>
                    <div className="prop_info_container">

                         <div className="prop_info">
                        <div className="prop_info_header">
                            <figure className="mini-map">
                               <img src={map}/>
                            </figure>
                            <div className="prop_header_details">
                                <p>Status - {cleanInput(status)}</p>
                            <h2>{`${address}, ${state}, ${zip}`}</h2>
                                <h3>{`$${formatNumber(price)}`} <span>Est. ${formatNumber(monthlyEstimate)}/month</span></h3>
                                
                                <ul className="prop_info_list">
                                <li>
                                    <h4>Beds <span>{`${beds}`}</span></h4>

                                </li>
                                <li>
                                    <h4>Baths <span>{`${baths}`}</span></h4>        
                                </li>
                                <li>
                                    <h4>Sqft <span>{`${formatNumber(sqft)}`}</span></h4>
                                </li>

                                <li>
                                    <h4>Year built <span>{`${yearBuilt}`}</span></h4>                           
                                </li>
                              
                            </ul>
                            </div>


                        </div>
                        <div className="prop_description">
                            <h2>Description</h2>
                            
                                {shortenParagraph("description", description) }
                            
                        </div>
                        
                            {expandElement("details",details)}
                    
                    </div>
                    <div className="agent_info">
                        <div className="personal_info">
                        <figure className="agent-head-shot">
                            <img src={jonathan} alt="Example" />
                        </figure>
                        <h4>Jonathan Pluviose</h4>
                        <h5>Keller William Realty</h5>
                        <ul className="contact-info">
                                <li><i className="fa-solid fa-phone"></i><p>Call</p></li>
                                <li><i className="fa-solid fa-envelope"></i><p>Message</p></li>
                        </ul>
                        </div>
                        
                        <div className="agent">

                            <form onSubmit={(e)=> e.preventDefault()}>
                                {/* <h3 style={{marginBottom: "1rem"}}>Ask me a Question</h3> */}
                       
                                <fieldset>
                                    <textarea placeholder="I'd like to learn more">
                                       
                                    </textarea>
                                </fieldset>
                                <button style={{width: "100%", marginBottom: "1rem"}} className="button secondary-btn">
                                                Ask me a question 
                        </button>
                            </form>
                                
                        </div>
            
                        <h3 style={{marginTop: "2rem"}}>
                            Select a tour date. No obligation. Cancel at any time.</h3>
                        <ScheduleTour />
                        <button style={{width: "100%"}} className="button main-btn">
                                                Schedule a Tour
                        </button>
                    </div>
                    </div>
                   
                </div>
                
            
            }
            <div className="similar-property">
                <SimilarProperties propId={getParams("prop_id")}/>
            </div>
            
            {photoModal.renderModal()}
            {renderModal()}
        </div>
    )

}

export default SingleProperty