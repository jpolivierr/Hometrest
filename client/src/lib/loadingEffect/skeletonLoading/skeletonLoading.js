import "./style.css"

const SkeletonLoading = (props) =>{

    const {isShowing} = props

    return isShowing && (
        <div className="av-loading-skeleton">

            <div className="loading-container">
                <div className="loading-text"></div>
                <div className="loading-text"></div>
                <div className="loading-text"></div>
                <div className="loading-text"></div>
                <div className="loading-text"></div>
            </div>
            
        </div>
    )

}

export default SkeletonLoading
