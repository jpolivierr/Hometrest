import { useState, useEffect } from 'react'

const useLoadMapScript = () => {
  const url = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places`
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    const mapElement = document.querySelector("#google-map")
    if(mapElement) return
    const script = document.createElement('script')
    script.id="google-map"
    script.src = url
    script.async = true
    script.defer = true
    script.onload = () => setScriptLoaded(true)
    script.onerror = () => console.error('Error loading script')
    document.body.appendChild(script)
  }, [])

  return scriptLoaded
}

export default useLoadMapScript
