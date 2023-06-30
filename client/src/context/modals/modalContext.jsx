import React from 'react'
import SideModal from './sideModal/sideModal.component';
import { createContext, useState } from "react";

const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  
    const [showSideModal, setShowSideModal] = useState(null)

    const toggleSideModal = () =>{
        setShowSideModal(!showSideModal)
    }

  return (
    <ModalContext.Provider value={{toggleSideModal}}>
        {children}
        <SideModal isShowing={showSideModal} toggle={toggleSideModal} />
    </ModalContext.Provider>
  )
}

export default ModalContext
