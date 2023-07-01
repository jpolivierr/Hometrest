import React, { useEffect, useRef, useState } from 'react'
import UserSettings from '../../../components/menu/userSettings.view'
import LoginForm from "../../../components/Form/login/Login.view"
import style from "./floatingModal.style.css"

export default function FloatingModalView({value}) {

    const {
            modalBkRef, 
            visible, 
            toggle, 
            modalRef, 
            backgrounAnimation, 
            animation} = value


        return ( 
           <>
          <div ref={modalBkRef}  className={`bk_modal ${backgrounAnimation} ${visible}`} onClick={toggle}/>
            <div ref={modalRef} className={`modal_window floating_modal ${animation} ${visible}`}>
                <div style={{cursor : "pointer"}} className={`close_btn`} onClick={toggle}><span>+</span>
                </div>
                <LoginForm />
                    {/* <UserSettings /> */}
            </div>
            </>
        
        )
    }


