import React from 'react'
import { useMyModal } from '../../../../context/modals/modalContext'
import { deepSearch } from '../../../../Util/getValueByKey'
import { updateImageLink } from '../../../../Util/updateImageLink'
import { getClass } from './PhotoGallery.Util'
import "./PhotoGallery.style.css"

export default function PhotoGallery({singleProperty}) {

    const mPayload = {count: singleProperty.photo_count, photos: singleProperty.photos}
    const {toggleFloatingModal} = useMyModal()
    const PhotoGallery = () => toggleFloatingModal("gallery", mPayload)
    const photos = deepSearch(singleProperty,["photos"],[])
    const virtualTour = deepSearch(singleProperty,["virtual_tours", "href"],"")

  return (
    <div style={{position: "relative"}}>
          <ul className='more_details'>
        <li onClick={PhotoGallery} ><i className="fa-regular fa-image"></i> Photos: {photos.length}</li>
        {virtualTour && <a href={virtualTour} target={"_blank"}>
            <li><i className="fa-solid fa-vr-cardboard"></i> Virtual Tour</li>
            </a>}
      </ul>


        <div onClick={PhotoGallery} className={`${getClass(photos)}`}>

    

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
    </div>
    
  )
}
