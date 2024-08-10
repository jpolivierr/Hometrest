import { Link, NavLink, useLocation } from "react-router-dom";


const NavList = (props) =>{

    const buyPath = "/listings/buy?search="
    const buyUrl = buyPath + JSON.stringify({status: ["for_sale"]})

    const rentPath = "/listings/rent?search="
    const rentUrl = rentPath + JSON.stringify({status: ["for_rent"]})

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

            <Link  to={buyUrl} target="">
                <li onClick={(e)=>{listClickEvent(e)}} 
                    className={`${listsClass} ${activeClass(pathname,"/listings/buy")}` }>Buy
                </li>
            </Link>

            <Link  to={rentUrl} target="">
                <li onClick={(e)=>{listClickEvent(e)}} 
                    className={`${listsClass} ${activeClass(pathname,"/listings/rent")}` }>Rent
                </li>
            </Link> 
            
        </ul>
    )
}

export default NavList