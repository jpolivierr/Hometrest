import "./style.css"
import Filter from "../../components/filter/Filter"
import { formatNumber } from "../../Util/formatNumber"
import URL from "../../constants/urls"
import HttpRequest from "../../httpRequest/HttpRequest"
import { useState, useEffect, useRef } from "react"
import { deepSearch } from "../../Util/getValueByKey"
import CardLoading from "../../lib/loadingEffect/CardLoading/CardLoading"
import PropertyCard from "../../components/propertyCard/PropertyCard"
import { updateParam, getParams } from "../../Util/urlParcer"
import removeEmptyValues from "../../Util/removeEmptyValues"
import deepCopy from "../../Util/deepCopy.js"

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

  useEffect(() => {
    const params = getParams("search");
    if (params) {
      setSearch((prevSearch) => ({
        ...prevSearch,
        ...Object.keys(params).reduce((acc, key) => {
          if (key in prevSearch) {
            acc[key] = params[key];
          }
          return acc;
        }, {})
      }));
    }
  }, []);
  
  useEffect( () => {
    fetchProperties()
  },[])

  const prevSearchRef = useRef();

  useEffect(() => {
    if (prevSearchRef.current && !deepEqual(prevSearchRef.current, search)){
      const searchCopy = deepCopy(search)
      updateParam(removeEmptyValues(searchCopy, true), true, "search") 
      fetchProperties()
    }
    prevSearchRef.current = search;
  }, [search]);

  const deepEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };

  const fetchProperties = async () =>{
    const searchCopy = deepCopy(search)
    const response = await post(URL.SEARCH, removeEmptyValues(searchCopy, true))
    if(response.status === 200 && response.body){
      const propertyData = deepSearch(response.body,["data","home_search"],init)
      setCount(propertyData.count)
      setTotal(propertyData.total)
      setProperties(propertyData.results)
    }
  }

  return (
      <div>
 
          <Filter data={search} setData={setSearch}/>

          <div>
              {
                /* <Map properties={propertiesReducer.results} 
                  zoom={10}
                  disableDefaultUI={false}
                  streetViewControl={false}
                  fullscreenControl={false}
                  styleElement={"sticky_map"}
                  loading={loading}
                /> */
              }

              <div className="show-properties-header"> 
                  <h5>
                    {`Showing `} <b style={{fontWeight: "600"}}>{`${formatNumber(search.limit)}`}</b>  {` out of `}
                    <b style={{fontWeight: "600"}}>{`${formatNumber(total)}`}</b>{` result for `}
                        <span style={{fontStyle: "italic"}}>
                          {`"${search.city}"`}
                        </span>
                    </h5>
              </div>

              {
                  properties.length === 0 ? 
                  <CardLoading/> :
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
              } 
          </div>

  
    </div>
    )
}

export default Listings