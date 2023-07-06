import { useEffect } from "react"

import { useLocation } from "react-router-dom"
import SinglePropertyRequest from "../../httpRequest/SinglePropertyRequest/SinglePropertyRequest"
import AgentInfo from "./AgenInfo/AgentInfo"
import PropDescription from "./PropDescription/PropDescription"
import PhotoGalleryView from "./PhotoGallery/PhotoGallery"
import PropHeader from "./PropHeader/PropHeader"
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
        <div className="container-medium" style={{maxWidth: "1200px"}}>
          {
              (!singleProperty.property_id) ?
              <PageLoading /> :
                <div>  
                    <PropHeader singleProperty={singleProperty} />
                    <PhotoGalleryView singleProperty={singleProperty} />

                    <div className="prop_info_container">

                    <PropDescription singleProperty={singleProperty} />
                    <AgentInfo />
                    
                    </div>
                   
                </div>
                
            
            }
            {/* <div className="similar-property">
                <SimilarProperties propId={getParams("prop_id")}/>
            </div> */}
            
        </div>
    )

}

export default SingleProperty