import React from 'react'
import SideModal from './sideModal/sideModal.component';
import FloatingModal from './floatingModal/floatingModal.component';
import { createContext, useState } from "react";

const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  
    const [showSideModal, setShowSideModal] = useState(null)
    const [showFloatingModal, setShowFloatingModal] = useState(null)

    const toggleSideModal = () =>{
        setShowSideModal(!showSideModal)
    }

    const toggleFloatingModal = () =>{
      console.log("toggle..")
      setShowFloatingModal(!showFloatingModal)
  }

  return (
    <ModalContext.Provider value={{toggleSideModal, toggleFloatingModal}}>
        {children}
        <SideModal isShowing={showSideModal} toggle={toggleSideModal} />
        <FloatingModal isShowing={showFloatingModal} toggle={toggleFloatingModal}/>
    </ModalContext.Provider>
  )
}

export default ModalContext
