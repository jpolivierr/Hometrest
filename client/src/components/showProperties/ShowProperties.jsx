// import useReduxMng from "../../hooks/useReduxMng"
// import PropertyCard from "../propertyCard/PropertyCard"
// import useMyModal from "../../lib/Modal/useMyModal"
// import NewLoginForm from "../Forms/NewLoginForm"
// import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
// import { useEffect } from "react"


// const ShowProperties = (props) =>{

//     const {isLoading, properties} = props

//     const {propertiesReducer,searchReducer} = useReduxMng()
    

//     const getSearchValue = () =>{

//         const city = searchReducer.city || ""
//         const postal_code = searchReducer.postal_code || ""
//         const state_code = searchReducer.state_code || ""
//         const state = searchReducer.state || ""

//         let myState

//         if(state_code && state){
//             myState = state_code
//         }else{
//             myState = state_code ? state_code : state
//         }

//         const str = `${city} ${myState} ${postal_code}`

//         return  (<h2>{`Showing 50 out of${propertiesReducer.length} result found for "${str.trim()}"`}</h2>)
    
//     }

//     const renderLoading = () =>{

//         if(isLoading || propertiesReducer.length === 0){
//             return(
//                 <SkeletonLoading
//               type="cards"
//               elementClass="av-loading-skeleton"
//           />
//             )
//         }

//     }


//     return(
//         <div className={`show-properties ${isLoading && "props-loading"}`}>

//         {<div className="show-properties-header"> 
//              {!isLoading && getSearchValue()}
//             </div>}
//             <div>
                
//             </div>
//             {
//             propertiesReducer.length > 0 ? propertiesReducer.map((property,index)=>(
        
//             <PropertyCard
//                singleProperty = {property}
//                key={index}
//             />
       
//    )) : renderLoading()}
//         </div>
//     )

// }

// export default ShowProperties