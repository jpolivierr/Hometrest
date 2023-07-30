import "./style.css"
import ShowProperties from "../../components/showProperties/ShowProperties.component"
import Filter from "../../features/filter"
import Carousel from "../../lib/Carousel/Carousel.component"
import Map from "../../components/map/Map"
import { Reducers } from "../../Redux"
import PropertyRequest from "../../httpRequest/propertyRequest/propertyRequest"

const Listings = (props) =>{

    const {loading} = PropertyRequest()

  const { propertiesReducer} = Reducers()
    const {Class, id} = props

    const carouselSettings = {
          split: 4,
          aspectRatio: 5 / 5,
          transitionTime : .3,
          gap : 13,
          style: "split_4"
    }

    return(
        <div id={id} className={Class}>
          
          <div className="filter_container stick"> 
             <div className="container">
            <Filter />
             </div>
          </div>

         
          

          <div className="search-result wide-container">

          <Map properties={propertiesReducer.results} 
            zoom={11}
            disableDefaultUI={false}
            streetViewControl={false}
            fullscreenControl={false}
            styleElement={"sticky_map"}
            loading={loading}
          />
          
            <ShowProperties loading={loading} />

          </div>
          
        </div>
        
    )
}

export default Listings