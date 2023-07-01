import "./style.css"
import useReduxMng from "../../hooks/useReduxMng"
import PropertyCard from "../propertyCard/PropertyCard"
import useMyModal from "../../lib/Modal/useMyModal"
import NewLoginForm from "../Forms/NewLoginForm"
import SkeletonLoading from "../../lib/loadingEffect/skeletonLoading/skeletonLoading"
import { useEffect } from "react"
import ShowPropertiesView from "./ShowProperties.view"
import { useContext } from "react"
import UserContext from "../../context/user/UserContext"

const ShowProperties = (props) =>{

    const {isLoading, properties, count, total, searchReducer} = props

    const {likeProperty, activeUser} = useContext(UserContext)
    

    const getSearchValue = () =>{

        if(isLoading) return

        const city = searchReducer.city || ""
        const postal_code = searchReducer.postal_code || ""
        const state_code = searchReducer.state_code || ""
        const state = searchReducer.state || ""

        let myState

        if(state_code && state){
            myState = state_code
        }else{
            myState = state_code ? state_code : state
        }

        const str = `${city} ${myState} ${postal_code}`

        return  (<h2>{`${properties.length} result found for "${str.trim()}"`}</h2>)
    
    }



    return(
        <ShowPropertiesView value={{getSearchValue, properties, isLoading, likeProperty,activeUser}} />
    )

}

export default ShowProperties