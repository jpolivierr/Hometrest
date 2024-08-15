import NavList from "../list/NavList"
import { useUserContext } from "../../context/user/UserContext"
import HttpRequest from "../../httpRequest/HttpRequest"
import URL from "../../constants/urls"
import { useLocation } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"
import Sidebar from "../sidebar/Sidebar"
import { useState, useEffect, useCallback } from "react"

const TopNav = () =>{
const {get} = HttpRequest()
const {getUser, isAuthenticated, getPropertyCount} = useUserContext()
const [openSideBar, setOpenSideBar] = useState(false)

const location = useLocation()

const logout = async () => {
    await get(URL.LOGOUT)
    window.location.href ="/login"
}

const isListingPage = () => {
    return location.pathname.startsWith("/listings")
}

const fetchUser = useCallback(() => {
    return getUser();
})


return(
        <>
        <Sidebar isOpen={openSideBar}  setState={setOpenSideBar}/>
            <section className={` top-nav border-bottom ${isListingPage() ? 'top-nav-stick' : ''}`}>
                    <div className={`${isListingPage() ? 'container' : 'container-medium'} flex-space-between`}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div className="logo">
                                <a href="/">
                                    <img src={Logo} alt="Appvenir logo" />
                                </a>
                            </div>
                            <NavList Class="hideMobile flex-space-between gap-1x nav-list"/>
                        </div>
                    
                        {
                        fetchUser() !== null && isAuthenticated ?
                            <div className="user-nav-info">                      
                                <h3 className="user-greeting hideMobile">
                                    Hello, {fetchUser().firstName}
                                </h3>
                                {/* <button onClick={logout} className="user-nav-likes">
                                    <span>Logout</span>
                                </button> */}
                                <button className="user-nav-likes">
                                    <i className="fa-regular fa-heart"></i>
                                    <span>Likes</span>
                                    <span className="like_count">{getPropertyCount()}</span>
                                </button>  
                                <div 
                                onClick={() => setOpenSideBar(true)}
                                className=" burger-menu">
                                    <menu>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </menu>
                                </div>                    
                            </div>
                            :
                            <div style={{display: "flex"}}>
                            <div style={{marginLeft: "3rem"}} className="hideMobile flex-space-between gap-1x">

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
                           
                          {
                            !fetchUser() !== null && !isAuthenticated &&
                            <div 
                         onClick={() => setOpenSideBar(true)}
                         className=" burger-menu">
                            <menu>
                                <div></div>
                                <div></div>
                                <div></div>
                            </menu>
                        </div>
                          }  
                        
                    </div>
                </section>     
        </>
    
 )
}

export default TopNav