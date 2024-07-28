import React, { useEffect, useState } from 'react'

export default function Modal({children, isOpen, setModalState}) {

  return (
    <>
        <div onClick={() => setModalState(false)}  className={`modal-bk ${!isOpen ? 'hide' : ""}`}></div>
        <div className={`modal-window ${!isOpen ? 'hide' : ""}`}>
            <span onClick={() => setModalState(false)} className='close-btn'>+</span>
            {children}
        </div>
    </>
    
  )
}
