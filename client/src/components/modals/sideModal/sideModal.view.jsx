import React, { useEffect, useRef, useState } from 'react'
import style from "./sideModal.style.css"

export default function SideModal(props) {

    const {toggle, isShowing} = props
    const [animation, setAnimation] = useState("")
    const [backgrounAnimation, setBackgroundAnimation] = useState("")
    const [visible, setVisible] = useState("hide")
    
    const modalBkRef = useRef(null)
    const modalRef = useRef(null)

    useEffect(()=>{

        if(isShowing === null){
            return
        }

        if(isShowing){
             setAnimation("slide_left show")
             setBackgroundAnimation("fade_in show")
             setVisible("show")
        }
        
        if(!isShowing){
            setAnimation("close_slide_left")
            setBackgroundAnimation("fade_out")
        }

    },[isShowing])

    const renderModal = () =>{

        if(isShowing === null){
            return
        }

        if(!isShowing){

            setTimeout(()=>{
                setVisible("hide")
            },150)

        }


        return ( 
            <>
                <div ref={modalBkRef}  className={`sideModal_bk ${backgrounAnimation} ${visible}`} onClick={toggle}/>
            <div ref={modalRef} className={`sideModal ${animation} ${visible}`}>
                <div style={{cursor : "pointer"}} className={`close-btn close_btn`} onClick={toggle}><span>+</span>
                </div>
                    <h2>testing</h2>
            </div>
            </>
        
        )
    }

  return (
          renderModal()
  )

}
