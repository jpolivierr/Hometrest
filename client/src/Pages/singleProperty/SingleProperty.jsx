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

const SingleProperty = () =>{

const { pathname, search } = useLocation();

const {singleProperty, loading} = SinglePropertyRequest()

    useEffect(() => {
            
            window.scrollTo(0, 0);

        }, [pathname, search]);

    return(
        <>

        <TopNav container="container"/>
                
          {
              (!singleProperty.property_id) ?
              <PageLoading /> :
                  <>
                  <PropHeader singleProperty={singleProperty} />
                    <div className="container-medium">  
                        
                        <PhotoGalleryView singleProperty={singleProperty} />

                        <div className="prop_info_container">

                        <PropDescription singleProperty={singleProperty} />
                         <ScheduleTour />
                        {/* <AgentInfo /> */}
                        
                        </div>
                   
                    </div>
                  </>
               
                
            }

            <div className="container-medium">
                <SimilarProperties/>
            </div>

            <Footer />
            
        </>
    )

}

export default SingleProperty