import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {

    const {isShowing, children} = props

    useEffect(()=>{
        
    },[isShowing])
  

const renderModal = () =>{

    return ReactDOM.createPortal(
        <>
             {children}
        </>, document.querySelector(".App")
      )

}

return(
       isShowing ? renderModal() : null
)

};

export default Modal;