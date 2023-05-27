import { useLayoutEffect, useEffect, useRef, useState } from "react"
import "./style/index.css"
import useScale from "../ClickEvents/scale/Scale"

const Slider2 = (props) =>{

    const {children, elementClass, gap, title, size} = props

    const[sliderWidth, setSliderWidth] = useState(null)
    const[sliderHeight, setSliderHeight] = useState(0)
    const[cardWidth, setCardWidth] = useState(0)
    const[boxCount, setBoxcount] = useState(0)
    const[totalCount, setTotalCount] = useState(0)
    const[totalCard, setTotalCard] = useState(0)
    const[split, setSplit] = useState(4)
    const [count, setCount] = useState(0)
    const [rightButton, setRightButton] = useState(true)
    const [leftButton, setLeftButton] = useState(true)
    const [sliderGap, setSliderGap] = useState(gap ? gap * 1.1 : 0)

    const sliderElement = useRef(null)
    const cardElement = useRef(null)
    const leftBtn = useRef(null)
    const rightBtn = useRef(null)
    
    const scaleAnimationRight = useScale()
    const rightButtonAnimation = scaleAnimationRight.animation
    const rightButtonFunc = scaleAnimationRight.scaleAnimation

    const scaleAnimationLeft = useScale()
    const leftButtonAnimation = scaleAnimationLeft.animation
    const leftButtonFunc = scaleAnimationLeft.scaleAnimation


    useLayoutEffect(()=>{

        const slider = sliderElement.current
        const sliderWidth = slider.clientWidth
        const sliderHeight = slider.clientHeight
        setSliderHeight(sliderHeight)
        const totalCard = slider.querySelectorAll(".slider-card").length
        const cardWidth = sliderWidth / cardSplit(sliderWidth) + sliderGap

        setTotalCard(totalCard)

        setTotalCount(Math.abs((cardWidth * totalCard) - sliderWidth ))

        setSliderWidth(sliderWidth)

        setCardWidth(sliderWidth / cardSplit(sliderWidth ) - sliderGap * 0.6)

        window.addEventListener("resize", ()=>{
            const slider2 = sliderElement.current
            if(slider2){
                const slider2Width = slider2.clientWidth
            const cardWidth2 = slider2Width / cardSplit(sliderWidth) - sliderGap * 0.6
            const totalCount = Math.abs((cardWidth2 * totalCard) - slider2Width)
 
            const count = slider2.getAttribute("data-count")
            setSliderWidth(slider2Width)
            setCardWidth(cardWidth2)
            setTotalCount(totalCount)
            cardSplit(slider2Width)
            setBoxcount(cardWidth2 * count)
            }
            

        })

     
    },[])

    useEffect(()=>{

        buttonState()

    },[boxCount])

   const buttonState = () =>{
         
        if(boxCount <= 0){
           
            setLeftButton(false)

        }else if(boxCount > 0){

            setLeftButton(true)

        }

        if(boxCount !== 0 && totalCount == boxCount || totalCount < boxCount){

            setRightButton(false)

        }else{

            setRightButton(true)

        }

   }

    const moveLeft = () =>{
        
        if(boxCount <= 0){

        }else{
            setBoxcount(boxCount - cardWidth - gap)
            setCount(count - 1)
        }
        
    }

    const moveRight = () =>{
    
         if(totalCount == boxCount || totalCount < boxCount){
        
         }else{
            
            setBoxcount( boxCount + cardWidth + gap)
            setCount(count + 1)
         }
         

    }

    const cardSplit = (sliderWidth) =>{

        if(size === 1){
            setSplit(2)
                    return 2

        }
            
          switch(true){
            case  sliderWidth <= 617 :
                    setSplit(1)
                    return 1

               case sliderWidth >= 617 && sliderWidth <= 900 :
                    setSplit(2)
                    return 2

                case sliderWidth >= 900 && sliderWidth <= 1219 :
                    setSplit(3)
                    return 3

                case sliderWidth >= 1219:
                    setSplit(4)
                    return 4

                default :
                    setSplit(4)
                    return 4
          }

    }


    return(
        <section className={`slider-container ${elementClass}`} style={{height: sliderHeight}}>
            {title && <h2>{title}</h2>}
         <div style={{width : "100%", padding : "1rem 0rem"}} ref={sliderElement} className="slider" data-count={count}>
            {
               children.length > 0 &&

                  children.map((element, index) =>(
                    <section 
                             key={index} 
                             ref={cardElement} 
                             style={{
                                      right: boxCount,
                                      minWidth: cardWidth + "px",
                                      transition: "right .2s",
                                      marginRight: gap + "px",
                                      }} 
                             className="slider-card"
                             >
                        {element}
                    </section>
                  ))
                    
            }  
             {
                !children.length && children
            }
        </div>
        <span style={{display: !rightButton && "none" }} onClick={()=>{moveRight(); rightButtonFunc()}} ref={rightBtn} className={`slider-btn slider-btn-right ${rightButtonAnimation} `}>
             <i className="fa-solid fa-chevron-right arrow-icons"></i>
             </span>

             <span 
               style={{display: !leftButton && "none" }} 
             onClick={()=>{moveLeft(); leftButtonFunc()}} ref={leftBtn} className={`slider-btn slider-btn-left ${leftButtonAnimation}`}>
             <i className="fa-solid fa-chevron-left arrow-icons"></i>
            </span>
        </section>

    )
}

export default Slider2