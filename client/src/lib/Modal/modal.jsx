import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import FloatingWindow from './Windows/floatWindow';
import ModalOverlay from './Overlays/modalOverlay';

const Modal = (props) => {

    const windowTypes = {
            FLOATING : "floating"
    }

    const {
           isShowing,
           children,
           type, 
           motion,
           toggle,
            time,
            motionType
        } = props

    useEffect(()=>{
        
    },[isShowing])
  

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

    const getWindow = () =>{

        switch(type){

            case windowTypes.FLOATING :
                return floatingModal()
                
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