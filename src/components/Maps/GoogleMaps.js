import { useRef, useEffect } from "react"
import "./style_maps.css"
import rectangle from "../../media/images/circle.png"
const GoogleMaps = ({listings, classname}) =>{

  const mapRef = useRef(null)

 function initMap(){
       const addressArray = []
       listings.forEach(listing =>{
            const coordinate = listing.location.address.coordinate
            const address = listing.location.address.line
            const city = listing.location.address.city
            const state = listing.location.address.state_code
            const zipCode = listing.location.address.postal_code

            if(!coordinate){
              return
            }else{
              const lat = coordinate.lat
              const lng = coordinate.lon
              const arr = [{lat,lng},`${address} ${city}, ${state}, ${zipCode}`]
              addressArray.push(arr)
            }
            
       })

        const center = {
              lat: addressArray[1][0].lat, 
              lng: addressArray[1][0].lng
          }

          const map = new window.google.maps.Map(mapRef.current,
            {
             zoom: 11,
              center: center
            }
         )

          const contentInfo = `<div>
                              <h2>Hello there</h2>
                            </div>`
        
          const infoWindow = new window.google.maps.InfoWindow({
            content : contentInfo,
            ariaLabel: "Uluru",
          })

           // Create the markers.
           addressArray.forEach(([position, title], i)=>{

                const marker = new window.google.maps.Marker({
                  position,
                  map,
                  icon: rectangle,
                })

                // Add a click listener for each marker, and set up the info window.
                marker.addListener("mouseover", () => {

                  infoWindow.open({anchor: marker, map});
                });

           })
          
  }

  useEffect(()=>{
  
       window.initMap = initMap;
      window.initMap = initMap;
    const script = document.createElement("script")
    script.id="the-map"
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&callback=initMap&v=weekly`
    script.defer = true
    script.async = true
    document.body.appendChild(script)
const theMap = document.querySelector("#the-map")
    console.log("ran....")

     theMap.remove()
    
  },[listings])

  

  return(
    <>
        <div ref={mapRef} id="map" className={classname}>

          
        </div>

    </>
    
  )
}

export default GoogleMaps