import "./style_single_home.css"
import TopNav from "../Navigations/TopNav"
import { useEffect, useState } from "react"
import { URL, PATH_TYPE, COMPONENT, MODAL_TYPE } from "../../VAR/var"
import { NumberFormat } from "../../functions/NumberFormat"
import { Link, useNavigate} from "react-router-dom"
import {CapitalizeFirstLetter} from "../../functions/CapitalizeFirstLetter"
import { formatImg } from "../../functions/formatImg"
import nophoto from "../../media/images/nophotos.jpg"

import SimilarListings from "../SimilarListings/SimilarListings"

import {useSearchParams} from 'react-router-dom'
import Loading from "../Loading/Loading"

// Actions
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { modalAction } from "../../_state/Actions/actionCollection"


const SingleHome= () =>{

    const navigate = useNavigate()
    const [home, setHome] = useState(null)
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] =useState(true)

    // Modals
    const modalState = useSelector(state => state.modaReducer)
    const {openModal} = bindActionCreators(modalAction, useDispatch())

    const [propertyId,setPropertyId]=useState(null)

    const getSingleProperty = async (id) =>{
                setIsLoading(true)
                console.log("::::::::::::::::::::::::::")
                console.log("fetching")
                const config = {
                    method: "GET"
                }

                const pId = !id ? parseInt(searchParams.get("id")) : id
                setPropertyId(pId)
                const res = await fetch(URL.GET_SINGLE_LISTING+"?id="+pId,config)
                const listing = await res.json()
                
                if(res.status === 200){
                    console.log(listing)
                    setHome(listing)
                }
                setIsLoading(false)
            }

    const checkIfIdParamExist = () =>{
            !parseInt(searchParams.get("id")) ?  window.location.href = '/' : setPropertyId(parseInt(searchParams.get("id")))
        }
        
    useEffect(()=>{
        checkIfIdParamExist()
        getSingleProperty()
    },[])

    let description
    let beds
    let baths
    let sqft
    let street
    let city
    let state
    let zipcode
    let price
    let photos
    let yearBuilt
    let type
    let garage
    let pool
    let agentName
    let agentEmail
    let agentPhone
    let agentOffice
    let agentPhotos

    if(home){
          const singleHome = home.data.home
          const homeInfo = singleHome.description
          const location = singleHome.location.address
          const advertisers = !singleHome.advertisers ? null : singleHome.advertisers

          //Advertisers
          agentName = !advertisers[0] ? null : advertisers[0].name
          agentEmail = !advertisers[0] ? null : advertisers[0].email
          agentPhone = !advertisers[0] ? null : !advertisers[0].phones ? null : advertisers[0].phones[0].number
          agentOffice = !advertisers[0] ? null : !advertisers[0].office ? null : advertisers[0].office.name
          agentPhotos = !advertisers[0] ? null : !advertisers[0].photo ? null : advertisers[0].photo

          //property details
          description = homeInfo.text
          beds = !homeInfo.beds ? 0 : homeInfo.beds
          baths = !homeInfo.baths ? 0 : homeInfo.baths
          sqft = !homeInfo.sqft ? 0 : NumberFormat.formatNumberWithCommas(homeInfo.sqft)
          yearBuilt = homeInfo.year_built
          type = !homeInfo.type ? null : CapitalizeFirstLetter(homeInfo.type).replace("_"," ")
          garage = !homeInfo.garage ? 0 : homeInfo.garage
          pool = !homeInfo.pool ? 0 : homeInfo.pool

          // Location
          street = location.line
          city = location.city
          state = location.state_code
          zipcode = location.postal_code

          price = !singleHome.list_price ? 0 : NumberFormat.formatNumberWithCommas(singleHome.list_price) 

          photos = !singleHome.photos ? [{href: nophoto}]: singleHome.photos

          
    }

    return (
        <>
           <TopNav/>

          { isLoading ? <Loading/> :
           <section className="single-home-container">
               <section className="single-home-header">
                    <header>
                        <Link to={"/search"}style={{cursor: "pointer"}} >Back to search</Link>
                    </header>
               </section>
               <section onClick={()=>openModal(MODAL_TYPE.FLOATING, COMPONENT.PHOTOS, photos)} className="single-home-photo">
                  {
                    photos.map((photo, index) =>{
                        if(index > 2){
                            return
                        }else{
                            return(
                            <figure key={index} style={{background: `url(${formatImg(photo.href)}) no-repeat center center/cover`}} />
                        )
                        }
                        
                    })
                  }
               </section>
               <section className="home-basic-info">
                   <h2>{street}, <span> {city} {state} {zipcode}</span></h2>
                   <ul>
                        <li>
                            <p>Price</p>
                            <h3>${price}</h3>
                        </li>
                        <li>  
                             <p>Beds</p>
                             <h3>{beds}</h3>
                        </li>
                        <li>  
                            <p>Baths</p>
                            <h3>{baths}</h3>
                        </li>
                        <li>  
                        <p>Sqft</p>
                        <h3>{sqft}</h3>
                        </li>
                   </ul>
               </section>
               <section className="home-description">
                    <h2>About This Home</h2>
                    <p>
                          {description}
                    </p>
               </section>
               <section className="home-features">
                    <h2>Home features</h2>
                    <ul>
                        <li>
                            <h3>Status</h3>
                            <p>Active</p>
                        </li>


                        {type &&
                            <li>
                                <h3>Property Type</h3>
                                <p>{type}</p>
                            </li>
                        }
                        {yearBuilt &&
                            <li>
                                <h3>Year Built</h3>
                                <p>{yearBuilt}</p>
                            </li>
                        }
                        {!garage ? <li>
                                <h3>Garage</h3>
                                <p>{garage}</p>
                            </li> :
                            <li>
                                <h3>Garage</h3>
                                <p>{garage}</p>
                            </li>
                        }  
                        
                    </ul>
               </section>
          

                 <aside>
                    <figure>
                         {/* <img src="https://ap.rdcpix.com/885619ad4a7464b68f5ed0a4e80b5665g-c4265837386l.jpg"/> */}
                         <img src={formatImg(agentPhotos)}/>
                    </figure>
                     <h3>{agentName}</h3>
                     <h4>{agentOffice}</h4>
                     <ul>
                        <li>
                            <h3>Text or Call</h3>
                            <p>{agentPhone}</p>
                        </li>
                        <li>
                            <h3>Email</h3>
                            <p>{agentEmail}</p>
                        </li>
                        
                     </ul>
                     <button><i className="fa-solid fa-calendar-days"></i> Schedule a Tour</button>

                 </aside>
           </section>
           } 

{ !parseInt(searchParams.get("id")) ? null : <SimilarListings propertyId={parseInt(searchParams.get("id"))} setPropertyId={getSingleProperty}/>}
 
        </>
        
    )

}

export default SingleHome