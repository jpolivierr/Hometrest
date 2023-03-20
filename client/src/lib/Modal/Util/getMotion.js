const getMotion = (motionType,motion) =>{

    switch(motionType){

        case "fade" :
            return motion ? `fadeIn` : motion === false ? `fadeOut` : null

        case "slide-left" :
            return motion ? `slide-left` : motion === false ? `close-slide-left` : null

        case "float" :
            return motion ? `float` : motion === false ? `close-float` : null
            
        default :
            return ""

    }
}

export default getMotion