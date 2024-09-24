import {useLocation } from "react-router-dom";


const NavList = (props) =>{

    const listingPath = "/listings?search="
    const buyUrl = listingPath + encodeURIComponent(JSON.stringify({status: ["for_sale"]}))

    const rentUrl = listingPath + encodeURIComponent(JSON.stringify({status: ["for_rent"]}))

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

            <a  href="/" target="" >
                <li onClick={(e)=>{listClickEvent(e)}} 
                    className={`${listsClass} ${activeClass(pathname,"/")}`}>Home
                </li>
            </a>

            
            <a  href="/listings" target="">
                <li onClick={(e)=>{listClickEvent(e)}} 
                    className={`${listsClass} ${activeClass(pathname,"/listings")}` }>Listings
                </li>
            </a> 

            <a  href={buyUrl} target="">
                <li onClick={(e)=>{listClickEvent(e)}} 
                    className={`${listsClass} ${activeClass(pathname,"/listings/buy")}` }>Buy
                </li>
            </a>

            <a  href={rentUrl} target="">
                <li onClick={(e)=>{listClickEvent(e)}} 
                    className={`${listsClass} ${activeClass(pathname,"/listings/rent")}` }>Rent
                </li>
            </a> 
            
        </ul>
    )
}

export default NavList