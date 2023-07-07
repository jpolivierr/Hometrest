import noImage from "../assets/images/no-image.png"

export const updateImageLink = (image, code) =>{
 
    if(!image) return noImage

    const index = image.lastIndexOf(".jpg");
        // return image;

        return image.slice(0,index - 1) + code
        
    // return url.replace(/(.)\.jpg$/, "$10_h360.jpg")

}