import "./style.css"
import OldFilter from "../../features/filter"
import Filter from "../../components/filter/Filter"
import { formatNumber } from "../../Util/formatNumber"
import URL from "../../constants/urls"
import HttpRequest from "../../httpRequest/HttpRequest"
import { useState, useEffect, useRef } from "react"
import { deepSearch } from "../../Util/getValueByKey"
import CardLoading from "../../lib/loadingEffect/CardLoading/CardLoading"
import PropertyCard from "../../components/propertyCard/PropertyCard.component"


const Listings = (props) =>{
  
  const [search, setSearch] = useState({
                        city_zip : "",
                        city: "",
                        state_code: "",
                        postal_code: "",
                        type: [],
                        status: [],
                        list_price: {min: 0, max: 0},
                        baths: {min: 0, max: 0},
                        beds : {min: 0, max: 0},
                        limit : 50
                      })
  const init = {
              count: 0,
              total: 0,
              results : [],
  }
  const httpRequest = HttpRequest(URL.SEARCH)
  const {post, loading} = httpRequest
  const [properties, setProperties] = useState([])
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  const {Class, id} = props


  useEffect( () => {

    fetchProperties()

  },[])

  const prevSearchRef = useRef();

  useEffect(() => {
    if (prevSearchRef.current && !deepEqual(prevSearchRef.current, search)) {

    }
    prevSearchRef.current = search;
  }, [search]);


  async function fetchProperties (){

    const response = await post(URL.SEARCH, search)

    if(response.status === 200 && response.body){
      const propertyData = deepSearch(response.body,["data","home_search"],init)
      setCount(propertyData.count)
      setTotal(propertyData.total)
      setProperties(propertyData.results)
    }

  }
  
  const deepEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };

  return (
    <>
      <div id={id} className={Class}>
 
            <OldFilter />
            <Filter data={search} setData={setSearch}/>

        <div className="search-result wide-container">
          {/* <Map properties={propertiesReducer.results} 
            zoom={10}
            disableDefaultUI={false}
            streetViewControl={false}
            fullscreenControl={false}
            styleElement={"sticky_map"}
            loading={loading}
          /> */}
          
          <div className={`show-properties ${loading && properties.length > 0 ? "props-loading" : ""}`}>
            {
                properties.length === 0 ? <CardLoading/> :
                <div>
                  <div className="show-properties-header"> 
                  <h5>
                    {`Showing `} <b style={{fontWeight: "600"}}>{`${formatNumber(search.limit)}`}</b>  {` out of `}
                    <b style={{fontWeight: "600"}}>{`${formatNumber(total)}`}</b>{` result for `}
                        <span style={{fontStyle: "italic"}}>
                          {`"${search.city}"`}
                        </span>
                    </h5>
                  </div>

                  <div className="property_list_container">
                    { 
                      properties.map((property,index)=>(
                          <PropertyCard
                              singleProperty = {property}
                              imageKey = {"od-w1024_h768.jpg"}
                              key={index}
                          />
                          ))
                    }
                  </div>
              </div>
            }   
        </div>
      </div>
    </div>
    </>
    )
}

export default Listings