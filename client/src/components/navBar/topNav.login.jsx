import NavList from "../list/NavList"
import { useUserContext } from "../../context/user/UserContext"
import HttpRequest from "../../httpRequest/HttpRequest"
import URL from "../../constants/urls"
import { Link, useLocation } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"

const LoginTopNav = () =>{
const {get} = HttpRequest()
const {getUser, isAuthenticated, getPropertyCount} = useUserContext()

const logout = async () => {
    const response = await get(URL.LOGOUT)
    window.location.href ="/login"
}

return(

    <section className={`top-nav margin-bottom-4x padding-top-bottom`}>
        <div className={`flex-space-between with-full`}>
            <div className="logo" style={{display: "flex"}}>
                <img src={Logo} />
            </div>

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
                <div className="hideMobile flex-space-between gap-3x">
                <ul>
                    <Link  to="/" target="">
                        <li>
                            Home
                        </li>
                    </Link>
                </ul>
                                
                    <a href="/signup">
                            Join
                    </a>
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

export default LoginTopNav