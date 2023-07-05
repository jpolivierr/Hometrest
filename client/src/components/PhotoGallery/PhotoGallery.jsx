import React from 'react'
import { getPhoto } from '../propertyCard/util'
import "./PhotoGallery.style.css"

export default function PhotoGallery({modalPayload}) {

    const {count, photos} = modalPayload

  return (
    <div className="photo-gallery">
                    <h2>Photo count: {count}</h2>
                     {count > 0 && 
                        photos.map((photo, index)=>(
                            <figure>
                                <img key={index} src={`${getPhoto(photo.href)}`} />
                            </figure>
                            
                        ))
                     }
                </div>
  )
}
