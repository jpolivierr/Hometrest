
import { Link, NavLink, useLocation } from "react-router-dom";
const Buttons = (props) =>{

const {target, href,Class,label,clickEvent,type} = props

    return(
           <Link to={href && href} target={target && "_blank"}>
                <button 
                  style={{cursor: "pointer",position: "relative", overflow: "hidden"}} 
                  type={type} onClick={(e)=>{clickEvent && clickEvent(e)}} 
                  className={`${Class}`}>
                    {label}
                </button>
           </Link>
    )
}

export default Buttons