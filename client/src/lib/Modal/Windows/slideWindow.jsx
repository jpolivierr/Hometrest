import ModalAnimation from "../ModalAnimation/animation"
import getMotion from "../Util/getMotion"

const SlideWindow = (props) =>{

    const {
           children,
           toggle,
           context,
           motionType,
           animated,
           seconds,
           from,
           to
        } = props

        let time = null

        let motion = null
    
        if(animated){
    
            time = !animated.time ? -1 : animated.time
    
            motion = animated.motion ? true : animated.motion === false ? false : null
    
        }

    const handleClick = () =>{

        toggle(time)
    
    } 

    return(
        <>
        
        <div className={`slide-window ${getMotion(motionType, motion)}`}>
            <div style={{cursor : "pointer"}} className="close-btn" onClick={handleClick}><span>+</span>
            </div>
                {children}
        </div>

        <ModalAnimation
           type = {motionType}
           seconds = {seconds}
           from = {from}
           to = {to}
        />

        </>
        
    
    )
}

export default SlideWindow 