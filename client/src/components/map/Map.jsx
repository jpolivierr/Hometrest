import "./style.css"
import { useRef, useEffect, useState } from "react"
import { deepSearch } from "../../Util/getValueByKey"
import circle from "../../media/images/circle.png"
import PropertyCard from "../propertyCard/PropertyCard"

const Map = (props) =>{

    const {properties} = props

    const mapRef = useRef(null)

    const getCenterCoordinate = () =>{

        if(Array.isArray(properties) && properties.length > 0){

              const center = properties.slice(0,2).reduce((current, next )=>{
                    // console.log(current)
                    const currentLat = deepSearch(current,["location","address","coordinate","lat"], 0)
                    const nextLat = deepSearch(next,["location","address","coordinate","lat"], 0)
                    const currentLng = deepSearch(current,["location","address","coordinate","lon"], 0)
                    const nextLng = deepSearch(next,["location","address","coordinate","lon"], 0)

                    return{
                        lat: currentLat,
                        lng: currentLng
                    }

                    // return {
                    //     lat : currentLat + nextLat / 2,
                    //     lng : currentLng + nextLng / 2
                    // }

              }
            )  

              return center
        }
    }

    const processMarkers = (map) =>{

        if(Array.isArray(properties) && properties.length > 0){

            properties.forEach((property)=>{

                const lat = deepSearch(property,["location","address","coordinate","lat"],0)
                const lng = deepSearch(property,["location","address","coordinate","lon"],0)

                // console.log(lat)
                // console.log(lng)

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
        <figure style="background: url(${photo}) center center / cover no-repeat;">
          <div class="status-style status-for-sale">${status}</div>
        </figure>
        <div class="prop-info">
          <div class="prop-price">$${price}</div><i class="fa-regular fa-heart"></i>
          <div class="prop-beds">${beds} <span>Beds</span></div>
          <div class="prop-baths">${baths} <span>Baths</span></div>
          <div class="prop-sqft">${sqft}<span>Sqft</span></div>
          <div class="prop-address">${street}, ${city}, ${stateCode} ${zip}</div>
          </div>
        </div>
        `

               
                const infoWindow = new window.google.maps.InfoWindow({
                    content : element,
                    ariaLabel: "Uluru",
        
                  })

                  let val

                  const addInfoWindowEventListener = (element) =>{

                    let isOpen = true;

                      const handleMouseOver = () =>{
                        
                         console.log("opening info window")
                         val = true
                          element.removeEventListener("mouseover", handleMouseOver);

                      }

                      const handleMouseOut = (event) =>{

                        console.log(event.currentTarget)
                        if (event.target === element) {
                            console.log("closing window..")
                        // infoWindow.close()
                        }
                        

                      }
                    
                      element.addEventListener("mouseover", handleMouseOver);
                      element.addEventListener("mouseout", (e) => handleMouseOut(e));

                  }

                  marker.addListener("mouseover", () => {
                    
                    infoWindow.open({anchor: marker, map})

                  })

                  marker.addListener("mouseout", (e) => {

                    //  console.log(infoWindow)
                    setTimeout(()=>{

                        console.log(val)
                        // if(val)

                    },500)
                    
                    // infoWindow.close();
              
                });

                // Add a mouseover listener on the InfoWindow
                
                window.google.maps.event.addListener(infoWindow, "domready", () => {
                const infoWindowElement = infoWindow.getContent();
                const infoWindoElement = document.querySelector(`[data-infoWindow_id="${propertyId}"]`)
                console.log(infoWindoElement)
                 addInfoWindowEventListener(infoWindoElement)
           

               
                });

    }

    useEffect(()=>{
    // console.log(getCenterCoordinate())


    },[properties])




    const [initialView, setInitialView] = useState({
            zoom: 12,
         center :getCenterCoordinate()
    })


    useEffect(()=>{

        const theMap = document.querySelector("#the-map")

        if(!theMap){
            console.log("creating script")
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
    },[initialView])


    return(
        <div id="map" className={"the-map"} ref={mapRef}>

        </div>
    )
}

export default Map