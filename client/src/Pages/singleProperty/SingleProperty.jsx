import { useEffect } from "react"

import { useLocation } from "react-router-dom"
import SinglePropertyRequest from "../../httpRequest/SinglePropertyRequest/SinglePropertyRequest"
import AgentInfo from "./component/AgenInfo/AgentInfo"
import PropDescription from "./component/PropDescription/PropDescription"
import PhotoGalleryView from "./component/PhotoGallery/PhotoGallery"
import PropHeader from "./component/PropHeader/PropHeader"
import PageLoading from "../../lib/loadingEffect/PageLoading/PageLoading"
import SimilarProperties from "../../components/SimilarProperties/SimilarProperties"
import { getParams } from "../../Util/urlParcer"
import "./SingleProperty.style.css"

const SingleProperty = () =>{

const { pathname, search } = useLocation();

const {singleProperty, loading} = SinglePropertyRequest()

    useEffect(() => {
            
            window.scrollTo(0, 0);

        }, [pathname, search]);

    return(
        <>
          {
              (!singleProperty.property_id) ?
              <PageLoading /> :
                  <>
                  <PropHeader singleProperty={singleProperty} />
                    <div className="container-medium">  
                        
                        <PhotoGalleryView singleProperty={singleProperty} />

                        <div className="prop_info_container">

                        <PropDescription singleProperty={singleProperty} />
                        <AgentInfo />
                        
                        </div>
                    
                    </div>
                  </>
               
                
            }
            {/* <div className="similar-property">
                <SimilarProperties propId={getParams("prop_id")}/>
            </div> */}
            
        </>
    )

}

export default SingleProperty