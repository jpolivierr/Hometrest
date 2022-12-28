import noPhotos from "../media/images/nophotos.jpg"
export const formatImg = (img) =>{
    try {
      if(!img){
        return noPhotos
      }else{
        return img.replace("s.jpg","od-w480_h360_x2.jpg")
      }
        
    } catch (error) {
        console.log(error)
        return noPhotos
        
    }
    
 }