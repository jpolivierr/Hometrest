import "./style_photos.css"

const Photos = ({photos} ) =>{

    const formatImg = (img) =>{
        return img.replace("s.jpg","od-w480_h360_x2.jpg")
     }

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