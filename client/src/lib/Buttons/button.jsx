
import { Link, NavLink, useLocation } from "react-router-dom";

const Buttons = (props) =>{

const {target, href,Class,label,clickEvent,type} = props

const handleClick = (e) =>{

    if(clickEvent){
        clickEvent(e)
    }



}

const generateButton = () =>{
    if(href){
        return(
            <Link to={href && href} target={target && "_blank"}>
                <button 
                  style={{cursor: "pointer",position: "relative", overflow: "hidden"}} 
                  type={type} 
                  onClick={(e)=>{handleClick(e)}}
                  className={`${Class} scl-btn`}>
                    
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
                  className={`${Class} scl-btn`}>
                    
                    {label}
                </button>
    )
}

    return(
        generateButton()       
    )
}

export default Buttons