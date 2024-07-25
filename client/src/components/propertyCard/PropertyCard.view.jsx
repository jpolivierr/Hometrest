

// import {getTypeStyle} from "./util"

// import { useNavigate } from "react-router-dom"
// import "./PropertyCard.style.css"

// const PropertyCardView = ({functions, propertyDetails, value}) =>{

//     const {
//          getUserLikes,
//          handleForRent,
//          handlePropClick,
//          getPhoto,
//          getStatusStyle,
//          cleanInput,
//          formatNumber,
//          likeProperty,
//          handleLikes,
//          updateImageLink,
//          imageKey
//         } = functions
//     const {
//            propertyId,
//            status,
//            type, 
//            beds,
//            baths,
//            sqft,
//            price,
//            street,
//            city,
//            postal_code,
//            state_code,
//            photo,
//            like
//         } = propertyDetails

//     return(
 
//         <>
//                 <div 
//                   onClick={(e)=> handlePropClick(e,propertyId,{status,price,type,city,postal_code,state_code})} 
//                   data-property_id = {propertyId} className="property-card av-shadow"
//                   >
//             <figure style={{background : `url(${updateImageLink(photo,imageKey)}) no-repeat center center/cover`}}>

//                 <div className="status-container">
//                         <div className={`${getStatusStyle(status)} status-component`}>
//                             {cleanInput(status)}
//                         </div>
//                         <div className={`${getTypeStyle(type)} status-component`}>
//                             {cleanInput(type)}
//                         </div>
//                 </div>
                
//             </figure>

//             <div className="prop-info">
//                     <div className="prop-price">${formatNumber(price)}{handleForRent(status)}</div>
//                     {
//                     !getUserLikes(propertyId) ? 
//                       <i onClick={()=>{handleLikes(propertyId)}} className="fa-regular fa-heart"></i> : 
//                       <i onClick={()=>{handleLikes(propertyId)}} className="fa-solid fa-heart like-prop"></i>
//                       }
//                     <div className="prop-beds"><i className="fa-solid fa-bed"></i> {beds} <span>Beds</span></div>
//                     <div className="prop-baths"><i className="fa-solid fa-bath"></i>{baths} <span>Baths</span></div>
//                     <div className="prop-sqft"><i className="fa-brands fa-unity"></i>{formatNumber(sqft)} <span>Sqft</span></div>
//                     <div className="prop-address">
//                         {`${street}, ${city}, ${state_code} ${postal_code}`}
//                     </div>
//             </div>
            
            
//         </div>

//         </>

//     )
// }

// export default PropertyCardView