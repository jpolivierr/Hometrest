import React, { useEffect, useRef, useState } from 'react'
import UserSettings from '../../../components/menu/userSettings.view'
import LoginForm from "../../../components/Form/login/Login.view"
import PhotoGallery from '../../../components/PhotoGallery/PhotoGallery'
import style from "./floatingModal.style.css"

export default function FloatingModalView({value}) {

    const {
            modalBkRef, 
            visible, 
            toggle, 
            modalRef, 
            backgrounAnimation, 
            animation,
            type,
            modalPayload
        } = value

    
        const renderModal = () =>{
            console.log(type)
            switch(type){
                case "GALLERY" :
                    return <PhotoGallery modalPayload={modalPayload}/>
                case "LOGIN" :
                    return <LoginForm />
                default :
                    return <LoginForm />
            }
        }


        return ( 
           <>
          <div ref={modalBkRef}  className={`bk_modal ${backgrounAnimation} ${visible}`} onClick={toggle}/>
            <div ref={modalRef} className={`modal_window floating_modal ${animation} ${visible}`}>
                <div style={{cursor : "pointer"}} className={`close_btn`} onClick={toggle}><span>+</span>
                </div>
                {renderModal()}
            </div>
            </>
        
        )
    }


