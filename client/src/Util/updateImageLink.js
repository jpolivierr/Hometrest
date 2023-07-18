import noImage from "../assets/images/no-image.png"

export const updateImageLink = (image, code) =>{

    if(!image) return noImage

    if(!code) return image

    if(image.includes("xd-w300_h300_q80.jpg")){

    const index = image.lastIndexOf("xd-w300_h300_q80.jpg");

    return image.slice(0,index) + code
        //  console.log("true")
    }
    

    const index = image.lastIndexOf(".jpg");
        // return image;

        return image.slice(0,index - 1) + code
        
    // return url.replace(/(.)\.jpg$/, "$10_h360.jpg")

    // https://ap.rdcpix.com/235e4f98b53b129cf434f4688ddba948l-m2214562315xd-w300_h300_q80.jpg

    // https://ap.rdcpix.com/0569cb12d09660d4ce63a6a799486a82l-m207375642xd-w300_h300_q80.jpg

}