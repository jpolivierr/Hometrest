import { useState, useEffect } from "react"
import "./style.css"

const useRipple = () =>{

    const [rippleClass, setAnimation] = useState("")

        const rippleAnimation = (e) =>{

            let x = e.clientX - e.target.offsetLeft
            let y = e.clientY - e.target.offsetTop
            let ripple = 
            setAnimation("av-ripple")
            setTimeout(()=>{
                setAnimation("")
            }, 700)
    }

    return{
        rippleClass,
        rippleAnimation
    }
    
}

export default useRipple