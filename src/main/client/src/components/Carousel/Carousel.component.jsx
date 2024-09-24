import React, { useRef, useLayoutEffect } from 'react'
import "./Carousel.style.css"

const Carousel = (props) => {

    const {children, settings, elementStyle} = props

const {style} = settings    

const carouselContainer = useRef(null)
const itemElement = useRef(null)
const nextButton = useRef(null)
const prevButton = useRef(null)

useLayoutEffect(()=>{


showHideButtons()

},[])


const showHideButtons = () =>{

    const carousel = carouselContainer.current

    const scrollLeft = carousel.scrollLeft
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth


    prevButton.current.style.display = scrollLeft === 0 ? "none" : "flex"
    nextButton.current.style.display = scrollLeft === scrollWidth ? "none" : "flex"
 

}


const next = () =>{

    const itemsWidth = (itemElement.current.clientWidth)
    carouselContainer.current.scrollLeft += itemsWidth 
    setTimeout(()=> showHideButtons(), 60)

}

const prev = () =>{

    const itemsWidth = (itemElement.current.clientWidth)
    carouselContainer.current.scrollLeft += -itemsWidth 
    setTimeout(()=> showHideButtons(), 60)

}


  return (

    <div className={`carousel ${elementStyle ? elementStyle : ""}`}>

        <div ref={carouselContainer} className={`carousel_container ${style ? style : ""}`}>
          {
 
                    <>

                    {

                            children.length > 0 &&  

                            children.map((element, index) => {
                                return(
                                    <div 
                                    key={index}
                                    ref={itemElement}
                                    className='item' >
                                       {element}
                                   </div>
                                )
                            })

                    }
    
                                        
              </>

        }
        </div>
            <span ref={nextButton} onClick={next} className='carousel_btn next_btn'><i className="fa-solid fa-chevron-right arrow-icons"></i></span>
            <span ref={prevButton} onClick={prev} className='carousel_btn prev_btn'><i className="fa-solid fa-chevron-left arrow-icons"></i></span>
     </div>

   
  )

}

export default Carousel
