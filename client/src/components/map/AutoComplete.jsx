// src/Autocomplete.js

import React, { useEffect, useRef, useState } from 'react'
import useLoadMapScript from './useLoadMapScript'

const Autocomplete = ({setLocation, data}) => {
  const inputRef = useRef(null)
  const [address, setAddress] = useState('')
  const scriptLoaded = useLoadMapScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places`)

  const extractAddressComponents = (place) => {
    const addressComponents = place.address_components
    const components = {
      street: '',
      city: '',
      state_code: '',
      country: '',
      postal_code: '',
      address: '',
      street_name: ''
    }

    addressComponents.forEach(component => {
      const types = component.types
      if (types.includes('street_number')) {
        components.street = `${component.long_name} ${components.street}`
      }
      if (types.includes('route')) {
        components.street += component.long_name
      }
      if (types.includes('locality')) {
        components.city = component.long_name
      }
      if (types.includes('administrative_area_level_1')) {
        components.state_code = component.short_name
      }
      if (types.includes('country')) {
        components.country = component.long_name
      }
      if (types.includes('postal_code')) {
        components.postal_code = component.long_name
      }
    })

    return components
  }

  useEffect(() => {
    if (scriptLoaded) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current)
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        const addressComponents = extractAddressComponents(place)
        addressComponents.address = place.formatted_address || '' 
        setLocation(addressComponents)
        setAddress(place.formatted_address || '')
      })
    }
  }, [scriptLoaded])

  return (
    <>
      <input 
        ref={inputRef}
        placeholder="Enter city, state or zip" 
        name="city_zip"
        onChange={() => {}}
        // value={data.city}
            />
    </>
  )
}

export default Autocomplete
