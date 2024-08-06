import NavList from "../list/NavList"
import { useUserContext } from "../../context/user/UserContext"
import HttpRequest from "../../httpRequest/HttpRequest"
import URL from "../../constants/urls"
import { useLocation } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"

const TopNav = () =>{
const {get} = HttpRequest()
const {getUser, isAuthenticated, getPropertyCount} = useUserContext()

const location = useLocation()

const logout = async () => {
    const response = await get(URL.LOGOUT)
    window.location.href ="/login"
}

const isListingPage = () => {
    return location.pathname.startsWith("/listings")
}

return(

    <section className={` top-nav border-bottom padding-top-bottom-small ${isListingPage() ? 'top-nav-stick' : ''}`}>
        <div className={`${isListingPage() ? 'container' : 'container-medium'} flex-space-between`}>
            <di style={{display: "flex", alignItems: "center"}}>
                  <div className="logo">
                    <img src={Logo} />
                  </div>
                  <NavList Class="hideMobile flex-space-between gap-1x nav-list"/>
            </di>
          
            {
            getUser() !== null && isAuthenticated ?
                <div className="hideMobile flex-space-between gap-3x user-nav-info">                      
                    <h3 className="user-greeting">
                        Hello, Frederic
                    </h3>
                    <button onClick={logout} className="user-nav-likes">
                        <span>Logout</span>
                    </button>
                    <button className="user-nav-likes">
                        <i className="fa-regular fa-heart"></i>
                        <span>Likes</span>
                        <span className="like_count">{getPropertyCount()}</span>
                    </button>
                    <button className="user-nav-account">
                        <i className="fa-regular fa-user"></i>
                    </button>                       
                </div>
                :
                <div style={{display: "flex"}}>
                <div style={{marginLeft: "3rem"}} className="hideMobile flex-space-between gap-1x">
                    <ul className="nav-contact-info">
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <span>Call: (849) 9840 9449</span>
                        </li>
                    </ul>

                    <a href="/login">
                        <button className="button secondary-btn">
                            Login
                        </button>
                    </a>
                                                            
                    <a href="/signup">
                        <button className="button main-btn">
                            Sign up
                        </button>
                    </a>
                </div>
            </div>
            }
                
            <div className="hideDesktop burger-menu">
                <menu>
                    <div></div>
                    <div></div>
                    <div></div>
                </menu>
            </div>
        </div>
    </section>     
 )
}

export default TopNav