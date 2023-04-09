import Buttons from "../../lib/Buttons/button"

import useModal from "../../lib/Modal/useModal"
import Modal from "../../lib/Modal/modal"
import SlideWindow from "../../lib/Modal/Windows/slideWindow"
import ModalOverlay from "../../lib/Modal/Overlays/modalOverlay"
import MainButton from "../buton/MainButton"



import { useState } from "react"
import NavList from "../list/NavList"

const TopNav = () =>{

    const {isShowing, toggle, motion } = useModal();

    const navStyle = {
        parent : {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }
    }

    const [style] = useState(navStyle)

    return(

           <>
                    <section className="padding-top-bottom">

                                <div className="container flex-space-between">
                                            <div>
                                                <h2><i className="fa-brands fa-pagelines"></i> HomeTrest</h2>
                                            </div>
                                        
                                        <NavList 
                                        Class="hideMobile flex-space-between gap-2x nav-list"
                                        />

                                        <div className="hideMobile flex-space-between gap-1x">
                                            
                                            <MainButton 
                                                label="Sign up"
                                                Class=" button main-btn"
                                                href="/signup"
                                            />

                                            <Buttons 
                                            label="Login"
                                            Class="button secondary-btn"
                                            href="/login"
                                            />
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

export default TopNav