import "./style.css"
const NavList = (props) =>{

    const {Class, listsClass, listsClickEvent} = props

     const listClickEvent = (e) =>{
          if(listClickEvent){
            listsClickEvent(e)
          }
     }

    return(
        <ul className={Class}>
            <li onClick={(e)=>{listClickEvent(e)}} 
                className={listsClass}>Home
            </li>

            <li onClick={(e)=>{listClickEvent(e)}}  
                className={listsClass}>About
            </li>

            <li onClick={(e)=>{listClickEvent(e)}} 
                className={listsClass}>Listings
            </li>
        </ul>
    )
}

export default NavList