import React, { useState, useEffect } from "react";
import Recurring from "../Forms/CreateForm/recurringCreateForm";
import AddList from "../List/addList";
import Navigation from '../Navigation/Navigation/Navigation'
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

const useModals = () =>{

    const TRANSITION = 200

    // Modal State
    const [modals, setModals] = useState({
        isShowing: false,
        type: "",
        formType: ""
      })

    //Modal Animation
      const [modalAnimation, setModalAnimation] = useState({
        floating : true,
        side : true,
        select : true
    })

    const rootElement = document.querySelector('#root')

    
    //Modal context function
    const setModalsContext = (type, formType) =>{
      setModals({...modals, 
        isShowing: !modals.isShowing,
        type, formType})
    }

    const content =(type)=>{

        switch(type){
            case "recurring-form" :
                return <Recurring />
            case "add-list" :
                return <AddList />
            case "side-navigation" :
                return <Navigation type="mobile"/>
            default :
                return null;
        }
    }

    const closeFloatingModal = () =>{
        setModalAnimation({...modalAnimation, floating: false})
        setTimeout(() => {
            setModals({...modals, type: ""})
            setModalAnimation({...modalAnimation, floating: true})
        }, TRANSITION);
    }

    const floatingModal = () =>{
   
      return (ReactDOM.createPortal(
        <React.Fragment>
            <div className={`${modalAnimation.floating ? 'fade-in' : 'closeModal'} form-modal-overlay`} onClick={()=>{closeFloatingModal()}} /><div className={`${modalAnimation.floating ? 'slide-up' : 'slide-down'} floating-modal`}>
                <i className="fa-solid fa-xmark" onClick={()=>{closeFloatingModal()}}></i>
                <div className={`form-container` }>
                   {content(modals.formType)}
                </div>
            </div>
        </React.Fragment>, document.body
      ))
        //  return(
        //     <>
        //     <div className={`${modalAnimation.floating ? 'fade-in' : 'closeModal'} form-modal-overlay`} onClick={()=>{closeFloatingModal()}} /><div className={`${modalAnimation.floating ? 'slide-up' : 'slide-down'} floating-modal`}>
        //         <i className="fa-solid fa-xmark" onClick={()=>{closeFloatingModal()}}></i>
        //         <div className={`form-container` }>
        //            {content(modals.formType)}
        //         </div>
        //     </div>
        //     </>
        //  )   
        
    }

    const empty = () =>{
        return null
    }

    
        switch(modals.type){
           
            case "floating" :
                console.log(modals)
                floatingModal()
                break
            // case "side" :
            //     return sideModal()
            // case "select" :
            //     return selectModal()
            default :
                console.log(modals)
                empty()
        }



    return {setModalsContext}
}

export {useModals}