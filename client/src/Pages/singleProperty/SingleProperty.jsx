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
import shortenParagraph from "../../Util/shortenParagraph"
import MainButton from "../../components/buton/MainButton"
import "./style.css"

const SingleProperty = () =>{

    const {makeRequest, formResponse, loading} = useRequest()

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

    const [singleProperty, setSingleProperty] = useState(deepSearch(singleDemo,["data","home"],{}))

    useEffect(()=>{

        const paramId = getParams("prop_id")

        console.log(singleProperty)

        if(paramId){

            console.log("make request")

            //   makeRequest("GET",URL.SINGLE_PROPERTY + "?prop_id=" + paramId)

        }

    },[])


    useEffect(()=>{
        console.log(formResponse)

        if(formResponse.status && formResponse.status === 200){

            const property = deepSearch(formResponse.body,["data","home"],{})

            setSingleProperty(property)

        }

    },[formResponse])

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

  console.log(details)

    return(
        getParams("prop_id") && 
        <div className="container-medium">
            {
              !singleProperty.property_id ?
                <SkeletonLoading /> :
                <div>
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
                            <h2>{`${address}, ${state}, ${zip}`}</h2>
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

                                <li>
                                    <h3>Type</h3>
                                    <p>{`${cleanInput(type)}`}</p>
                                    
                                </li>

                              
                            </ul>

                        </div>
                        <div className="prop_description">
                            <h2>Description</h2>
                            
                                {shortenParagraph("description", description) }
                            
                        </div>
                        <div className="prop_details">
                            {
                                details.length > 0 &&
                                details.map((detail,index)=>(
                                    <div key={index}>
                                        <h3>{detail.category}</h3>
                                        <p>{detail.text.join(", ")}</p>
                                    </div>
                                ))
                            }
                        </div>
                    
                    </div>
                    <div className="agent_info">
                        <div className="agent">
                            <ul>
                                <li>
                                    <p>Frederic Oliver</p>
                                     <h4>Keller Wiliams Realty</h4>
                                </li>
                                <li>
                                    <p>Text or Call</p>
                                     <h4>2409255535</h4>
                                </li>

                                <li>
                                    <p>Email</p>
                                     <h4>jp@gmail.com</h4>
                                </li>
                            </ul>
                                
                        </div>
                        <button className="button main-btn">
                                                Schedule a Tour
                        </button>
                    </div>
                    </div>
                   
                </div>
                
                
            }
            {photoModal.renderModal()}
        </div>
    )

}

export default SingleProperty