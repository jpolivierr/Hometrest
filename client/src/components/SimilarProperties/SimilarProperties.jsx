import PropertyCard from "../propertyCard/PropertyCard"
import CardLoading from "../loadingEffect/CardLoading/CardLoading"
import Carousel from "../Carousel/Carousel.component"
import { deepSearch } from "../../Util/getValueByKey"
import { useEffect } from "react"
import HttpRequest from "../../httpRequest/HttpRequest"
import deepCopy from "../../Util/deepCopy"
import { useState } from "react"
import URL from "../../constants/urls"
import LikePropertyService from "../../service/property/LikePropertyService"


const SimilarProperties = ({propFeatures}) =>{

    const {post} = HttpRequest({headers: {
        'Content-Type': 'application/json'
      }})
    const {isFavorite, likeProperty} = LikePropertyService()
    
    const status = deepSearch(propFeatures,["status"],"")
    const type = propFeatures.type || deepSearch(propFeatures,["description","type"])
    const price = propFeatures.price || deepSearch(propFeatures,["list_price"], "")
    const city = propFeatures.city || deepSearch(propFeatures,["location","address","city"],"")
    const state_code = propFeatures.state_code || deepSearch(propFeatures,["location","address","state_code"],"")
    const postal_code = propFeatures.postal_code || deepSearch(propFeatures,["location","address","postal_code"],"")
    const [properties, setProperties] = useState([])

    const pricePercentage = (num) =>{

        const number = num; 
        const percentage = 12.5;
        return (percentage / 100) * number;

    }
    const preparedObj = {
        limit: 20,
        city,
        postal_code,
        state_code,
        type: [type],
        status : [status],
        list_price: price && {
                      min: price - pricePercentage(price), 
                      max: price + pricePercentage(price)
            }
    }

    const init = {
        count: 0,
        total: 0,
        results : [],
   }

    useEffect( () => {
        (
          async () => {
            const searchCopy = deepCopy(preparedObj)
            const response = await post(URL.SEARCH, searchCopy, true)
            if(response.status === 200 && response.body){
            const propertyData = deepSearch(response.body,["data","home_search"],init)
            setProperties(propertyData.results)
            }
          } 
        )()
      },[propFeatures])



    const carouselSettings = {
        aspectRatio : 5 / 5,
        split: 4,
        style: "split_4",
      }

    return(
    <div className="container-medium">
        {
            properties.length === 0 ? 
            <CardLoading layout={"horizontal-cards"}/>
            : 
            <div className="similar-property">
            <h2>Similar Properties</h2>
            <Carousel 
                elementStyle={"prop_carousel"}
                settings={carouselSettings}
                    >   
                    {
                        properties.length > 0 && 
                        properties.map((property,index)=>(
                            <PropertyCard
                                singleProperty = {property}
                                imageKey = {"od-w1024_h768_x2.jpg"}
                                key={index}
                                likeProperty={likeProperty}
                                isFavorite={isFavorite}
                            />
                        ))
                    }
            </Carousel>
            </div>       
        } 
    </div>
   
    )
}

export default SimilarProperties