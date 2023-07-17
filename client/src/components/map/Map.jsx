import "./style.css"
import { useRef, useEffect, useState } from "react"
import { deepSearch } from "../../Util/getValueByKey"
import circle from "../../assets/images/circle.png"
import PropertyCard from "../propertyCard/PropertyCard"
import { getPhoto } from "../propertyCard/util"
import { formatNumber } from "../propertyCard/util"

const Map = (props) =>{

    const {properties, zoom, disableDefaultUI, streetViewControl, fullscreenControl} = props

    const mapRef = useRef(null)

    const getCenterCoordinate = () =>{

        let count = 0 

        if(Array.isArray(properties) && properties.length > 0){

              const center = properties.slice(0, 4).reduce((accumulator, currentValue, index )=>{

                    const currentLat = deepSearch(currentValue ,["location","address","coordinate","lat"], 0)

                    const currentLng = deepSearch(currentValue ,["location","address","coordinate","lon"], 0)

                    if(Math.abs(currentLat) > 0 && Math.abs(currentLng) > 0) {

                        count++

                        return{
                            lat: accumulator.lat + currentLat,
                            lng: accumulator.lng + currentLng
                        }

                    } 

                    return accumulator

              },{
                    lat : 0,
                    lng : 0
              }
            )  

            if (count > 0) {
                center.lat /= count;
                center.lng /= count;
              }


              return center
        }
    }

    const processMarkers = (map) =>{

        if(Array.isArray(properties) && properties.length > 0){

            properties.forEach((property)=>{

                const lat = deepSearch(property,["location","address","coordinate","lat"],0)
                const lng = deepSearch(property,["location","address","coordinate","lon"],0)


              const marker = new window.google.maps.Marker({
                    position : {lat: lat, lng: lng},
                    map,
                    icon: circle

                })

                processInfoWindow(property, marker, map)

            })

        }

    }


    const processInfoWindow = (singleProperty, marker, map) =>{

        const propertyId = deepSearch(singleProperty,["property_id"])
        const listingId = deepSearch(singleProperty,["listing_id"])
        const status = deepSearch(singleProperty,["status"])
        const type = deepSearch(singleProperty,["description","type"])
        const beds = deepSearch(singleProperty,["description","beds"])
        const baths = deepSearch(singleProperty,["description","baths"])
        const sqft = deepSearch(singleProperty,["description","sqft"])
        const price = deepSearch(singleProperty,["list_price"])
        const street = deepSearch(singleProperty,["location","address","line"])
        const city = deepSearch(singleProperty,["location","address","city"])
        const zip = deepSearch(singleProperty,["location","address","postal_code"])
        const state = deepSearch(singleProperty,["location","address","state"])
        const stateCode = deepSearch(singleProperty,["location","address","state_code"])
        const photo = deepSearch(singleProperty,["primary_photo","href"])

        const element = `
        <div data-property_id="${propertyId}" data-infoWindow_id="${propertyId}" class="property-card av-shadow info-window-prop-card">
        <figure style="background: url(${getPhoto(photo)}) center center / cover no-repeat;">
        </figure>
        <div class="prop-info">
          <div class="prop-price">$${formatNumber(price)}</div><i class="fa-regular fa-heart"></i>
          <div class="prop-beds">${beds} <span>Beds</span></div>
          <div class="prop-baths">${baths} <span>Baths</span></div>
          <div class="prop-sqft">${formatNumber(sqft)}<span>Sqft</span></div>
          <div class="prop-address">${street}, ${city}, ${stateCode} ${zip}</div>
          </div>
        </div>
        `

               
                const infoWindow = new window.google.maps.InfoWindow({
                    content : element,
                    ariaLabel: "Uluru",
        
                  })



                  marker.addListener("mouseover", () => {
                    
                    infoWindow.open({anchor: marker, map})

                  })

                  marker.addListener("mouseout", (e) => {
                    
                    infoWindow.close();
              
                });

    }

    const [initialView, setInitialView] = useState({
            zoom: zoom,
            center :getCenterCoordinate(),
            options: {
                gestureHandling: 'greedy'
              },
            disableDefaultUI: disableDefaultUI,
            streetViewControl: streetViewControl,
            fullscreenControl: fullscreenControl


    })

    useEffect(()=>{
        // console.log(getCenterCoordinate())
           
        setInitialView({...initialView, center : getCenterCoordinate()})
         
        },[properties])


    useEffect(()=>{

        const theMap = document.querySelector("#the-map")

        if(!theMap){
    
            const script = document.createElement("script")
            script.id="the-map"
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&callback=initMap&v=weekly`
            script.defer = true
            script.async = true
            document.body.appendChild(script)

            window.initMap = () => {
                            const map = new window.google.maps.Map(mapRef.current, initialView);
                            processMarkers(map)
                
                        }

        }
        
    },[])


    useEffect(()=>{

        if(window.google && mapRef.current){

            const map = new window.google.maps.Map(mapRef.current, initialView);

            processMarkers(map)

        }
    },[initialView, properties])


    return(

        <>

        <div id="map" 
            className={`the-map ${properties.length === 0 && "no_map"}`} 
            ref={mapRef}>
        </div>

        </>
        
    )
}

export default Map