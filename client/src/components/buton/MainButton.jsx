
import { Link, NavLink, useLocation } from "react-router-dom";
import useRipple from "../../lib/ClickEvents/ripple/ripple";

const MainButton = (props) =>{

const {target, href,Class,label,clickEvent,type} = props
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