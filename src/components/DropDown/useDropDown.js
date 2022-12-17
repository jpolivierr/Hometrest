import { useState } from "react"
import { categories, frequencies } from "../Lists/MyLists"
// import CalendarDropDown from "./CalendarDropDown"

const useDropDown = () =>{

    const [dropDownState, setDropDownState] = useState(false)
    const [value, setDbValue] = useState("")

    const toggle = () =>{
        setDropDownState(!dropDownState)
    }

    const dropDown = (callback, stateValue, listType, callback2) =>{
        let listClassName
        let list
         switch(listType){
            case "category" :
                listClassName = "category-list"
                list = categories.map(category =>(
                    <li key={category.id} onClick={()=>{callback(category.name, stateValue)}}>{category.name}</li>
                       ))
                break
            case "frequency" :
                listClassName = "frequency-list"
                list = frequencies.map(frequency =>(
                    <li key={frequency.id} onClick={()=>{callback(frequency.name, stateValue)}}>{frequency.name}</li>
                       ))
                break
            // case "date" :
            //     return  (<CalendarDropDown
            //                             isShowing={true}
            //                             func={callback}
            //                             toggle={callback2}
            //                             />)
            default :
                return null
         }
         
        return (
            <div className={`drop-down drop-down-mobile ${listClassName}`}>
            <div className="search-block select-header">
                <h3>Select category</h3>
                <input type="text" placeholder="Search categories"/>
            </div>
        <ul className="list-container">
       
            {
              list
            }

        </ul>
        <i className="fa-solid fa-xmark" onClick={()=>callback2(listType)}></i>
        </div>
        )
    }

    return {
              dropDown,
              toggle,
              value
            }

}

export default useDropDown