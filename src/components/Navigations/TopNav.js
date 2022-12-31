import "./style_topNav.css"
import { Link } from "react-router-dom";


const TopNav = () =>{

    return(
        <header className="top_nav"> 
          <div className="container flex_nav">

                <figure className="Logo">
                    <Link to="/"><h2>Hometrest</h2></Link>
                </figure>

                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    
                    <Link to="/search">
                       <li>Buy</li>
                    </Link>

                    <Link to="/search">
                       <li>Rent</li>
                    </Link>

                    <Link to="/search">
                       <li>New Community</li>
                    </Link>

                    <Link to="/search">
                       <li>Property Search</li>
                    </Link>

                </ul>

                <i className="fa-solid fa-bars"></i>
            </div>
                
        </header>
        
    )

}

export default TopNav