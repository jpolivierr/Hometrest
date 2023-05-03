
import MainButton from "../../buton/MainButton"
import useMyModal from "../../../lib/Modal/useMyModal"
import useRequest from "../../../lib/MakeRequest/MakeRequest"
import URL from "../../../Config/urls"
import useSessionMng from "../../../hooks/useSessionMng"
import useReduxMng from "../../../hooks/useReduxMng"
import "../style.css"
import "./style.css"



import { useEffect, useState } from "react"
import NavList from "../../list/NavList"

const LogInNav = () =>{

    // const {isShowing, toggle, motion } = useModal(); 
    const {makeRequest, formResponse, loading} = useRequest()

    const {activeUserReducer} = useReduxMng()

    const fName = activeUserReducer.userInfo.first_name ? activeUserReducer.userInfo.first_name : ""
    const lName = activeUserReducer.userInfo.last_name ? activeUserReducer.userInfo.last_name : ""

    const {deleteStorageData} = useSessionMng()

    const {toggle, renderModal, addChildElement} = useMyModal({
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
        
        if(formResponse.status && formResponse.status === 200){

            deleteStorageData()

             window.location.href="/"

            console.log(formResponse)
        }
    },[formResponse])

    addChildElement(
                    <ul>
                         <li className="user-icon"><i className="fa-regular fa-user"></i></li>
                         <li className="user-full-name">{`${fName} ${lName}`}</li>
                         <li className="user-edit-account"><p>Edit Account</p></li>
                         <li>
                            <button onClick={loginOut}>Log out</button>
                         </li>
                    </ul>)

    // const modalConfig = {
    //             type: "float",
    //             animation : "fade",
    //             time: 300
    // }


    return(

           <>
                    <section className="padding-top-bottom top-nav log-in-nav">

                                <div className="container flex-space-between">
                                            <div>
                                                <h2><i className="fa-brands fa-pagelines"></i> HomeTrest</h2>
                                            </div>
                                        
                                        <NavList 
                                        Class="hideMobile flex-space-between gap-2x nav-list"
                                        />

                                        <div className="hideMobile flex-space-between gap-2x user-nav-info">
                                            
                                            <p className="user-greeting">
                                                Hi, {fName}
                                            </p>

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
                        {renderModal(<div>I'm here</div>)}

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