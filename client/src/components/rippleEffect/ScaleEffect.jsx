import { useEffect, useRef } from "react"
import "./ScaleEffect.style.css"

const ScaleEffect = ({children}) =>{

    const scaleRef = useRef(null)

     useEffect(()=>{
       
        const parentElement = scaleRef.current
        const button = parentElement.querySelector("button")
        button.addEventListener("click", (e) => {

            button.classList.add('scale-effect');

            setTimeout(() => {
                button.classList.remove("scale-effect")
             }, 400);

        })
        console.log(button)
    

     },[])

     return (
        <div ref={scaleRef} className="scale-container">
            {children}
        </div>
     )

}

export default ScaleEffect