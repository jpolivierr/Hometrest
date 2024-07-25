
// import Slider2 from "../../lib/Slider/Slider"
// import PropertyCard from "../propertyCard/PropertyCard.component"
// import LoadingSkeleton from "../../lib/loadingEffect/CardLoading/CardLoading"
// import SimilarPropertyRequest from "../../httpRequest/SimilarPropertyRequest/SimilarPropertyRequest"
// import "./SimilarProperties.style.css"
// import Carousel from "../../lib/Carousel/Carousel.component"
// import { deepSearch } from "../../Util/getValueByKey"
// import { useEffect } from "react"


// const SimilarProperties = ({propFeatures}) =>{
    

//     const status = deepSearch(propFeatures,["status"],"")
//     const type = propFeatures.type || deepSearch(propFeatures,["description","type"])
//     const price = propFeatures.price || deepSearch(propFeatures,["list_price"], "")
//     const city = propFeatures.city || deepSearch(propFeatures,["location","address","city"],"")
//     const state_code = propFeatures.state_code || deepSearch(propFeatures,["location","address","state_code"],"")
//     const postal_code = propFeatures.postal_code || deepSearch(propFeatures,["location","address","postal_code"],"")

//     const pricePercentage = (num) =>{

//         const number = num; 
//         const percentage = 12.5;
//         return (percentage / 100) * number;

//     }
//     const preparedObj = {
//         limit: 20,
//         city,
//         postal_code,
//         state_code,
//         type: [type],
//         status : [status],
//         list_price: price && {
//                       min: price - pricePercentage(price), 
//                       max: price + pricePercentage(price)
//                     }

//     }


//     const {similarListings} = SimilarPropertyRequest(preparedObj)

//     const carouselSettings = {
//         aspectRatio : 5 / 5,
//         split: 4,
//         style: "split_4",
//       }

//     return(
//         <div className="container-medium">
//          {!similarListings.length > 0 ? 

//         <LoadingSkeleton elementStyle={"horizontal-cards"}  
//                             />
//          : 

//          <div className="similar-property">
//          <h2>Similar Properties</h2>
//          <Carousel 
//                                elementStyle={"prop_carousel"}
//                               settings={carouselSettings}
//                                   >   
//             {
            
//                     Array.isArray(similarListings) &&
//                     similarListings.length > 0 && similarListings.map((property,index)=>(

//                     <PropertyCard
//                     singleProperty = {property}
//                     imageKey = {"od-w1024_h768_x2.jpg"}
//                     key={index}
//                 />

//                 ))
//                 }
          
//           </Carousel>

//               </div>    
              
              
//                             }
        
//         </div>
       
       
       
     
//     )
// }

// export default SimilarProperties