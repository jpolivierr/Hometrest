import { useRef, useEffect } from "react"
import "./style_maps.css"
import rectangle from "../../media/images/circle.png"
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

            const coordinate = home.location.address.coordinate
            const address = home.location.address.line
            const city = home.location.address.city
            const state = home.location.address.state_code
            const zipCode = home.location.address.postal_code

             const contentInfo = `<div id="5374218639" class="false slider-block slider-map">

                                     <a href="/property?id=5374218639">

                                      <figure><span>for sale</span><img src="https://ap.rdcpix.com/6c441ac8f9d94935fd09af1ed6250284l-m2214354290od-w480_h360_x2.jpg" alt=""></figure>
                                      
                                      <div class="av-property-details">
                                          <h4>$425,000</h4>
                                          <i class="fa-regular fa-heart"></i>
                                          <h5><span>3</span> <span>Beds</span></h5>
                                          <h5><span>2</span> <span>Baths</span></h5>
                                          <h5><span>1206</span> <span>Sq.Ft.</span></h5>
                                          <p>12901 NW 22nd Ave, Miami,FL 33167</p>
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