import useModal from "../../../lib/Modal/useModal"
import Modal from "../../../lib/Modal/modal"
import SlideWindow from "../../../lib/Modal/Windows/slideWindow"
import ModalOverlay from "../../../lib/Modal/Overlays/modalOverlay"
import MainButton from "../../buton/MainButton"
import "../style.css"
import "./style.css"



import { useState } from "react"
import NavList from "../../list/NavList"

const LogInNav = () =>{

    const {isShowing, toggle, motion } = useModal();


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
                                                Hi, Frederic
                                            </p>

                                            <button className="user-nav-likes">
                                                  <i className="fa-regular fa-heart"></i>
                                                  <p>Likes</p>
                                            </button>

                                           
                                                <button className="user-nav-account">
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


                        <Modal
                            isShowing={isShowing}
                           >
                            <ModalOverlay
                                toggle={toggle}
                                animated={{time: 200, motion: motion}}
                                motionType="fade"
                                seconds=".3s"
                                from="0"
                                to="1"
                            />

                    <SlideWindow 
                            toggle={toggle}
                            Class=""
                            animated={{time: 200, motion: motion}}
                            motionType="slide-left"
                            seconds=".2s"
                            from="-300px"
                            to="0px"
                        >
                            <NavList 
                                Class="flex-columns gap-1x nav-list"
                                listsClass="text-center"
                                listsClickEvent={()=>toggle(300)}
                                />

                        </SlideWindow>

                        </Modal>
           </>
                
                   
     
    )
}

export default LogInNav