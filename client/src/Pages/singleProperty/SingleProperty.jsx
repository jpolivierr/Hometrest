import { useEffect } from "react"

import { useLocation } from "react-router-dom"
import SinglePropertyRequest from "../../httpRequest/SinglePropertyRequest/SinglePropertyRequest"
import PropDescription from "./component/PropDescription/PropDescription"
import PhotoGalleryView from "./component/PhotoGallery/PhotoGallery"
import PropHeader from "./component/PropHeader/PropHeader"
import PageLoading from "../../lib/loadingEffect/PageLoading/PageLoading"
import SimilarProperties from "../../components/SimilarProperties/SimilarProperties"
import ScheduleTour from "./component/Schedule/Scedule"
import "./SingleProperty.style.css"
import TopNav from "../../components/navBar/topNav"
import footer from "../../footer/footer.component"
import Footer from "../../footer/footer.component"
import ScrollTop from "../../components/ScrollTop/ScrollTop"
import { getParams } from "../../Util/urlParcer"


const SingleProperty = () =>{

const propertyFeatures = getParams("prop_features")
const {singleProperty, loading} = SinglePropertyRequest()

    return(
        <>
         <ScrollTop />
        <TopNav container="container"/>
                
          {
              (!singleProperty.property_id || loading) ?
              <PageLoading /> :
                  <>
                  <PropHeader singleProperty={singleProperty} />
                    <div className="container-medium">  
                        
                        <PhotoGalleryView singleProperty={singleProperty} />

                        <div className="prop_info_container">

                        <PropDescription singleProperty={singleProperty} />
                         <ScheduleTour />
                        
                        </div>
                   
                    </div>

                  </>
            }

             {/* <SimilarProperties propFeatures={singleProperty}/> */}

             {
             
               (propertyFeatures) ? 
               <SimilarProperties propFeatures={propertyFeatures}/> :
               (singleProperty.property_id) && 
               <SimilarProperties propFeatures={singleProperty}/>
            
            }


            <Footer />
            
        </>
    )

}

export default SingleProperty