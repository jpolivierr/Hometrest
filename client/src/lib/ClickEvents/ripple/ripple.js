import { useState, useEffect } from "react"

const useRipple = () =>{

    const style = `
    .av-ripple{
        overflow: hidden;
      }
      
      .av-ripple::before{
          content: "";
          position: absolute;
          width: 80px;
          height: 80px;
          top: 0;
          bottom: 0;
          margin: auto;
          border-radius: 50%;
          animation: ripple ease .3s infinite;
          background: rgba(255, 255, 255, 0.527);
      }
      
      @keyframes ripple {
      
          0%{
              transform: scale(0);
              opacity: 0;
          }
          56%{
              transform: scale(1.2);
              opacity: 1;
              
          }
          100%{
              transform: scale(2);
              opacity: .5;
              
          }
          
      }
    
    `

    useEffect(()=>{
        if(!document.querySelector("#avRippleStyle")){
            const head = document.head
            const firstStyleElement = head.querySelectorAll("style")
            const el = document.createElement("style")
                el.id = "avRippleStyle"
                el.innerHTML= style

        
            if(!firstStyleElement){

                head.appendChild(el)

            }else if(firstStyleElement[0]){

                const first = firstStyleElement[0]
                head.insertBefore(el, first)

            }
            
        }

    },[])

    const [rippleClass, setAnimation] = useState("")

        const rippleAnimation = (e) =>{

            let x = e.clientX - e.target.offsetLeft
            let y = e.clientY - e.target.offsetTop
            let ripple = 
            setAnimation("av-ripple")
            setTimeout(()=>{
                setAnimation("")
            }, 300)
    }

    return{
        rippleClass,
        rippleAnimation
    }
    
}

export default useRipple