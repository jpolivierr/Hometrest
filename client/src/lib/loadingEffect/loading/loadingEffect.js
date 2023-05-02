
import "./ring.css"

const LoadingEffect = (props) =>{

    const {isShowing, elementClass, type} = props

    const getType = () =>{
        switch(type){
            case "ring" :
                return <div className="lds-ring"><div></div><div></div></div>
            default :
                return <div className="lds-ring"><div></div><div></div></div>
        }
    }

    return isShowing && (
        <div className={elementClass}>
            {getType()}
        </div>
    )

}

export default LoadingEffect
