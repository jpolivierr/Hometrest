import React, { useEffect, useState, useLayoutEffect } from 'react'
import SideModal from './sideModal/sideModal.view'
import ReactDOM from 'react-dom';

export const SIDE = "SIDE"

export default function Modal(props) {

  const {isShowing, type} = props



    const renderModal = () =>{
 
      switch(type){
         case SIDE :
            return <SideModal />
      }
       
    }



  return (
    <>
      {isShowing && renderModal()}
    </>
  )
  
}
