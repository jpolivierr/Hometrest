import { useState } from "react"
import { ANIMATION } from "../../VAR/var"

const useAnimation = () =>{
    
    const TRANSITION = 300

    const [animations, setAnimation] = useState({
         fade: ANIMATION.FADE_IN,
         slide: ANIMATION.SLIDE_UP,
         slideModal : ANIMATION.SLIDE_UP,
         sideModal: ANIMATION.SLIDE_RIGHT,
         floatModal: ANIMATION.FLOAT_DOWN,
         overlay: ANIMATION.FADE_IN
         
    })

    // fade in
    const fadeIn = () => {
        setAnimation({...animations, fade: ANIMATION.FADE_IN})
    }

    // fade out
    const fadeOut = (callback) =>{
        setAnimation({...animations, fade: ANIMATION.FADE_OUT})
        setTimeout(() => {
            setAnimation({...animations, fade: ""})
            const cs = !callback ? null : callback(null)
        }, TRANSITION);
    }
     // slide up 
    const slideUp = () => {
        setAnimation({...animations, slide: ANIMATION.SLIDE_UP})
    }

    // slide Down 
    const slideDown = (callback) =>{
        setAnimation({...animations, slide: ANIMATION.SLIDE_DOWN})
        setTimeout(() => {
            setAnimation({...animations, slide: ""})
            const cs = !callback ? null : callback(null)
        }, TRANSITION);
    }

    // slide up and down modal
    const slideDownModal = (callback) =>{

        setAnimation({...animations, 
                        slideModal: ANIMATION.SLIDE_DOWN,
                        overlay: ANIMATION.FADE_OUT
                    })
                    setTimeout(() => {
                        setAnimation({...animations,
                            slideModal: ANIMATION.SLIDE_UP,
                            overlay: ANIMATION.FADE_IN
                        })
                        const cs = !callback ? null : callback(null)
                    }, TRANSITION);
    }
    
    // slide left modal
    const slideLeftModal = (callback) =>{

        setAnimation({...animations, 
                        sideModal: ANIMATION.SLIDE_LEFT,
                        overlay: ANIMATION.FADE_OUT
                    })
                    setTimeout(() => {
                        setAnimation({...animations,
                            sideModal: ANIMATION.SLIDE_RIGHT,
                            overlay: ANIMATION.FADE_IN
                        })
                        const cs = !callback ? null : callback(null)
                    }, TRANSITION);
    }

    // float modal
    const floatModal = (callback) =>{

        setAnimation({...animations, 
                        floatModal: ANIMATION.FLOAT_UP,
                        overlay: ANIMATION.FADE_OUT
                    })
                    setTimeout(() => {
                        setAnimation({...animations,
                            floatModal: ANIMATION.FLOAT_DOWN,
                            overlay: ANIMATION.FADE_IN
                        })
                        const cs = !callback ? null : callback(null)
                    }, TRANSITION);
    }


    return{ 
             animations,
             fadeIn,
             fadeOut,
             slideUp,
             slideDown,
             slideDownModal,
             slideLeftModal,
             floatModal
            }
}

export {useAnimation}
