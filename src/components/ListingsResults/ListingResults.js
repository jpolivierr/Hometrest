import './style_listing_result.css'
import Listings from '../Cards/Listings'
import { NumberFormat } from '../../functions/NumberFormat'
import { useFetchRequest } from '../Request/useFetchRequest'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import GoogleMaps from '../Maps/GoogleMaps'
import { URL } from '../../VAR/var'
import Loading from '../Loading/Loading'
import { formatImg } from '../../functions/formatImg'

// Actions

const ListingResults = () =>{
  // Reducers
    const filterState = useSelector(state => state.filterReducer)
    const requestStatus = useSelector(state => state.requestStatusReducer)
    const isLoading = requestStatus.isLoading

    //Request Hook
    const { sendRequest} = useFetchRequest()

    const listingData = requestStatus.data

    useEffect(() =>{

        // const url = URL.GET_PROPERTIES
        const url = URL.GET_PROPERTIES
        sendRequest("POST",url, filterState)
      
    },[])


    return (
          <div className="container listing-result">
              {
                !listingData.home_search ? <Loading/> : <><div className='map'>
                {/* {
                  <GoogleMaps classname={isLoading && `loading-card` } listings={listingData.home_search.results}/>
                } */}
                
              </div>
              <div className='search-result'>
                <div className='search-header'>
                    <h1>Found <span style={{fontWeight: "600"}}>{listingData.home_search.results.length} </span>results for search "<span style={{fontWeight: "600"}}>{!filterState.city ? filterState.postal_code : filterState.city}</span>"</h1>
                </div>
                {
                   listingData.home_search.results.map((listing, index) => (                   
                   
                          <Listings 
                              key={index}
                              id={listing.property_id}
                              classname={isLoading && `loading-card` }
                              status={listing.status.replaceAll("_"," ")}
                              img={formatImg(!listing.primary_photo ? null : listing.primary_photo.href)}
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
              </>
              }
              
          </div>
    )
}

export default ListingResults