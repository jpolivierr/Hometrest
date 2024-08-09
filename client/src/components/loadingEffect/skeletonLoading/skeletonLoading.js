import "./style.css"
import Cards from "./cards";
import Page from "./page";
const SkeletonLoading = (props) =>{

  const {type, elementClass} = props

  const render = () =>{
                 
        switch(type){
                case "cards" :
                        return <Cards/>
                case "page" :
                        return <Page/>
                default :
                        return <Cards/>

        }
  }

    return (
        <div className={`${elementClass}`}>
                {render()}
        </div>
    )

}

export default SkeletonLoading
