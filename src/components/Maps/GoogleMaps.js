import { useRef, useEffect } from "react"
import "./style_maps.css"
import rectangle from "../../media/images/circle.png"
import { NumberFormat } from "../../functions/NumberFormat"
import { formatImg } from "../../functions/formatImg"
const GoogleMaps = ({listings, classname}) =>{

  const mapRef = useRef(null)
console.log(listings[0].location.address.coordinate)
 function initMap(){

       const initLat = listings[1].location.address.coordinate.lat
       const initLng = listings[1].location.address.coordinate.lon

        const center = {
              lat: initLat, 
              lng: initLng
          }

          const map = new window.google.maps.Map(mapRef.current,
            {
             zoom: 11,
              center: center
            }
         )

         

           // Create the markers.
           listings.forEach((home)=>{

            const id = home.property_id
            const status = home.status.replaceAll("_"," ")
            const coordinate = home.location.address.coordinate
            const street = home.location.address.line
            const city = home.location.address.city
            const state = home.location.address.state_code
            const zipCode = home.location.address.postal_code
            const price = NumberFormat.formatNumberWithCommas(home.list_price) 
            const image = formatImg(!home.primary_photo ? null : home.primary_photo.href)
            const beds = !home.description.beds ? 0 : home.description.beds 
            const baths = !home.description.baths ? 0 : home.description.baths
            const sqft = !home.description.sqft ? 0 : home.description.sqft

             const contentInfo = `<div id="${id}" className="false slider-block slider-map">

                                     <a href="/property?id=${id}">

                                      <figure><span>${status}</span><img src=${image} alt=""></figure>
                                      
                                      <div className="av-property-details">
                                          <h4>$${price}</h4>
                                          <i className="fa-regular fa-heart"></i>
                                          <h5><span>${beds}</span> <span>Beds</span></h5>
                                          <h5><span>${baths}</span> <span>Baths</span></h5>
                                          <h5><span>${sqft}</span> <span>Sq.Ft.</span></h5>
                                          <p>${street}, ${city},${state} ${zipCode}</p>
                                      </div>
                                      
                                      </a>
                                      </div>`

          const infoWindow = new window.google.maps.InfoWindow({
            content : contentInfo,
            ariaLabel: "Uluru",
          })


            if(!coordinate){
              return
            }else{
              
              const lat = coordinate.lat
              const lng = coordinate.lon

              const marker = new window.google.maps.Marker({
                  position: {lat,lng},
                  map,
                  icon: rectangle,
                })

                // Add a click listener for each marker, and set up the info window.
                marker.addListener("mouseover", () => {
              
                  infoWindow.open({anchor: marker, map});
             
                });

                marker.addListener("mouseout", () => {
             
                    infoWindow.close();
              
                  
                });
            }
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