import React, { useRef } from 'react'
import SideModal from './sideModal/sideModal.component';
import FloatingModal from './floatingModal/floatingModal.component';
import { createContext, useState } from "react";

const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  
    const [showSideModal, setShowSideModal] = useState(null)
    const [showFloatingModal, setShowFloatingModal] = useState(null)
    const [modalPayload, setModalPayload] = useState(null)
    const [type, setType] = useState(null)
    const transitionTime = useRef(null)


    const setTransitionTime = (time) =>{
             
      transitionTime.current = time

    }

    const setModalType = (modalType) =>{

       setType(modalType)
      
    }


    const setPayLoad = (payload) =>{

      setModalPayload(payload)

    }


    const toggleSideModal = () =>{
        setShowSideModal(!showSideModal)
    }

    const toggleFloatingModal = (modalType, payload) =>{

      if(modalType && typeof modalType === "string"){

        setType(modalType.toUpperCase())

      }

      if(payload){

        setModalPayload(payload)
        
      }

      setShowFloatingModal(!showFloatingModal)

  }

  const modalContextValues = {
    showSideModal,
    transitionTime,
    modalPayload,
    type,
    showFloatingModal,
    setTransitionTime, 
    setPayLoad, 
    setModalType, 
    toggleSideModal, 
    toggleFloatingModal,
  }


  return (
    <ModalContext.Provider value={modalContextValues}>
        {children}
        <SideModal isShowing={showSideModal} toggle={toggleSideModal} />
        <FloatingModal transitionTime={transitionTime}modalPayload={modalPayload} type={type} isShowing={showFloatingModal} toggle={toggleFloatingModal}/>
    </ModalContext.Provider>
  )
}

export default ModalContext
