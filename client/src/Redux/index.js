import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import {setUserAction, searchAction, properties, clientActivityAction} from "./actions"


export const Reducers = () =>{

    const activeUserReducer = useSelector((state)=> {return state.activeUserReducer})
    const searchReducer = useSelector((state)=> state.searchReducer)
    const propertiesReducer = useSelector((state) => state.propertiesReducer)
    const clientActivityReducer = useSelector((state)=> state.clientActivityReducer)

    return {

        activeUserReducer,
        searchReducer,
        propertiesReducer,
        clientActivityReducer

    }

}

export const Actions = () =>{

    const {setSearch, setCity} = bindActionCreators(searchAction, useDispatch())
    const {setPropertyList} = bindActionCreators(properties, useDispatch())

    return {
        setSearch,
        setPropertyList,
        setCity
      }
}