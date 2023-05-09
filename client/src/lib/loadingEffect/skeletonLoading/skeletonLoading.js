import "./style.css"

const SkeletonLoading = (props) =>{

  const {count} = props

  let i = 0;

  const render = () =>{
        if(i <= count){

        }
        return(
            <div className="loading-container">
            <div className="loading-text"></div>
            <div className="loading-text"></div>
            <div className="loading-text"></div>
            <div className="loading-text"></div>
            <div className="loading-text"></div>
        </div>
        )
    
  }

    return (
        <div className="av-loading-skeleton">
 
              <div className="loading-container">
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
            </div>

            <div className="loading-container">
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
            </div>

            <div className="loading-container">
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
            </div>

            <div className="loading-container">
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
            </div>

            <div className="loading-container">
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
            </div>

            <div className="loading-container">
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
            </div>

            <div className="loading-container">
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
            </div>


            <div className="loading-container">
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
            </div>

            <div className="loading-container">
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
            </div>

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
