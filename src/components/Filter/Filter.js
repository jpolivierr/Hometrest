import FlexLayout from "../Layouts/FlexLayout";
import Forms from "../Forms/Form";
import "./style_Filter.css"


//form Fields
import {filterFields } from "../Forms/JsonFormFields";

//Actions
import { modalAction } from "../../_state/Actions/actionCollection";
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { MODAL_TYPE , COMPONENT } from "../../VAR/var";


function Filter(){

    const {openModal} = bindActionCreators(modalAction, useDispatch())


    return (
        <div className="filter-container">
            <FlexLayout classname ={"container filter"}>    
               <li onClick={()=>openModal(MODAL_TYPE.FLOATING, COMPONENT.FILTER_FORM)} className="more-filter">
               <i className="fa-solid fa-ellipsis-vertical"></i>
                    <p>More</p>
                </li>      
                <ul>
                    <li>
                    <Forms 
                            classname="flex-form"
                            title="" 
                            template = {filterFields} 
                            />
                    </li>
                </ul>
                {/* <Lists classname = "" lists={filterList}/> */}
            </FlexLayout>
        </div>
            
     );
}

export default Filter;