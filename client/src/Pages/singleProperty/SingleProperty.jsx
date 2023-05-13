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
import MainButton from "../../components/buton/MainButton"
import NewLoginForm from "../../components/Forms/NewLoginForm"
import SimilarProperties from "../../components/SimilarProperties/SimilarProperties"
import ScheduleTour from "./Scedule"
import "./style.css"

const SingleProperty = () =>{

    const {makeRequest, formResponse, loading} = useRequest()

       const {toggle, renderModal, addChildElement, isShowing} = useMyModal({
        type: "floating",
        windowAnimation : {
                    start: "float",
                    end: "close-float"
        },
        time: 0,
    })

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

            //    makeRequest("GET",URL.SINGLE_PROPERTY + "?prop_id=" + paramId)

        }

    },[])

    useEffect(()=>{

        const property = deepSearch(singleDemo,["data","home"],{})

        setSingleProperty(property)


        if(formResponse.status && formResponse.status === 200){

            const property = deepSearch(formResponse.body,["data","home"],{})

            setSingleProperty(property)

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

    return(
        <div className="container-medium">
          {
            getParams("prop_id") && 
              !singleProperty || !singleProperty.property_id ?
              <SkeletonLoading 
              elementClass={"av-loading-skeleton loading-page"}
              type="page" /> :
                <div>
                    <ul className="single_prop_header">
                        <li>Back to search</li>
                        <li className="single_share_btn"><i className="fa-solid fa-share"></i></li>
                        <li className="single_like_btn">{!like ? <i onClick={()=>likeProperty(propertyId)} className="fa-regular fa-heart"></i> : <i onClick={()=>likeProperty(propertyId)} className="fa-solid fa-heart like-prop"></i>}</li>

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
                            <p style={{padding: "0rem 1rem"}}>Status - {cleanInput(status)}</p>
                            <h2 style={{background: "white", fontWeight: "500"}}>{`${address}, ${state}, ${zip}`}</h2>
                            <ul className="prop_info_list">
                                <li>
                                    <h3>Price</h3>
                                    <p>{`$${price}`}</p>
                                    
                                    
                                </li>
                                <li>
                                    <h3>Beds</h3>
                                    <p>{`${beds}`}</p>
                                    
                                    
                                </li>
                                <li>
                                    <h3>Baths</h3>
                                    <p>{`${baths}`}</p>
                                    
                                    
                                </li>
                                <li>
                                    <h3>Sqft</h3>
                                    <p>{`${sqft}`}</p>
                                    
                                </li>

                                <li>

                                    <h3>Year built</h3>
                                    <p>{`${yearBuilt}`}</p>
                                    
                                </li>

                                {/* <li>
                                    <h3>Type</h3>
                                    <p>{`${cleanInput(type)}`}</p>
                                    
                                </li> */}

                              
                            </ul>

                        </div>
                        <div className="prop_description">
                            <h2>Description</h2>
                            
                                {shortenParagraph("description", description) }
                            
                        </div>
                        
                            {expandElement("details",details)}
                    
                    </div>
                    <div className="agent_info">
                        {/* <figure className="agent-head-shot"></figure> */}
                        <div className="agent">

                            <form>
                                <h2>Ask me a Question</h2>
                                <fieldset>
                                    <input placeholder="Name"/>
                                </fieldset>
                                <fieldset>
                                    <input placeholder="email"/>
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Phone"/>
                                </fieldset>
                                <fieldset>
                                    <textarea placeholder="I'd like to learn more">
                                       
                                    </textarea>
                                </fieldset>
                                <button style={{width: "100%", marginBottom: "1rem"}} className="button secondary-btn">
                                                Send 
                        </button>
                            </form>
                            

                            {/* <ul>
                                <li>
                                    <p>Frederic Oliver</p>
                                     <h3>Keller Wiliams Realty</h3>
                                </li>
                                <li>
                                    <p>Text or Call</p>
                                     <h3>2409255535</h3>
                                </li>

                                <li>
                                    <p>Email</p>
                                     <h3>jp@gmail.com</h3>
                                </li>

                                <li>
                                    <p>Office</p>
                                     <h3>155367 NW 14Ct, Miami, FL, 33784</h3>
                                </li>
                            </ul> */}
                                
                        </div>
                        {/* <button style={{width: "100%", marginBottom: "1rem"}} className="button secondary-btn">
                                                ask Me a Question
                        </button> */}
                        <h2 style={{marginTop: "3rem"}}>Schedule a Tour</h2>
                        <ScheduleTour />
                        <button style={{width: "100%"}} className="button main-btn">
                                                Schedule a Tour
                        </button>
                    </div>
                    </div>
                   
                </div>
                
            
            }
            <div className="similar-property">
                <h2>Similar Properties</h2>
                <SimilarProperties propId={getParams("prop_id")}/>
            </div>
            
            {photoModal.renderModal()}
            {renderModal()}
        </div>
    )

}

export default SingleProperty