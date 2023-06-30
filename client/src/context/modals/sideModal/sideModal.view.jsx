import React, { useEffect, useRef, useState } from 'react'
import UserSettings from '../../../components/menu/userSettings.view'
import style from "./sideModal.style.css"

export default function SideModalView({value}) {

    const {
            modalBkRef, 
            visible, 
            toggle, 
            modalRef, 
            backgrounAnimation, 
            animation} = value


        return ( 
           <>
          <div ref={modalBkRef}  className={`sideModal_bk ${backgrounAnimation} ${visible}`} onClick={toggle}/>
            <div ref={modalRef} className={`sideModal ${animation} ${visible}`}>
                <div style={{cursor : "pointer"}} className={`close-btn close_btn`} onClick={toggle}><span>+</span>
                </div>
                testing
                    {/* <UserSettings /> */}
            </div>
            </>
        
        )
    }


