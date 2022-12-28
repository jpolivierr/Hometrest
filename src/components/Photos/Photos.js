import "./style_photos.css"
import { formatImg } from "../../functions/formatImg"

const Photos = ({photos} ) =>{


    console.log(photos.length)
    return(
        <div className="photo-gallery">
            <h2>Photo gallery</h2>
            {
               photos.length <= 0 ? null : photos.map((photo,index) =>(
                <figure key={index}>
                    <img src={formatImg(photo.href)} />
                </figure>
                
               ))
            }
        </div>
    )
}

export default Photos