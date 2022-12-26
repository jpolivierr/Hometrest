import "./style_similar_listings.css"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { URL } from "../../VAR/var"
import Listings from "../Cards/Listings"
import Loading from "../Loading/Loading"
import { NumberFormat } from "../../functions/NumberFormat"
import Carousel from "../Carousel/Carousel"

const SimilarListings = ({propertyId, setPropertyId}) =>{

    const [similarListings, setSimilarListings] = useState(null)
    const [isLoading, setIsLoading] =useState(true)

    // Reducers
    const requestStatus = useSelector(state => state.requestStatusReducer)
    // const isLoading = requestStatus.isLoading


    const formatImg = (img) =>{
        return img.replace("s.jpg","od-w480_h360_x2.jpg")
     }

    useEffect(()=>{
         setIsLoading(true)
        const getSingleProperty = async () =>{
            console.log("::::::::::::::::::::::::::")
            console.log("fetching Similar Listings")
            const config = {
                method: "GET"
            }
            const res = await fetch(URL.GET_SIMILAR_LISTING+"?id="+propertyId,config)
            const similarListings = await res.json()
            console.log(similarListings)
            if(res.status === 200){
                setSimilarListings(similarListings)
            }
            setIsLoading(false)
        }
         getSingleProperty()

    },[propertyId])

    let relatedHomes
    // console.log(blockNum)

    if(similarListings){
        relatedHomes = similarListings.data.home.related_homes.results
    }
    

    return isLoading ? null : (
        
        <section className="similar-listings single-page-container ">
            
            <h2>Related Homes</h2>
            {
                !relatedHomes ? <Loading/> : <Carousel setPropertyId={setPropertyId} relatedHomes={relatedHomes}/>
            }
            
        </section>
        
    )

}

export default SimilarListings