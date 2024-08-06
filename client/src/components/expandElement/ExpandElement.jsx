import React, { useEffect, useState } from 'react'
import { useRef } from 'react';


export default function ExpandElement({children, setHeight, elementClass, offSet, paragraph}) {

    const elementRef = useRef(null);
    const [elementHeight, setElementHeight] = useState(0)
    const [defaultHeight, setDefaultHeight] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{

        if(setHeight){
            setElementHeight(setHeight)
            setDefaultHeight(setHeight)
            return
        }

        const parentElement = elementRef.current.firstElementChild

        if(!parentElement) return

        if(paragraph){

            const computedStyle = getComputedStyle(parentElement)
            const fontSize = Number(computedStyle.fontSize.replace("px",""))
            const lineHeight = Number(computedStyle.lineHeight.replace("px",""))
            const finalHeight = fontSize + (lineHeight - fontSize)
            
            const defaultHeight = finalHeight * offSet

            setElementHeight(defaultHeight)
            setDefaultHeight(defaultHeight)

            return

        }

        const targetElement = parentElement.children[offSet - 1]

        if(!targetElement) return

        const distance = (targetElement.offsetHeight + targetElement.offsetTop) - parentElement.offsetTop
   
        setElementHeight(distance)
        setDefaultHeight(distance)

    },[offSet])


    const showMore = () =>{

        if(!isOpen){

            const maxHeight = elementRef.current.firstElementChild.clientHeight
            setElementHeight(maxHeight)
            setIsOpen(true)
        }else{

            setElementHeight(defaultHeight)
             setIsOpen(false)

        }

        

    }



  return (
    <div>
        <div className={elementClass} ref={elementRef} style={{height: elementHeight + "px", overflow: "hidden"}}>
            {children}
        </div>
        <div onClick={()=> showMore()} className='show_button'>
            {!isOpen ? <span>Show more <i className="fa-solid fa-angle-down"></i></span> : <span>Show less <i className="fa-solid fa-angle-up"></i></span>}
            </div>
    </div>
  )
}
