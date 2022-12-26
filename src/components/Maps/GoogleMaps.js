import { useRef, useEffect } from "react"
import "./style_maps.css"

const GoogleMaps = () =>{

  const mapRef = useRef(null)


 function initMap(){
        const center = {
              lat: 34.84555, 
              lng: -111.8035
          }

          const map = new window.google.maps.Map(mapRef.current,
            {
             zoom: 12,
             center: center
            }
         )

          const tourStops = [
            [{ lat: 34.8791806, lng: -111.8265049 }, "Boynton Pass"],
            [{ lat: 34.8559195, lng: -111.7988186 }, "Airport Mesa"],
            [{ lat: 34.832149, lng: -111.7695277 }, "Chapel of the Holy Cross"],
            [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
            [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
          ];
        
          const infoWindow = new window.google.maps.InfoWindow()

           // Create the markers.
           tourStops.forEach(([position, title], i)=>{
                const marker = new window.google.maps.Marker({
                  position,
                  map,
                  title: `${i + 1}. ${title}`,
                  label: `${i + 1} hellooo`,
                  optimized: false,

                })

                 // Add a click listener for each marker, and set up the info window.
          marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
          });


           })
          
  }

  useEffect(()=>{
    const theMap = document.querySelector("#the-map")
    if(!theMap){
      window.initMap = initMap;
    const script = document.createElement("script")
    script.id="the-map"
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&callback=initMap&v=weekly`
    script.defer = true
    script.async = true
    document.body.appendChild(script)
    }
    

  },[])

  

  return(
    <>
        <div ref={mapRef} id="map">

          
        </div>

    </>
    
  )
}

export default GoogleMaps