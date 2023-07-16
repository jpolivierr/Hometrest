import React, { useEffect, useRef, useState } from 'react'
import UserSettings from '../../../components/menu/userSettings.view'
import LoginForm from "../../../components/Form/login/Login.view"
import PhotoGallery from '../../../components/PhotoGallery/PhotoGallery'
import ClientInfo from '../../../components/Form/schedueTour/ScheduleTour.view'
import MessageFormView from '../../../components/Form/message/MessageForm.view'
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
 
            switch(type){
                case "GALLERY" :
                    return <PhotoGallery modalPayload={modalPayload}/>
                case "LOGIN" :
                    return <LoginForm />
                case "CLIENT_INFO" :
                    return <ClientInfo />
                case "MESSAGE" :
                    return <MessageFormView />
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


