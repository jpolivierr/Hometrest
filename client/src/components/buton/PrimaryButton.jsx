import RippleEffect from "../rippleEffect/RippleEffect"
import { Link } from "react-router-dom"

const PrimaryButton = ({label, type, href}) =>{

    return(
        <Link to={href ? href : ""}>
        
                <RippleEffect>
                    <button
                        className="main-btn"
                        type={type ? type : ""}
                            >
                                {label}    
                    </button>
            </RippleEffect>

            
        </Link>
        
        
    )

}

export default PrimaryButton