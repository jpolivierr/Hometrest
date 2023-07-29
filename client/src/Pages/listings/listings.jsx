import "./style.css"
import ShowProperties from "../../components/showProperties/ShowProperties.component"
import Filter from "../../features/filter"
import Carousel from "../../lib/Carousel/Carousel.component"

const Listings = (props) =>{

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

          <Filter />
          <div className="container-medium">
             <Carousel settings={carouselSettings}>
                
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

             </Carousel>
          </div>
         
          
          {/* <TopSearchFilter/> */}
          <div className="search-result wide-container">

          {/* <Map properties={propertiesReducer.results} /> */}
          
            <ShowProperties />

          </div>
          
        </div>
        
    )
}

export default Listings