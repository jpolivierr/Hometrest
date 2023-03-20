import { useEffect, useRef } from "react"


const GoogleMaps = (props) =>{
 
    const {Class, view} = props
    const mapRef = useRef(null)

    

    const initMap = () =>{
       new window.google.maps.Map(mapRef.current,view)
    }

    const generateMap = () =>{

        const theMap = document.querySelector("#the-map")

        if(!theMap){
            const script = document.createElement("script")
            script.id="the-map"
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&callback=initMap&v=weekly`
            script.defer = true
            script.async = true
            document.body.appendChild(script)

        }

    }

    useEffect(()=>{

      generateMap()
        
    },[])


    useEffect(()=>{
        
           const theMap = document.querySelector("#the-map")
           if(theMap){
             theMap.remove()
             window.initMap = initMap
           }
          
    },[view])


    return(
        <>
            <div id="map" className={Class} ref={mapRef}>

            </div>
        </>
    )

}

export default GoogleMaps