import ModalAnimation from "../ModalAnimation/animation"
import getMotion from "../Util/getMotion"

const ModalOverlay = (props) =>{

    const { toggle,
            animated,
            motionType,
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
        <div  className={`modal-bk ${getMotion(motionType, motion)}`} onClick={handleClick}/>
        <ModalAnimation
           type = {motionType}
           seconds = {seconds}
           from = {from}
           to = {to}
        />
        </>
        
    
    )
}

export default ModalOverlay