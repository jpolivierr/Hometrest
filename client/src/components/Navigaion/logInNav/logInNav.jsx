
import MainButton from "../../buton/MainButton"
import useMyModal from "../../../lib/Modal/useMyModal"
import useRequest from "../../../lib/MakeRequest/MakeRequest"
import URL from "../../../Config/urls"
import useSessionMng from "../../../hooks/useSessionMng"
import useReduxMng from "../../../hooks/useReduxMng"
import shortenText from "../../../Util/shortenText"
import { deepSearch } from "../../../Util/getValueByKey"
import { Link } from "react-router-dom"
import { USER_AUTH_TOKEN } from "../../../Config/authToken"

import "../style.css"
import "./style.css"



import { useEffect, useState } from "react"
import NavList from "../../list/NavList"

const LogInNav = (props) =>{

    const {user} = props
    const {firstName, lastName, email} = user

    // const {isShowing, toggle, motion } = useModal(); 
    const {makeRequest, formResponse, loading, status} = useRequest()

    const {deleteStorageData, deleteCookie} = useSessionMng(USER_AUTH_TOKEN)

    const {toggle, renderModal, addChildElement, isShowing} = useMyModal({
        type: "slide",
        windowAnimation : {
                    start: "slide-left",
                    end: "close-slide-left"
        },
        animation: "slide-left_close-slide-left",
        time: 100,
    })



    const loginOut = () =>{
          makeRequest("GET",URL.LOGOUT)
    }

    useEffect(()=>{
        addChildElement(<div className="user-settings">
                       <div className="setting-header">
                            <div className="user-icon"><i className="fa-regular fa-user"></i></div>
                            <div className="user-full-name">{`${firstName} ${lastName}`}</div>
                            <div className="user-email"><h5>{`${shortenText(email,20) }`}</h5></div>
                       </div>
                            <ul className="update-user-list">

                            <Link  to="/update" target="">
                                <li className="user-edit-account" onClick={toggle}><p>Edit Account</p></li>
                            </Link> 
                                
                            </ul>
                        <div className="user-log-out">
                                <button className="button main-btn" onClick={loginOut}>Log out</button>
                        </div>
                    </div>
                    )
        
    },[isShowing])


    useEffect(()=>{

        console.log(formResponse)

        if(status == 204){

             deleteCookie()

             window.location.href="/"

            
        }
        
    },[formResponse])


    return(

           <>
                    <section className="top-nav log-in-nav">

                                <div className="container flex-space-between">
                                            <div>
                                                <h2><i className="fa-brands fa-pagelines"></i> HomeTrest</h2>
                                            </div>
                                        
                                        <NavList 
                                        Class="hideMobile flex-space-between gap-2x nav-list"
                                        />

                                        <div className="hideMobile flex-space-between gap-3x user-nav-info">
                                            
                                            <h3 className="user-greeting">
                                                Hi, {user.firstName}
                                            </h3>

                                            <button className="user-nav-likes">
                                                  <i className="fa-regular fa-heart"></i>
                                                  <p>Likes</p>
                                            </button>

                                           
                                            <button onClick={()=>toggle()} className="user-nav-account">
                                                <i className="fa-regular fa-user"></i>
                                            </button>
                                         
                                        </div>

                                        <div className="hideDesktop">
                                            <menu onClick={toggle}>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </menu>
                                        </div>
                                </div>

                        </section>
                        {renderModal()}
                        {/* <Modal
                            isShowing={isShowing}
                            toggle={toggle}
                            motion={motion}
                            time={300}
                            motionType={"fade"}
                            type={"slide"}
                            from={""}
                            to={""}
                         >
                          
                                    <NavList 
                                        Class="flex-columns gap-1x nav-list"
                                        listsClass="text-center"
                                        listsClickEvent={()=>toggle(300)}
                                        />
                         </Modal> */}
           </>
                
                   
     
    )
}

export default LogInNav