
import { Link } from "react-router-dom";
import useRipple from "../../lib/ClickEvents/ripple/ripple";
import { useState } from "react";

const MainButton = (props) =>{

const {target,
        href,
        Class,
        label,
        clickEvent,
        type,
        loadingEffect
    } = props
    
const {rippleClass, rippleAnimation} = useRipple()

const handleClick = (e) =>{

    if(clickEvent){
        clickEvent(e)
    }
    
    rippleAnimation(e)

}

const generateButton = () =>{
    if(href){
        return(
            <Link to={href && href} target={target && "_blank"}>
                <button 
                  style={{cursor: "pointer",position: "relative", overflow: "hidden"}} 
                  type={type} 
                  onClick={(e)=>{handleClick(e)}}
                  className={`${Class} ${rippleClass} scl-btn`}>
                    {/* <Ring isShowing = {isLoading}/> */}
                    {loadingEffect && loadingEffect}
                    
                    {label}
                </button>
           </Link>
        )
    }

    return(
        <button 
                  style={{cursor: "pointer",position: "relative", overflow: "hidden"}} 
                  type={type} 
                   onClick={(e)=>{handleClick(e)}}
                   className={`${Class} ${rippleClass} scl-btn`}>
                    
                    {label}
                </button>
    )
}

    return(
        generateButton()       
    )
}

export default MainButton