// import "./ShowProperties.style.css"
// import PropertyCard from "../propertyCard/PropertyCard.component"
// import CardLoading from "../../lib/loadingEffect/CardLoading/CardLoading"

// const ShowPropertiesView = ({ properties, loading, total}) =>{

//     // const {generatePageNumber} = value

//     const carouselSettings = {
//         split: 2,
//       }

//     return(
//         <div className={`show-properties ${loading && properties.length > 0 ? "props-loading" : ""}`}>

//          {
//              properties.length === 0 ?
//              <CardLoading/> :
//              <>
//                 {/* <div className="show-properties-header"> 

//                         {getSearchValue()}

//                 </div> */}

//                 <div className="property_list_container">
//                 { 
//                     properties.map((property,index)=>(
//                         <PropertyCard
//                             singleProperty = {property}
//                             imageKey = {"od-w1024_h768.jpg"}
//                             key={index}
//                         />
//                         ))
//                 }
//                 </div>
             
//              </>

//          }   

//         </div>
//     )

// }

// export default ShowPropertiesView