import "./style.css"
import ShowProperties from "../../components/showProperties/ShowProperties.component"
import Filter from "../../features/filter"

const Listings = (props) =>{

    const {Class, id} = props
   
    return(
        <div id={id} className={Class}>
          <Filter />
          {/* <TopSearchFilter/> */}
          <div className="search-result wide-container">

          {/* <Map properties={propertiesReducer.results} /> */}
          
            <ShowProperties 
    
            />

          </div>
          
        </div>
        
    )
}

export default Listings