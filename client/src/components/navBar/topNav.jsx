import NavList from "../list/NavList"
import { useUserContext } from "../../context/user/UserContext"
import HttpRequest from "../../httpRequest/HttpRequest"
import URL from "../../constants/urls"
import { useLocation } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"
import Sidebar from "../sidebar/Sidebar"
import { useState, useEffect, useCallback } from "react"
import DropDown from "../dropDown/DropDown"

const TopNav = () =>{
const {get} = HttpRequest()
const {getUser, logout, isAuthenticated, getPropertyCount} = useUserContext()
const [openSideBar, setOpenSideBar] = useState(false)

const location = useLocation()

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

                            <DropDown Class={"account-drop-down"}>
                                <div className="account-container">
                                 <button className="user-nav-account">
                                    <i className="fa-regular fa-user"></i>
                                </button> 
                                <h3 className="user-greeting hideMobile">
                                        {fetchUser().firstName} {fetchUser().lastName}     
                                </h3>
                                <i className="fa-solid fa-caret-down"></i>
                              </div>
                              <div className="account-drop-down-window">
                                <ul>
                                    <li><i className="fa-regular fa-pen-to-square"></i>Edit Account</li>
                                    <li> <i className="fa-regular fa-heart"></i>Likes</li>
                                    <li onClick={async () => await logout()}><i className="fa-solid fa-arrow-right-from-bracket"></i>Logout</li>
                                    <li className="delete-acc"><i className="fa-regular fa-trash-can"></i>Delete Account</li>
                                </ul>
                              </div>
                            </DropDown>
                              
                                <button className="user-nav-likes hideMobile">
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
                         className="hideDesktop burger-menu">
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