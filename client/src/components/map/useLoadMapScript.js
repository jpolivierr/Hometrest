import { useState, useEffect } from 'react'

const useLoadMapScript = (src) => {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    const mapElement = document.querySelector("#google-map")
    if(mapElement) mapElement.remove()
    const script = document.createElement('script')
    script.id="google-map"
    script.src = src
    script.async = true
    script.defer = true
    script.onload = () => setScriptLoaded(true)
    script.onerror = () => console.error('Error loading script')
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [src])

  return scriptLoaded
}

export default useLoadMapScript
