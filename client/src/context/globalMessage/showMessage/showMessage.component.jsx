import React, { useEffect, useRef, useState } from 'react'
import ShowMessageView from './showMessage.view'

export default function ShowMessage(props) {

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
            setTimeout(()=>{
                setVisible("hide")
            },100)
            
        }

    },[isShowing])


    return ( 
     isShowing !== null &&  <ShowMessageView value={{modalBkRef, backgrounAnimation, visible, toggle, modalRef, animation}} />
     )

}
