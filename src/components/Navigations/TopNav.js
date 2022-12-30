import "./style_topNav.css"
import { navList } from "../Lists/listData";
import { Link } from "react-router-dom";
import { HeaderEffect } from "../../functions/headerEffect";
import { useEffect, useRef } from "react";

const TopNav = () =>{

    return(
        <header className="top_nav"> 
          <div className="container flex_nav">

                <figure className="Logo">
                    <Link to="/"><h2>Hometrest</h2></Link>
                </figure>

                <ul>
                    <li>Home</li>
                    <li>Buy</li>
                    <li>Rent</li>
                    <li>New Community</li>
                    <li>Property Search</li>
                </ul>

                <i className="fa-solid fa-bars"></i>
            </div>
                
        </header>
        
    )

}

export default TopNav