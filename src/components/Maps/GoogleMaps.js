import "./style_maps.css"
import React, {useState, useEffect, useRef, useCallback, forwardRef} from 'react';
import {GoogleMapsProvider, useGoogleMap} from '@ubilabs/google-maps-react-hooks';
import { MarkerClusterer} from "@googlemaps/markerclusterer";



const trees = [
    ["Ash, green", 43.6495364521731, -79.41618733111581],
  ["Birch, white", 43.8037189558964, -79.3545349538418],
  ["Maple, Manitoba", 43.6776251576906, -79.2760802497644],
  ["Elm, American 'Valley Forge'", 43.7436916067803, -79.4252057780298],
  ["Spruce, Colorado blue", 43.733888921533, -79.3153757933933],
  ["Maple, Norway 'Schwedler'", 43.7132521970695, -79.5517852249759],
  ["Mulberry, white", 43.7582445715909, -79.37784831953951]
]



function addMarkers(map) {
    console.log("ran..")
    const infoWindow = new window.google.maps.InfoWindow();
  
    const markers = trees.map(([name, lat, lng]) => {
      const marker = new window.google.maps.Marker({ position: { lat, lng } });
  
      marker.addListener("click", () => {
        infoWindow.setPosition({ lat, lng });
        infoWindow.setContent(`
          <div class="info-window">
            <h2>${name}</h2>
          </div>
        `);
        infoWindow.open({ map });
      });
  
      return marker;
    });
  
    new MarkerClusterer({
      markers,
      map,
      // algorithm: new SuperClusterAlgorithm({ radius: 200 }),
    });
  }


 const GoogleMaps = () =>{

    const [mapContainer, setMapContainer] = useState(null)
    const onLoad = useCallback((map) => addMarkers(map), []);

    const load = () =>{
        console.log("I loaded")
    }
    

    const mapOptions = {
        zoom: 12,
        center: {lat: 53.5582447, lng: 9.647645},
    }

    return(
        <GoogleMapsProvider
            googleMapsAPIKey={process.env.REACT_APP_MAPS_API_KEY}
            mapOptions={mapOptions}
            mapContainer={mapContainer}
            onLoad={load}
        >
             <div ref={(node)=>setMapContainer(node)} className={`map-container`}/>
    
        </GoogleMapsProvider>
     )

}

export default GoogleMaps

