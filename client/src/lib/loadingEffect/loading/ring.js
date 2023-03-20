import "./style.css"
import "./ring.css"

const Ring = (props) =>{

    const {isShowing} = props

    return isShowing && (
        <div className="av-loading">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )

}

export default Ring
