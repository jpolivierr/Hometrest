import { useUserContext } from "../../context/user/UserContext"
import HttpRequest from "../../httpRequest/HttpRequest"
import URL from "../../constants/urls"
import Logo from "../../assets/images/logo.png"
import Sidebar from "../sidebar/Sidebar"
import { useState } from "react"

const LoginTopNav = () =>{
const {get} = HttpRequest()
const {getUser, isAuthenticated, getPropertyCount} = useUserContext()
const [openSideBar, setOpenSideBar] = useState(false)

const logout = async () => {
    await get(URL.LOGOUT)
    window.location.href ="/login"
}

return(
<>
    <Sidebar isOpen={openSideBar}  setState={setOpenSideBar}/>
    <section className={`top-nav margin-bottom-4x padding-top-bottom`}>
            <div className={`flex-space-between with-full`}>
                <div className="logo" style={{display: "flex"}}>
                    <a href="/">
                        <img src={Logo} />
                    </a>
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
                        <a  href="/" target="">
                            <li>
                                Home
                            </li>
                        </a>
                    </ul>
                                    
                        <a href="/signup">
                                Join
                        </a>
                </div>
                }
                    
                <div 
                   className="hideDesktop burger-menu"
                   onClick={() => setOpenSideBar(true)}
                   >
                    <menu>
                        <div></div>
                        <div></div>
                        <div></div>
                    </menu>
                </div>
            </div>
        </section>     
</>
   
 )
}

export default LoginTopNav