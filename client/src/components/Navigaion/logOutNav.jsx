import useModal from "../../lib/Modal/useModal"
import Modal from "../../lib/Modal/modal"
import SlideWindow from "../../lib/Modal/Windows/slideWindow"
import ModalOverlay from "../../lib/Modal/Overlays/modalOverlay"
import MainButton from "../buton/MainButton"
import ModalContext from "../modals/modalContext"
import { useContext } from "react"
import "./style.css"



import { useState } from "react"
import NavList from "../list/NavList"

const LogOutNav = () =>{

    // const {isShowing, toggle, motion } = useModal();
    const {toggleSideModal, toggle} = useContext(ModalContext)


    return(

           <>
                    <section className=" top-nav">

                                <div className="container flex-space-between">
                                            <div>
                                                <h2><i className="fa-brands fa-pagelines"></i> HomeTrest</h2>
                                            </div>
                                        <div style={{display: "flex"}}>

                                             <NavList 
                                        Class="hideMobile flex-space-between gap-1x nav-list"
                                        />

                                        <div style={{marginLeft: "3rem"}} className="hideMobile flex-space-between gap-1x">

                                 
                                                <button 
                                                  onClick={toggleSideModal}
                                                className="button main-btn">
                                                    Modal test
                                                </button>
                                         
                                            
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
                            // isShowing={isShowing}
                           >
                            <ModalOverlay
                                toggle={toggle}
                                // animated={{time: 200, motion: motion}}
                                motionType="fade"
                                seconds=".3s"
                                from="0"
                                to="1"
                            />

                    <SlideWindow 
                            toggle={toggle}
                            Class=""
                            // animated={{time: 200, motion: motion}}
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