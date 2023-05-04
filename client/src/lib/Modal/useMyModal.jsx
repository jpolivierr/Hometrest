import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import ModalAnimation from './ModalAnimation/animation';


const useMyModal = (children) => {

      const windowTypes = {
    FLOATING : "floating",
    SLIDE: "slide"
        }

  const [isShowing, setIsShowing] = useState(false);
  const [ childElement, setChildElement] = useState(null)
  const [overlayAnimation, setOverlayAnimation] = useState("")
  const [windowAnimation, setWindowAnimation] = useState(children.windowAnimation.start)



  function toggle() {

    const time = !Number(children.time) || Number(children.time) <= 0 ? 0 : Number(children.time)

    if(!isShowing){
         setOverlayAnimation("fadeIn")
          setWindowAnimation(children.windowAnimation.start)
        setIsShowing(true)
        return
    }

    if(isShowing){

        // setConfig(children)

        setOverlayAnimation("fadeOut")
        setWindowAnimation(children.windowAnimation.end)

        setTimeout(()=>{

            setIsShowing(false)

        },time)

        return

    }
  }


  const addChildElement = (element) =>{
    
      
        setChildElement(element)
      

  }

  const slideModal = () =>{
    return(
        <>
    
        <div className={`slide-window ${overlayAnimation} ${windowAnimation}`}>
            <div style={{cursor : "pointer"}} className="close-btn" onClick={toggle}><span>+</span>
            </div>
                {childElement}
        </div>

                <ModalAnimation
                    type = {children.type}
                    seconds = {convertToSeconds(children.time)}
                     from = {"-100px"}
                     to = {"0px"}
                />

        </>

    )
}



  const getWindow = () =>{

    switch(children.type){
        // case windowTypes.FLOATING :
        //     return floatingModal()
        case windowTypes.SLIDE :
            return slideModal()
        default :
            return null
    }
}

const convertToSeconds = (time) => {
    if (time >= 1000) {
      return (time / 1000) + "s";
    } else {
      return time + "ms";
    }
  }


  const renderModal = () =>{

    return isShowing && ReactDOM.createPortal(
        <>
            <div  className={`modal-bk ${overlayAnimation}`} onClick={toggle}/>

            <ModalAnimation
                    type={"fade"}
                     seconds = {convertToSeconds(children.time)}
                />

              {getWindow()}
             
        </>, document.querySelector("body")
      )

}

  return {
    isShowing,
    toggle,
    renderModal,
    addChildElement 
   }
};

export default useMyModal