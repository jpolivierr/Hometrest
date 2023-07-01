import React, { useEffect, useRef, useState } from 'react'
import UserSettings from '../../../components/menu/userSettings.view'
import FloatingModalView from './floatingModal.view'
import "./floatingModal.style.css"

export default function FloatingModal(props) {

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
             setAnimation("fade_in show")
             setBackgroundAnimation("fade_in show")
             setVisible("show")
        }
        
        if(!isShowing){
            setAnimation("fade_out")
            setBackgroundAnimation("fade_out")
            setTimeout(()=>{
                setVisible("hide")
            },100)
            
        }

        console.log(isShowing)

    },[isShowing])
    
    return ( 
        isShowing !== null &&  <FloatingModalView value={{modalBkRef, backgrounAnimation, visible, toggle, modalRef, animation}} />
        
        )

}
