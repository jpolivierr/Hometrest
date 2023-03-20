import "./style.css"
import "./dualRing.css"

const Loading = (props) =>{

    const {isShowing} = props

    return isShowing && (
        <div className="av-loading">
            <div className="lds-dual-ring"></div>
        </div>
    )

}

export default Loading
