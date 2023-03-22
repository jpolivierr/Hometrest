import "./style.css"
import { Link } from "react-router-dom";
const NavList = (props) =>{

    const {Class, listsClass, listsClickEvent} = props

     const listClickEvent = (e) =>{

          if(listsClickEvent){
            listsClickEvent(e)
          }

     }

    return(
        <ul className={Class}>

            <Link to="/" target="" >
            <li onClick={(e)=>{listClickEvent(e)}} 
                className={listsClass}>Home
            </li>
            </Link>
            
            <Link to="/about" target="">
                <li onClick={(e)=>{listClickEvent(e)}}  
                    className={listsClass}>About
                </li>
            </Link>
            
            <Link to="/listings" target="">
                <li onClick={(e)=>{listClickEvent(e)}} 
                    className={listsClass}>Listings
                </li>
            </Link>   
            
        </ul>
    )
}

export default NavList