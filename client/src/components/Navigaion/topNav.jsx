import Layout from "../../lib/Layout/layout"
import Buttons from "../../lib/Buttons/button"
import { useState } from "react"
const TopNav = () =>{

    const navStyle = {
        parent : {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }
    }

    const [style] = useState(navStyle)

    return(
                <section className="padding-top-bottom">
                    <div className="container flex-space-between">
                                <div>Logo</div>
                            <ul>

                            </ul>
                            <div className="hideMobile gap-1x">
                                <Buttons 
                                label="Sign up"
                                Class=" button main-btn"
                                />

                                <Buttons 
                                label="Login"
                                Class="button secondary-btn"
                                />
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
                   
     
    )
}

export default TopNav