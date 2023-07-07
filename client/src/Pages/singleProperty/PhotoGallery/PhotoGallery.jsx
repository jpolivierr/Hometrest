import React from 'react'
import { useMyModal } from '../../../context/modals/modalContext'
import { deepSearch } from '../../../Util/getValueByKey'
import { updateImageLink } from '../../../Util/updateImageLink'

export default function PhotoGallery({singleProperty}) {

    const mPayload = {count: singleProperty.photo_count, photos: singleProperty.photos}
    const {toggleFloatingModal} = useMyModal()
    const PhotoGallery = () => toggleFloatingModal("gallery", mPayload)
    const photos = deepSearch(singleProperty,["photos"],[])

    const getClass = () =>{

        switch(true)
               {
                case photos.length === 1:
                    return "prop_photos_1"
                case photos.length === 2:
                    return "prop_photos_2"
                case photos.length >= 3:
                    return "prop_photos"

        }
    }

  return (
    <div onClick={PhotoGallery} className={`${getClass()}`}>

  {photos.length === 1 && 
        photos.map((photo, index)=>(
            
            <figure key={index} style={{background: `url("${updateImageLink(photo.href,"od-w1024_h768_x2.jpg") }") no-repeat center center/cover`}} ></figure>
        ))
    }

    {photos.length === 2 && 
        photos.map((photo, index)=>(

            <figure key={index} style={{background: `url("${updateImageLink(photo.href,"od-w1024_h768_x2.jpg") }") no-repeat center center/cover`}} ></figure>
        ))
    }

    {photos.length >= 3 && 
        photos.map((photo, index)=>(
           index <= 2 &&
            <figure key={index} style={{background: `url("${updateImageLink(photo.href,"od-w1024_h768_x2.jpg") }") no-repeat center center/cover`}} ></figure>
        ))
    }
    
</div>
  )
}
