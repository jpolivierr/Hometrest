import Filter from "../../components/filter/Filter.jsx"
import { formatNumber } from "../../Util/formatNumber.js"
import URL from "../../constants/urls.js"
import HttpRequest from "../../httpRequest/HttpRequest.js"
import { useState, useEffect, useRef } from "react"
import { deepSearch } from "../../Util/getValueByKey.js"
import CardLoading from "../../lib/loadingEffect/CardLoading/CardLoading.jsx"
import PropertyCard from "../../components/propertyCard/PropertyCard.jsx"
import { updateParam, getParams } from "../../Util/urlParcer.js"
import removeEmptyValues from "../../Util/removeEmptyValues.js"
import deepCopy from "../../Util/deepCopy.js"
import { useUserContext } from "../../context/user/UserContext.jsx"
import Modal from "../../components/modal/Modal.jsx"
import Login from "../../components/Form/login/Login.jsx"
import Map from "../../components/map/Map.jsx"

const Listings = () =>{


  const {userAuthenticated, getUserFavoriteProperties, updateProperty} = useUserContext()
  
  const [search, setSearch] = useState({
                        city_zip : "",
                        city: "",
                        state_code: "",
                        postal_code: "",
                        address: "",
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
  const {post, del} = HttpRequest({headers: {
    'Content-Type': 'application/json'
  }})
  const [properties, setProperties] = useState([])
  const [total, setTotal] = useState(0)
  const [loginModal, setLoginModal] =useState (false)
  
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
    console.log(search)
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
      setTotal(propertyData.total)
      setProperties(propertyData.results)
    }
  }

  const saveProperty = async (likedPropertyData) => {
    const response = await post(URL.LIKE_PROPERTY, likedPropertyData);
    if(response.status === 200){
        updateProperty(response.body)
    }else{
      console.error("Could not save property")
    }
  }

  const deleteProperty = async (likedPropertyData) => {
    const response = await del(URL.LIKE_PROPERTY, likedPropertyData);
    if(response.status === 200){
        updateProperty(likedPropertyData)
    }else{
      console.error("Could not delete property")
    }
  }

  const likeProperty = (likedPropertyData) => {
    if(!userAuthenticated()) {
      setLoginModal(true)
      return
    }
    const properties = getUserFavoriteProperties()
    const exist = properties.some(property => property.propertyId === likedPropertyData.propertyId)
    if(exist){
      deleteProperty(likedPropertyData)
    }else{
      saveProperty(likedPropertyData)
    }
  }

  const isFavorite = (id) => {
    if(!userAuthenticated()) return
    const properties = getUserFavoriteProperties()
    return properties.some(property => property.propertyId === id)
  }

  return (
      <div>
 
          <Filter data={search} setData={setSearch}/>

          <div style={{marginTop: "85px"}}>
              {
                <Map properties={properties} 
                  zoom={10}
                  disableDefaultUI={false}
                  streetViewControl={false}
                  fullscreenControl={false}
                  styleElement={"sticky_map"}
                /> 
              }

              <div className="show-properties-header"> 
                  <h5>
                    {`Showing `} <b style={{fontWeight: "600"}}>{`${formatNumber(search.limit)}`}</b>  {` out of `}
                    <b style={{fontWeight: "600"}}>{`${formatNumber(total)}`}</b>{` result for `}
                        <span style={{fontStyle: "italic"}}>
                          {`"${search.address}"`}
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
                                likeProperty={likeProperty}
                                isFavorite={isFavorite}
                            />
                            ))
                      }
                    </div>
              } 
          </div>

        <Modal isOpen={loginModal} setModalState={setLoginModal}>
           <Login/>
        </Modal>
    </div>
    )
}

export default Listings