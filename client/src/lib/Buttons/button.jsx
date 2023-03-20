

const Buttons = (props) =>{

const {target, href,Class,label,clickEvent,type} = props

    return(
           <a href={href && href} target={target && "_blank"}>
                <button 
                  style={{cursor: "pointer",position: "relative", overflow: "hidden"}} 
                  type={type} onClick={(e)=>{clickEvent && clickEvent(e)}} 
                  className={`${Class}`}>
                    {label}
                </button>
           </a>
    )
}

export default Buttons