import { useEffect, useRef } from "react"
import "./RippleEffect.style.css"

const RippleEffect = ({children}) =>{

    const rippleRef = useRef(null)

     useEffect(()=>{
       
        const parentElement = rippleRef.current
        const button = parentElement.firstElementChild
        button.classList.add("ripple-button")
        button.addEventListener("click", (e) => {

            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.top = `${e.clientY - button.getBoundingClientRect().top}px`
            ripple.style.left = `${e.clientX - button.getBoundingClientRect().left}px`
            button.appendChild(ripple)

            setTimeout(() => {
               ripple.remove()
             }, 400);

        })
        console.log(button)
    

     },[])

     return (
        <div ref={rippleRef} className="ripple-container">
            {children}
        </div>
     )

}

export default RippleEffect