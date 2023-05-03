import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import FloatingWindow from './Windows/floatWindow';
import ModalOverlay from './Overlays/modalOverlay';
import ModalAnimation from './ModalAnimation/animation';

const Modal = (props) => {

    const windowTypes = {
            FLOATING : "floating",
            SLIDE: "slide"
    }

    const {
           isShowing,
           children,
           type, 
           motion,
           toggle,
        time,
        motionType,
        from,
        to
        } = props

    useEffect(()=>{
        
    },[isShowing])

    const getMotion = (motionType,motion) =>{

        switch(motionType){
    
            case "fade" :
                return motion ? `fadeIn` : motion === false ? `fadeOut` : null
    
            case "slide-left" :
                return motion ? `slide-left` : motion === false ? `close-slide-left` : null
    
            case "float" :
                return motion ? `float` : motion === false ? `close-float` : null
                
            default :
                return ""
    
        }
    }
  

    const floatingModal = () =>{
        return (
            <FloatingWindow 
                toggle={toggle}
                Class="float-window"
                animated={{time: time, motion}}
                motionType={motionType}
                seconds=""
                from="-300px"
                to="50px"
            >
                {children}
            </FloatingWindow>
        )
    }

    const slideModal = () =>{
        return(
            <>
        
            <div className={`slide-window ${getMotion(motionType, motion)}`}>
                <div style={{cursor : "pointer"}} className="close-btn" onClick={toggle}><span>+</span>
                </div>
                    {children}
            </div>
    
                    <ModalAnimation
                        type = {motionType}
                        seconds = {time}
                        from = {from}
                        to = {to}
                    />
    
            </>

        )
    }

    const getWindow = () =>{

        switch(type){

            case windowTypes.FLOATING :
                return floatingModal()
            case windowTypes.SLIDE :
                return slideModal()
            default :
                return floatingModal()
        }
    }

const renderModal = () =>{

    return ReactDOM.createPortal(
        <>

              <ModalOverlay
                        toggle={toggle}
                        animated={{time: time, motion}}
                        motionType={motionType}
                        seconds=""
                        from="0"
                        to="1"
                    />
             
                {getWindow()}
             
        </>, document.querySelector(".App")
      )

}

return(
       isShowing ? renderModal() : null
)

};

export default Modal;