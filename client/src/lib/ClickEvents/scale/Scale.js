import { useState, useEffect } from "react"

const useScale = () =>{
    const [animation, setAnimation] = useState("")
    const style = `
    
    .buttonClick{
        animation: buttonClick .05s ease;
    }
    
    @keyframes buttonClick {
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(.9);
        }
        100%{
            transform: scale(.9);
        }
    }
    
    `
    useEffect(()=>{
        if(!document.querySelector("#avScaleleStyle")){
            const head = document.head
            const firstStyleElement = head.querySelectorAll("style")
            const el = document.createElement("style")
                el.id = "avScaleleStyle"
                el.innerHTML= style
        
            if(!firstStyleElement){

                head.appendChild(el)

            }else if(firstStyleElement[0]){

                const first = firstStyleElement[0]
                head.insertBefore(el, first)

            }
            
        }

    },[])
    

        const scaleAnimation = () =>{

            setAnimation("buttonClick")
            setTimeout(()=>{
                setAnimation("")
            }, 90)
    }

    return{
        animation,
        scaleAnimation
    }
    
}

export default useScale