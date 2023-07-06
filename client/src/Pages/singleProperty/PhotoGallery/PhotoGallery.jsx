import React from 'react'
import { useMyModal } from '../../../context/modals/modalContext'
import { getPhoto } from '../../../components/propertyCard/util'
import { deepSearch } from '../../../Util/getValueByKey'

export default function PhotoGallery({singleProperty}) {

    const mPayload = {count: singleProperty.photo_count, photos: singleProperty.photos}
    const {toggleFloatingModal, setPayLoad} = useMyModal()
    const PhotoGallery = () => toggleFloatingModal("gallery", mPayload)
    const photos = deepSearch(singleProperty,["photos"],[])

  return (
    <div onClick={PhotoGallery} className="prop_photos">
    {photos.length >= 3 && 
        photos.map((photo, index)=>(
           index <= 2 &&
            <figure key={index} style={{background: `url("${getPhoto(photo.href) }") no-repeat center center/cover`}} ></figure>
        ))
    }
    
</div>
  )
}
