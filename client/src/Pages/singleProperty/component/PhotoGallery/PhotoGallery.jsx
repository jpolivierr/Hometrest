import React from 'react'
import { deepSearch } from '../../../../Util/getValueByKey'
import { updateImageLink } from '../../../../Util/updateImageLink'
import "./PhotoGallery.style.css"

export default function PhotoGallery({photos, virtualTour}) {

  return (

<div id={-1} style={{position: "relative"}}>
    <ul className='more_details'>
        <li onClick={() => {}} ><i className="fa-regular fa-image"></i> Photos: {photos.length}</li>
        {
        virtualTour && <a href={virtualTour} target={"_blank"}>
        <li><i className="fa-solid fa-vr-cardboard"></i> Virtual Tour</li></a>}
      </ul>
    <div onClick={() => {}} className={`prop_photos`}>
        {
        photos.length === 1 && 
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
