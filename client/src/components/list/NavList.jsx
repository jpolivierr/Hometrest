import "./style.css"
import { Link, NavLink, useLocation } from "react-router-dom";


const NavList = (props) =>{

    const {Class, listsClass, listsClickEvent} = props

    const location = useLocation();

    const { pathname } = location

     const listClickEvent = (e) =>{

          if(listsClickEvent){
            listsClickEvent(e)
          }

     }

     const activeClass = (pathname, link) =>{

        if(pathname === link){
            return "active-link"
        }

     }

    return(
        <ul className={Class}>

            <Link  to="/" target="" >
                <li onClick={(e)=>{listClickEvent(e)}} 
                    className={`${listsClass} ${activeClass(pathname,"/")}`}>Home
                </li>
            </Link>

            
            <Link  to="/listings" target="">
                <li onClick={(e)=>{listClickEvent(e)}} 
                    className={`${listsClass} ${activeClass(pathname,"/listings")}` }>Listings
                </li>
            </Link> 
            
        </ul>
    )
}

export default NavList