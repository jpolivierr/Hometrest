import useModal from "../../lib/Modal/useModal"
import Modal from "../../lib/Modal/modal"
import SlideWindow from "../../lib/Modal/Windows/slideWindow"
import ModalOverlay from "../../lib/Modal/Overlays/modalOverlay"
import MainButton from "../buton/MainButton"
import "./style.css"



import { useState } from "react"
import NavList from "../list/NavList"

const LogOutNav = () =>{

    const {isShowing, toggle, motion } = useModal();


    return(

           <>
                    <section className="padding-top-bottom top-nav">

                                <div className="container flex-space-between">
                                            <div>
                                                <h2><i className="fa-brands fa-pagelines"></i> HomeTrest</h2>
                                            </div>
                                        
                                        <NavList 
                                        Class="hideMobile flex-space-between gap-2x nav-list"
                                        />

                                        <div className="hideMobile flex-space-between gap-1x">
                                            
                                            <a href="/signup">
                                                <button className="button main-btn">
                                                    Sign up
                                                </button>
                                            </a>

                                            <a href="/login">
                                                <button className="button secondary-btn">
                                                   Log in
                                                </button>
                                            </a>
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

export default LogOutNav