import React from 'react'
import SideModal from './sideModal/sideModal.view';
import { createContext, useState } from "react";

const ModalContext = createContext()

export const ModalProvider = ({children}) => {

    const [isShowing, setIsShowing] = useState(false)
    const [showSideModal, setShowSideModal] = useState(null)

    const toggle = () =>{
        console.log("clicked...")
      setIsShowing(!isShowing)

    }
    const toggleSideModal = () =>{
        setShowSideModal(!showSideModal)
    }

  return (
    <ModalContext.Provider value={{toggle, toggleSideModal, isShowing}}>
        {children}
        <SideModal isShowing={showSideModal} toggle={toggleSideModal} />
    </ModalContext.Provider>
  )
}

export default ModalContext
