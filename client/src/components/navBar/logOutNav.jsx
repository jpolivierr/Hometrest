import ModalContext from "../../context/modals/modalContext"
import GlobalMessageContext from "../../context/globalMessage/globalMessageContext"
import { useContext } from "react"
import "./style.css"
import NavList from "../list/NavList"

const LogOutNav = () =>{
    const {toggleSideModal} = useContext(ModalContext)
    const {toggleShowMessage} = useContext(GlobalMessageContext)


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

export default LogOutNav