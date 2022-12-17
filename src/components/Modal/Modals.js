import React from 'react';
import "./style_modal.css"

import { MODAL_TYPE, COMPONENT} from '../../VAR/var';

//Animation
import { useAnimation } from '../Animation/useAnimation';
//Redux
import {useSelector} from 'react-redux'

// Actions
import { bindActionCreators } from 'redux'
import { useDispatch } from "react-redux"
import { modalAction } from '../../_state/Actions/actionCollection';



const Modals = () => {

    const TRANSITION = 200
    const modalState = useSelector(state => state.modalReducer)
    const {openModal} =bindActionCreators(modalAction, useDispatch())

    const {animations, 
          slideDownModal, 
          slideLeftModal,
          floatModal
        } = useAnimation()




    const content =(type)=>{
        switch(type){
            case COMPONENT.RECURRING_UPDATE_FORM :
                return null
            case COMPONENT.RECURRING_CREATE_FORM  :
                return null
            case COMPONENT.TRANSACTION_CREATE_FORM :
                return null
            case COMPONENT.TRANSACTION_UPDATE_FORM :
                return null
            case COMPONENT.ADD_LIST :
                return null
            case COMPONENT.SIDE_NAVIGATION :
                return null
            default :
                return null;
        }
    }


    const floatingModal = () =>{
        return(
            <>
            <div className={`${animations.overlay} form-modal-overlay`} onClick={()=>{floatModal(openModal)}} />
            
            <div className={`${animations.floatModal} floating-modal`}>
                <i className="fa-solid fa-xmark" onClick={()=>{floatModal(openModal)}}></i>
                <div className={`form-container` }>
                   {content(modalState.formType)}
                </div>
            </div>
            </>
        )
    }


    const sideModal = () =>{
        return(
            <>
           <div className={`modal-overlay ${animations.overlay}`} onClick={()=>{slideLeftModal(openModal)}}/>
            <div className={`side-modal ${animations.sideModal}`}>
            <i className="fa-solid fa-xmark" onClick={()=>{slideLeftModal(openModal)}}></i>
            {content(modalState.formType)}
         </div>
            </>
        )
    }

    const selectModal = () =>{
        return(
            <>
           <div className={`modal-overlay ${animations.overlay}`} onClick={()=>{slideDownModal(openModal)}}/>
            <div className={`list-modal ${animations.slideModal}`}>
            <i className="fa-solid fa-xmark" onClick={()=>{slideDownModal(openModal)}}></i>
            {content(modalState.formType)}
            </div>
            </>
        )
    }

        switch(modalState.modalType){
            case MODAL_TYPE.FLOATING :
                return floatingModal()
            case MODAL_TYPE.SIDE:
                return sideModal()
            case MODAL_TYPE.SELECT :
                return selectModal()
            default :
               return  null
        }
    };

export default Modals;