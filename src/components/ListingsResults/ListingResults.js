import './style_listing_result.css'
import { listingModel } from './listingModel'
import Listings from '../Cards/Listings'
import { NumberFormat } from '../../functions/NumberFormat'
import { useFetchRequest } from '../Request/useFetchRequest'
import { useEffect, useState } from 'react'
import GoogleMaps from '../Maps/GoogleMaps'


const ListingResults = () =>{

    const { sendRequest} = useFetchRequest()
    const [listingData, setListingData] = useState(null)

    useEffect( ()  =>{
        const fetchData = async () =>{
            const config ={
                method: "GET"
            }
            const resp = await fetch("http://localhost:7070/api",config) 
        const respData = await resp.json()
        setListingData(respData)
        console.log(respData)
        }

    //    fetchData()
        
    },[])

      const data= listingModel.data.home_search.results
    //   console.log(listingData)

     const formatImg = (img) =>{
        return img.replace("s.jpg","od-w480_h360_x2.jpg")
     }

    return(
          <div className="container listing-result">
              <div className='map'>
                {/* {<Index/>} */}
                {/* <GoogleMaps/> */}
              </div>
              <div className='search-result'>
                {
                data.map((listing, index) => (                   
                   
                          <Listings 
                             key={index}
                              id={listing.property_id}
                              status={listing.status}
                              img={formatImg(listing.primary_photo.href)}
                              price={NumberFormat.formatNumberWithCommas(listing.list_price) }
                              beds={!listing.description.beds ? 0 : listing.description.beds }
                              baths={!listing.description.baths ? 0 : listing.description.baths}
                              sqft={listing.description.sqft}
                              street={listing.location.address.line}
                              city={listing.location.address.city}
                              state={listing.location.address.state_code}
                              zip={listing.location.address.postal_code}
                             />
                    
                ))}
              </div>
          </div>
    )
}

export default ListingResults